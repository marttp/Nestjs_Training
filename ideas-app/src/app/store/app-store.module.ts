import { AuthEffects } from '@app/store/effects/auth.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AuthState, authReducer } from './reducers/auth.reducer';
import { errorReducer, ErrorState } from './reducers/errors.reducer';

export interface AppState {
  error: ErrorState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
};

export const effects = [AuthEffects];

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forRoot({}),
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([]),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
  ],
})
export class AppStoreModule {}
