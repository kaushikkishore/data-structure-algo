// Atlassian
// 5 request per socons
// 4/5 cutomers
// true/ false == true allowed false not allowed.
// 4:00 - 4:05 => 04:00

// 04:20-04:25 => 4:20

//
// This object will grow in size in memory
// delete all keys where time is older than 5 minutes.

interface RateLimit {
  key?: string;
  value?: number;
  expiry?: Date;
}

let rateLimit: RateLimit[] = [];

export function canRateLimit(customerId: number): boolean {
  // 5 requests / 1 minutes
  // get the rounded date time
  let key = getRoundDateTime(new Date(), 1);

  let userKey = `${customerId}_${key}`;

  let currentUserDetails = rateLimit.find((e) => e.key === userKey);

  if (currentUserDetails === undefined) {
    currentUserDetails = { key: userKey, value: 0, expiry: new Date() };
    rateLimit.push(currentUserDetails);
  }

  // Check if the rate limit is already exhausted.
  if (currentUserDetails.value! > 5) {
    return false;
  }

  // Increment the key
  currentUserDetails.value! += 1;

  return true;
}

// Cron Job - or before calling the rate limiting function
function cleanup() {
  // Cleanup records which is more than 5+1 minutes old.
  let currentDate = +new Date();
  let nextSixMinutes = currentDate + 6 * 60 * 1000;
  rateLimit = rateLimit.filter((e) => +e.expiry! < +nextSixMinutes);
}

function getRoundDateTime(dateTime: Date, unitInMinutes: number): number {
  let coefficient = 1000 * 60 * unitInMinutes; // 5 minutes in milliseconds
  return +new Date(Math.round(+dateTime / coefficient) * coefficient);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

cleanup();

async function invoke() {
  console.log(`Customer 1 ${canRateLimit(1)}`);
  console.log(`Customer 1 ${canRateLimit(1)}`);
  console.log(`Customer 1 ${canRateLimit(1)}`);
  await sleep(1000 * 60);
  console.log(`Customer 1 ${canRateLimit(1)}`);
  console.log(`Customer 1 ${canRateLimit(1)}`);
  console.log(`Customer 1 ${canRateLimit(1)}`);
  console.log(`Customer 1 ${canRateLimit(1)}`);
}

invoke().then(() => console.log('done'));

// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
// console.log(`Customer 2 ${canRateLimit(2)}`);
