var formatterdPloblems = [];
learnjs.problems.forEach(function(problem){
    formatterdPloblems.push({
        code: learnjs.formatCode(problem.code),
        name: problem.name
    });
});
return formatterdPloblems;

//same as

return learnjs.problems.map(learnjs.formatCode);

// learnjs.problems.map.(formatCode).sort(byName);
