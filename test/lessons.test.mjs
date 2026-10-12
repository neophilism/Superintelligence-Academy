import test from 'node:test';import assert from 'node:assert/strict';
import {verifyLessonRegistry,UI_ANCHORS,listPublishedLessons} from '../lib/lessons.mjs';
import {GET} from '../app/api/lessons/route.mjs';
import {readFileSync} from 'node:fs';
const catalog=JSON.parse(readFileSync(new URL('../content/lesson-registry.json',import.meta.url)));
test('all eleven live workspace objective anchors have approved public micro-lessons',()=>{
 const check=verifyLessonRegistry(catalog);assert.equal(UI_ANCHORS.length,11);assert.equal(check.publicLessons.length,22);
 for(const anchor of UI_ANCHORS){const found=listPublishedLessons({anchor});assert.equal(found.length,2);assert.deepEqual(found.map(x=>x.level),['L0','L1']);assert.ok(found.every(x=>x.content.length>60));}
});
test('reject duplicate lessons, outdated anchors, unknown prerequisites, and cycles',()=>{
 const base=structuredClone(catalog),first=base.lessons[0];
 assert.throws(()=>verifyLessonRegistry({...base,lessons:[...base.lessons,first]}),/Duplicate/);
 assert.throws(()=>verifyLessonRegistry({...base,lessons:[{...first,anchor:'music.nonexistent'},...base.lessons.slice(1)]}),/Unknown or retired/);
 assert.throws(()=>verifyLessonRegistry({...base,lessons:[{...first,prerequisites:['no-such-lesson']},...base.lessons.slice(1)]}),/Unknown lesson prerequisite/);
 assert.throws(()=>verifyLessonRegistry({...base,lessons:[{...first,prerequisites:[first.id]},...base.lessons.slice(1)]}),/cycle/);
});
test('public lesson API returns only approved records, bad anchors return 400',async()=>{
 const result=await GET(new Request('https://academy.example/api/lessons?anchor=music.objective'));
 assert.equal(result.status,200);const data=await result.json();assert.equal(data.items.length,2);assert.equal(data.items[0].domain,'music');
 const short=await GET(new Request('https://academy.example/api/lessons?anchor=music.objective&level=L1'));assert.equal((await short.json()).items[0].level,'L1');
 const invalid=await GET(new Request('https://academy.example/api/lessons?anchor=not.exists'));assert.equal(invalid.status,400);
});

test('all 11 L1 exercises are attached to a published L0 prerequisite and transparently reviewed',()=>{
 const approved=verifyLessonRegistry(catalog).publicLessons,short=approved.filter(l=>l.level==='L1');
 assert.equal(short.length,11);
 for(const lesson of short){
  assert.ok(approved.some(parent=>parent.level==='L0'&&parent.anchor===lesson.anchor&&lesson.prerequisites.includes(parent.id)));
  assert.ok(lesson.content.length>75);
  assert.match(lesson.approvedBy,/not human-certified/);
 }
});
