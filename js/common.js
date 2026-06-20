// ===== COMMON FUNCTIONS =====

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0 
    }).format(angka);
}

// ===== THEME (auto: 06:00-15:00 light, sisanya dark, kecuali user pernah pilih manual) =====
function caldu_autoTheme() {
    const hour = new Date().getHours();
    return (hour >= 6 && hour < 15) ? 'light' : 'dark';
}

function initThemeToggle(btnId) {
    const saved = localStorage.getItem('caldu-theme') || caldu_autoTheme();
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', function() {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('caldu-theme', next);
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
}

