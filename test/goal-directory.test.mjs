import test from 'node:test';import assert from 'node:assert/strict';
import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';
import GoalDirectory,{filterGoals,pickGoal} from '../components/goal-directory.mjs';
test('goal search chooses a valid domain',()=>{assert.equal(pickGoal('pitch-a-film'),'video');assert.equal(filterGoals('bill').length,1);assert.equal(filterGoals('blahblah').length,0);assert.throws(()=>pickGoal('missing'));});
test('unavailable AI cannot be presented as functioning',()=>{const html=renderToStaticMarkup(React.createElement(GoalDirectory,{onChoose:()=>{},availability:{},query:'music',setQuery:()=>{}}));assert.match(html,/AI generation unavailable/);assert.doesNotMatch(html,/AI generation enabled/);});
