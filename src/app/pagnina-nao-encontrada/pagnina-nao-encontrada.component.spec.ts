import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagninaNaoEncontradaComponent } from './pagnina-nao-encontrada.component';

describe('PagninaNaoEncontradaComponent', () => {
  let component: PagninaNaoEncontradaComponent;
  let fixture: ComponentFixture<PagninaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagninaNaoEncontradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagninaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
