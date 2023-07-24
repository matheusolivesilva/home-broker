import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';

async function boootstrap() {
  await CommandFactory.run(AppModule, ['warn', 'error']);
}

boootstrap();
