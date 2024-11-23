document.getElementById('testButton').addEventListener('click', function() {
    // Отправка пользовательского события в dataLayer
    dataLayer.push({'event': 'button_click', 'button_id': 'testButton'});
    alert('Кнопка нажата!');
});

document.getElementById('testLink').addEventListener('click', function() {
    // Отправка пользовательского события в dataLayer
    dataLayer.push({'event': 'link_click', 'link_id': 'testLink'});
});
