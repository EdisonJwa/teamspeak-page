function elixir(n){const a=n.regex;var e="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",i={$pattern:e,keyword:["after","alias","and","case","catch","cond","defstruct","defguard","do","else","end","fn","for","if","import","in","not","or","quote","raise","receive","require","reraise","rescue","try","unless","unquote","unquote_splicing","use","when","with|0"],literal:["false","nil","true"]};const s={className:"subst",begin:/#\{/,end:/\}/,keywords:i};const c={match:/\\[\s\S]/,scope:"char.escape",relevance:0};var r="[/|([{<\"']";const t=[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}],o=e=>({scope:"char.escape",begin:a.concat(/\\/,e),relevance:0});var d={className:"string",begin:"~[a-z](?="+r+")",contains:t.map(e=>n.inherit(e,{contains:[o(e.end),c,s]}))},b={className:"string",begin:"~[A-Z](?="+r+")",contains:t.map(e=>n.inherit(e,{contains:[o(e.end)]}))},r={className:"regex",variants:[{begin:"~r(?="+r+")",contains:t.map(e=>n.inherit(e,{end:a.concat(e.end,/[uismxfU]{0,7}/),contains:[o(e.end),c,s]}))},{begin:"~R(?="+r+")",contains:t.map(e=>n.inherit(e,{end:a.concat(e.end,/[uismxfU]{0,7}/),contains:[o(e.end)]}))}]},l={className:"string",contains:[n.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},g={className:"function",beginKeywords:"def defp defmacro defmacrop",end:/\B\b/,contains:[n.inherit(n.TITLE_MODE,{begin:e,endsParent:!0})]},m=n.inherit(g,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),r=[l,r,b,d,n.HASH_COMMENT_MODE,m,g,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[l,{begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"}],relevance:0},{className:"symbol",begin:e+":(?!:)",relevance:0},{className:"title.class",begin:/(\b[A-Z][a-zA-Z0-9_]+)/,relevance:0},{className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"}];return{name:"Elixir",aliases:["ex","exs"],keywords:i,contains:s.contains=r}}module.exports=elixir;