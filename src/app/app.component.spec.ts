/* tslint:disable:no-unused-variable */

// export const ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { RouterLinkStubDirective, RouterOutletStubComponent, ActivatedRouteStub, RouterStub } from './router-stubs';

describe('AppComponent', () => {

  // ////// Testing Vars //////
  // let activatedRoute: ActivatedRouteStub;
  let routerLink: RouterLinkStubDirective = new RouterLinkStubDirective();
  let routerOutlet: RouterOutletStubComponent = new RouterOutletStubComponent();
  // let router: RouterStub;

  //   providers: [
  //       { provide: ActivatedRoute, useValue: activatedRoute },
  //       { provide: RouterLink, useValue: routerLink },
  //       { provide: RouterOutlet, useValue: routerOutlet },
  //       { provide: Router, useValue: router }
  //     ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: RouterLink, useValue: routerLink },
        { provide: RouterOutlet, useValue: routerOutlet }
      ]
    });
    TestBed.compileComponents();
  });

  xit('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
