const indexFunction = async (req, res, next) => {

    return res.json({
        status: 0,
        message: 'SCM Server is Running',
        data: {},
    });

};

const errorFunction = async (req, res, next) => {

    return res.json({
        status: 1,
        message: 'Index Error',
        data: {},
    });

};


module.exports = {
    indexFunction,
    errorFunction,
};