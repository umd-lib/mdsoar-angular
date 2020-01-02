// import @ngrx
import { Action } from '@ngrx/store';

// import type function
import { type } from '../../shared/ngrx/type';

// import models
import { EPerson } from '../eperson/models/eperson.model';
import { AuthTokenInfo } from './models/auth-token-info.model';
import { AuthMethod } from './models/auth.method';
import { AuthStatus } from './models/auth-status.model';

export const AuthActionTypes = {
  AUTHENTICATE: type('dspace/auth/AUTHENTICATE'),
  AUTHENTICATE_ERROR: type('dspace/auth/AUTHENTICATE_ERROR'),
  AUTHENTICATE_SUCCESS: type('dspace/auth/AUTHENTICATE_SUCCESS'),
  AUTHENTICATED: type('dspace/auth/AUTHENTICATED'),
  AUTHENTICATED_ERROR: type('dspace/auth/AUTHENTICATED_ERROR'),
  AUTHENTICATED_SUCCESS: type('dspace/auth/AUTHENTICATED_SUCCESS'),
  CHECK_AUTHENTICATION_TOKEN: type('dspace/auth/CHECK_AUTHENTICATION_TOKEN'),
  CHECK_AUTHENTICATION_TOKEN_COOKIE: type('dspace/auth/CHECK_AUTHENTICATION_TOKEN_COOKIE'),
  RETRIEVE_AUTH_METHODS: type('dspace/auth/RETRIEVE_AUTH_METHODS'),
  RETRIEVE_AUTH_METHODS_SUCCESS: type('dspace/auth/RETRIEVE_AUTH_METHODS_SUCCESS'),
  RETRIEVE_AUTH_METHODS_ERROR: type('dspace/auth/RETRIEVE_AUTH_METHODS_ERROR'),
  REDIRECT_TOKEN_EXPIRED: type('dspace/auth/REDIRECT_TOKEN_EXPIRED'),
  REDIRECT_AUTHENTICATION_REQUIRED: type('dspace/auth/REDIRECT_AUTHENTICATION_REQUIRED'),
  REFRESH_TOKEN: type('dspace/auth/REFRESH_TOKEN'),
  REFRESH_TOKEN_SUCCESS: type('dspace/auth/REFRESH_TOKEN_SUCCESS'),
  REFRESH_TOKEN_ERROR: type('dspace/auth/REFRESH_TOKEN_ERROR'),
  ADD_MESSAGE: type('dspace/auth/ADD_MESSAGE'),
  RESET_MESSAGES: type('dspace/auth/RESET_MESSAGES'),
  LOG_OUT: type('dspace/auth/LOG_OUT'),
  LOG_OUT_ERROR: type('dspace/auth/LOG_OUT_ERROR'),
  LOG_OUT_SUCCESS: type('dspace/auth/LOG_OUT_SUCCESS'),
  REGISTRATION: type('dspace/auth/REGISTRATION'),
  REGISTRATION_ERROR: type('dspace/auth/REGISTRATION_ERROR'),
  REGISTRATION_SUCCESS: type('dspace/auth/REGISTRATION_SUCCESS'),
  SET_REDIRECT_URL: type('dspace/auth/SET_REDIRECT_URL'),
};

/* tslint:disable:max-classes-per-file */

/**
 * Authenticate.
 * @class AuthenticateAction
 * @implements {Action}
 */
export class AuthenticateAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATE;
  payload: {
    email: string;
    password: string
  };

  constructor(email: string, password: string) {
    this.payload = {email, password};
  }
}

/**
 * Checks if user is authenticated.
 * @class AuthenticatedAction
 * @implements {Action}
 */
export class AuthenticatedAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATED;
  payload: AuthTokenInfo;

  constructor(token: AuthTokenInfo) {
    this.payload = token;
  }
}

/**
 * Authenticated check success.
 * @class AuthenticatedSuccessAction
 * @implements {Action}
 */
export class AuthenticatedSuccessAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATED_SUCCESS;
  payload: {
    authenticated: boolean;
    authToken: AuthTokenInfo;
    user: EPerson
  };

  constructor(authenticated: boolean, authToken: AuthTokenInfo, user: EPerson) {
    this.payload = {authenticated, authToken, user};
  }
}

/**
 * Authenticated check error.
 * @class AuthenticatedErrorAction
 * @implements {Action}
 */
export class AuthenticatedErrorAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATED_ERROR;
  payload: Error;

  constructor(payload: Error) {
    this.payload = payload;
  }
}

/**
 * Authentication error.
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
export class AuthenticationErrorAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATE_ERROR;
  payload: Error;

  constructor(payload: Error) {
    this.payload = payload;
  }
}

/**
 * Authentication success.
 * @class AuthenticationSuccessAction
 * @implements {Action}
 */
export class AuthenticationSuccessAction implements Action {
  public type: string = AuthActionTypes.AUTHENTICATE_SUCCESS;
  payload: AuthTokenInfo;

  constructor(token: AuthTokenInfo) {
    this.payload = token;
  }
}

/**
 * Check if token is already present upon initial load.
 * @class CheckAuthenticationTokenAction
 * @implements {Action}
 */
export class CheckAuthenticationTokenAction implements Action {
  public type: string = AuthActionTypes.CHECK_AUTHENTICATION_TOKEN;
}

/**
 * Check Authentication Token Error.
 * @class CheckAuthenticationTokenCookieAction
 * @implements {Action}
 */
export class CheckAuthenticationTokenCookieAction implements Action {
  public type: string = AuthActionTypes.CHECK_AUTHENTICATION_TOKEN_COOKIE;
}

/**
 * Sign out.
 * @class LogOutAction
 * @implements {Action}
 */
export class LogOutAction implements Action {
  public type: string = AuthActionTypes.LOG_OUT;

  constructor(public payload?: any) {
  }
}

/**
 * Sign out error.
 * @class LogOutErrorAction
 * @implements {Action}
 */
export class LogOutErrorAction implements Action {
  public type: string = AuthActionTypes.LOG_OUT_ERROR;
  payload: Error;

  constructor(payload: Error) {
    this.payload = payload;
  }
}

/**
 * Sign out success.
 * @class LogOutSuccessAction
 * @implements {Action}
 */
export class LogOutSuccessAction implements Action {
  public type: string = AuthActionTypes.LOG_OUT_SUCCESS;

  constructor(public payload?: any) {
  }
}

/**
 * Redirect to login page when authentication is required.
 * @class RedirectWhenAuthenticationIsRequiredAction
 * @implements {Action}
 */
export class RedirectWhenAuthenticationIsRequiredAction implements Action {
  public type: string = AuthActionTypes.REDIRECT_AUTHENTICATION_REQUIRED;
  payload: string;

  constructor(message: string) {
    this.payload = message;
  }
}

/**
 * Redirect to login page when token is expired.
 * @class RedirectWhenTokenExpiredAction
 * @implements {Action}
 */
export class RedirectWhenTokenExpiredAction implements Action {
  public type: string = AuthActionTypes.REDIRECT_TOKEN_EXPIRED;
  payload: string;

  constructor(message: string) {
    this.payload = message;
  }
}

/**
 * Refresh authentication token.
 * @class RefreshTokenAction
 * @implements {Action}
 */
export class RefreshTokenAction implements Action {
  public type: string = AuthActionTypes.REFRESH_TOKEN;
  payload: AuthTokenInfo;

  constructor(token: AuthTokenInfo) {
    this.payload = token;
  }
}

/**
 * Refresh authentication token success.
 * @class RefreshTokenSuccessAction
 * @implements {Action}
 */
export class RefreshTokenSuccessAction implements Action {
  public type: string = AuthActionTypes.REFRESH_TOKEN_SUCCESS;
  payload: AuthTokenInfo;

  constructor(token: AuthTokenInfo) {
    this.payload = token;
  }
}

/**
 * Refresh authentication token error.
 * @class RefreshTokenErrorAction
 * @implements {Action}
 */
export class RefreshTokenErrorAction implements Action {
  public type: string = AuthActionTypes.REFRESH_TOKEN_ERROR;
}

/**
 * Sign up.
 * @class RegistrationAction
 * @implements {Action}
 */
export class RegistrationAction implements Action {
  public type: string = AuthActionTypes.REGISTRATION;
  payload: EPerson;

  constructor(user: EPerson) {
    this.payload = user;
  }
}

/**
 * Sign up error.
 * @class RegistrationErrorAction
 * @implements {Action}
 */
export class RegistrationErrorAction implements Action {
  public type: string = AuthActionTypes.REGISTRATION_ERROR;
  payload: Error;

  constructor(payload: Error) {
    this.payload = payload;
  }
}

/**
 * Sign up success.
 * @class RegistrationSuccessAction
 * @implements {Action}
 */
export class RegistrationSuccessAction implements Action {
  public type: string = AuthActionTypes.REGISTRATION_SUCCESS;
  payload: EPerson;

  constructor(user: EPerson) {
    this.payload = user;
  }
}

/**
 * Add uthentication message.
 * @class AddAuthenticationMessageAction
 * @implements {Action}
 */
export class AddAuthenticationMessageAction implements Action {
  public type: string = AuthActionTypes.ADD_MESSAGE;
  payload: string;

  constructor(message: string) {
    this.payload = message;
  }
}

/**
 * Reset error.
 * @class ResetAuthenticationMessagesAction
 * @implements {Action}
 */
export class ResetAuthenticationMessagesAction implements Action {
  public type: string = AuthActionTypes.RESET_MESSAGES;
}

// // Next three Actions are used by dynamic login methods
/**
 * Action that triggers an effect fetching the authentication methods enabled ant the backend
 * @class  RetrieveAuthMethodsAction
 * @implements {Action}
 */
export class RetrieveAuthMethodsAction implements Action {
  public type: string = AuthActionTypes.RETRIEVE_AUTH_METHODS;

  payload: AuthStatus;

  constructor(authStatus: AuthStatus) {
    this.payload = authStatus;
  }
}

/**
 * Get Authentication methods enabled at the backend
 * @class RetrieveAuthMethodsSuccessAction
 * @implements {Action}
 */
export class RetrieveAuthMethodsSuccessAction implements Action {
  public type: string = AuthActionTypes.RETRIEVE_AUTH_METHODS_SUCCESS;
  payload: AuthMethod[];

  constructor(authMethods: AuthMethod[] ) {
    this.payload = authMethods;
  }
}

export class RetrieveAuthMethodsErrorAction implements Action {
  public type: string = AuthActionTypes.RETRIEVE_AUTH_METHODS_ERROR;
}

/**
 * Change the redirect url.
 * @class SetRedirectUrlAction
 * @implements {Action}
 */
export class SetRedirectUrlAction implements Action {
  public type: string = AuthActionTypes.SET_REDIRECT_URL;
  payload: string;

  constructor(url: string) {
    this.payload = url;
  }
}

/* tslint:enable:max-classes-per-file */

/**
 * Actions type.
 * @type {AuthActions}
 */
export type AuthActions
  = AuthenticateAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
  | CheckAuthenticationTokenAction
  | CheckAuthenticationTokenCookieAction
  | RedirectWhenAuthenticationIsRequiredAction
  | RedirectWhenTokenExpiredAction
  | RegistrationAction
  | RegistrationErrorAction
  | RegistrationSuccessAction
  | AddAuthenticationMessageAction
  | ResetAuthenticationMessagesAction
  | RetrieveAuthMethodsAction
  | RetrieveAuthMethodsSuccessAction
  | RetrieveAuthMethodsErrorAction;
