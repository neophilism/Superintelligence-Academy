import React from 'react';
import '@superintelligence/ui/styles.css';
import './global.css';
export const metadata={title:"Superintelligence Academy",description:"Tools and guided lessons will appear as verified capabilities are enabled."};
export default function RootLayout({children}){return React.createElement('html',{lang:'en'},React.createElement('body',{'data-product':"academy"},children));}
