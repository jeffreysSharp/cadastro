import {HomePage} from './home-page';
import {AppConfig} from '../../../../src/app/configs/app.config';
import {browser} from 'protractor';

describe('Home page', function () {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });
});
