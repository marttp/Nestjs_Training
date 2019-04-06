import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { AuthEffects } from '@app/store/effects/auth.effect';

import { authReducer, AuthState } from '@app/store/reducers/auth.reducer';
import { errorReducer, ErrorState } from '@app/store/reducers/errors.reducer';
import { RouterStateUrl } from '@app/store/reducers/router.reducer';

export const effects = [AuthEffects];

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  router: fromRouter.routerReducer,
};

export interface AppState {
  auth: AuthState;
  error: ErrorState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
