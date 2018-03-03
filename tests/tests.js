var assert = require('assert')
var Flags = require('../Flags.js')

describe('Flags', function() {
    var MyFlags = new Flags('FlagA', 'FlagB', 'FlagC', 'FlagD', 'FlagE')
    describe('Class Generator', function() {
        it('Should generate a new class', function () {
            assert(typeof(MyFlags) === typeof((function() {})), 'Did not generate a new class')
        })
        it('Should generate a usable class', function() {
            var obj = new MyFlags()
            console.log(obj)
            assert(obj.FlagA !== undefined, 'Did not generate the flags as members')
        })
    })
    var obj = new MyFlags();
    describe('Created objects', function() {
        it('Should create an object whose members have enable/disable', function () {
            assert(typeof(obj.FlagA.Enable) === 'function', 'Did not generate enable function')
            assert(typeof(obj.FlagA.Disable) === 'function', 'Did not generate disable function')
        })
        it('Should create an object whose members have a "value"', function() {
            assert(obj.FlagA.Value !== undefined, 'Value should exist on created object.')
        })
        it('Should have members doubling each time', function() {
            let keys = Object.keys(obj).filter(key => typeof(obj[key]) === 'object')
            for(let index in keys) {
                let key = keys[index]
                let expected = 1 << index
                assert(obj[key].Value == expected, `Expected ${expected}, instead got ${obj[key].Value} on key ${key}`)
            }
        })
        it('Should start with value 0', function() {
            assert(obj.Value === 0, 'Did not start with value 0')
        })
        it('Flag should be a boolean when needed', function() {
            let backup = obj.Value
            assert(obj.FlagA == false, "Was not the right type: (expected false)" + obj.FlagA)
            obj.FlagA.Enable()
            assert(obj.FlagA == true, "Was not the right type: (expected true)" + obj.FlagA)
            obj.Value = backup
        })
    })
    describe('Functionality', function() {
        describe('Enable', function() {
            it('Should modify value on Enable', function() {
                let testobj = new MyFlags()
                testobj.FlagA.Enable()
                assert(testobj.Value !== 0, 'Did not modify the value of the object.')
            })
            it('Should accurately modify value on Enable', function() {
                let testobj = new MyFlags()
                testobj.FlagC.Enable()
                assert.equal(testobj.Value, testobj.FlagC.Value)
            })
            it('Should accurately modify value on multiple enabled', function() {
                let testobj = new MyFlags()
                testobj.FlagC.Enable()
                testobj.FlagD.Enable()
                testobj.FlagA.Enable()
                assert.equal(testobj.Value, testobj.FlagA.Value | testobj.FlagC.Value | testobj.FlagD.Value)
            })
        })
        describe('Disable', function() {
            it('Should modify value on disable', function() {
                let testobj = new MyFlags()
                testobj.FlagC.Enable()
                testobj.FlagC.Disable()
                assert.equal(testobj.Value, 0)
            })
            it('Should modify value accurately on disable', function() {
                let testobj = new MyFlags()
                testobj.FlagC.Enable()
                let remember = testobj.Value
                testobj.FlagD.Enable()
                assert(testobj.Value !== remember)
                testobj.FlagD.Disable()
                assert.equal(testobj.Value, remember)

            })
        })
        describe('IsEnabled', function() {
            it('Accurately checks if a flag is enabled', function() {
                let testobj = new MyFlags()
                testobj.FlagC.Enable()
                assert(testobj.FlagC.IsEnabled())
                assert(!testobj.FlagB.IsEnabled(), 'Returned incorrect response on a never-enabled flag')
            })
        })
    })
    describe('Ease of Use', function() {
        it('Is a number when required', function() {
            let testobj = new MyFlags();
            testobj.FlagC.Enable()
            let val = testobj + 4
            assert(val === 8, `Returned ${val}, should be 8`)
        })
    })
})
