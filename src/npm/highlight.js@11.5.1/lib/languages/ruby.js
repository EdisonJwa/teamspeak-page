function ruby(e){const n=e.regex;var a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",s=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=n.concat(s,/(::\w+)*/);const i={"variable.constant":["__FILE__","__LINE__"],"variable.language":["self","super"],keyword:["alias","and","attr_accessor","attr_reader","attr_writer","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","include","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield"],built_in:["proc","lambda"],literal:["true","false","nil"]};var c={className:"doctag",begin:"@[A-Za-z]+"},r={begin:"#<",end:">"};const t=[e.COMMENT("#","$",{contains:[c]}),e.COMMENT("^=begin","^=end",{contains:[c],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],b={className:"subst",begin:/#\{/,end:/\}/,keywords:i},l={className:"string",contains:[e.BACKSLASH_ESCAPE,b],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,b]})]}]};c="[0-9](_?[0-9])*";const d={className:"number",relevance:0,variants:[{begin:`\\b([1-9](_?[0-9])*|0)(\\.(${c}))?([eE][+-]?(${c})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},o={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:i}]},g={variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/class\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:i};const _={match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[o]},m={relevance:0,match:[s,/\.new[ (]/],scope:{1:"title.class"}};c=[l,g,m,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},_,{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[l,{begin:a}],relevance:0},d,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:i},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,b],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(r,t),relevance:0}].concat(r,t),b.contains=c,s=[{begin:/^\s*=>/,starts:{end:"$",contains:o.contains=c}},{className:"meta.prompt",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",keywords:i,contains:c}}];return t.unshift(r),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:i,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(s).concat(t).concat(c)}}module.exports=ruby;