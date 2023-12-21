
import { PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';


(async() => {
  main();
})();


async function main(){
  //cadena de conexion a mongo
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // //crear una coleccion = tables, documento = registro

  // const newLog = await LogModel.create({
  //   message: 'Test message desdde Mongo',
  //   origin: 'App.ts',
  //   level: 'high'

  // });
  // await newLog.save();
  // console.log(newLog);


  // //leer los datos en mongo
  // const logs = await LogModel.find();
  // console.log(logs);
  ///////////////


  // //CREAR LOS DATOS EN POSTGRES
  // const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level:'HIGH',
  //     message:'Test message postgress',
  //     origin: 'App.ts'
  //   }
  // });
  // console.log( { newLog } );
  
  
  
  // //LEER LOS DATOS DE POSTGRES
  // const prisma = new PrismaClient();
  // const logs = await prisma.logModel.findMany({
  //   where: {
  //     level: 'MEDIUM'
  //   }
  // });
  // console.log( { logs } );
  
  
  
 

  Server.start();
}


