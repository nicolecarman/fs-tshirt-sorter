/*

Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll. The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

Example:
tshirtSorter('lms')
sml

Example:
tshirtSorter('smllms')
ssmmll

*/


// Write your solution below:
// Solution 1:
function tshirtSort(size) {
    let small = "";
    let medium = "";
    let large = "";
  
    for (let i = 0; i < size.length; i++) {
      if (size[i] === "s") {
        small += "s";
      } else if (size[i] === "m") {
        medium += "m";
      } else {
        large += "l";
      }
    }

    console.log(small + medium + large);
    return small + medium + large;
}

// testing
tshirtSort('lms');
tshirtSort('smllms');
  


// Alternatively, this solution uses methods to split the string (size) into an array. Then, it sorts, reverses, and puts them back together to return the sizes in the desired order
function tshirtSort2(size) {
    console.log(size.split("").sort().reverse().join(""));
return size.split("").sort().reverse().join("");
}

// testing
tshirtSort2('lms');
tshirtSort2('smllms');