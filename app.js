const people = require("./people");
const stock = require("./stocks");

async function main() {

    // get person by id function
    console.log("Get person by Id function result")

    console.log("Test case 1")
    try {
        const personById1 = await people.getPersonById("7989fa5e-8f3f-458d-ad58-23c8d9ef5a10");
        console.log(personById1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")
    console.log("Test case 2")
    try {
        const personById1 = await people.getPersonById(-1);
        console.log(personById1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")
    console.log("Test case 3")
    try {
        const personById1 = await people.getPersonById(1001);
        console.log(personById1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")
    console.log("Test case 4")
    try {
        const personById1 = await people.getPersonById();
        console.log(personById1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")
    console.log("Test case 5")
    try {
        const personById1 = await people.getPersonById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log(personById1);
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")

    //same email function

    console.log("Same Email function result")
    console.log("Test case 1")
    try {
        var sameEmailTest1 = await people.sameEmail("harvard.edu");
        console.dir(sameEmailTest1, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var sameEmailTest2 = await people.sameEmail("foobar");
        console.dir(sameEmailTest2, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var sameEmailTest3 = await people.sameEmail("foobar.");
        console.dir(sameEmailTest3, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var sameEmailTest4 = await people.sameEmail("foobar.123");
        console.dir(sameEmailTest4, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 5")
    try {
        var sameEmailTest5 = await people.sameEmail(".com");
        console.dir(sameEmailTest5, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 6")
    try {
        var sameEmailTest6 = await people.sameEmail();
        console.dir(sameEmailTest6, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 7")
    try {
        var sameEmailTest7 = await people.sameEmail("google.com.hk");
        console.dir(sameEmailTest7, { depth: null });
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")

    //manipulate function
    console.log("Manipulate function result")

    console.log("Test case 1")
    try {
        var result = await people.manipulateIp();
        console.log(result);
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")
    //same birthday function
    console.log("Same birthday function result")

    console.log("Test case 1")
    try {
        var sameBirthdayTest1 = await people.sameBirthday(9, 25);
        console.log(sameBirthdayTest1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var sameBirthdayTest2 = await people.sameBirthday("09", "25");
        console.log(sameBirthdayTest2);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var sameBirthdayTest3 = await people.sameBirthday(9, 31);
        console.log(sameBirthdayTest3);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var sameBirthdayTest4 = await people.sameBirthday(13, 25);
        console.log(sameBirthdayTest4);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 5")
    try {
        var sameBirthdayTest5 = await people.sameBirthday(2, 29);
        console.log(sameBirthdayTest5);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 6")
    try {
        var sameBirthdayTest6 = await people.sameBirthday("09", "    ");
        console.log(sameBirthdayTest6);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 7")
    try {
        var sameBirthdayTest7 = await people.sameBirthday("      ", "25");
        console.log(sameBirthdayTest7);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 8")
    try {
        var sameBirthdayTest8 = await people.sameBirthday();
        console.log(sameBirthdayTest8);
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")
    console.log("\n")
    console.log("Stock.js function result")

    console.log("List shareholders function result")
    console.log("Test case 1")
    try {
        var listShareholdersTest1 = await stock.listShareholders("Aeglea BioTherapeutics, Inc.");
        console.log(listShareholdersTest1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var listShareholdersTest2 = await stock.listShareholders("Powell Industries, Inc.");
        console.log(listShareholdersTest2);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var listShareholdersTest3 = await stock.listShareholders('foobar');
        console.log(listShareholdersTest3);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var listShareholdersTest4 = await stock.listShareholders();
        console.log(listShareholdersTest4);
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")

    console.log("Total shares function result")

    console.log("Test case 1")
    try {
        var totalSharesTest1 = await stock.totalShares('Aeglea BioTherapeutics, Inc.');
        console.log(totalSharesTest1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var totalSharesTest2 = await stock.totalShares(43);
        console.log(totalSharesTest2);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var totalSharesTest3 = await stock.totalShares(' ');
        console.log(totalSharesTest3);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var totalSharesTest4 = await stock.totalShares('Foobar Inc');
        console.log(totalSharesTest4);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 5")
    try {
        var totalSharesTest5 = await stock.totalShares();
        console.log(totalSharesTest5);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 6")
    try {
        var totalSharesTest6 = await stock.totalShares('Nuveen Preferred and Income 2022 Term Fund');
        console.log(totalSharesTest6);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 7")
    try {
        var totalSharesTest7 = await stock.totalShares('Powell Industries, Inc.');
        console.log(totalSharesTest7);
    } catch (e) {
        console.log(e)
    }


    console.log("---------***--------")
    console.log("List stocks function result")

    console.log("Test case 1")
    try {
        var listStockTest1 = await stock.listStocks("Grenville", "Pawelke");
        console.log(listStockTest1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var listStockTest2 = await stock.listStocks('Patrick', "Hill");
        console.log(listStockTest2);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var listStockTest3 = await stock.listStocks();
        console.log(listStockTest3);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var listStockTest4 = await stock.listStocks("foo");
        console.log(listStockTest4);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 5")
    try {
        var listStockTest5 = await stock.listStocks("      ", "        ");
        console.log(listStockTest5);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 6")
    try {
        var listStockTest6 = await stock.listStocks(1, 2);
        console.log(listStockTest6);
    } catch (e) {
        console.log(e)
    }

    console.log("---------***--------")
    console.log("Get stock by id function result")
    console.log("Test case 1")
    try {
        var getStockByIdTest1 = await stock.getStockById("f652f797-7ca0-4382-befb-2ab8be914ff0");
        console.log(getStockByIdTest1);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 2")
    try {
        var getStockByIdTest2 = await stock.getStockById(-1);
        console.log(getStockByIdTest2);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 3")
    try {
        var getStockByIdTest3 = await stock.getStockById(1001);
        console.log(getStockByIdTest3);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 4")
    try {
        var getStockByIdTest4 = await stock.getStockById();
        console.log(getStockByIdTest4);
    } catch (e) {
        console.log(e)
    }

    console.log("\n")

    console.log("Test case 5")
    try {
        var getStockByIdTest4 = await stock.getStockById('7989fa5e-5617-43f7-a931-46036f9dbcff');
        console.log(getStockByIdTest5);
    } catch (e) {
        console.log(e)
    }
}

main()