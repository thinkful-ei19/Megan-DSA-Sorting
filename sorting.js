'use strict';
let count=0;
function qSort(arr, start=0, end=arr.length){
  count++;
  if(start>=end){
    return arr;
  }
  const middle=partition(arr, start, end);
  arr=qSort(arr, start, middle);
  arr=qSort(arr, middle+1, end);
  return arr;
}

function partition(arr, start, end){
  const pivot=arr[end-1];
  let j=start;
  for(let i=start; i<end-1; i++){
    if(arr[i]<=pivot){
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
}
const arr=[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// console.log(qSort(arr));
// console.log('count:', count);

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
// console.log(qSort(arr));
let mCount=0;
function mSort(arr){
  mCount++;
  if(arr.length<=1){
    return arr;
  }
  const middle=Math.floor(arr.length/2);
  let left= arr.slice(0, middle);
  let right=arr.slice(middle, arr.length);

  left=mSort(left);
  right=mSort(right);
  return merge(left, right, arr);
}

function merge(left, right, arr){
  let leftIndex=0;
  let rightIndex=0;
  let outputIndex=0;
  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      arr[outputIndex++]=left[leftIndex++];
    }
    else{
      arr[outputIndex++]=right[rightIndex++];
    }
  }

  for(let i=leftIndex; i< left.length; i++){
    arr[outputIndex++]=left[i];
  }
  for(let i=rightIndex; i<right.length; i++){
    arr[outputIndex++]=right[i];
  }
  return arr;
}
// console.log(mSort(arr));
// console.log('mSort count:',mCount);

function bucketSort(arr, lowest, highest){
  const newArr= new Array((highest-lowest)+1);
  let finalArr=[];

  for(let i=0; i<arr.length; i++){
    newArr[arr[i]-lowest]=arr[i];
  }

  for(let i=0; i<newArr.length; i++){
    if(typeof newArr[i]==='number'){
      finalArr.push(newArr[i]);
    }
  }
  return finalArr;
  
}
//Mentor Notes:removes duplicates: extension should be see how to handle duplicates more efficiently
// console.log('bucket', bucketSort(arr, 1, 98));

function sortInPlace(arr){
  let max=arr.length-1;
  let min=0;
    
  for(let i=0; i<arr.length; i++){
    let randomIndex=Math.floor(Math.random() * (max - min + 1)) + min;
    let temp=arr[i];
    arr[i]=arr[randomIndex];
    arr[randomIndex]=temp;
  }

  return arr;
}

const simpleArr=[5,7,3,10,30,6];
console.log(sortInPlace(simpleArr));

//Sorting Books:
//use merge sort and change letters to numbers by using charAt.
//Since titles are always capitalized, the function should always work.
//If, for some reason, there are titles with lowercase letters as the starting letter
//the function would put them at the end of the array(still in alpabetical order
//but coming after the capitals)

let bookArr=['Bacon', 'Cheese', 'These Are Not Book Titles', 'Tape', 'Apples'];
function bookSort(arr){
  if(arr.length<=1){
    return arr;
  }
  const middle=Math.floor(arr.length/2);
  let left= arr.slice(0, middle);
  let right=arr.slice(middle, arr.length);

  left=bookSort(left);
  right=bookSort(right);
  return mergeBooks(left, right, arr);
}

function mergeBooks(left, right, arr){
  let leftIndex=0;
  let rightIndex=0;
  let outputIndex=0;
  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex].charCodeAt(0)<right[rightIndex].charCodeAt(0)){
      arr[outputIndex++]=left[leftIndex++];
    }
    else{
      arr[outputIndex++]=right[rightIndex++];
    }
  }

  for(let i=leftIndex; i< left.length; i++){
    arr[outputIndex++]=left[i];
  }
  for(let i=rightIndex; i<right.length; i++){
    arr[outputIndex++]=right[i];
  }
  return arr;
}

console.log(bookSort(bookArr));