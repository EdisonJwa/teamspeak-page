function properties(e){var t="[ \\t\\f]*",n=t+"[:=]"+t,s="[ \\t\\f]+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={end:"([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:a+n},{begin:a+s}],contains:[{className:"attr",begin:a,endsParent:!0}],starts:i},{className:"attr",begin:a+t+"$"}]}}module.exports=properties;