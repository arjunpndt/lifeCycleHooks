import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomExampleComponent } from './shadow-dom-example.component';

describe('ShadowDomExampleComponent', () => {
  let component: ShadowDomExampleComponent;
  let fixture: ComponentFixture<ShadowDomExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadowDomExampleComponent]
    });
    fixture = TestBed.createComponent(ShadowDomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
