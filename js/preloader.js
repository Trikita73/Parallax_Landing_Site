document.addEventListener('DOMContentLoaded', function() {
	//Получаем элемент прелодера
	const loader = document.querySelector('.loader');

	// Функция для скрытия прелодера
	function hideLoader() {
		loader.style.display = 'none';
	}

	// Проверяем, загрузилось ли все ресурсы
	window.addEventListener('load', function() {
		// Время для правного перехода
		setTimeout(hideLoader, 500);
	});

	// Доп проверка DOM элементов
	if (document.readyState === 'complete') {
		setTimeout(hideLoader, 500);
	}
});