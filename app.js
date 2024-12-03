const monthNames = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  
  let currentDate = new Date(); // Поточна дата
  
  function renderCalendar(date) {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonth = document.getElementById('currentMonth');
  
    // Очистити сітку
    calendarGrid.innerHTML = '';
  
    // Встановити місяць і рік
    const year = date.getFullYear();
    const month = date.getMonth();
    currentMonth.textContent = `${monthNames[month]} ${year}`;
  
    // Додати заголовки днів тижня
    dayNames.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day day-header';
      dayHeader.textContent = day;
      calendarGrid.appendChild(dayHeader);
    });
  
    // Знайти перший день місяця та кількість днів у місяці
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    // Визначити зсув для перших днів місяця
    const offset = (firstDay + 6) % 7;
  
    // Додати порожні клітинки перед першим днем місяця
    for (let i = 0; i < offset; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'day';
      calendarGrid.appendChild(emptyCell);
    }
  
    // Додати дні місяця
    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'day day-number';
      dayCell.textContent = day;
  
      // Виділити сьогоднішній день
      if (
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dayCell.classList.add('today');
      }
  
      calendarGrid.appendChild(dayCell);
    }
  }
  
  // Події для кнопок "Назад" і "Вперед"
  document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });
  
  document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });
  
  // Початковий рендер
  renderCalendar(currentDate);
  