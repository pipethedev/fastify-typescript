import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { TodoController } from "@controllers/TodoController";

class TodoRoutes {
    public prefix_route = '/todo'

    async routes(fastify: FastifyInstance, todoController: TodoController) {
        fastify.get(`/home`,  todoController.get);
    }

}

export default TodoRoutes