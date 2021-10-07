import 'reflect-metadata';
import prismaPlugin from './plugins/prisma'
import fastify,{ FastifyInstance } from 'fastify';

class App { 
  public app: FastifyInstance;
  public app_domain: string = 'localhost';
  public app_port: number = 3000; //parseInt(`${process.env.APP_PORT}`, 10) ?? 8080

  constructor(appInit: { plugins: Array<any>; routes: Array<any> }) {
    this.app = fastify({ logger: true })
    this.app.register(require('fastify-formbody'))
    this.app.register(require('fastify-cors'))
    this.app.register(require('fastify-file-upload'))
    this.app.register(require('fastify-helmet'))
    this.app.register(prismaPlugin)
    //Swagger Implementation
    this.swagger();
    // API routers
    this.routes(appInit.routes)
  }
  public swagger() {
    this.app.register(require('fastify-swagger'), {
      exposeRoute: true,
      routePrefix: '/docs',
      swagger: {
        info: {
          title: 'boilerplate'
        },
      }
    })
  }


  public routes(routes: { forEach: (arg0: (routes: any) => void) => void }) {
    routes.forEach((route) => {
      let router = new route()
      this.app.register(router.routes, { prefix: router.prefix_route })
    })

    this.app.get('/health-check', async (request, reply) => {
      reply.send({
        healthcheck: "server is alive"
      })
    })
  }

  public listen() {
    this.app.listen(this.app_port, (data) => {
      console.log(data);
      console.log(`App listening on the http://${this.app_domain}:${this.app_port}`)
    })
  }
}

export default App;