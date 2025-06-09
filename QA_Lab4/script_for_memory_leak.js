// Глобальный массив для хранения "утекающих" данных и ссылок
window.leakyReferences = [];
let elementCounter = 0;

function createLeakyObjectAndElement() {
    elementCounter++;
    const newDiv = document.createElement('div');
    newDiv.className = 'leaky-element';
    newDiv.textContent = `Элемент #${elementCounter}. Кликни меня!`;

    // 1. Создаем большой объект данных (имитация)
    // Каждый такой массив будет занимать заметное место в памяти.
    const largeDataObject = new Array(100000).fill(Math.random().toString() + " - " + Date.now());

    // 2. Создаем обработчик события, который замыкает largeDataObject
    const eventHandler = function() {
        // Этот console.log использует largeDataObject,
        // поэтому largeDataObject останется в памяти, пока существует eventHandler.
        console.log(`Обработан клик на элементе #${this.dataset.id}, первые данные: ${largeDataObject[0]}`);
        // В реальном приложении здесь могла бы быть сложная логика, использующая largeDataObject
    };

    // Добавляем атрибут для идентификации, если нужно (хотя this внутри обработчика и так будет newDiv)
    newDiv.dataset.id = elementCounter;

    // 3. Привязываем обработчик к элементу
    newDiv.addEventListener('click', eventHandler);

    // Добавляем элемент в DOM
    document.getElementById('container').appendChild(newDiv);

    // 4. Имитация утечки: сохраняем ссылки в глобальном объекте
    // Даже если бы мы удалили newDiv из DOM (`newDiv.remove()`),
    // но забыли бы удалить eventHandler (`newDiv.removeEventListener('click', eventHandler)`),
    // и если бы eventHandler был где-то еще доступен (например, через замыкание в другом объекте),
    // largeDataObject мог бы утечь.
    // Здесь мы делаем утечку более явной, сохраняя все в глобальном массиве.
    // Это гарантирует, что сборщик мусора не сможет очистить эти объекты.
    window.leakyReferences.push({
        element: newDiv,
        data: largeDataObject,
        handler: eventHandler
    });

    console.log(`Создан элемент #${elementCounter} с большим объектом данных. Общее количество ссылок: ${window.leakyReferences.length}`);
}

document.getElementById('createElementButton').addEventListener('click', createLeakyObjectAndElement);

console.log("Скрипт для демонстрации утечки памяти загружен. Нажимайте кнопку 'Создать элемент'.");