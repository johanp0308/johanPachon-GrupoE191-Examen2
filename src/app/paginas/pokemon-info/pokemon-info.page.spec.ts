import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonInfoPage } from './pokemon-info.page';

describe('PokemonInfoPage', () => {
  let component: PokemonInfoPage;
  let fixture: ComponentFixture<PokemonInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
