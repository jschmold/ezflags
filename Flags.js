// A class generator for Flags where each string you pass in is a field.
let Flags = (function() {
    // Prevent scope interference. We want the original arguments.
    let args = arguments
    // Allow supports of valueOf
    let flag = (function(name, argval, obj) {
        obj[name] = this
        this.Enable = () => obj.Value = obj.Value | argval
        this.Disable = () => obj.Value = obj.Value & ~argval
        this.IsEnabled = () => (obj.Value & argval) == argval
        this.Value = argval   
    })
    // Make it easier to use
    flag.prototype.valueOf = function() {
        return this.IsEnabled()
    }
    // The generated class
    let created = (function() {
        // We want the index of the key
        this.Value = 0
        for(var key in args) {
            // Get the argument value to prevent pointing to only 1 var
            let arg = args[key]
            // Do a bitwise op to generate the flag's value
            let argval = 1 << key
            // Create an object that allows you to more easily check your flags object
            this[arg] = {
                "Value": argval,
                "Enable": () => this.Value = this.Value | argval,
                "Disable": () => this.Value = this.Value & ~argval,
                "IsEnabled": () => (argval & this.Value) == argval
            }
        }
    })
    created.prototype.valueOf = function() {
        return this.Value;
    }
    return created;
})

// nodejs support
if(module && module.exports) {
    module.exports = Flags
}
