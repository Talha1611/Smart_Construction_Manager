const METHOD = "http"
const IP =  "localhost"
const BE_PORT =  6969

module.exports = global.config = {
    "METHOD" : METHOD,
    "IP": IP,
    "BE_PORT": BE_PORT,
    "URI_BE": METHOD + "://" + IP + ":" + BE_PORT,
    "URL": METHOD + "://" + IP,
}