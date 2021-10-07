import App from './app'
import TodoRoutes from './routes/todo.route'

const app = new App({
    routes: [TodoRoutes],
    plugins: [],
})

app.listen()