
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// source https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax

module.exports = validateEmail();