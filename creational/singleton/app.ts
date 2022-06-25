import { StatsTracker } from "./stats-tracker";
import { test } from "./test";

let tracker = StatsTracker.instace;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 100;

console.log(`Facebook shares: ${tracker.facebookShares}`);

tracker.facebookShares++;

test(); // 101
