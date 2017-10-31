
const config = {
	host: '0.0.0.0',//local ip, remember to change on testing
	port: '8000',
	protocol: 'echo-protocol'
}

var exports = {};

exports.default = ajax;
exports.get = get;
exports.post = post;
function ajax(opts) {
    return window.$.ajax(Object.assign({
        url: "" + config.host + opts.path,
        dataType: 'json',
        data: opts.data,
        type: "GET",
        xhrFields: {
            withCredentials: true
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

console.log(get("/debate", "lol","null"));