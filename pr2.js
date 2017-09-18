const fs = require('fs');

let add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout( () => {
            if(typeof a != 'number' || typeof b != 'number'){
                return rej(new Error(" Loi tham so"));
            }
            res(a + b);
        },2000);
    });
}
// add('4', 5).then(result => console.log("KQ : " + result))
// .catch(err => console.log(err + " "));

// fs.readFile('./1.txt', 'utf8' ,(err, data) => {
//     if(err) return console.log(err.message());
//     return console.log(data);
// });

const aPromise = new Promise((res, rej) => {
    fs.readFile('./1.txt', 'utf8', (err, data) => {
        if(err) return rej(err);
        res(data);
    })
} );

// aPromise
// .then(data => console.log(data))
// .catch(err => console.log(err));

const read = (fileName) => {
    return new Promise((res ,rej) => {
        fs.readFile(fileName, 'utf8', (err, data) =>{
            if(err) return rej(err);
            res(data);
        })
    });
}
read('./1.txt')
.then(data => console.log(data))
.catch(err => console.log(err + " "));