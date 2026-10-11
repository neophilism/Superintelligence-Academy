import Ajv2020 from 'ajv/dist/2020.js';
import {readFileSync} from 'node:fs';
import {WORKSPACE_DOMAINS,toolAnchor} from '@superintelligence/ui';
import registrySchema from '../content/lesson-registry.schema.json' with {type:'json'};
import catalog from '../content/lesson-registry.json' with {type:'json'};
const validate=new Ajv2020({strict:false,allErrors:true}).compile(registrySchema);
export const UI_ANCHORS=Object.freeze(WORKSPACE_DOMAINS.map(domain=>toolAnchor(domain,'objective')));
const normalizeVersion=v=>v.split('.').map(Number);
function supportsVersion(current,minimum){
 if(!minimum)return true;if(!/^\d+\.\d+\.\d+$/.test(current)||!/^\d+\.\d+\.\d+$/.test(minimum))return false;
 const a=normalizeVersion(current),b=normalizeVersion(minimum);
 for(let i=0;i<3;i++){if(a[i]!==b[i])return a[i]>b[i];}return true;
}
export function verifyLessonRegistry(registry,{anchors=UI_ANCHORS,engineVersion='0.1.0'}={}){
 if(!validate(registry))throw new Error('Invalid lesson registry: '+new Ajv2020().errorsText(validate.errors));
 const known=new Set(anchors),ids=new Map();
 for(const item of registry.lessons){
  if(ids.has(item.id))throw new Error('Duplicate lesson ID: '+item.id);
  ids.set(item.id,item);
  if(!known.has(item.anchor))throw new Error('Unknown or retired tool anchor: '+item.anchor);
  if(item.domain!==item.anchor.split('.')[0])throw new Error('Lesson domain must match its stable control anchor');
  if(!supportsVersion(engineVersion,item.minEngineVersion))throw new Error('Unsupported engine version for lesson '+item.id);
  if(item.visibility==='published'&&!item.approvedBy.trim())throw new Error('Published lesson lacks editorial approval');
 }
 const visiting=new Set(),done=new Set();
 function visit(id){
  if(done.has(id))return;if(visiting.has(id))throw new Error('Lesson prerequisite cycle');
  const lesson=ids.get(id);if(!lesson)throw new Error('Unknown lesson prerequisite '+id);
  visiting.add(id);for(const prereq of lesson.prerequisites)visit(prereq);visiting.delete(id);done.add(id);
 }
 for(const lesson of registry.lessons)visit(lesson.id);
 for(const course of registry.courses){
  for(const id of course.lessonIds){const lesson=ids.get(id);if(!lesson)throw new Error('Course references unknown lesson');if(course.access==='free'&&lesson.visibility!=='published')throw new Error('Free course contains nonpublished material');}
 }
 return Object.freeze({revision:registry.revision,count:registry.lessons.length,publicLessons:registry.lessons.filter(l=>l.visibility==='published').map(l=>({...l}))});
}
export const verified=verifyLessonRegistry(catalog);
export function listPublishedLessons({anchor,level}={}){
 if(anchor!==undefined&&!UI_ANCHORS.includes(anchor))throw new TypeError('Unknown tool anchor');
 if(level!==undefined&&!['L0','L1','L2','L3','L4','L5'].includes(level))throw new TypeError('Invalid lesson level');
 return verified.publicLessons.filter(l=>(anchor===undefined||l.anchor===anchor)&&(level===undefined||l.level===level));
}
