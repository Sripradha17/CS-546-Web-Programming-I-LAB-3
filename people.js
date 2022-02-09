const axios = require('axios');

//get data
async function getPeople() {
    const { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json')
    return data // this will be the array of people objects
}

//get person by Id function
async function getPersonById(id) {

    //get people data
    const data = await getPeople();

    //check if id is valid input
    if (!id || id == undefined || id == null || typeof (id) != "string") {
        throw "Error: Enter valid Id input"
    } else {
        var tempPersonData;
        var personFoundData;
        var found = false;

        //find person
        for (let i = 0; i < data.length; i++) {
            tempPersonData = data[i];
            if (id == tempPersonData.id) {
                found = true;
                personFoundData = tempPersonData;
            }
        }

        //return result
        if (!found) {
            throw "Error: Person not found"
        } else {
            return personFoundData;
        }
    }
}

// Same email function
async function sameEmail(emailDomain) {

    //get people data
    const data = await getPeople();
    var count = 0;
    var index = [];
    var sameEmailList = [];

    //check input 
    if (typeof (emailDomain) != "string" || emailDomain == " " || emailDomain == "" || !emailDomain.includes(".") || !emailDomain.trim()) {
        throw "Error: Enter vaild email domain data "
    }

    for (let i = 0; i < emailDomain.length; i++) {
        if (emailDomain[i] == ".") {
            count += 1;
            index.push(i);
        }
    }

    if (count == 1) {
        let tempCheck = emailDomain.substring(index[0] + 1);
        if (tempCheck.match(/\d+/g)) {
            throw "Error: Enter valid emailDomain"
        }

        if (tempCheck.length < 2) {
            throw "Error: Enter valid emailDomain"
        }
    } else {
        let tempCheck = emailDomain.substring(index[1] + 1);
        if (tempCheck.match(/\d+/g)) {
            throw "Error: Enter valid emailDomain"
        }
        if (tempCheck.length < 2) {
            throw "Error: Enter valid emailDomain"
        }
    }

    if (emailDomain[0] == ".") {
        throw "Error: Enter valid emailDomain"
    }

    //find all people with email domain
    emailDomain = emailDomain.toLowerCase();
    var x = 0;
    for (let i = 0; i < data.length; i++) {
        let emailIndex = data[i].email.indexOf("@");
        let email = data[i].email.substring(emailIndex + 1)
        if (email == emailDomain) {
            if (sameEmailList.length == 0) {
                sameEmailList[x] = data[i];
            } else {
                x += 1;
                sameEmailList[x] = data[i];
            }
        }
    }

    if (sameEmailList.length > 2) {
        return sameEmailList;
    } else {
        throw "Error: since there are not at least two people that have the email domain " + emailDomain
    }
}

//Manipulate function
async function manipulateIp() {
    //get people data
    const data = await getPeople();

    var tempPersonList;
    var tempIPList = [];
    var convertedIPData = [];
    var tempLowest;
    var tempHighest;
    var highestIpPerson = {};
    var lowestIpPerson = {};
    var average;
    var indexOfLowest;
    var indexOfHighest;
    var listOfHighestIndex = [];
    var listOfLowestIndex = [];
    var sum = 0;

    for (let i = 0; i < data.length; i++) {
        tempPersonList = data[i];
        tempIPList[i] = tempPersonList.ip_address;
    }

    for (let i = 0; i < tempIPList.length; i++) {
        convertedIPData[i] = tempIPList[i].split("");
        let tempConvertedData = convertedIPData[i]
        for (let j = 0; j < tempConvertedData.length; j++) {
            if (tempConvertedData[j] == '.') {
                tempConvertedData.splice(j, 1);
            }
        }
        convertedIPData[i] = tempConvertedData;
        convertedIPData[i].sort();
        convertedIPData[i] = convertedIPData[i].join('');
    }

    tempLowest = convertedIPData[0];
    tempHighest = convertedIPData[0];

    for (let i = 1; i < convertedIPData.length; i++) {
        if (convertedIPData[i] > tempHighest) {
            tempHighest = convertedIPData[i];
            indexOfHighest = i;
        }
        if (convertedIPData[i] < tempLowest) {
            tempLowest = convertedIPData[i];
            indexOfLowest = i;
        }
    }

    for (let i = 1; i < convertedIPData.length; i++) {
        if (tempHighest == convertedIPData[i]) {
            listOfHighestIndex.push(i);
        }
        if (tempLowest == convertedIPData[i]) {
            listOfLowestIndex.push(i);
        }
    }

    for (let i = 1; i < convertedIPData.length; i++) {
        sum = sum + parseInt(convertedIPData[i]);
    }

    average = sum / convertedIPData.length;

    if (listOfHighestIndex.length > 1) {
        highestIpPerson["firstname"] = data[listOfHighestIndex[0]].first_name;
        highestIpPerson["lastname"] = data[listOfHighestIndex[0]].last_name;
    } else {
        highestIpPerson["firstname"] = data[indexOfHighest].first_name;
        highestIpPerson["lastname"] = data[indexOfHighest].last_name;
    }

    if (listOfLowestIndex.length > 1) {
        lowestIpPerson["firstname"] = data[listOfLowestIndex[0]].first_name;
        lowestIpPerson["lastname"] = data[listOfLowestIndex[0]].last_name;
    } else {
        lowestIpPerson["firstname"] = data[indexOfLowest].first_name;
        lowestIpPerson["lastname"] = data[indexOfLowest].last_name;
    }


    return { "highestIpPerson": highestIpPerson, "lowestIpPerson": lowestIpPerson, "average": Math.floor(average) }
}

//Same birthday function
async function sameBirthday(month, day) {

    const data = await getPeople();
    //validate input
    let monthWith31Days = [1, 3, 5, 7, 8, 10, 12];
    let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    if (month == undefined || day == undefined || month == null || day == null) {
        throw "Error: Enter valid input"
    }

    if(typeof(month) == "string"){
        month = month.trim();
        if(month.length == 0){
            throw "Error: Enter valid month"
        }else{
            month = parseInt(month)
        }
    }

    if(typeof(day) == "string"){
        day = day.trim();
        if(day.length == 0){
            throw "Error: Enter valid day"
        }else{
            day = parseInt(day)
        }
    }

    if (isNaN(month) || isNaN(day)) {
        throw "Error: Enter valid input"
    }

    if (month > 12 || month < 0) {
        throw "Error: Enter valid month data"
    }

    if (monthWith31Days.includes(month)) {
        if (day < 0 || day > 31) {
            throw "Error: There are not " + day + " days in " + monthName[month - 1]
        }
    } else {
        if (month == 2) {
            if (day > 28) {
                throw "Error: There are not " + day + " days in " + monthName[month - 1]
            }
        } else {
            if (day > 30) {
                throw "Error: There are not " + day + " days in " + monthName[month - 1]
            }
        }
    }

    //find people with same birthday
    var tempList = [];
    var date;
    var nameList = [];
    if (month && day) {
        for (let i = 0; i < data.length; i++) {
            tempList = data[i];

            date = tempList.date_of_birth.split("/")
            if (month == parseInt(date[0]) && day == parseInt(date[1])) {
                nameList.push(tempList.first_name + " " + tempList.last_name);
            }
        }
        return nameList;
    }
}

//export
module.exports = {
    getPeople,
    getPersonById,
    sameEmail,
    manipulateIp,
    sameBirthday
}