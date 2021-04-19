import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('App', () => {
  let component: AppComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  test('should render the App component', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Taskbox'));
  });

});