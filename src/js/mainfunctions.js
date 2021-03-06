 //We configure the host, port, protocol, etc so we can re-use it later
 const config = {
    //http://0.0.0.0:8000/debate/debate-discussion-00000001.json
    host: 'http://localhost',//local ip
    port: '8000',//port
    protocol: 'json',
    folder: '/debate/',
    ext: '.json',
    numFiles: 10
}

//This will hold all the data from the files
//It will be an array so we can use lodash to filter and clean it for D3js
var dataArray = [];
var counter = 1;

//Configuration of the ajax call
function ajax(opts) {
    return window.$.ajax(Object.assign({
        url: config.host + ":" + config.port + opts.path,//url with the localhost, server, port, and folders
        dataType: 'json',
        data: opts.data,//holds the response data
        type: "GET",
        xhrFields: {
            withCredentials: false//forget about credentials! For now is open
        }
    }, opts)).catch(function (err) {
        console.error(err);
        //if it's a 401 then no one has access, but we dont need credentials for now
        throw err;
    });
}

//GIMME MAH DATA!
function get(path, data, opts) {
    return ajax(Object.assign({
        path: path,//url of the folder and file we need
        data: data//the data we're getting out of the path
    }, opts));
}



//Get me the folder please
filePath = config.host + ':8000/idebate/';
var loadFile = function(filePath, done){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {return done(this.responseText)
    }
    xhr.open("GET", filePath, true);
    xhr.send();
}
var argFiles = [config.host + ':8000/idebate/'];
var jsonArray = [];
var onlyArg = {};


//Now, load the directory
loadFile(argFiles, function(responseText){
    //get only the names of the files in the directory. this is a dirty array with duplicates and what not
    var dirty = JSON.stringify(responseText).match(/(idebate\-discussion\-(\d+).json)/g);
    //clean the dirty array (by eliminating duplicates) with LoDash(bae <3 <3)
    var clean = _.uniq(dirty)
    //console.log(clean);

    //On the clean array, load the file content of each file on the array
    clean.forEach(function (t, number) {
        theJsonfilepath = config.host + ':8000/idebate/' + t;
        loadFile(theJsonfilepath, function (res) {
            //push the content to the jsonArray
            //BEWAREEEEE!!!! There are a lot of files, they won't come right away
            jsonArray.push(JSON.parse(res));
          
        })    
    })
});
console.log(jsonArray);

setTimeout(function getArguments(error, jsonArray){
    if (error){
        console.log(error)
    } else {
            
    for ( i=0; i<700; i++){
        for (var Argument in jsonArray){
            onlyArg[ArgumentID] = ArgumentList.Argument.ArgumentID;
            console.log(onlyArg);

    }
         //onlyArg[DiscussionID] = jsonArray.MetaData[DiscussionID];
        }

    }

    //console.log(onlyArg);

   /* jsonArray.forEach(function (al){
        allArgs[Argument.ArgumentID] = Argument.Premise + " " + Argument.Conclusion;
    });
    return allArgs;
    console.log(allArgs);*/

}, 7000);


//Give it five seconds to load, and after all the files are loaded the sortedArray has all the data



/* setTimeout(function () {
   var sortedArray = _.orderBy(jsonArray, ['ArgumentList', function(al){
        // console.log(al.ArgumentList);
        // console.log(al.ArgumentList.length);
        return al.ArgumentList.length;
   }], ["desc"]);
     console.log(sortedArray);
    
}, 5000); 

*/