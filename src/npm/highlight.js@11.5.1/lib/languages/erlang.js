function erlang(e){var n="[a-z'][a-zA-Z0-9_']*",a="("+n+":"+n+"|"+n+")",r={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},i=e.COMMENT("%","$"),c={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},d={begin:"fun\\s+"+n+"/\\d+"};const o={begin:a+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:a,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},s={begin:/\{/,end:/\}/,relevance:0};var a={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},t={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0};const l={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},b={beginKeywords:"fun receive if try case",end:"end",keywords:r};b.contains=[i,d,e.inherit(e.APOS_STRING_MODE,{className:""}),b,o,e.QUOTE_STRING_MODE,c,s,a,t,l];var d=[i,d,b,o,e.QUOTE_STRING_MODE,c,s,a,t,l],g=(o.contains[1].contains=d,s.contains=d,{className:"params",begin:"\\(",end:"\\)",contains:l.contains[1].contains=d});return{name:"Erlang",aliases:["erl"],keywords:r,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[g,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:r,contains:d}},i,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map(e=>e+"|1.5").join(" ")},contains:[g]},c,e.QUOTE_STRING_MODE,l,a,t,s,{begin:/\.$/}]}}module.exports=erlang;