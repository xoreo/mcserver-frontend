// The ip and port of the backend server
const ip = 'localhost';
// const ip = '192.168.1.200';
const port = '8000';

const apiRoot = `http://${ip}:${port}`;

function endpointWithoutProxy(route) {
    return `${apiRoot}/api/${route}`;
}

function endpoint(route) {
    return `/api/${route}`;
}

module.exports = {
    endpoint: endpoint
}