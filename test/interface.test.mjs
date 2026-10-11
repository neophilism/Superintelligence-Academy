import test from 'node:test';import assert from 'node:assert/strict';import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import Page from '../app/page.mjs';
test('accessible product-specific shell reuses shared engine renderer',()=>{
 const html=renderToStaticMarkup(React.createElement(Page));
 assert.match(html,/Skip to main content/);
 assert.match(html,/aria-label="AI workspaces"/);
 assert.match(html,/role="status"/);
 assert.match(html,/data-product="academy"/);
 assert.match(html,/data-help-anchor="research.objective"/);
 assert.ok((html.match(/data-domain-option=/g)||[]).length>=10);
 assert.match(html,/not available/);
 assert.match(html,/Interactive lessons become available/);
});
