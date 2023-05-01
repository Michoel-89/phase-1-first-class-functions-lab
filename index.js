const returnFirstTwoDrivers = function(arr) {
    let nArr = [];
    for (let i = 0; i < 2; i++) {
        nArr.push(arr[i]);
    } return nArr;
};
const returnLastTwoDrivers =  function(arr) {
    let nArr = [];
    for (let i = arr.length -1; i > arr.length -3; i--) {
        nArr.unshift(arr[i]);
    } return nArr;
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(num) {
    return function fareMultiplier(fare) {
        return fare * num;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, f) {
    if (f === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (f === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}