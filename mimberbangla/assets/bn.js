// তারিখ বাংলায়: <time class="bn-date" datetime="2026-11-27"> → "২৭ নভেম্বর ২০২৬"
(function () {
  var digits = '০১২৩৪৫৬৭৮৯';
  var months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
  function bn(n) { return String(n).replace(/\d/g, function (d) { return digits[d]; }); }
  document.querySelectorAll('time.bn-date').forEach(function (t) {
    var p = (t.getAttribute('datetime') || '').split('-');
    if (p.length === 3) t.textContent = bn(+p[2]) + ' ' + months[+p[1] - 1] + ' ' + bn(p[0]);
  });
})();
