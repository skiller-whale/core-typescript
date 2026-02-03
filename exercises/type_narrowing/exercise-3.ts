import type { ErrorEvent, PageViewEvent } from "./_types.ts";

// ----------------------------------------------------------------------
// third-party code (ASSUME YOU CANNOT MODIFY THIS)
// ----------------------------------------------------------------------
function logData(data: Record<string, unknown>) {
  // imagine this sends your data to an external monitoring service
  console.log("Sending data:", data);
}

// ----------------------------------------------------------------------
// business logic
// ----------------------------------------------------------------------
function getUserFromRequest(request: Request) {
  // imagine this checks cookies or authentication headers and returns user info
  return { id: "user123", name: "Ada" };
}

function loggingMiddleware(
  request: Request,
  response: Response,
  next: () => void,
) {
  try {
    next();
    const user = getUserFromRequest(request);
    logData({
      type: "page_view",
      timestamp: Date.now(),
      userId: user.id,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    logData({
      type: "error",
      timestamp: Date.now(),
      message,
    });
  }
}
