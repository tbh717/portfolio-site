const on_create_node = require("./on-create-node")
// @ponicode
describe("on_create_node", () => {
    test("0", () => {
        let object = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            on_create_node({ node: { frontmatter: { category: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", tags: ["Kailey Bypass", "Renner Circle", "Beryl Coves", "Clement Cliffs", "Kailey Bypass", "Clement Cliffs", "Corrine Square"], slug: "quam-dignissimos-nostrum" }, internal: { type: "string" } }, actions: object, getNode: { relativeDirectory: "2020-03-01" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            on_create_node({ node: { frontmatter: { category: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", tags: ["Clement Cliffs", "Beryl Coves", "Beryl Coves", "Corrine Square", "Beryl Coves", "Clement Cliffs", "Kailey Bypass"], slug: "consequatur-necessitatibus-sit" }, internal: { type: "number" } }, actions: object, getNode: { relativeDirectory: "2019-10-01-preview" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            on_create_node({ node: { frontmatter: { category: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J", tags: ["Kailey Bypass", "Clement Cliffs", "Corrine Square", "Beryl Coves", "Clement Cliffs", "Renner Circle", "Clement Cliffs"], slug: "quam-dignissimos-nostrum" }, internal: { type: "object" } }, actions: "install", getNode: { relativeDirectory: "2017-03-01" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            on_create_node({ node: { frontmatter: { category: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", tags: ["Corrine Square", "Kailey Bypass", "Beryl Coves", "Corrine Square", "Beryl Coves", "Kailey Bypass", "Corrine Square"], slug: "quam-dignissimos-nostrum" }, internal: { type: "array" } }, actions: { type: "ADD_TODO" }, getNode: { relativeDirectory: "2020-03-01" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            on_create_node({ node: { frontmatter: { category: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart", tags: ["Kailey Bypass", "Clement Cliffs", "Renner Circle", "Kailey Bypass", "Corrine Square", "Beryl Coves", "Clement Cliffs"], slug: "praesentium-et-ducimus" }, internal: { type: "number" } }, actions: object, getNode: { relativeDirectory: "2019-07-01" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let object = [{ type: "ADD_TODO" }, { type: "RECEIVE_MESSAGE" }, "install", "remove", "discard", "discard", "assign", "REMOVE", "SHUTDOWN", "DELETE"]
        let callFunction = () => {
            on_create_node({ node: undefined, actions: object, getNode: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
