import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAlertSettingsComponent } from './email-alert-settings.component';

describe('EmailAlertSettingsComponent', () => {
  let component: EmailAlertSettingsComponent;
  let fixture: ComponentFixture<EmailAlertSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAlertSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAlertSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
