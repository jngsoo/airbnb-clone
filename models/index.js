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

User.hasMany(Room, {
    foreignKey: {
        allowNull: false
    },  
    sourceKey: 'id'
});
Room.belongsTo(User, {
    foreignKey: 'fk_host_id',
    targetKey: 'id'
});

db= {};

db.User = User;
db.Room = Room;
db.Image = Image;
db.Booking = Booking;
db.Review = Review;

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

