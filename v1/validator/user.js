const joi = require('joi');

const validateSchema = async (inputs, schema) => {
    try {
        const { error, value } = schema.validate(inputs);
        if (error) throw error.details ? error.details[0].message.replace(/['"]+/g, '') : "";
        else return false;
    } catch (error) { throw error; }
};

const validateChart = async (req, property = 'body') => {
    let schema = {}
    schema = joi.object().keys({
        // phone: joi.string().regex(/^[0-9]+$/).min(5).max(15).optional(),
    });

    return await validateSchema(req[property], schema);
}

const validateConnection = async (req, property = 'body') => {
    let schema = joi.object().keys({
        // phone: joi.string().optional()
    });
    return await validateSchema(req[property], schema);
}

module.exports = {
    validateChart,
    validateConnection,
}