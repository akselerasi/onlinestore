import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    let viewData = [];
    viewData['title'] = 'Home Page - Online Store';

    return {
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    // Use an object instead of an array for viewData
    const viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = 'About us';
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Developed by: Lab Akselerasi';

    // Properly return the object
    return {
      viewData: viewData,
    };
  }
}
