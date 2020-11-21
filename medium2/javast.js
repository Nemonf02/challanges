function anagram(answer1, answer2){
    let firstString = answer1.split("");
    let secondString = answer2.split("");
    let transFormFirst = firstString.reduce((acc,curr) => {
        if (curr !== " "){
            acc.push(curr.toLowerCase());
        };
        return acc;
    }, []).sort();
let transformSecond = secondString.reduce((acc,curr) => {
    if (curr !== " ") {
        acc.push(curr.toLowerCase());
    };
    return acc;
}, []).sort;
return transFormFirst.every((value,index) => value === transformSecond[index]);
}
console.log(anagram("Things are good", "Dogs eat ants"));
