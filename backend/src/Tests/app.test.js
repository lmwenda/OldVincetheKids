const { PORT } = require("../app");

describe("App", () => {
    describe("PORT", () => {
        test("Checking if the PORT'S value is equal to 5000", async() => {
            await expect(PORT).toBe(5000);
        });

        test("Checking the Type of PORT is Number", async() => {
            await expect(typeof PORT).toBe('number');
        });
    });
});