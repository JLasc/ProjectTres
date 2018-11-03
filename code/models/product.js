module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define("Product", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(10,2),
			allowNull: true,
		},
		model: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},

	}, {
			paranoid: true,
			timestamps: true
		});

	Product.associate = (models) => {
		Product.belongsTo(models.Company, {
			foreignKey: "CompanyID"
        });
        Product.belongsTo(models.Category, {
            foreignKey: "CategoryID"
        });
	};
	return Product;
};
