import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
    process.env.URL
)

export {
    sequelize
}