// The ip and port of the backend server
let ip = '192.168.1.200';
let port = '8080';

const apiRoot = `http://${ip}:${port}`;
function endpoint(route) {
    return `${apiRoot}/api/${route}`;
}

module.exports = {
    endpoint: endpoint
}