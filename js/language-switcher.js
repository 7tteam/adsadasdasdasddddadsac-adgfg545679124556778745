// نظام تبديل اللغات المحسن
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'ar';
        this.init();
    }

    init() {
        this.setupLanguageButton();
        this.applyLanguage(this.currentLang);
        this.setupTypedText();
    }

    setupLanguageButton() {
        // إنشاء زر تبديل اللغة إذا لم يكن موجوداً
        let langButton = document.getElementById('langToggle');
        if (!langButton) {
            langButton = document.createElement('button');
            langButton.id = 'langToggle';
            langButton.className = 'language-toggle-btn';
            langButton.innerHTML = '<span id="langText">EN</span>';
            
            // إضافة الزر إلى الهيدر
            const navbar = document.querySelector('.navbar-nav');
            if (navbar) {
                const li = document.createElement('li');
                li.className = 'nav-item';
                li.appendChild(langButton);
                navbar.appendChild(li);
            }
        }

        langButton.addEventListener('click', () => this.toggleLanguage());
        this.updateLanguageButton();
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(this.currentLang);
        localStorage.setItem('preferredLanguage', this.currentLang);
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.body.className = lang === 'ar' ? 'rtl-lang' : 'ltr-lang';
        
        // تحديث جميع النصوص
        this.updateAllTexts();
        
        // تحديث زر اللغة
        this.updateLanguageButton();
        
        // تحديث النص المتحرك
        this.updateTypedText();
        
        // تحديث placeholders
        this.updatePlaceholders();
        
        // إطلاق حدث تغيير اللغة
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
    }

    updateAllTexts() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });
    }

    updateLanguageButton() {
        const langText = document.getElementById('langText');
        if (langText) {
            langText.textContent = translations[this.currentLang].language;
        }
    }

    updatePlaceholders() {
        const elements = document.querySelectorAll('[data-translate-placeholder]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[this.currentLang] && translations[this.currentLang][key]) {
                element.placeholder = translations[this.currentLang][key];
            }
        });
    }

    setupTypedText() {
        // إعداد النص المتحرك
        if (typeof $.fn.typed !== 'undefined') {
            this.updateTypedText();
        }
    }

    updateTypedText() {
        const typedElement = document.getElementById('typed');
        if (typedElement && typeof $.fn.typed !== 'undefined') {
            // إيقاف النص المتحرك الحالي
            $(typedElement).typed('destroy');
            
            // بدء النص المتحرك الجديد
            const typedStrings = [
                translations[this.currentLang].heroTitle1,
                translations[this.currentLang].heroTitle2,
                translations[this.currentLang].heroTitle3
            ];
            
            $(typedElement).typed({
                strings: typedStrings,
                typeSpeed: 100,
                startDelay: 0,
                backSpeed: 60,
                backDelay: 2000,
                loop: true,
                cursorChar: "|",
                contentType: 'html'
            });
        }
    }

    // دالة للحصول على النص المترجم
    getText(key) {
        return translations[this.currentLang] && translations[this.currentLang][key] 
            ? translations[this.currentLang][key] 
            : key;
    }

    // دالة للحصول على اللغة الحالية
    getCurrentLanguage() {
        return this.currentLang;
    }

    // دالة لتحديث نص معين
    updateText(selector, key) {
        const element = document.querySelector(selector);
        if (element && translations[this.currentLang] && translations[this.currentLang][key]) {
            element.textContent = translations[this.currentLang][key];
        }
    }
}

// تهيئة نظام اللغات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    window.languageSwitcher = new LanguageSwitcher();
});

// دالة مساعدة للوصول السريع للترجمة
function t(key) {
    return window.languageSwitcher ? window.languageSwitcher.getText(key) : key;
}