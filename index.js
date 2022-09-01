function oddishOrEvenish(number) {
    let arr =number.toString().split('');

    let newNum = 0;
    for(let i=0; i<arr.length; i++) {
        newNum += parseInt(arr[i]);
    }
    if(newNum%2 === 1){
        return 'Odd';
    }else {
        return 'Even';
    }
}

console.log(oddishOrEvenish(4433))