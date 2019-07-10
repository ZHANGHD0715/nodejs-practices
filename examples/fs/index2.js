'use strict';

let readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let inputString = '';
let currentLine = 0;
let arr = [];
let n;

rl.on('line', function(inputStdin) {
	  console.log({ inputStdin  });

	  if (currentLine === 0) {
	     n = parseInt(inputStdin.trim(), 10)		
		}
	  
	  if (currentLine > 0) {
		  arr[currentLine - 1] = inputStdin.trim().split(' ');
		}

	  currentLine++
});

rl.on('close', function() {
	  console.log('end');
	  console.log({ arr })

	countSort(arr);
});

function readLine() {
	  console.log({ inputString })
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    let sortedArr = []
    const len = arr.length 
    let index = 0

    while (index < len) {
        let [idx, str] = arr[index]

        if (!sortedArr[idx]) {
            sortedArr[idx] = []
        }

        if (index < len / 2) {
            str = '-'    
        }
        sortedArr[idx].push(str)

        index++
    }

    const result = sortedArr.filter(item => item).map(item => item.join(' ')).join(' ')
    console.log(result)
}

function main() {
    const n = parseInt(readLine().trim(), 10);
	  console.log({ n })

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
