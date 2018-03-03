# EzFlags
## Why
Came across a need for bitwise flags, and decided to take the challenge to write a flags implementation myself. I like the idea that this generates a class for you, with the fields you specified. 

## Usage
There are 3 easy steps to using this. First, create your Flags class.

	const ABCFlags = new Flags('FlagA', 'FlagB', 'FlagC')

Step 2, create an instance of your Flags class

	let flagObj = new ABCFlags()

Step 3, enable or disable the flags you want and check if they're enabled when you need

	flagObj.FlagA.Enable()    // Enable a flag
	flagObj.FlagA.IsEnabled() // Is the flag enabled
Done like dinner.

## License 

Copyright 2018 Jonathan Schmold

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Final notes
This library raw-dogged it to JS, written by hand. I did this to ensure it works wherever you need it. This also means it has no dependencies, other than mocha for testing (and really, should it?). If you have an issue, go to my GitHub (/jschmold) and open an issue.


