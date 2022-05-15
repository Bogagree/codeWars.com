// 8 kyu Volume of a Cuboid

//https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      return length*width*height
    }
  }

//  8kyu Convert a String to a Number! Return Negative

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

  const stringToNumber = function(str){
    // put your code here
    return parseInt(str)
  }


//8kyu Return Negative
// 

//   In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

function makeNegative(num) {
    // Code?
    // if (num < 0) {return num} else { return num * -1}

    return num < 0 ? num : -num;

    // return -Math.abs(num);

}




// 7 kyu Chain me

//     Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.


function chain(input, fs) {
    // implement the "chain" function
      let a = input
      for (let i=0; i<fs.length ; i++) {
        a = fs[i](a)
      }
    return a
      }