import React from 'react';
import {WORKSPACE_DOMAINS} from '@superintelligence/ui';
export const GOALS=Object.freeze([
 {id:'write-a-bill',label:'Draft a bill',domains:['legislation','research','persuasive-writing']},
 {id:'pitch-a-film',label:'Pitch a film',domains:['video','image','music']},
 {id:'build-an-app',label:'Build an application',domains:['code','data','workflow']},
 {id:'produce-a-song',label:'Produce a song',domains:['music','voice']},
 {id:'write-a-poem',label:'Write poetry',domains:['poetry']},
 {id:'analyze-data',label:'Analyze data',domains:['data','research']}
]);
export function filterGoals(query,goals=GOALS){
 const q=String(query||'').trim().toLowerCase();
 return goals.filter(g=>!q||[g.label,...g.domains].join(' ').toLowerCase().includes(q));
}
export function pickGoal(goalId){
 const goal=GOALS.find(g=>g.id===goalId);
 if(!goal)throw new Error('Unknown goal');
 if(!goal.domains.every(d=>WORKSPACE_DOMAINS.includes(d)))throw new Error('Unregistered workspace');
 return goal.domains[0];
}
export default function GoalDirectory({onChoose,availability={},query,setQuery}){
 return React.createElement('section',{className:'goal-directory','aria-label':'Find AI tools by goal'},
 React.createElement('h2',null,'What do you want to make?'),
 React.createElement('label',null,'Search goals and tools',React.createElement('input',{type:'search',value:query,onChange:e=>setQuery(e.target.value),placeholder:'Try film, music, coding or legislation'})),
 React.createElement('div',{className:'goal-results'},...filterGoals(query).map(g=>{
 const domain=pickGoal(g.id);
 const status=availability[domain]||'unavailable';
 return React.createElement('button',{key:g.id,type:'button',className:'goal-link',onClick:()=>onChoose(domain),title:'Open '+domain+' workspace'},
 React.createElement('strong',null,g.label),' — ',React.createElement('span',null,status==='enabled'?'AI generation enabled':'Draft editor only; AI generation unavailable'));
 })),
 React.createElement('p',{className:'status-note'},'Selecting a goal opens the appropriate editor; it does not start a paid AI job.'));
}
