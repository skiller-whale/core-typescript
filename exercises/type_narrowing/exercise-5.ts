import { events } from "./_data.ts";
import type {
  ErrorEvent,
  Event,
  PageViewEvent,
  UserLoginEvent,
  UserLogoutEvent,
} from "./_types.ts";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function timestampToISO(timestamp: number): string {
  return new Date(timestamp).toISOString();
}

function errorEventToString(event: ErrorEvent): string {
  return `[${event.severity.toUpperCase()}] ${
    event.message
  } (at ${timestampToISO(event.timestamp)})`;
}

function pageViewEventToString(event: PageViewEvent): string {
  return `User ${event.userId} viewed ${event.url} (at ${timestampToISO(
    event.timestamp
  )})`;
}

function userLoginEventToString(event: UserLoginEvent): string {
  return `User ${event.userId} logged in from ${
    event.ipAddress
  } (at ${timestampToISO(event.timestamp)})`;
}

function userLogoutEventToString(event: UserLogoutEvent): string {
  return `User ${event.userId} logged out (at ${timestampToISO(event.timestamp)})`;
}

function eventToString(event: Event) {
  switch (event.type) {
    case "user_login":
      return userLoginEventToString(event);
    case "page_view":
      return pageViewEventToString(event);
    case "error":
      return errorEventToString(event);
  }
}

function logEvents(events: Event[]) {
  events.forEach((event) => {
    console.log(eventToString(event));
  });
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log("Logging event descriptions...");
logEvents(events);
console.log("Logging complete.");
