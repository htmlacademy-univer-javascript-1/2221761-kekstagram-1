function getRandomNumber(min, max){
    if (min <= 0 || min >= max){
        throw "Invalid arguments"
    }
    else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

getRandomNumber(2, 11);


function checkStringLength(testToString, maxLength){
    if (testToString.length < maxLength){
        return true;
    }
    else{
        return false;
    }
}

checkStringLength("Здесь могла быть ваша реклама", 45);