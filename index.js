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
    const arr2 = [...arr] //используем spread для создания копии массива
    return arr2.sort((a, b) => //сортируем копию
        b.score - a.score)
};

const getMeanAge = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age //здесь забыла про свойство по которому ищем сумму
    }
    return sum / arr.length;
}

const getMeanAgeReduce = (candidates) => {
    const sum = candidates.reduce((a, b) => a + b.age, 0);
    return sum / candidates.length;
}


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
