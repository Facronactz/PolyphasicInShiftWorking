import { schedules } from '../data/schedule.js';

const scheduleContainer = document.getElementById('schedule-container');

function renderSchedule(key) {
  const schedule = schedules[key];
  if (!schedule) {
    scheduleContainer.innerHTML = '<p class="text-red-600">Schedule not found.</p>';
    return;
  }
  scheduleContainer.style.opacity = 0;
  setTimeout(() => {
    // Extract from and to shift names from title for better UI
    const titleParts = schedule.title.split('→').map(part => part.trim());
    const fromShift = titleParts[0];
    const toShift = titleParts[1];

    let html = `
      <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-4">
        <span class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">${fromShift}</span>
        <span class="text-blue-500 dark:text-blue-400 text-xl sm:text-2xl font-bold mx-0 sm:mx-2 flex">
          <span class="sm:hidden block">↓</span>
          <span class="invisible sm:visible">→</span>
        </span>
        <span class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">${toShift}</span>
      </div>
    `;
    html += `<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-xs md:text-sm rounded-lg overflow-hidden shadow-sm">
      <thead class="bg-gray-100 dark:bg-gray-700">
        <tr>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 rounded-tl-lg">Time</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300">Activity</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300">Sleep Duration</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300">Awake Duration</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 rounded-tr-lg">Notes</th>
        </tr>
      </thead>
      <tbody>`;
    schedule.data.forEach(row => {
      let rowClass = "border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200";
      if (row.activity.toLowerCase().includes("sleep") || row.activity.toLowerCase().includes("nap")) {
        rowClass += " bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-300";
      } else if (row.activity.toLowerCase().includes("work")) {
        rowClass += " bg-yellow-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-300";
      } else if (row.activity.toLowerCase().includes("free")) {
        rowClass += " bg-green-50 dark:bg-green-900 text-green-900 dark:text-green-300";
      } else {
        rowClass += " bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-300";
      }
      html += `<tr class="${rowClass}">
        <td class="px-2 md:px-4 py-2 font-mono">${row.time}</td>
        <td class="px-2 md:px-4 py-2 font-semibold">${row.activity}</td>
        <td class="px-2 md:px-4 py-2 font-mono">${row.sleepDuration}</td>
        <td class="px-2 md:px-4 py-2 font-mono">${row.awakeDuration}</td>
        <td class="px-2 md:px-4 py-2 italic">${row.notes}</td>
      </tr>`;
    });
    html += `<tr class="bg-gray-50 dark:bg-gray-700 font-semibold">
        <td class="px-2 md:px-4 py-2 rounded-bl-lg">Total Duration</td>
        <td></td>
        <td class="px-2 md:px-4 py-2 font-mono">${schedule.totalSleep}</td>
        <td class="px-2 md:px-4 py-2 font-mono">${schedule.totalAwake}</td>
        <td></td>
      </tr>`;
    html += `</tbody></table>`;
    scheduleContainer.innerHTML = html;
    scheduleContainer.style.opacity = 1;
  }, 200);
}

function initNavigation() {
  const shiftFromSelect = document.getElementById('shift-from');
  const shiftToSelect = document.getElementById('shift-to');

  // Extract unique shift names from schedule keys
  const shiftNames = new Set();
  Object.keys(schedules).forEach(key => {
    const [from, to] = key.split('-');
    shiftNames.add(from);
    shiftNames.add(to);
  });

  // Map shift keys to readable names (assuming shift1=Morning, shift2=Afternoon, shift3=Night, dayoff=Day Off)
  const shiftNameMap = {
    shift1: 'Morning Shift (06:00–14:00)',
    shift2: 'Afternoon Shift (14:00–22:00)',
    shift3: 'Night Shift (22:00–06:00)',
    dayoff: 'Day Off'
  };

  // Populate both selects
  shiftNames.forEach(shiftKey => {
    const optionFrom = document.createElement('option');
    optionFrom.value = shiftKey;
    optionFrom.textContent = shiftNameMap[shiftKey] || shiftKey;
    shiftFromSelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = shiftKey;
    optionTo.textContent = shiftNameMap[shiftKey] || shiftKey;
    shiftToSelect.appendChild(optionTo);
  });

  function renderSelectedSchedule() {
    const from = shiftFromSelect.value;
    const to = shiftToSelect.value;
    const key = `${from}-${to}`;
    if (schedules[key]) {
      renderSchedule(key);
    } else {
      scheduleContainer.innerHTML = '<p class="text-red-600">Schedule not found for selected shifts.</p>';
    }
  }

  shiftFromSelect.addEventListener('change', renderSelectedSchedule);
  shiftToSelect.addEventListener('change', renderSelectedSchedule);

  // Set default selections and render
  shiftFromSelect.value = 'shift1';
  shiftToSelect.value = 'shift1';
  renderSelectedSchedule();
}

function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const rootElement = document.documentElement;

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    rootElement.classList.add('dark');
  }

  darkModeToggle.addEventListener('click', () => {
    rootElement.classList.toggle('dark');
    if (rootElement.classList.contains('dark')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
}
// Initialize default view
export function init() {
  initDarkMode();
  initNavigation();
  renderSchedule('shift1-shift1');
}
