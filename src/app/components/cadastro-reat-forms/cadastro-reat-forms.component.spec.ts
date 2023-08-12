import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReatFormsComponent } from './cadastro-reat-forms.component';

describe('CadastroReatFormsComponent', () => {
  let component: CadastroReatFormsComponent;
  let fixture: ComponentFixture<CadastroReatFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReatFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReatFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
