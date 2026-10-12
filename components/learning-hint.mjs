"use client";
import React,{useEffect,useId,useState} from 'react';
export default function LearningHint({anchor}){
 const id=useId(),panelId='hint-panel-'+id.replaceAll(':','-'),storageKey='academy.hint.dismissed.'+anchor;
 const [visible,setVisible]=useState(true),[expanded,setExpanded]=useState(false);
 const [lesson,setLesson]=useState(null),[shortLesson,setShortLesson]=useState(null),[level,setLevel]=useState('L0'),[error,setError]=useState(false);
 useEffect(()=>{
   let alive=true;
   try{setVisible(localStorage.getItem(storageKey)!=='1')}catch{setVisible(true)}
   setExpanded(false);setLesson(null);setShortLesson(null);setLevel('L0');setError(false);
   fetch('/api/lessons?anchor='+encodeURIComponent(anchor),{cache:'force-cache'}).then(async response=>{
    if(!response.ok)throw new Error('Lessons unavailable');
    const data=await response.json();
    if(!Array.isArray(data.items))throw new Error('Unrecognized lesson response');
    if(alive){setLesson(data.items.find(item=>item.anchor===anchor&&item.level==='L0'&&item.visibility==='published')||null);setShortLesson(data.items.find(item=>item.anchor===anchor&&item.level==='L1'&&item.visibility==='published')||null);}
   }).catch(()=>{if(alive)setError(true)});
   return()=>{alive=false};
 },[anchor,storageKey]);
 const activeLesson=level==='L1'&&shortLesson?shortLesson:lesson;
 const dismiss=()=>{setVisible(false);setExpanded(false);try{localStorage.setItem(storageKey,'1')}catch{}};
 const restore=()=>{setVisible(true);try{localStorage.removeItem(storageKey)}catch{}};
 if(!visible)return React.createElement('button',{type:'button',className:'hint-restore',onClick:restore,'aria-label':'Restore guidance for '+anchor},'Show guidance');
 return React.createElement('aside',{className:'learning-hint','data-help-for':anchor,'aria-label':'Contextual guidance'},
  React.createElement('div',{className:'hint-heading'},
   React.createElement('span',{'aria-hidden':'true',className:'hint-icon'},'✦'),
   React.createElement('strong',null,activeLesson?activeLesson.title:'Learn this control'),
   React.createElement('div',{className:'hint-actions'},
    React.createElement('button',{type:'button',className:'hint-expand','aria-expanded':expanded,'aria-controls':panelId,onClick:()=>{setLevel('L0');setExpanded(v=>!v)},disabled:!lesson},expanded&&level==='L0'?'Less':'Explain'),
    shortLesson&&React.createElement('button',{type:'button',className:'hint-depth','aria-controls':panelId,'aria-expanded':expanded&&level==='L1',onClick:()=>{setLevel('L1');setExpanded(true)}},'30-second lesson'),
    React.createElement('button',{type:'button',className:'hint-dismiss',onClick:dismiss,'aria-label':'Dismiss guidance'},'×'))),
  React.createElement('div',{id:panelId,hidden:!expanded,className:'hint-body'},
   error?React.createElement('p',{role:'status'},'Guidance is temporarily unavailable.'):activeLesson?React.createElement(React.Fragment,null,React.createElement('p',null,activeLesson.content),React.createElement('p',{className:'hint-example'},React.createElement('strong',null,'Example: '),activeLesson.example)):React.createElement('p',{role:'status'},'Loading reviewed guidance…'))
 );
}
