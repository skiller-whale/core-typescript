import { data } from "./_data.ts";
import type { Event } from "./_types.ts";

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

function checkAndLogValidity(event: unknown, index: number) {
  if (isValidEvent(event)) {
    console.log(`✓ Event ${index} is valid.`);
  } else {
    console.log(`✗ Event ${index} is invalid.`);
  }
}

function validateAllEvents(events: unknown[]) {
  events.forEach(checkAndLogValidity);
}

// ----------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------
console.log("Validating events...");
validateAllEvents(data);
console.log("Validation complete.");
