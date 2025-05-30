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
      <div class="flex-row sm:items-center sm:space-x-2 mb-4 hidden md:flex">
        <span class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">${fromShift}</span>
        <span class="text-blue-500 dark:text-blue-400 text-xl sm:text-2xl font-bold mx-0 sm:mx-2 flex">→</span>
        <span class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">${toShift}</span>
      </div>
    `;
    html += `<table id="main-table" class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm rounded-lg overflow-hidden shadow-sm">
      <thead class="bg-gray-100 dark:bg-gray-800">
        <tr>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 rounded-tl-lg">Time</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300">Activity</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 hidden md:table-cell">Sleep Duration</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 hidden md:table-cell">Awake Duration</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 md:hidden">Sleep</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 md:hidden">Awake</th>
          <th class="font-bold px-2 md:px-4 py-2 text-left text-gray-600 dark:text-gray-300 rounded-tr-lg">Notes</th>
        </tr>
      </thead>
      <tbody>`;
    let totalSleepDuration = 0;
    let totalAwakeDuration = 0;
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
      const sleepDuration = row.sleepDuration === "0" ? "-" : row.sleepDuration <= 1 ? row.sleepDuration + " hr" : row.sleepDuration + " hrs";
      const awakeDuration = row.awakeDuration === "0" ? "-" : row.awakeDuration <= 1 ? row.awakeDuration + " hr" : row.awakeDuration + " hrs";
      totalSleepDuration += parseFloat(row.sleepDuration);
      totalAwakeDuration += parseFloat(row.awakeDuration);
      html += `<tr class="${rowClass}">
        <td class="px-2 md:px-4 py-2 font-mono">${row.time}</td>
        <td class="px-2 md:px-4 py-2 font-semibold">${row.activity}</td>
        <td class="px-2 md:px-4 py-2 font-mono hidden md:table-cell">${sleepDuration}</td>
        <td class="px-2 md:px-4 py-2 font-mono hidden md:table-cell">${awakeDuration}</td>
        <td class="px-2 md:px-4 py-2 font-mono md:hidden">${row.sleepDuration}</td>
        <td class="px-2 md:px-4 py-2 font-mono md:hidden">${row.awakeDuration}</td>
        <td class="px-2 md:px-4 py-2 italic">${row.notes}</td>
      </tr>`;
    });
    html += `<tr class="bg-gray-50 dark:bg-gray-800 font-semibold">
        <td class="px-2 md:px-4 py-2 rounded-bl-lg">Total Duration</td>
        <td></td>
        <td class="px-2 md:px-4 py-2 font-mono">${schedule.totalSleep} / ${totalSleepDuration} hrs</td>
        <td class="px-2 md:px-4 py-2 font-mono">${schedule.totalAwake} / ${totalAwakeDuration} hrs</td>
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
    localStorage.setItem('from', from);
    const to = shiftToSelect.value;
    localStorage.setItem('to', to);
    const key = `${from}-${to}`;
    if (schedules[key]) {
      renderSchedule(key);
      localStorage.setItem('selectedSchedule', key);
    } else {
      scheduleContainer.innerHTML = '<p class="text-red-600">Schedule not found for selected shifts.</p>';
    }
  }

  shiftFromSelect.addEventListener('change', renderSelectedSchedule);
  shiftToSelect.addEventListener('change', renderSelectedSchedule);

  // Set default selections and render
  // shiftFromSelect.value = 'shift1';
  // shiftToSelect.value = 'shift1';
  shiftFromSelect.value = localStorage.getItem('from') || 'shift1';
  shiftToSelect.value = localStorage.getItem('to') || 'shift1';
  renderSelectedSchedule();
}

function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle-floating');
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

function initSettings() {
  const settingsButton = document.getElementById('settings-button');
  const settingsPanel = document.getElementById('settings-panel');
  const textSizeSelect = document.getElementById('text-size-select');
  const rootElement = document.documentElement;
  let tableElement = document.getElementById('main-table')

  setTimeout(() => {
    tableElement = document.getElementById('main-table')
    console.log(tableElement)
  }, 1000)

  // Toggle settings panel visibility
  settingsButton.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
  });

  // Handle text size change
  textSizeSelect.addEventListener('change', (event) => {
    const textSize = event.target.value;
    rootElement.style.fontSize = textSize === 'small' ? '14px' : textSize === 'medium' ? '16px' : '18px';
    localStorage.setItem('textSize', textSize);
  });

  // Load saved preferences
  const savedTextSize = localStorage.getItem('textSize') || 'medium';
  textSizeSelect.value = savedTextSize;
  rootElement.style.fontSize = savedTextSize === 'small' ? '14px' : savedTextSize === 'medium' ? '16px' : '18px';
}

// Initialize default view
export function init() {
  initDarkMode();
  initNavigation();
  renderSchedule(localStorage.getItem('selectedSchedule') || 'shift1-shift1');
  initSettings();
}
