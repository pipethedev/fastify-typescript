import { FastifyInstance, FastifyPluginOptions } from 'fastify'

class TodoRoutes {
    public prefix_route = '/todo'

    async routes(fastify: FastifyInstance, options: FastifyPluginOptions, done: any) {
        fastify.get(`/home`,  async (request, reply) => {
            return {
                message: 'A beast i am 😂'
            };
        });
    }
}

export default TodoRoutes