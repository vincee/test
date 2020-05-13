module.exports = {
  rules: {
    // vvv assignments (= / :) alignment vvv
    'align-assignments/align-assignments': ['error', { requiresOnly: false } ],
    'no-multi-spaces'                    : ['off'], // <<< needed for align-assignments 
    'key-spacing'                        : ['error', { align: { beforeColon: false, afterColon : true, on: 'colon', mode: 'strict' } } ],
    // ^^^ assignments (= / :) alignment ^^^
  
    'max-len'                            : ['error', { code: 160, comments: 100, tabWidth: 2 }], // default 100 is too short
    'array-bracket-spacing'              : ['error', 'always', {arraysInArrays:false, objectsInArrays:false}],
    'no-plusplus'                        : ['off'],
    'no-use-before-define'               : ['error', { 'functions': false, 'classes': false }],
    'no-underscore-dangle'               : ['error', { "allow": ["_id" ] }], // <<< MongoDB Ids (_id) fix

  }
};
