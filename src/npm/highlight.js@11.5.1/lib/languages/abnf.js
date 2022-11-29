function abnf(o){const a=o.regex;var c=o.COMMENT(/;/,/$/);return{name:"Augmented Backus-Naur Form",illegal:/[!@#$^&',?+~`|:]/,keywords:["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],contains:[{scope:"operator",match:/=\/?/},{scope:"attribute",match:a.concat(/^[a-zA-Z][a-zA-Z0-9-]*/,/(?=\s*=)/)},c,{scope:"symbol",match:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+)?/},{scope:"symbol",match:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+)?/},{scope:"symbol",match:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+)?/},{scope:"symbol",match:/%[si](?=".*")/},o.QUOTE_STRING_MODE,o.NUMBER_MODE]}}module.exports=abnf;