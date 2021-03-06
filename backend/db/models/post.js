'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' });
      Post.hasMany(models.Comment, { foreignKey: 'postId', onDelete: 'CASCADE', hooks: true })
      Post.hasMany(models.Like, { foreignKey: 'postId', onDelete: 'CASCADE', hooks: true  })
    }
  };
  Post.init({
    userId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
