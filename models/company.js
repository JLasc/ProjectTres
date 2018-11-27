module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("Company", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
            paranoid: true,
            timestamps: true
        });

    Company.associate = (models) => {
        Company.hasMany(models.User, {
            foreignKey: "CompanyID"
        });
        Company.hasMany(models.Product, {
            foreignKey: "CompanyID"
        });
    };

    return Company;
};