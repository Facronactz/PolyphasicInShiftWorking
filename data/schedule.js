export const schedules = {
  "shift1-shift1": {
    title: "Morning Shift (06:00–14:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "-", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "18:00–04:30", activity: "Free Time 🕒", sleepDuration: "-", awakeDuration: "10.5" , notes: "" },
      { time: "04:30–05:00", activity: "Power Nap 😴", sleepDuration: "0.5", awakeDuration: "-" , notes: "Energy prep for morning shift" },
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "-", awakeDuration: "1" ,notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Next Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Next Shift) 😪", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Next Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "28",
  },
  "shift1-shift2": {
    title: "Morning Shift (06:00–14:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "-", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "18:00–13:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "19", notes: "" },
      { time: "13:00–14:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "14:00–18:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "4.5",
    totalAwake: "28",
  },
  "shift1-shift3": {
    title: "Morning Shift (06:00–14:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "-", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "18:00–21:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "3", notes: "" },
      { time: "21:00–22:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "06:30–07:00", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
    ],
    totalSleep: "5",
    totalAwake: "7.5"
  },
  "shift1-dayoff": {
    title: "Morning Shift (06:00–14:00) → Day Off",
    data: [
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "4", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "18:00–22:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "22:00–06:00", activity: "Night Sleep", sleepDuration: "8", awakeDuration: "-", notes: "Full rest on day off" },
    ],
    totalSleep: "12",
    totalAwake: "4"
  },
  "shift2-shift1": {
    title: "Afternoon Shift (14:00–22:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "02:00–05:30", activity: "Free Time", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "05:30–06:30", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "06:30–10:00", activity: "Work", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "4.5",
    totalAwake: "10.5"
  },
  "shift2-shift2": {
    title: "Afternoon Shift (14:00–22:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "02:00–13:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "11", notes: "" },
      { time: "13:00–14:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "14:00–18:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "4.5",
    totalAwake: "7.5"
  },
  "shift2-shift3": {
    title: "Afternoon Shift (14:00–22:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "02:00–21:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "19", notes: "" },
      { time: "21:00–22:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "4.5",
    totalAwake: "7.5"
  },
  "shift2-dayoff": {
    title: "Afternoon Shift (14:00–22:00) → Day Off",
    data: [
      { time: "22:30–06:00", activity: "Night Sleep", sleepDuration: "7.5", awakeDuration: "-", notes: "Full rest on day off" },
      { time: "06:00–22:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "16", notes: "" },
    ],
    totalSleep: "7.5",
    totalAwake: "16"
  },
  "shift3-shift1": {
    title: "Night Shift (22:00–06:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "07:00–11:00", activity: "Core Sleep 💤", sleepDuration: "4", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "11:00–18:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "7", notes: "" },
      { time: "18:00–19:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "19:00–22:00", activity: "Work", sleepDuration: "-", awakeDuration: "3", notes: "" },
      { time: "22:00–22:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
    ],
    totalSleep: "5",
    totalAwake: "10"
  },
  "shift3-shift2": {
    title: "Night Shift (22:00–06:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "07:00–11:00", activity: "Core Sleep 💤", sleepDuration: "4", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "11:00–18:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "7", notes: "" },
      { time: "18:00–19:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "19:00–22:00", activity: "Work", sleepDuration: "-", awakeDuration: "3", notes: "" },
      { time: "22:00–22:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
    ],
    totalSleep: "5",
    totalAwake: "10"
  },
  "shift3-shift3": {
    title: "Night Shift (22:00–06:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "07:00–11:00", activity: "Core Sleep 💤", sleepDuration: "4", awakeDuration: "-", notes: "Main sleep after shift" },
      { time: "11:00–18:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "7", notes: "" },
      { time: "18:00–19:00", activity: "Power Nap & Preparation", sleepDuration: "1", awakeDuration: "-", notes: "Energy prep and pre-work preparation" },
      { time: "19:00–22:00", activity: "Work", sleepDuration: "-", awakeDuration: "3", notes: "" },
      { time: "22:00–22:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
    ],
    totalSleep: "5",
    totalAwake: "10"
  },
  "shift3-dayoff": {
    title: "Night Shift (22:00–06:00) → Day Off",
    data: [
      { time: "07:00–15:00", activity: "Night Sleep", sleepDuration: "8", awakeDuration: "-", notes: "Full rest on day off" },
      { time: "15:00–22:00", activity: "Free Time", sleepDuration: "-", awakeDuration: "7", notes: "" },
    ],
    totalSleep: "8",
    totalAwake: "7"
  },
  "dayoff-shift1": {
    title: "Day Off → Morning Shift (06:00–14:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "-", notes: "Full rest on day off" },
      { time: "05:00–06:00", activity: "Preparation", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "7-8",
    totalAwake: "8.5-9.5"
  },
  "dayoff-shift2": {
    title: "Day Off → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "-", notes: "Full rest on day off" },
      { time: "13:00–14:00", activity: "Preparation", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "7-8",
    totalAwake: "8.5-9.5"
  },
  "dayoff-shift3": {
    title: "Day Off → Night Shift (22:00–06:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "-", notes: "Full rest on day off" },
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "-", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "-", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "-", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "-", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "7-8",
    totalAwake: "8.5-9.5"
  },
  "dayoff-dayoff": {
    title: "Day Off → Day Off",
    data: [
      { time: "Flexible", activity: "Full Rest", sleepDuration: "-", awakeDuration: "-", notes: "Day off" },
    ],
    totalSleep: "-",
    totalAwake: "-"
  }
};
