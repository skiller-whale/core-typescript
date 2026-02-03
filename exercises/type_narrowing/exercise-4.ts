import { events } from "./_data.ts";
import type {
  ErrorEvent,
  Event,
  PageViewEvent,
  UserLoginEvent,
} from "./_types.ts";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function timestampToISO(timestamp: number): string {
  return new Date(timestamp).toISOString();
}

function errorEventToString(event: ErrorEvent): string {
  return `[${event.severity.toUpperCase()}] ${event.message} (at ${
    timestampToISO(event.timestamp)
  })`;
}

function pageViewEventToString(event: PageViewEvent): string {
  return `User ${event.userId} viewed ${event.url} (at ${
    timestampToISO(event.timestamp)
  })`;
}

function userLoginEventToString(event: UserLoginEvent): string {
  return `User ${event.userId} logged in from ${event.ipAddress} (at ${
    timestampToISO(event.timestamp)
  })`;
}

function eventToString(event: Event) {
  if ("ipAddress" in event) {
    return userLoginEventToString(event);
  } else if ("url" in event) {
    return pageViewEventToString(event);
  } else if ("message" in event) {
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
console.log("Logging event strings...");
logEvents(events);
console.log("Logging complete.");
