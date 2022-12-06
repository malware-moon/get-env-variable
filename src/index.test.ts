import getEnvironmentVariable from "."

process.env.EMPTY = ""
process.env.STRING = "Hello"
process.env.NUMBER = "1"

describe("Get env variable", () => {
    test("get empty variable", () => {
        expect(getEnvironmentVariable("EMPTY")).toBe("")
    })
    test("get string variable", () => {
        expect(getEnvironmentVariable("STRING")).toBe("Hello")
    })
    test("get numeric variable", () => {
        expect(getEnvironmentVariable("NUMBER")).toBe("1")
    })
    test("replace with default value", () => {
        expect(getEnvironmentVariable("UNDEFINED", "Hello")).toBe("Hello")
    })
    test("throws if variable does not exist", () => {
        expect(() => getEnvironmentVariable("UNDEFINED")).toThrow("Mandatory environment variable UNDEFINED was not set.")
    })
})