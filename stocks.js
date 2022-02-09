const axios = require('axios');
const peopleData = require('./people');

//get data from file
async function getStocksData() {
    let { data } = await axios.get('https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json')
    return data
}

//list shareholders function
async function listShareholders(stockName) {

    //check input 
    if (stockName == undefined) {
        throw "Error: Input data missing"
    }

    if (typeof (stockName) != "string" || stockName.length == 0 || !stockName.trim()) {
        throw "Error: Enter valid stockName data"
    }

    //list the shareholders
    let stock = await getStocksData();
    let peopleStockData = await peopleData.getPeople();
    for (let i = 0; i < stock.length; i++) {
        if (stockName == stock[i].stock_name) {
            if (stock[i].shareholders.length > 0) {
                let tempShareData = stock[i].shareholders;
                stock[i].shareholders = [];
                for (let j = 0; j < tempShareData.length; j++) {
                    for (let k = 0; k < peopleStockData.length; k++) {
                        if (tempShareData[j].userId == peopleStockData[k].id) {
                            stock[i].shareholders.push({ "first_name": peopleStockData[k].first_name, "last_name": peopleStockData[k].last_name, "number_of_shares": tempShareData[j].number_of_shares })
                        }
                    }
                }
            } else {
                return stock[i];
            }
            return stock[i];
        }
    }
    throw "Error: Stock name not found"
}

//total shares function
async function totalShares(stockName) {
    //validate input
    if (stockName == undefined) {
        throw "Error: stockName input data missing"
    }

    if (typeof (stockName) != "string" || stockName.length == 0 || !stockName.trim()) {
        throw "Error: Enter valid stockName data"
    }

    //get total shares of the stock
    let stockDataLists = await getStocksData();
    var count = 0;
    var sum = 0;
    for (let i = 0; i < stockDataLists.length; i++) {
        if (stockName == stockDataLists[i].stock_name) {
            if (stockDataLists[i].shareholders.length > 0) {
                for (let j = 0; j < stockDataLists[i].shareholders.length; j++) {
                    count += 1;
                    sum += stockDataLists[i].shareholders[j].number_of_shares;
                }
            } else {
                throw '"' + stockName + " currently has no shareholders." + '"'
            }
            break;
        }
    }

    if (count != 0 && sum != 0) {
        if (count == 1) {
            return '"' + stockName + ", has " + count + " shareholder that owns a total of " + sum + " shares." + '"'
        } else {
            return '"' + stockName + ", has " + count + " shareholders that own a total of " + sum + " shares." + '"'
        }
    } else {
        throw "Error: No stock with that name"
    }
}

//List stock function
async function listStocks(firstName, lastName) {

    //validate input
    if (firstName == undefined || lastName == undefined) {
        throw "Error : First name or Last name data missing"
    }

    if (typeof (firstName) != "string" || firstName.length == 0 || !firstName.trim()) {
        throw "Error: Enter valid input for firstName"
    }

    if (typeof (lastName) != "string" || lastName.length == 0 || !lastName.trim()) {
        throw "Error: Enter valid input for lastName"
    }

    let peopleDataList = await peopleData.getPeople();
    var id;

    //check if id is present
    for (let i = 0; i < peopleDataList.length; i++) {
        let tempPeopleList = peopleDataList[i];

        if (firstName == tempPeopleList.first_name && lastName == tempPeopleList.last_name) {
            id = tempPeopleList.id;
        }
    }

    if (!id) {
        throw "Error: " + firstName + " " + lastName + " not found"
    }

    //list stocks
    let stockData = await getStocksData();
    var result = []
    for (let i = 0; i < stockData.length; i++) {
        let tempStock = stockData[i];
        for (let j = 0; j < tempStock.shareholders.length; j++) {
            let tempShareholderData = tempStock.shareholders[j];
            if (id == tempShareholderData.userId) {
                result.push({ "stock_name": tempStock.stock_name, "number_of_shares": tempStock.shareholders[j].number_of_shares })
            }
        }
    }

    //return result
    return result;
}

//get stock by id function
async function getStockById(id) {

    //validate input
    if (id == undefined) {
        throw "Error: Enter id data"
    }

    if (typeof (id) != "string" || id.length == 0 || !id.trim()) {
        throw "Error: Enter valid id input"
    }

    //get stock
    let stoksDataList = await getStocksData();
    for (let i = 0; i < stoksDataList.length; i++) {
        if (stoksDataList[i].id == id) {
            return stoksDataList[i]
        }
    }
    throw "Error: stock not found"
}

module.exports = {
    listShareholders,
    totalShares,
    listStocks,
    getStockById
}