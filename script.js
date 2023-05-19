document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let timeStart = document.getElementById('time-start').value;
    let timeEnd = document.getElementById('time-end').value;
    
    let dateInput = document.getElementById('date');
    let chosenDate = new Date(dateInput.value);

    let today = new Date();
    let now = new Date();
    let nextWeek = new Date();
    today.setDate(today.getDate() - 1);
    nextWeek.setDate(today.getDate() + 7);
    
    if(timeStart >= timeEnd) {
        alert("Время окончания должно быть позже времени начала");
        return;
    }
    
    if(chosenDate < today || chosenDate > nextWeek) {
        alert("Дата должна быть не раньше сегодняшней и не позднее, чем через неделю");
        return;
    }

    if (chosenDate.toDateString() === now.toDateString() && timeStart <= now.toTimeString().slice(0,5)) {
        alert("Время начала не может быть раньше текущего времени");
        return;
    }

    // Здесь можно добавить обработку данных формы
});
