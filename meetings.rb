def merge_ranges(meeting_times)
  start_times = []
  end_times = []
  current_meeting = {}
  merged_times = []
  current_start_time = 0

  meeting_times.each_with_index do |times, index|
    current_meeting = meeting_times[index]
    start_times << current_meeting[:start_time]
    end_times << current_meeting[:end_time]
  end

  start_times.sort!
  end_times.sort!

  current_start_time = start_times.first
  start_times.each_with_index do |time, index|
    index + 1
    if index == end_times.length - 1
      merged_times << { start_time: current_start_time, end_time: end_times[index] }
    elsif end_times[index] < start_times[index + 1]
      merged_times << { start_time: current_start_time, end_time: end_times[index] }
      current_start_time = start_times[index + 1]
    end
  end

  merged_times
end

merge_ranges(
  [
    { start_time: 0,  end_time: 1 },
    { start_time: 3,  end_time: 5 },
    { start_time: 4,  end_time: 8 },
    { start_time: 10, end_time: 12 },
    { start_time: 9,  end_time: 10 }
  ])
