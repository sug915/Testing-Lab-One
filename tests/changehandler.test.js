let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {

    // Set up a test below...
    it("amountDue is set based on an argument", function() {
        // Remember, you can arrange, act, and assert...start small
        let vendingMachine = new ChangeHandler(105);
        expect(vendingMachine.amountDue).toBe(105);
    });

    it("cashTendered is set to zero", function() {
        let vendingMachine = new ChangeHandler(105);
        expect(vendingMachine.cashTendered).toBe(0);
        
    });

    it("insert a penny adds 1 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("penny");
        expect(vendingMachine.cashTendered).toBe(1);
    });

    it("insert a nickel adds 5 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("nickel");
        expect(vendingMachine.cashTendered).toBe(5);
    });
    it("insert a dime adds 10 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("dime");
        expect(vendingMachine.cashTendered).toBe(10);
    });
    it("insert a quarter adds 25 to cashTendered", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.cashTendered).toBe(25);
    });
    it("calling function multiple times", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("nickel");
        expect(vendingMachine.cashTendered).toBe(71);
    });
    it("is Payment sufficient", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("nickel");
        expect(vendingMachine.isPaymentSufficient()).toBe(false);
    });
    it("is Payment sufficient", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.isPaymentSufficient()).toBe(true);

    });
    it("is Payment sufficient", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");

        expect(vendingMachine.isPaymentSufficient()).toBe(true);
    });

    
    it("for 32 in change, returns 1 quarter, 0 dimes, 1 nickel, and 2 pennies", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");

        vendingMachine.giveChange();
        expect(vendingMachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});


    });

    it("for 10 in change, returns 0 quarters, 1 dime, 0 nickels, and 0 pennies", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("nickel");
        vendingMachine.giveChange();
        expect(vendingMachine.giveChange()).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});


    });
    it("for 27 in change, returns 1 quarter, 0 dimes, 0 nickels, and 2 pennies", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");
        
        expect(vendingMachine.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});


    });

    it("for 68 in change, returns 2 quarter, 1 dime, 1 nickels, and 3 pennies", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");
        expect(vendingMachine.giveChange()).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});


    });



})