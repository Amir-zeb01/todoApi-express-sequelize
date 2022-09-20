module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('todos', {
        todo: {
            type: DataTypes.STRING,
            allowNull: false,
            trim: true,
            validate:{
                isNull(value) {
                    if (value===null || value===undefined || value==='') {
                      throw new Error('Please type some text to add todo!');
                    }
                  }
            }
        },
    }, {
        feezeTableName: true
    });

    return Todos;
}