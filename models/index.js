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

// Host 입장
User.hasMany(Room, {        
    foreignKey: 'fk_host_id',
    sourceKey: 'user_id'
});
Room.belongsTo(User, {
    foreignKey: 'fk_host_id',
    targetKey: 'user_id'
});

// Guest 입장
User.hasMany(Booking, {        
    foreignKey: 'fk_guest_id',
    sourceKey: 'user_id'
});
Booking.belongsTo(User, {
    foreignKey: 'fk_guest_id',
    targetKey: 'user_id'
});

Room.hasMany(Review, {
    foreignKey: 'fk_room_id',
    sourceKey: 'room_id'
})
Review.belongsTo(Room, {
    foreignKey: 'fk_room_id',
    targetKey: 'room_id'
})  

Room.hasMany(Image, {
    foreignKey: 'fk_room_id',
    sourceKey: 'room_id'
})
Review.belongsTo(Room, {
    foreignKey: 'fk_room_id',
    targetKey: 'room_id'
})

Room.hasMany(Booking, {
    foreignKey: 'fk_room_id',
    sourceKey: 'room_id'
})
Booking.belongsTo(Room, {
    foreignKey: 'fk_room_id',
    targetKey: 'room_id'
})


db= {};

db.User = User;
db.Room = Room;
db.Image = Image;
db.Booking = Booking;
db.Review = Review;

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

