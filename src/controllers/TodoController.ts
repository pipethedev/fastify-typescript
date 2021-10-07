//import TodoService from "@services/TodoService"

class TodoController {
    public get = async (): Promise<{ message: string }> => {
        try {
            return {
                message: 'A beast i am 😂'
            };
        } catch (error) {
            console.log(error);
        }
    };
}

export default TodoController;