// DESCRIPTION:
// Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

// Note: There will always be at least 1 string; all inputs will be non-empty.

// For example:

// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

function createMessage(msg, arr = []) {
    if(!msg) return arr.join(' ')
    arr.push(msg)
    let sum = m => createMessage(m, arr)
    return sum
  }