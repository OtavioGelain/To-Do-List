import { app } from "./app";
import { AppSource } from "./database/data-source";
import { env } from "./env/envSchema";

app.listen(env?.SERVER_PORT, () => {
    console.log('Server is running')
})

AppSource.initialize()
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.log('Error during Database initialization', error)
    })