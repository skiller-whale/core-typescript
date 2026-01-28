import { data } from "./_data.ts";
import type { Event, UserLoginEvent } from "./_types.ts";

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function isValidEvent(event: any) {
  if (typeof event !== "object" || event === null) return false;
  if (typeof event.type !== "string") return false;
  if (typeof event.timestamp !== "number") return false;

  switch (event.type) {
    case "user_login":
      return (
        typeof event.userId === "string" && typeof event.ipAddress === "string"
      );
    case "page_view":
      return typeof event.userId === "string" && typeof event.url === "string";
    case "error":
      return (
        typeof event.message === "string" && typeof event.severity === "string"
      );
    default:
      return false;
  }
}

function isUserLoginEvent(event: Event) {
  return event.type === "user_login";
}

function isRecentUserLoginEvent(event: Event) {
  return (
    isUserLoginEvent(event) && event.timestamp > Date.now() - 1000 * 60 * 5
  );
}

function processUserLoginEvent(event: UserLoginEvent) {
  console.log(
    `User ${event.userId} logged in from ${event.ipAddress} at ${event.timestamp}`
  );
}

function filterAndProcessUserLoginEvents(data: unknown[]) {
  data
    .filter(isValidEvent)
    .filter(isUserLoginEvent)
    // .filter(isRecentUserLoginEvent)
    .forEach(processUserLoginEvent);
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log("Processing user_login events...");
filterAndProcessUserLoginEvents(data);
console.log("Processing complete.");
