document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // بررسی ساده ورود
  if (username === "admin" && password === "1234") {
    message.textContent = "ورود موفق! در حال انتقال...";
    message.style.color = "green";

    // ذخیره وضعیت ورود در مرورگر
    sessionStorage.setItem("loggedIn", "true");

    // بعد از ۱ ثانیه برو به صفحه اصلی
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    message.textContent = "نام کاربری یا رمز عبور اشتباه است.";
    message.style.color = "red";
  }
});
