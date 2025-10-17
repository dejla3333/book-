document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if(name && email && message){
    formMessage.textContent = "✅ پیام شما با موفقیت ارسال شد!";
    formMessage.style.color = "#f0c27b";
    this.reset();
  } else {
    formMessage.textContent = "⚠ لطفاً تمام فیلدها را پر کنید.";
    formMessage.style.color = "#ffdddd";
  }
});
