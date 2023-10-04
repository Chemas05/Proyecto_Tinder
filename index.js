import 'dotenv/config';
import app from "./src/app.js";
import { sequelize } from './src/controllers/models/routes/database/connectionDB.js';

const port = 3000 || process.env.PORT;


// app.listen(port, () => console.log('server run on port ${port}'));
(async () => {
    try {
        await sequelize.authenticate();
        console.log('conection has been established successfully.');
        app.listen(port, () => console.log(`server run on port ${port}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()
