"use client";
import React,{useEffect,useState} from 'react';
import {WorkspaceShell,ToolPanel,DomainTool,WORKSPACE_DOMAINS,ProjectPortal} from '@superintelligence/ui';
import LearningHint from '../components/learning-hint.mjs';
import GoalDirectory from '../components/goal-directory.mjs';
const names={code:'Code',music:'Music',poetry:'Poetry','persuasive-writing':'Persuasive writing',research:'Research',legislation:'Legislation',image:'Images',video:'Film & video',voice:'Voice',data:'Data',workflow:'Workflows'};
const controls=[{id:'objective',kind:'textarea',label:'Project objective',description:'Define what you want to accomplish. External AI execution is unavailable until an authorized provider and spending controls are connected.',rows:5}];
export default function Page(){
 const [engine,setEngine]=useState({status:'checking'});
 const [active,setActive]=useState('research');
 const [drafts,setDrafts]=useState({});
 const [message,setMessage]=useState('');
 const [goalSearch,setGoalSearch]=useState('');
 useEffect(()=>{let mounted=true;fetch('/api/engine',{cache:'no-store'}).then(res=>res.json()).then(data=>{if(mounted)setEngine(data)}).catch(()=>{if(mounted)setEngine({status:'unavailable'})});return()=>{mounted=false}},[]);
 const change=(id,value)=>{setDrafts(prev=>({...prev,[active]:value}));setMessage('')};
 return React.createElement('div',{className:'app-frame'},
   React.createElement('a',{className:'skip-link',href:'#main'},'Skip to main content'),
   React.createElement('header',{className:'app-header'},
     React.createElement('div',{className:'brand'},React.createElement('span',{className:'brand-mark','aria-hidden':'true'},"◎"),React.createElement('span',null,"Superintelligence Academy")),
     React.createElement('span',{className:'connection-status',role:'status','aria-live':'polite'},'Engine: '+engine.status)),
   React.createElement('div',{className:'app-columns'},
     React.createElement('nav',{'aria-label':'AI workspaces',className:'app-nav'},
       React.createElement('div',{className:'nav-heading'},'Workspaces'),
       ...WORKSPACE_DOMAINS.map(domain=>React.createElement('button',{key:domain,type:'button','aria-current':active===domain?'page':undefined,'data-domain-option':domain,className:active===domain?'nav-link active':'nav-link',onClick:()=>{setActive(domain);setMessage('')}},names[domain]))),
     React.createElement('main',{id:'main',className:'app-main',tabIndex:-1},
       React.createElement('div',{className:'hero'},React.createElement('p',{className:'eyebrow'},"LEARN • CREATE • EXPLORE"),React.createElement('h1',null,"Turn your ideas into real projects"),React.createElement('p',null,"Choose a creative or technical workspace. Interactive lessons become available only when approved teaching materials are published.")),
       React.createElement(ProjectPortal,{product:"academy",domain:active,engineOrigin:process.env.NEXT_PUBLIC_ENGINE_ORIGIN||'',companionOrigin:process.env.NEXT_PUBLIC_COMMAND_ORIGIN||'',onOpenProject:project=>{if(WORKSPACE_DOMAINS.includes(project.kind))setActive(project.kind);setMessage('')}}),
       React.createElement(GoalDirectory,{query:goalSearch,setQuery:setGoalSearch,availability:{},onChoose:domain=>{setActive(domain);setMessage('')}}),
       React.createElement(WorkspaceShell,{product:"academy",domain:active,title:names[active]},
         React.createElement(ToolPanel,{title:'Prepare your work'},
           React.createElement('p',{className:'status-note'},engine.status==='connected'?'The engine is reachable. Provider operations must be verified separately.':'AI generation is not available in this workspace yet. Your input stays in this browser session until a project storage service is enabled.'),
           React.createElement(DomainTool,{product:"academy",domain:active,title:'Project brief',controls,values:{objective:drafts[active]||''},onFieldChange:change,onSubmit:()=>setMessage('The project brief has not been submitted. Persistent projects and AI workflows require verified engine services.'),submitLabel:'Review project readiness'}),
           React.createElement(LearningHint,{anchor:active+'.objective'}),
           React.createElement('p',{role:'status','aria-live':'polite',className:'action-message'},message))
       ))
   )
 );
}
