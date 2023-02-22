const TelegramBot = require("node-telegram-bot-api");

const token = TELEGRAM_BOT_TOKEN;
const webUrl = FRONTEND_URL;

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
