import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });

    // If you want to test the `index` method, you can do so like this:
    it('should have an index method', () => {
      expect(appController.index).toBeDefined();
      expect(typeof appController.index).toBe('function');
    });
  });
});
