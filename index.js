const filterByAge = (candidate) => {
    return candidate.age <= 50
};

const filterByScore = (candidate) => {
    return candidate.score >= 75
};

const filterByServiceRecord = (candidate) => {
    return candidate.serviceRecord >= 5
};

const sortByScore = (arr) => {
    return arr.score((a, b) => b.score - a.score);
};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(getMeanAge([60, 35, 29, 45, 54]));


const getMeanAgeReduce = (candidates) => {
    const sum = candidates.reduce((a, b) => a + b.age, 0);
    return sum / candidates.length;
};

const getNamesOnly = (arr) => {
    return arr.name;
};

module.exports = {
    filterByAge,
    filterByScore,
    filterByServiceRecord,
    sortByScore,
    getMeanAge,
    getMeanAgeReduce,
    getNamesOnly,
};
