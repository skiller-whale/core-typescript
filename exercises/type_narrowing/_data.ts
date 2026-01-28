import type { Event } from "./_types";

export const data: unknown[] = [
  {
    type: "user_login",
    userId: "user_123",
    timestamp: 1704067200000,
    ipAddress: "192.168.1.1",
  },
  {
    type: "error",
    timestamp: 1704067320000,
    message: "Database connection timeout",
    severity: "high",
  },
  {
    type: "error",
    timestamp: "1704067380000",
    message: "System failure - immediate attention required",
    severity: "critical",
  },
  {
    type: "user_logout",
    userId: "user_123",
    timestamp: 1704067440000,
  },
  {
    type: "page_view",
    userId: "user_789",
    timestamp: 1704067560000,
  },
  {
    type: "user_login",
    userId: "user_789",
    timestamp: 1704067620000,
  },
  {
    type: "page_view",
    userId: "user_123",
    timestamp: 1704067680000,
    url: "/checkout",
  },
  {
    type: "error",
    timestamp: 1704067740000,
    message: "Invalid input parameter",
    severity: "low",
  },
  {
    type: "error",
    timestamp: 1704067860000,
    message: "Rate limit exceeded",
    severity: "medium",
  },
  {
    type: "page_view",
    userId: "user_456",
    timestamp: 1704067920000,
    url: "/account/settings",
  },
  {
    type: "user_logout",
    userId: 789,
    timestamp: 1704067980000,
  },
  {
    type: "user_login",
    userId: "user_999",
    timestamp: 1704068040000,
    ipAddress: "172.16.0.10",
  },
  {
    type: "page_view",
    userId: "user_999",
    timestamp: 1704068100000,
    url: "/home",
  },
  {
    type: "user_logout",
    userId: "user_456",
    timestamp: 1704068220000,
  },
];

export const events: Event[] = [
  {
    type: "user_login",
    userId: "user_123",
    timestamp: 1704067200000,
    ipAddress: "192.168.1.1",
  },
  {
    type: "error",
    timestamp: 1704067320000,
    message: "Database connection timeout",
    severity: "high",
  },
  {
    type: "error",
    timestamp: 1704067380000,
    message: "System failure - immediate attention required",
    severity: "critical",
  },
  {
    type: "user_logout",
    userId: "user_123",
    timestamp: 1704067440000,
  },
  {
    type: "page_view",
    userId: "user_789",
    timestamp: 1704067560000,
    url: "/products/laptops",
  },
  {
    type: "user_login",
    userId: "user_789",
    timestamp: 1704067620000,
    ipAddress: "10.0.0.5",
  },
  {
    type: "page_view",
    userId: "user_123",
    timestamp: 1704067680000,
    url: "/checkout",
  },
  {
    type: "error",
    timestamp: 1704067740000,
    message: "Invalid input parameter",
    severity: "low",
  },
  {
    type: "error",
    timestamp: 1704067860000,
    message: "Rate limit exceeded",
    severity: "medium",
  },
  {
    type: "page_view",
    userId: "user_456",
    timestamp: 1704067920000,
    url: "/account/settings",
  },
  {
    type: "user_logout",
    userId: "user_789",
    timestamp: 1704067980000,
  },
  {
    type: "user_login",
    userId: "user_999",
    timestamp: 1704068040000,
    ipAddress: "172.16.0.10",
  },
  {
    type: "page_view",
    userId: "user_999",
    timestamp: 1704068100000,
    url: "/home",
  },
  {
    type: "user_logout",
    userId: "user_456",
    timestamp: 1704068220000,
  },
];
