import test from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ProjectPortal,buildProjectTransfer,parseProjectTransfer} from '@superintelligence/ui';
test('Academy uses canonical engine project identities and shared component',()=>{
 const tenant='00000000-0000-4000-8000-000000000021',project='00000000-0000-4000-8000-000000000022';
 const link=buildProjectTransfer('https://command.example',tenant,project);
 assert.deepEqual(parseProjectTransfer(link),{tenantId:tenant,projectId:project});
 const html=renderToStaticMarkup(React.createElement(ProjectPortal,{product:'academy',domain:'music',engineOrigin:''}));
 assert.match(html,/data-product="academy"/);
 assert.match(html,/Shared project storage is not configured/);
 assert.doesNotMatch(html,/Demo account|Example project/);
});
