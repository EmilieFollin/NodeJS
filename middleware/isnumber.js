

module.exports = function (req, res, next) {
    if(req.params.plus > 0 || req.body.num2 > 0)  {
        next();
    } else {
        throw Error('Not a number !!');
    }
};
