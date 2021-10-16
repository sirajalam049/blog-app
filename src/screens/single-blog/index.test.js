const rewire = require("rewire")
const index = rewire("./index")
const mapStateToProps = index.__get__("mapStateToProps")
const mapDispatchToProps = index.__get__("mapDispatchToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ BlogList: { singlePost: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ BlogList: { singlePost: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps(() => 9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps(() => 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps(() => "c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
