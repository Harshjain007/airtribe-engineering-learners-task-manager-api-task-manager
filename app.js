import express from 'express'
import taskRoutes from './routes/tasks.routes.js'

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/tasks', taskRoutes)

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

export default app;