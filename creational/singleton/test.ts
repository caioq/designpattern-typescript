import { StatsTracker } from "./stats-tracker";

export function test() {
  let tracker = StatsTracker.instace;
  console.log(`Facebook shares: ${tracker.facebookShares}`);
}
