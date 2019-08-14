// Для асинхронной работы используется пакет micro.
const {json} = require('micro');
const { json } = require('micro');

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {

    // Из запроса извлекаются свойства request, session и version.
    const {request, session, version} = await json(req);
    const { request, session, version } = await json(req);

    // В тело ответа вставляются свойства version и session из запроса.
    // Подробнее о формате запроса и ответа — в разделе Протокол работы навыка.
