import 'reflect-metadata';
import { Controller, Get, Render } from 'routing-controllers';
import { LoggerSrv } from '../../services';

@Controller('')
export class RootController {

  constructor(private loggerSrv: LoggerSrv) {
    this.loggerSrv.info('created RootController');
  }

  @Get('/')
    @Render('index.html')
    helloServer() {
  }

  @Get('/api')
    getApi() {
    return [
            { hello: 'Hello Node.js Express Server' },
    ];
  }
}
