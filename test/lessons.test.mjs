import test from 'node:test';import assert from 'node:assert/strict';
import {verifyLessonRegistry,UI_ANCHORS,listPublishedLessons} from '../lib/lessons.mjs';
import {GET} from '../app/api/lessons/route.mjs';
import {readFileSync} from 'node:fs';
const catalog=JSON.parse(readFileSync(new URL('../content/lesson-registry.json',import.meta.url)));
test('all eleven live workspace objective anchors have approved public micro-lessons',()=>{
 const check=verifyLessonRegistry(catalog);assert.equal(UI_ANCHORS.length,11);assert.equal(check.publicLessons.length,11);
 for(const anchor of UI_ANCHORS){const found=listPublishedLessons({anchor});assert.equal(found.length,1);assert.ok(found[0].content.length>60);}
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
 assert.equal(result.status,200);const data=await result.json();assert.equal(data.items.length,1);assert.equal(data.items[0].domain,'music');
 const invalid=await GET(new Request('https://academy.example/api/lessons?anchor=not.exists'));assert.equal(invalid.status,400);
});
