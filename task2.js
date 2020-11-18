let matematika = 88
let bahasaIndonesia = 101
let bahasaInggris = 89
let ipa = 90
let result
let grade

if (matematika && bahasaIndonesia && bahasaInggris && ipa){
    if (typeof matematika == 'number' && typeof bahasaIndonesia == 'number' && typeof bahasaInggris == 'number' && typeof ipa == 'number') {
        if (matematika >= 0 && matematika <= 100 && bahasaIndonesia >= 0 && bahasaIndonesia <= 100 && bahasaInggris >= 0 && bahasaInggris <= 100 && ipa >= 0 && ipa <= 100){
                result = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4
            
                if(result >= 90) {
                    grade = 'A'
                } else if (result >= 80 ) {
                    grade = 'B'
                } else if (result >= 70) {
                    grade = 'C'
                } else if (result >= 60) {
                    grade = 'D'
                } else {
                    grade = 'E'
                }
            
                console.log(`
                    Rata-rata = ${result}
                    Grade = ${grade}
                `
                )
        } else {
            console.log('input hanya boleh angka 0-100')
        }
    } else {
        console.log ('input harus berupa angka')
    }    
} else {
    console.log('Isi semua nilai untuk mendapatkan nilai rata-rata')
}