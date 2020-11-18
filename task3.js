let printSegitiga = 5

if (typeof printSegitiga == 'number'){
    for (let i = printSegitiga; i >= 1; i--){
        let segitiga = ''
        for (let j = 1; j <= i; j++){
            segitiga += j
        }
        console.log(segitiga)
    }
} else {
    console.log('Data harus number')
}

