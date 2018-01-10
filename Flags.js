// A class generator for Flags where each string you pass in is a field.
let Flags = (function() {
    // Prevent scope interference. We want the original arguments.
    let args = arguments
    return (function() {
        // We want the index of the key
        for(var key in args) {
            // Get the argument value to prevent pointing to only 1 var
            let arg = args[key]
            // Create the flag itself
            this.Value = 0
            // Do a bitwise op to generate the flag
            let argval = 1 << key;
            // Create an object that allows you to more easily check your flags object
            this[arg] = {
                "Value": argval,
                "Enable": () => this.Value = this.Value | argval,
                "Disable": () => this.Value = this.Value & ~argval,
                "IsEnabled": () => (this.Value & argval) == argval
            }
        }
    })
})


if(module && module.exports) {
    module.exports = Flags
}
