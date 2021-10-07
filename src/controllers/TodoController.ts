//import TodoService from "@services/TodoService"
import { FastifyRequest, FastifyReply } from "fastify";

export class TodoController {

    constructor() {
    }

    public get =  async (request: FastifyRequest, reply: FastifyReply): Promise<{ message: string }> => {
        try {
            return {
                message: 'A beast i am 😂'
            };
        } catch (error) {
            console.log(error);
        }
    };
}