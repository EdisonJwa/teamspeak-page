function brainfuck(e){var n={className:"literal",begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],contains:[e.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[n]},n]}}export{brainfuck as default};