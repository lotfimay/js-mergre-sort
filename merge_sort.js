function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]){
      result.push(arr1[i]);
      i++;  
     }
     else if(arr2[j] < arr1[i]){
      result.push(arr2[j])
      j++
     }
     else{
         result.push(arr1[i]);
         result.push(arr2[j]);
         i++;
         j++;
     }
    }
    while(i < arr1.length){
     result.push(arr1[i]);
     i++;
    }
    while(j < arr2.length){
     result.push(arr2[j]);
     j++;
    }
    return result
}

function mergeSort(arr){
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length/2);
    let left = [];
    for(let i = 0 ; i < mid ; i++){
        left.push(arr[i])
    }
    left = mergeSort(left);
    let right = [];
    for(let i = mid ; i < arr.length ; i++){
        right.push(arr[i]);
    }
    right = mergeSort(right);
    return merge(left, right);
}

const arr = [8 , 2 , 0 , -1 , 10 , 13];
const sorted_array = mergeSort(arr);
console.log(sorted_array);