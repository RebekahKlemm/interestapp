var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/interestapp', {logging: false});

var userSchema = {
    streetAddress:{
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    }
};
var userConfig = {
    // hooks: {
    //     beforeValidate: function generateUrlTitle(page) {
    //         //if/else statement
    //     }
    // },
    // getterMethods: {
    //     route: function () {
    //         return '/wiki/' + this.urlTitle;
    //     }
    // }
};


//Create User instance of Sequelize
var User = db.define('user', userSchema, userConfig);

//Define relationships

// Page.belongsTo(User, {as: 'author'});

module.exports = {
    User: User
}

