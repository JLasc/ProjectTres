module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        items: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('orderItems').split(';')
            },
            set(val) {
                this.setDataValue('orderItems', val.join(';'));
            },
        }
    }, {
            paranoid: true,
            timestamps: true
        });

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            foreignKey: "UserID"
        });
        Order.belongsTo(models.Company, {
            foreignKey: "CompnayID"
        });
    };

    return Order;
};