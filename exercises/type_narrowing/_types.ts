export type UserLoginEvent = {
  type: "user_login";
  timestamp: number;
  userId: string;
  ipAddress: string;
};

export type UserLogoutEvent = {
  type: "user_logout";
  timestamp: number;
  userId: string;
};

export type PageViewEvent = {
  type: "page_view";
  timestamp: number;
  userId: string;
  url: string;
};

export type ErrorEvent = {
  type: "error";
  timestamp: number;
  message: string;
  severity: string;
};

export type Event =
  | UserLoginEvent
  | UserLogoutEvent
  | PageViewEvent
  | ErrorEvent;
