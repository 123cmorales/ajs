const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
          //  console.log(request, request.responseText);
        } else if (request.readyState ===4) {
            callback('could not fetch data', undefined);
           // console.log('could not fetch the data');
        }
    });
    request.open('GET', resource);
    request.send();
};

//console.log(1);
//console.log(2);

getTodos('mario.json',(err, data) => {
    console.log(data);
    getTodos('luigi.json',(err, data) => {
        console.log(data);
    }); 
});

//console.log(3);
//console.log(4);