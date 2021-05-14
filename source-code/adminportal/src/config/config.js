const method = "http"
const IP =  "localhost"
const BE_PORT =  6969

module.exports = global.config = {
    "Method" : method,
    "IP": IP,
    "BE_PORT": BE_PORT,
    "URI_BE": method + "://" + IP + ":" + BE_PORT,
    "URI_ADMIN": method + "://" + IP + ":" + process.env.PORT,
}