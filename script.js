
document.addEventListener('DOMContentLoaded', function() {

    //   часы в заголовке 
    function updateTitleWithTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.title = `${hours}:${minutes}:${seconds}`;
    }
    //  обновление каждую секунду
    setInterval(updateTitleWithTime, 1000);

    //   дата в pop-up 
    const showDateBtn = document.getElementById('show-date-btn');
    if (showDateBtn) {
        showDateBtn.addEventListener('click', function() {
            const currentDate = new Date().toLocaleDateString();
            alert('Сегодня: ' + currentDate);
        });
    }

    //   удаление слов длиннее 7 букв
    const removeLongWordsBtn = document.getElementById('remove-long-words-btn');
    const textInput = document.getElementById('text-input');
    if (removeLongWordsBtn && textInput) {
        removeLongWordsBtn.addEventListener('click', function() {
            const words = textInput.value.split(' ');
            const shortWords = words.filter(word => word.length <= 7);
            const resultText = shortWords.join(' ');
            alert('Результат:\n' + resultText);
        });
    }
});