import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasHeroAnimation } from './saas-hero-animation';

describe('SaasHeroAnimation', () => {
  let component: SaasHeroAnimation;
  let fixture: ComponentFixture<SaasHeroAnimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasHeroAnimation],
    }).compileComponents();

    fixture = TestBed.createComponent(SaasHeroAnimation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
