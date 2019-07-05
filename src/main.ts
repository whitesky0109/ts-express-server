import MainServer from './server';

const serv = new MainServer(process.env.PORT);

serv.runServ();
