import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedMovieComponent } from './deleted-movie.component';

describe('DeletedMovieComponent', () => {
  let component: DeletedMovieComponent;
  let fixture: ComponentFixture<DeletedMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletedMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
