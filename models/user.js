module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [1, 20]
            }
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                isEmail: true, 
            }
        }
    })
    return User;
}