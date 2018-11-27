module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
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

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: "CategoryID"
        });
    };

    return Category;
};