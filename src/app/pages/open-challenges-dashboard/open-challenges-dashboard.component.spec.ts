import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenChallengesDashboardComponent } from './open-challenges-dashboard.component';

describe('OpenChallengesDashboardComponent', () => {
  let component: OpenChallengesDashboardComponent;
  let fixture: ComponentFixture<OpenChallengesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenChallengesDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenChallengesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
