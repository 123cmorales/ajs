const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
          //  console.log(request, request.responseText);
        } else if (request.readyState ===4) {
            reject('error getting resource');
           // console.log('could not fetch the data');
        }
    });
    request.open('GET', resource);
    request.send();
});
};
getTodos ('luigi.json').then(data => {
    console.log('promise resolved:', data);
}).then(err => {
    console.log('promise rejected', err);
})
//const getSomething = () => {

  //  return new Promise(() => {
        //fetch something
    //    resolve('somedata');
        //reject('some error');
   // });
//};

//getSomething().then(() => {
 //   console.log(data);
//}. (err) => {
//    console.log(err);
//};
//);

//getSomething().then(data => {
 //   console.log(data);
//}).catch(err => {
//    console.log(err);
//});
//console.log(1);
//console.log(2);

//getTodos('mario.json',(err, data) => {
  //  console.log(data);
   // getTodos('luigi.json',(err, data) => {
     //   console.log(data);
       // getTodos('todos.json', (err, data) => {
         //   console.log(data);
        //});
 //   }); 
//});

//console.log(3);
//console.log(4);