const moment = require('moment'); // require

const helpers = {};

helpers.moment = (Birthday) => {
    const vBirthday = Birthday;
    console.log(vBirthday);
    return moment(vBirthday).format('yyyy-MM-DD');
};

module.exports = helpers;