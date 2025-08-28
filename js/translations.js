// نظام الترجمة الشامل للموقع
const translations = {
    ar: {
        // Header & Navigation
        home: "الرئيسية",
        about: "عن التطبيق", 
        services: "الخدمات",
        features: "المميزات",
        pricing: "الأسعار",
        reviews: "التقييمات",
        blog: "المدونة",
        contact: "اتصل بنا",
        download: "تحميل التطبيق",
        language: "EN",
        
        // Hero Section
        heroTitle1: "دليلك الشامل لأفضل المطاعم",
        heroTitle2: "اكتشف واطلب واستمتع", 
        heroTitle3: "مجاني تماماً بدون رسوم مخفية",
        heroDescription: "اكتشف عالم من النكهات والأطعمة اللذيذة في منطقتك. حمل التطبيق الآن وابدأ رحلتك الطعامية!",
        downloadNow: "حمل الآن",
        watchVideo: "شاهد الفيديو",
        
        // About Section
        aboutTitle: "عن التطبيق",
        aboutSubtitle: "دليلك الموثوق للطعام",
        aboutDescription: "نحن نقدم لك أفضل تجربة لاكتشاف المطاعم والمقاهي في منطقتك مع إمكانية الطلب والتوصيل السريع",
        
        // Features Section
        featuresTitle: "مميزات التطبيق",
        featuresSubtitle: "لماذا تختارنا؟",
        feature1Title: "سهولة الاستخدام",
        feature1Description: "واجهة بسيطة وسهلة للجميع",
        feature2Title: "توصيل سريع",
        feature2Description: "توصيل في أقل من 30 دقيقة",
        feature3Title: "دفع آمن",
        feature3Description: "طرق دفع متعددة وآمنة",
        
        // Services Section
        servicesTitle: "خدماتنا",
        servicesSubtitle: "ما نقدمه لك",
        service1Title: "اكتشف المطاعم",
        service1Description: "تصفح آلاف المطاعم والمقاهي في منطقتك",
        service2Title: "اطلب بسهولة",
        service2Description: "اطلب طعامك المفضل بضغطة واحدة",
        service3Title: "تتبع الطلب",
        service3Description: "تابع طلبك لحظة بلحظة حتى وصوله",
        
        // How It Works
        howItWorksTitle: "كيف يعمل التطبيق",
        howItWorksSubtitle: "خطوات بسيطة",
        step1Title: "حمل التطبيق",
        step1Description: "حمل التطبيق من متجر التطبيقات",
        step2Title: "اختر المطعم",
        step2Description: "تصفح واختر المطعم المفضل لديك",
        step3Title: "اطلب واستمتع",
        step3Description: "اطلب طعامك واستمتع بالطعم الرائع",
        
        // Reviews Section
        reviewsTitle: "آراء العملاء",
        reviewsSubtitle: "ماذا يقول عملاؤنا",
        
        // Pricing Section
        pricingTitle: "خطط الأسعار",
        pricingSubtitle: "اختر الخطة المناسبة لك",
        monthly: "شهرياً",
        yearly: "سنوياً",
        basicPlan: "الخطة الأساسية",
        proPlan: "الخطة المتقدمة",
        premiumPlan: "الخطة المميزة",
        free: "مجاني",
        selectPlan: "اختر الخطة",
        
        // Footer
        footerTitle: "حمل التطبيق",
        footerDescription: "احصل على أفضل تجربة طعام",
        newsletterTitle: "اشترك في النشرة الإخبارية",
        newsletterDescription: "كن أول من يعرف عن أحدث المطاعم والعروض الخاصة",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subscribeNote: "بالضغط على إرسال أنت توافق على استقبال الرسائل",
        allRightsReserved: "© جميع الحقوق محفوظة 2024",
        poweredBy: "مدعوم من",
        
        // Contact
        contactTitle: "اتصل بنا",
        contactSubtitle: "نحن هنا لمساعدتك",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        
        // Blog
        blogTitle: "المدونة",
        blogSubtitle: "أحدث الأخبار والمقالات",
        readMore: "اقرأ المزيد",
        
        // Common
        learnMore: "اعرف المزيد",
        getStarted: "ابدأ الآن",
        viewAll: "عرض الكل",
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        success: "تم بنجاح",
        close: "إغلاق",
        save: "حفظ",
        cancel: "إلغاء",
        yes: "نعم",
        no: "لا",
        
        // Statistics
        happyCustomers: "عميل سعيد",
        restaurants: "مطعم",
        deliveries: "عملية توصيل",
        cities: "مدينة"
    },
    
    en: {
        // Header & Navigation
        home: "Home",
        about: "About",
        services: "Services", 
        features: "Features",
        pricing: "Pricing",
        reviews: "Reviews",
        blog: "Blog",
        contact: "Contact",
        download: "Download App",
        language: "عر",
        
        // Hero Section
        heroTitle1: "Your complete guide to the best restaurants",
        heroTitle2: "Discover, order and enjoy",
        heroTitle3: "Completely free with no hidden fees",
        heroDescription: "Discover a world of flavors and delicious food in your area. Download the app now and start your culinary journey!",
        downloadNow: "Download Now",
        watchVideo: "Watch Video",
        
        // About Section
        aboutTitle: "About App",
        aboutSubtitle: "Your trusted food guide",
        aboutDescription: "We provide you with the best experience to discover restaurants and cafes in your area with fast ordering and delivery",
        
        // Features Section
        featuresTitle: "App Features",
        featuresSubtitle: "Why choose us?",
        feature1Title: "Easy to Use",
        feature1Description: "Simple and easy interface for everyone",
        feature2Title: "Fast Delivery",
        feature2Description: "Delivery in less than 30 minutes",
        feature3Title: "Secure Payment",
        feature3Description: "Multiple and secure payment methods",
        
        // Services Section
        servicesTitle: "Our Services",
        servicesSubtitle: "What we offer you",
        service1Title: "Discover Restaurants",
        service1Description: "Browse thousands of restaurants and cafes in your area",
        service2Title: "Order Easily",
        service2Description: "Order your favorite food with one click",
        service3Title: "Track Order",
        service3Description: "Track your order moment by moment until it arrives",
        
        // How It Works
        howItWorksTitle: "How It Works",
        howItWorksSubtitle: "Simple steps",
        step1Title: "Download App",
        step1Description: "Download the app from the app store",
        step2Title: "Choose Restaurant",
        step2Description: "Browse and choose your favorite restaurant",
        step3Title: "Order & Enjoy",
        step3Description: "Order your food and enjoy the great taste",
        
        // Reviews Section
        reviewsTitle: "Customer Reviews",
        reviewsSubtitle: "What our customers say",
        
        // Pricing Section
        pricingTitle: "Pricing Plans",
        pricingSubtitle: "Choose the right plan for you",
        monthly: "Monthly",
        yearly: "Yearly",
        basicPlan: "Basic Plan",
        proPlan: "Pro Plan", 
        premiumPlan: "Premium Plan",
        free: "Free",
        selectPlan: "Select Plan",
        
        // Footer
        footerTitle: "Download App",
        footerDescription: "Get the best food experience",
        newsletterTitle: "Subscribe to Newsletter",
        newsletterDescription: "Be the first to know about the latest restaurants and special offers",
        emailPlaceholder: "Enter your email",
        subscribeNote: "By clicking send you agree to receive messages",
        allRightsReserved: "© All rights reserved 2024",
        poweredBy: "Powered by",
        
        // Contact
        contactTitle: "Contact Us",
        contactSubtitle: "We're here to help you",
        phone: "Phone",
        email: "Email",
        address: "Address",
        
        // Blog
        blogTitle: "Blog",
        blogSubtitle: "Latest news and articles",
        readMore: "Read More",
        
        // Common
        learnMore: "Learn More",
        getStarted: "Get Started",
        viewAll: "View All",
        loading: "Loading...",
        error: "An error occurred",
        success: "Success",
        close: "Close",
        save: "Save",
        cancel: "Cancel",
        yes: "Yes",
        no: "No",
        
        // Statistics
        happyCustomers: "Happy Customers",
        restaurants: "Restaurants",
        deliveries: "Deliveries",
        cities: "Cities"
    }
};

// تصدير الترجمات للاستخدام العام
window.translations = translations;