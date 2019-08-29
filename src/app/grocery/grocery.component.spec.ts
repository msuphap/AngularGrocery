import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryComponent } from './grocery.component';

import { FormsModule } from '@angular/forms'; 

describe('GroceryComponent', () => {
  let component: GroceryComponent;
  let fixture: ComponentFixture<GroceryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
