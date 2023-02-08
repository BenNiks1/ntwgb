const TelegramBot = require("node-telegram-bot-api");

const token = "5853943922:AAEu1ZhEfWnx5cvVyRZWsVfWBEjik4j-UVQ";
const webUrl = "https://twa.katokdoes.art/";

const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Инлайн кнопка для веб бота", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Открыть",
              web_app: { url: webUrl },
            },
          ],
        ],
      },
    });
  }
});
