// Файл для демонстрации работы ESLint

function greetUser(username) {
    const greetingMessage = "Добро пожаловать"; 
    let unusedVarExample; 

    if (username == "admin") { 
        console.log(greetingMessage + ", администратор!");
    } else {
        console.log(greetingMessage + ", " + username + "!");
    }
    // console.log(nonExistentVar); // Это вызовет ошибку ReferenceError во время выполнения, ESLint тоже может поймать (no-undef)
}

function complexCalculation() {
    let result = 0;
    for (let i = 0; i < 5; i++) {
        result += i;
    }
    return result;
    
    result *= 2; 
    console.log("Этот код никогда не выполнится, результат:", result);
}

function setupConfiguration() {
    let configValue = "начальное значение";
    console.log("Конфигурация:", configValue);
    configValue = "новое значение"; 
    console.log("Обновленная конфигурация:", configValue);
}

greetUser("Пользователь");
greetUser("admin");
console.log("Результат сложного вычисления:", complexCalculation());
setupConfiguration();

document.getElementById('actionButton').addEventListener('click', () => {
    console.log('Кнопка "Выполнить действие" была нажата.');
    alert('Действие выполнено!');
});

console.log("Скрипт успешно загружен и выполнен.");
// Для обсуждения "ложноположительного" срабатывания:
// Если бы у нас было правило no-console, оно бы отметило все console.log,
// что в данном учебном проекте не является ошибкой, а инструментом отладки.