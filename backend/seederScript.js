require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/db')
const Product = require('./models/Product')

connectDB();

// Give anyNme to this vaiable
const importData = async () => {
    try {
        // delete everything in db
        await Product.deleteMany({});
        // seed record into db
        await Product.insertMany(productsData);
        console.log('data import Success');
        process.exit();
    } catch (error) {
        console.error('Error with data import');
        process.exit(1);
    }
}

importData();