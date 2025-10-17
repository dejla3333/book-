// داده‌های نویسندگان
const authors = [
  {id:1, name:'سیمین دانشور', birthplace:'تهران، ایران', img:'photos/6264855343846769572.jpg', bio:'نویسنده و مترجم ایرانی.'},
  {id:2, name:'جبران خلیل جبران', birthplace:'بشری، لبنان', img:'photos/6264855343846769574.jpg', bio:'شاعر و نویسنده لبنانی-آمریکایی.'},
  {id:3, name:'فئودور داستایوسکی', birthplace:'مسکو، روسیه', img:'photos/6264855343846769575.jpg', bio:'رمان‌نویس بزرگ روس.'},
  {id:4, name:'نوال السعداوی', birthplace:'قنا، مصر', img:'photos/6264855343846769577.jpg', bio:'پزشک و نویسندهٔ مصری.'},
  {id:5, name:'گابریل گارسیا مارکز', birthplace:'آراکاتاکا، کلمبیا', img:'photos/6264855343846769583.jpg', bio:'نویسندهٔ رئالیسم جادویی.'},
  {id:6, name:'جین آستن', birthplace:'همپشایر، انگلستان', img:'photos/6264855343846769580.jpg', bio:'نویسندهٔ انگلیسی.'},
  {id:7, name:'هاروکی موراکامی', birthplace:'کیوتو، ژاپن', img:'photos/6264855343846769583.jpg', bio:'نویسندهٔ ژاپنی معاصر.'},
  {id:8, name:'رضا براهنی', birthplace:'تهران، ایران', img:'photos/6264855343846769582.jpg', bio:'شاعر و نویسندهٔ ایرانی.'},
];

// گرفتن المان گرید
const grid = document.getElementById('authorsGrid');

// ساخت کارت‌ها
authors.forEach(author => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';

  col.innerHTML = `
    <div class="card h-100">
      <img src="${author.img}" class="card-img-top" alt="تصویر ${author.name}">
      <div class="card-body d-flex flex-column">
        <h3 class="card-title h6 author-name">${author.name}</h3>
        <p class="card-text text-muted small mb-3">محل تولد: ${author.birthplace}</p>
        <button class="btn btn-primary btn-details">جزئیات</button>
      </div>
    </div>
  `;

  grid.appendChild(col);

  // اضافه کردن event listener به دکمه
  const btn = col.querySelector('.btn-details');
  btn.addEventListener('click', () => {
    document.getElementById('modalImage').src = author.img;
    document.getElementById('modalImage').alt = 'تصویر ' + author.name;
    document.getElementById('modalName').textContent = author.name;
    document.getElementById('modalBirthplace').textContent = author.birthplace;
    document.getElementById('modalBio').textContent = author.bio;

    // باز کردن مودال
    const modal = new bootstrap.Modal(document.getElementById('authorModal'));
    modal.show();
  });
});
