function mergeRanges(meetingTimes) {
  let startTimes = [];
  let endTimes = [];
  let currentMeeting = {};
  let mergedTimes = [];
  let currentStartTime = 0;

  for (var time in meetingTimes) {
    currentMeeting = meetingTimes[time];
    startTimes.push(currentMeeting['startTime']);
    endTimes.push(currentMeeting['endTime']);
  }

  startTimes.sort(function(a,b) { return a - b; });
  endTimes.sort(function(a,b) { return a - b; });

  currentStartTime = startTimes[0];
  for (var i = 0; i < startTimes.length; i++) {
    if (endTimes[i] < startTimes[i + 1]) {
      mergedTimes.push({startTime: currentStartTime, endTime: endTimes[i]});
      currentStartTime = startTimes[i + 1];
    } else if (i === endTimes.length - 1) {
      mergedTimes.push({startTime: currentStartTime, endTime: endTimes[i]});
    }
  }

  return mergedTimes;
}

mergeRanges(
  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ])
