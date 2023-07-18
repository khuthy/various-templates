import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSettingsComponent } from './social-settings.component';

describe('SocialSettingsComponent', () => {
  let component: SocialSettingsComponent;
  let fixture: ComponentFixture<SocialSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
