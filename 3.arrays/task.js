function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let equals = arr1.every((elem) => elem === arr2[arr1.indexOf(elem)]);

    return equals;
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.filter((user) => user.gender === gender).length === 0) {
        return 0;
    }
    let result = users.filter((user) => user.gender === gender).reduce((result, user, index, arr) => {
        result += user.age;
        if (index === arr.length - 1) {
            return result / arr.length;
        }
        return result;
    }, 0);

    return result;
}