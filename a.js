var request = require("request");

function getRandomPonyFooArticle(){
    return new Promise((res, rej) => {
        request('https://ponyfoo.com/articles/random',(err, res, body) => {
            if(err){
                rej(err); return;
            }
            res(body);
        })
    });
}
getRandomPonyFooArticle();