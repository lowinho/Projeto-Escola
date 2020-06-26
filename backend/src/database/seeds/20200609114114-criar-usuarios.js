const bcryptjs = require("bcryptjs");

module.exports = {
    up: async(queryInterface, Sequelize) => queryInterface.bulkInsert("users", [{
        nome: "César",
        email: "lower@hotmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date(),
    }, {
        nome: "Aglaine",
        email: "lower2@hotmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
    }, {
        nome: "Egidio",
        email: "lower3@hotmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
    }], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete("users", null, {})
};
