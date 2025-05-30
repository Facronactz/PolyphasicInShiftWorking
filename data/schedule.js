export const schedules = {
  "shift1-shift1": {
    title: "Morning Shift (06:00–14:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "18:00–04:30", activity: "Free Time 🕒", sleepDuration: "0", awakeDuration: "10.5" , notes: "" },
      { time: "04:30–05:00", activity: "Power Nap 😴", sleepDuration: "0.5", awakeDuration: "0" , notes: "Energy prep" },
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1" ,notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Next Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "28",
  },
  "shift1-shift2": {
    title: "Morning Shift (06:00–14:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "18:00–12:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "18.5", notes: "" },
      { time: "12:30–13:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "13:00–14:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Next Shift)", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Next Shift)", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Next Shift)", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "36",
  },
  "shift1-shift3": {
    title: "Morning Shift (06:00–14:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "18:00–23:00", activity: "Free Time", sleepDuration: "0", awakeDuration: "5", notes: "" },
      { time: "23:00–07:00", activity: "Long Sleep", sleepDuration: "8", awakeDuration: "0", notes: "Normal night sleep" },
      { time: "07:00–20:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "13.5", notes: "" },
      { time: "20:30–21:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "13",
    totalAwake: "36"
  },
  "shift1-dayoff": {
    title: "Morning Shift (06:00–14:00) → Day Off",
    data: [
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "14:00–14:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "14:30–18:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "18:00–23:00", activity: "Free Time", sleepDuration: "0", awakeDuration: "5", notes: "" },
      { time: "23:00–07:00", activity: "Night Sleep", sleepDuration: "8", awakeDuration: "0", notes: "Full rest on day off" },
    ],
    totalSleep: "12",
    totalAwake: "14"
  },
  "shift2-shift1": {
    title: "Afternoon Shift (14:00–22:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "13:00–14:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "22:00–22:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "02:00–04:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "2.5", notes: "" },
      { time: "04:30–05:00", activity: "Power Nap 😴", sleepDuration: "0.5", awakeDuration: "0" , notes: "Energy prep" },
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Next Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "20"
  },
  "shift2-shift2": {
    title: "Afternoon Shift (14:00–22:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "13:00–14:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "22:00–22:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "02:00–12:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "10.5", notes: "" },
      { time: "12:30–13:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "13:00–14:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Next Shift)", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Next Shift)", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Next Shift)", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "28"
  },
  "shift2-shift3": {
    title: "Afternoon Shift (14:00–22:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "13:00–14:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "22:00–22:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "02:00–20:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "18.5", notes: "" },
      { time: "20:30–21:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "36"
  },
  "shift2-dayoff": {
    title: "Afternoon Shift (14:00–22:00) → Day Off",
    data: [
      { time: "13:00–14:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Initial Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Initial Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "22:00–22:30", activity: "Go Home 🏠", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "22:30–02:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "02:00–23:00", activity: "Free Time", sleepDuration: "0", awakeDuration: "21", notes: "Optional afternoon sleep" },
      { time: "23:00–07:00", activity: "Night Sleep", sleepDuration: "8", awakeDuration: "0", notes: "Full rest on day off" },
    ],
    totalSleep: "12",
    totalAwake: "30"
  },
  "shift3-shift1": {
    title: "Night Shift (22:00–06:00) → Morning Shift (06:00–14:00)",
    data: [
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "06:00–06:30", activity: "Go Home", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "06:30–10:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "10:00–04:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "18.5", notes: "" },
      { time: "04:30–05:00", activity: "Power Nap 😴", sleepDuration: "0.5", awakeDuration: "0" , notes: "Energy prep" },
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Next Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "36"
  },
  "shift3-shift2": {
    title: "Night Shift (22:00–06:00) → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "06:00–06:30", activity: "Go Home", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "06:30–10:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "10:00–12:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "2.5", notes: "" },
      { time: "12:30–13:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "13:00–14:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Next Shift)", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Next Shift)", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Next Shift)", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "20"
  },
  "shift3-shift3": {
    title: "Night Shift (22:00–06:00) → Night Shift (22:00–06:00)",
    data: [
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "06:00–06:30", activity: "Go Home", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "06:30–10:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "10:00–20:30", activity: "Free Time", sleepDuration: "0", awakeDuration: "10.5", notes: "" },
      { time: "20:30–21:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "5",
    totalAwake: "28"
  },
  "shift3-dayoff": {
    title: "Night Shift (22:00–06:00) → Day Off",
    data: [
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
      { time: "06:00–06:30", activity: "Go Home", sleepDuration: "0", awakeDuration: "0.5", notes: "" },
      { time: "06:30–10:00", activity: "Core Sleep 💤", sleepDuration: "3.5", awakeDuration: "0", notes: "Main sleep after shift" },
      { time: "10:00–23:00", activity: "Free Time", sleepDuration: "0", awakeDuration: "13", notes: "" },
      { time: "23:00–07:00", activity: "Night Sleep", sleepDuration: "8", awakeDuration: "0", notes: "Full rest on day off" },
    ],
    totalSleep: "12",
    totalAwake: "22"
  },
  "dayoff-shift1": {
    title: "Day Off → Morning Shift (06:00–14:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "0", notes: "Full rest on day off" },
      { time: "04:30–05:00", activity: "Power Nap 😴", sleepDuration: "0.5", awakeDuration: "0" , notes: "Energy prep" },
      { time: "05:00–06:00", activity: "Preparation 📚", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "06:00–10:00", activity: "Work (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "10:00–10:30", activity: "Nap at Work (Next Shift) 😪", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "10:30–14:00", activity: "Continue Working (Next Shift) 🧑‍💻", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "8-9",
    totalAwake: "Flexible"
  },
  "dayoff-shift2": {
    title: "Day Off → Afternoon Shift (14:00–22:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "0", notes: "Full rest on day off" },
      { time: "12:30–13:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "13:00–14:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "14:00–18:00", activity: "Work (Next Shift)", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "18:00–18:30", activity: "Nap at Work (Next Shift)", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "18:30–22:00", activity: "Continue Working (Next Shift)", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "8-9",
    totalAwake: "Flexible"
  },
  "dayoff-shift3": {
    title: "Day Off → Night Shift (22:00–06:00)",
    data: [
      { time: "Flexible", activity: "Night Sleep", sleepDuration: "7-8", awakeDuration: "0", notes: "Full rest on day off" },
      { time: "20:30–21:00", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Energy prep" },
      { time: "21:00–22:00", activity: "Preparation", sleepDuration: "0", awakeDuration: "1", notes: "Pre-work preparation" },
      { time: "22:00–02:00", activity: "Work", sleepDuration: "0", awakeDuration: "4", notes: "" },
      { time: "02:00–02:30", activity: "Nap at Work", sleepDuration: "0.5", awakeDuration: "0", notes: "Utilize work break" },
      { time: "02:30–06:00", activity: "Continue Working", sleepDuration: "0", awakeDuration: "3.5", notes: "" },
    ],
    totalSleep: "8-9",
    totalAwake: "Flexible"
  },
  "dayoff-dayoff": {
    title: "Day Off → Day Off",
    data: [
      { time: "23:00–07:00", activity: "Long Sleep", sleepDuration: "8", awakeDuration: "0", notes: "Normal night sleep" },
      { time: "14:00–14:30", activity: "Power Nap", sleepDuration: "0.5", awakeDuration: "0", notes: "Keep polyphasic rhythm" },
    ],
    totalSleep: "8.5",
    totalAwake: "Flexible"
  }
};
