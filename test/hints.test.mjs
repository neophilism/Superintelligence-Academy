import test from 'node:test';import assert from 'node:assert/strict';import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';
import LearningHint from '../components/learning-hint.mjs';import Page from '../app/page.mjs';
test('Academy mounts accessible help bound to actual shared tool anchor',()=>{
 const html=renderToStaticMarkup(React.createElement(LearningHint,{anchor:'music.objective'}));
 assert.match(html,/data-help-for="music.objective"/);
 assert.match(html,/aria-label="Contextual guidance"/);
 assert.match(html,/aria-expanded="false"/);
 assert.match(html,/Dismiss guidance/);
 const page=renderToStaticMarkup(React.createElement(Page));assert.match(page,/data-help-for="research.objective"/);
});
test('Command Center remains a distinct application with no Academy overlays in engine UI package',async()=>{
 const {WorkspaceShell,DomainTool}=await import('@superintelligence/ui');
 const html=renderToStaticMarkup(React.createElement(DomainTool,{product:'command',domain:'music',title:'Music',controls:[{id:'objective',kind:'textarea',label:'Objective'}]}));
 assert.ok(html.includes('data-help-anchor="music.objective"'));
 assert.ok(!html.includes('learning-hint'));
});
