exports.getData = function (data, code = 200, msg = "OK") {
    return {
        code,
        msg,
        data
    }
},

exports.getHandler = function (handler) {
    return async (req, res, next) =>  {
        try {
            const result = await handler(req, res, next);
            res.send(exports.getData(result)).end();
        }catch(err) {
            next(err)
        }
    }
}