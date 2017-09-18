let aPromise = new Promise((res, rej) => {
    rej("ok");
})
aPromise.then((msg) => console.log("da thanh cong : " + msg), (err) => console.log("Loi : "+ err));