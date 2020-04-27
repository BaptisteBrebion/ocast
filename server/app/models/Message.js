const sequelize = require('sequelize');
const DBConnection = require('../dbConnection');

class Message extends sequelize.Model {
  getText() {
    return this.text;
  }

  setText(value) {
    if (typeof value !== 'string') {
      throw Error('Message.text must be a string!');
    }
    this.text = value;
  }

  getIsRead() {
    return this.isRead;
  }

  setIsRead(value) {
    if (typeof value !== 'boolean') {
      throw Error('Message.isRead must be a boolean!');
    }
    this.isRead = value;
  }
}

Message.init(
  {
    text: sequelize.TEXT,
    isRead: sequelize.BOOLEAN
  },
  {
    sequelize: DBConnection,
    tableName: 'messages',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = Message;
