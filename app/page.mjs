"use client";
import React,{useEffect,useState} from 'react';
import {WorkspaceShell,ToolPanel,WORKSPACE_DOMAINS} from '@superintelligence/ui';
export default function Page(){
 const [engine,setEngine]=useState({status:'checking'});
 useEffect(()=>{let active=true;fetch('/api/engine',{cache:'no-store'}).then(x=>x.json()).then(x=>{if(active)setEngine(x)}).catch(()=>{if(active)setEngine({status:'unavailable'})});return ()=>{active=false}},[]);
 return React.createElement('main',{className:'app-main'},React.createElement('div',{className:'product-header'},React.createElement('span',{className:'product-kicker'},"AI EDUCATION"),React.createElement('h1',null,"Learn to create with AI"),React.createElement('p',null,"Tools and guided lessons will appear as verified capabilities are enabled.")),React.createElement(WorkspaceShell,{product:"academy",domain:'research',title:'Available workspaces'},React.createElement(ToolPanel,{title:'Platform readiness'},React.createElement('p',{'data-engine-status':engine.status},engine.status==='connected'?'Engine contract reachable — provider availability must be checked separately.':'Engine connection: '+engine.status+'. No generation is advertised.'),React.createElement('p',null,'Capabilities are not enabled until provider authorization, billing safety, and persistence checks pass.')),React.createElement('div',{className:'domain-list'},...WORKSPACE_DOMAINS.map(domain=>React.createElement('span',{key:domain,className:'domain-label'},domain)))));
}
