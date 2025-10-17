// اگر کاربر هنوز وارد سیستم (login) نشده باشد، او را به صفحه لاگین هدایت می‌کند
if (!sessionStorage.getItem("loggedIn")) {
  window.location.href = "log.html";
}

// وقتی کل محتوای صفحه بارگذاری شد
window.addEventListener("DOMContentLoaded", function() {
  // عناصر مربوط به نمایش سبد خرید و مجموع
  const cartItems = document.getElementById("cart-items");
  const totalItems = document.getElementById("total-items");
  const totalPriceEl = document.getElementById("total-price");

  // ایجاد آرایه خالی برای نگهداری آیتم‌های سبد خرید
  let cart = [];
  // متغیر برای جمع کل قیمت‌ها
  let total = 0;

  // تابع برای تبدیل اعداد فارسی به انگلیسی (مثلاً "۱۲۳" به "123")
  function persianToEnglishNumber(str) {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹";
    const englishNumbers = "0123456789";
    return str.split("").map(ch => {
      const index = persianNumbers.indexOf(ch);
      return index >= 0 ? englishNumbers[index] : ch;
    }).join("");
  }

  // برای همه‌ی دکمه‌های خرید کتاب‌ها
  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      // پیدا کردن عنصر پدر (کتاب مربوطه)
      const book = btn.parentElement;
      // گرفتن عنوان کتاب
      const title = book.querySelector("h4").textContent;

      // گرفتن قیمت از داخل عنصر با کلاس price
      let priceText = book.querySelector(".price").textContent;

      // تبدیل اعداد فارسی به انگلیسی
      priceText = persianToEnglishNumber(priceText);

      // حذف کاراکترهای غیرعددی (مثلاً واحد پول یا فاصله‌ها)
      priceText = priceText.replace(/[^0-9]/g, "");

      // تبدیل به عدد صحیح
      const price = parseInt(priceText) || 0;

      // اضافه کردن کتاب به آرایه سبد خرید
      cart.push({title, price});
      // اضافه کردن قیمت به جمع کل
      total += price;

      // بروزرسانی لیست آیتم‌ها در سبد خرید
      cartItems.innerHTML = "";
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.title + " - " + item.price.toLocaleString() + " افغانی";
        cartItems.appendChild(li);
      });

      // نمایش تعداد آیتم‌ها و جمع کل قیمت
      totalItems.textContent = "تعداد: " + cart.length;
      totalPriceEl.textContent = "جمع کل: " + total.toLocaleString() + " افغانی";

      // نمایش پیام تأیید برای اضافه شدن کتاب
      alert(title + " به سبد خرید اضافه شد!");
    });
  });
});

