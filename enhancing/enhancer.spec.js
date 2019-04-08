const enhancer = require('./enhancer.js');
// test away!

const weapon = {
    name: "Machine gun",
    durability: 78,
    enhancement: 13
}

describe("Enhancing weapon", () => {
    describe("Fixing weapon", () => {
        it("Weapon is at 100%", () => {
            expect(enhancer.repair(weapon)).toEqual({ ...weapon, durability: 100 });
        })
    })

    describe("You have successfully enhanced your weapon", () => {
        it("Weapon has been enhanced 20", () => {
            expect(enhancer.succeed(weapon)).toEqual({ ...weapon, enhancement: weapon.enhancement + 1 });
        })
        it("Weapon is already enhanced", () => {
            expect(enhancer.succeed({ ...weapon, enhancement: 20 })).toEqual({ ...weapon, enhancement: 20 })
        })
    })

    describe("You have failed enhancing your weapon", () => {
        it("Low enhancer has failed", () => {
            expect(enhancer.fail(weapon)).toEqual({ ...weapon, durability: weapon.durability - 5 })
        })
        it("Mid enhancer has failed", () => {
            expect(enhancer.fail({ ...weapon, enhancement: 15 })).toEqual({ ...weapon, enhancement: 15, durability: weapon.durability - 10 })
        })
        it("High enhancer has failed", () => {
            expect(enhancer.fail({ ...weapon, enhancement: 17 })).toEqual({ ...weapon, enhancement: 16, durability: weapon.durability - 10 })
        })
    })
})
  