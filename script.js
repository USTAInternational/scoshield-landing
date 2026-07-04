const packageLinks = document.querySelectorAll("[data-package]");
const messageField = document.querySelector("textarea[name='message']");

packageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const packageName = link.dataset.package;
    if (messageField && packageName) {
      messageField.value = `Интересует пакет ${packageName}. Нужен сервер для геодезии, хранения и удаленного доступа.`;
    }
  });
});

document.getElementById("leadForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Заявка SCO Shield");
  const body = encodeURIComponent(
    [
      `Имя: ${form.get("name") || ""}`,
      `Объем: ${form.get("team") || ""}`,
      `Задача: ${form.get("message") || ""}`,
    ].join("\n")
  );
  window.location.href = `mailto:usta.community@gmail.com?subject=${subject}&body=${body}`;
});
