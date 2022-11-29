function handlebars(e){const a=e.regex;var n={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t=/\[\]|\[[^\]]+\]/,s=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,i=a.either(/""|"[^"]+"/,/''|'[^']+'/,t,s),i=a.concat(a.optional(/\.|\.\/|\//),i,a.anyNumberOfTimes(a.concat(/(\.|\/)/,i))),t=a.concat("(",t,"|",s,")(?==)"),s={begin:i},i=e.inherit(s,{keywords:{$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]}});const l={begin:/\(/,end:/\)/};var t={className:"attr",begin:t,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,i,l]}}},t={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},t,i,l],returnEnd:!0},i=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(t,{end:/\)/})}),i=(l.contains=[i],e.inherit(s,{keywords:n,className:"name",starts:e.inherit(t,{end:/\}\}/})})),r=e.inherit(s,{keywords:n,className:"name"}),s=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(t,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[i],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[r]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[i]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[r]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[s]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[s]}]}}module.exports=handlebars;