const config = {
    //http://0.0.0.0:8000/debate/debate-discussion-00000001.json
	host: 'http://localhost',//local ip, remember to change on testing
	port: '8000',
	protocol: 'json',
    folder: '/debate/',
    ext: '.json'
}

var dataArray = [];

var exports = {};

exports.default = ajax;
exports.get = get;
exports.post = post;

function ajax(opts) {
    return window.$.ajax(Object.assign({
        url: config.host + ":" + config.port + opts.path,
        dataType: 'json',
        data: opts.data,
        type: "GET",
        xhrFields: {
            withCredentials: false
        }
    }, opts)).catch(function (err) {
        console.error(err);
        //if it's a 401 then redirect to the login.
        throw err;
    });
}

function get(path, data, opts) {
    return ajax(Object.assign({
        path: path,
        data: data
    }, opts));
}

function post(path, data, opts) {
    return ajax(Object.assign({
        path: path,
        data: data,
        type: "POST"
    }, opts));
}

for(var i = 1; i <= 9; i++){
    exports.get(config.folder + "debate-discussion-0000000" + i + config.ext).then(function (response) {
      console.info("Loaded - JSON");
      dataArray.push(response);

    }).catch(function (err) {
      console.info("Final", err);
    });
}