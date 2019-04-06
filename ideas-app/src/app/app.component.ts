import { AddError } from './store/actions/errors.action';
import { AppState } from './store/app-store.module';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(new AddError({ error: 'message' }));
  }
}
