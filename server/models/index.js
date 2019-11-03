const path = require('path'); 
const env = process.env.NODE_ENV || 'development'; 
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]; 
const Sequelize = require('sequelize'); 
const sequelize = new Sequelize(config.database, config.username, config.password, config); 

const User = require('./user')(sequelize, Sequelize); 
const Room = require('./room')(sequelize, Sequelize);
const Image = require('./image')(sequelize,Sequelize);
const Booking = require('./booking')(sequelize, Sequelize);
const Review = require('./review')(sequelize, Sequelize);

const setOneToManyRelation = (one, many, foreignKey, sourceKey) => {
    one.hasMany(many, {
        foreignKey,
        sourceKey: sourceKey
    })
    many.belongsTo(one, {
        foreignKey,
        targetKey: sourceKey
    })
}

// Guest 입장
setOneToManyRelation(User, Booking, 'fk_guest_id', 'user_id')
// Host 입장
setOneToManyRelation(User, Room, 'fk_host_id', 'user_id')
setOneToManyRelation(Room, Booking, 'fk_room_id', 'room_id')
setOneToManyRelation(Room, Image, 'fk_room_id', 'room_id')
setOneToManyRelation(Room, Review, 'fk_room_id', 'room_id')

db= {};

db.User = User;
db.Room = Room;
db.Image = Image;
db.Booking = Booking;
db.Review = Review;

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

