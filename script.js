const WA_URL = "https://wa.me/972552560544";

const sharedCatalog = [
  {
    key: "nail",
    image: "assets/catalog/nail-stand-with-qr-logo.png",
    reference: "https://makerworld.com/en/search/models?keyword=manicure%20hand",
    functions: ["Instagram", "WhatsApp", "Booking"]
  },
  {
    key: "dental",
    image: "assets/catalog/dental-stand.png",
    reference: "https://makerworld.com/en/more-models/tooth-3d-print-model-download",
    functions: ["Reviews", "Booking", "WhatsApp"]
  },
  {
    key: "coffee",
    image: "assets/catalog/coffee-stand.png",
    reference: "https://makerworld.com/more-models/coffee-cup-3d-print-model-download",
    functions: ["QR menu", "Instagram", "Reviews"]
  },
  {
    key: "bakery",
    image: "assets/catalog/bakery-stand.png",
    reference: "https://makerworld.com/more-models/bakery-3d-print-model-download",
    functions: ["Orders", "Instagram", "WhatsApp"]
  },
  {
    key: "beauty",
    image: "assets/catalog/beauty-hair-stand.png",
    reference: "https://makerworld.com/more-models/scissors-3d-print-model-download",
    functions: ["Booking", "Instagram", "Price list"]
  },
  {
    key: "restaurant",
    image: "assets/catalog/restaurant-stand.png",
    reference: "https://makerworld.com/more-models/burger-3d-print-model-download",
    functions: ["QR menu", "Reviews", "Orders"]
  },
  {
    key: "cosmetology",
    image: "assets/catalog/cosmetology-stand.png",
    reference: "https://makerworld.com/en/search/models?keyword=cosmetics%203d%20print",
    functions: ["Booking", "Instagram", "Certificates"]
  },
  {
    key: "kids",
    image: "assets/catalog/kids-stand.png",
    reference: "https://makerworld.com/en/search/models?keyword=kids%20blocks%203d%20print",
    functions: ["Registration", "WhatsApp", "Schedule"]
  }
];

const i18n = {
  ru: {
    dir: "ltr",
    seo: {
      title: "Printola | 3D QR-стенды для бизнеса в Израиле",
      description:
        "3D QR-стенды Printola для бизнеса в Израиле: переводят клиентов из офлайна в Instagram, WhatsApp, Google Reviews, меню и онлайн-запись."
    },
    nav: { about: "О нас", catalog: "Каталог", pricing: "Пакеты", basic: "QR Basic", process: "Процесс", custom: "Custom" },
    cta: {
      whatsapp: "WhatsApp",
      write: "Написать в WhatsApp",
      catalog: "Смотреть каталог",
      card: "Хочу такой"
    },
    hero: {
      eyebrow: "PRINTOLA / 3D QR-стенды для бизнеса",
      title: "3D-стенды, которые делают бизнес заметнее",
      copy: "Объемные 3D-стенды с QR-кодом помогают посетителям сразу перейти в Instagram, WhatsApp, Google Reviews, меню или онлайн-запись.",
      cardMain: "Nail Stand",
      badgeTop: "QR + WhatsApp",
      badgeBottom: "Под вашу нишу",
      points: ["Из офлайна в онлайн", "Instagram / WhatsApp", "Google Reviews", "Под бренд и нишу"]
    },
    levels: {
      eyebrow: "Product line",
      title: "Три формата для продвижения бизнеса",
      items: [
        {
          title: "QR Basic",
          price: "от 199 шек",
          text: "Быстрый QR-стенд для отзывов, меню, WhatsApp, Instagram или записи."
        },
        {
          title: "3D Niche Stand",
          price: "от 399 шек",
          text: "Нишевый 3D-стенд, который сразу говорит клиенту, куда сканировать и зачем."
        },
        {
          title: "Custom Premium",
          price: "от 700+ шек",
          text: "Индивидуальный продукт под логотип, интерьер, фирменные цвета и сеть точек."
        }
      ]
    },
    about: {
      eyebrow: "About Printola",
      title: "Printola — студия 3D-печати рекламных стендов из Хайфы",
      copy: "Мы создаем 3D QR-стенды для бизнесов, которые хотят развивать социальные сети, получать больше отзывов и переводить посетителей из офлайн-точки в онлайн-коммуникацию.",
      cta: "Обсудить стенд для моего бизнеса",
      points: [
        "Производим в Хайфе и адаптируем стенды под бизнесы в Израиле.",
        "Добавляем QR-коды, логотипы, фирменные цвета, иконки Instagram, WhatsApp и Google Reviews.",
        "Перед печатью согласуем цель QR: подписка, отзыв, заявка, меню, запись или переход в соцсети."
      ]
    },
    pricing: {
      eyebrow: "Packages",
      title: "Пакеты под разные задачи продвижения",
      copy: "Выберите простой QR-стенд или нишевый 3D-стенд, который помогает клиентам сделать нужное действие прямо у стойки.",
      items: [
        {
          title: "QR Basic",
          price: "от 199 шек",
          text: "Для быстрого перехода клиента в Google Reviews, меню, Instagram, WhatsApp или запись.",
          features: ["толстая 3D-печатная рамка", "QR-код и короткий призыв", "1-2 цвета", "быстрое изготовление"],
          cta: "Хочу QR Basic"
        },
        {
          title: "Niche Stand",
          price: "от 399 шек",
          text: "Основной формат: 3D-стенд под нишу, который привлекает внимание и ведет клиента в онлайн.",
          features: ["база и арочный задник", "3D-элемент под бизнес", "иконки Instagram / WhatsApp / Reviews", "адаптация цвета"],
          cta: "Хочу Niche Stand",
          featured: true
        },
        {
          title: "Custom",
          price: "от 700+ шек",
          text: "Индивидуальный стенд под бренд, интерьер, филиалы и конкретную маркетинговую задачу.",
          features: ["персональный дизайн", "логотип и фирменные цвета", "нестандартная форма", "партии для бизнеса"],
          cta: "Обсудить Custom"
        }
      ]
    },
    catalog: {
      eyebrow: "Каталог ниш",
      title: "3D QR-стенды для популярных бизнесов",
      copy: "Каждая карточка показывает, как офлайн-посетитель может перейти в Instagram, WhatsApp, отзывы, меню или запись именно для этой ниши.",
      data: {
        nail: {
          title: "Мастера маникюра",
          meta: "Рука с ногтями",
          text: "Стенд на рабочем столе ведет клиенток в Instagram, WhatsApp и онлайн-запись сразу после услуги."
        },
        dental: {
          title: "Стоматологии",
          meta: "Объемный зуб",
          text: "QR на Google Reviews, запись или WhatsApp помогает пациентам оставить отзыв прямо на ресепшене."
        },
        coffee: {
          title: "Кофейни",
          meta: "Чашка кофе и круассан",
          text: "QR-меню, Instagram и отзывы в формате, который заметен на стойке и поддерживает атмосферу кофейни."
        },
        bakery: {
          title: "Пекарни и кондитерские",
          meta: "Круассан, хлеб или капкейк",
          text: "Витринный стенд ведет к заказам, Instagram и сезонным предложениям рядом с продуктом."
        },
        beauty: {
          title: "Beauty & Hair",
          meta: "Ножницы, расческа, зеркало",
          text: "Для салонов, парикмахерских и барбершопов: запись, прайс, Instagram и WhatsApp в одном месте."
        },
        restaurant: {
          title: "Кафе и рестораны",
          meta: "Бургер, тарелка или приборы",
          text: "QR-меню, отзывы и заказы в более заметном формате, чем обычная плоская табличка."
        },
        cosmetology: {
          title: "Косметология",
          meta: "Лицо, губы, крем",
          text: "Премиальный стенд для записи, Instagram, сертификатов и доверия в эстетической клинике."
        },
        kids: {
          title: "Детские центры",
          meta: "Кубики, звезды, карандаш",
          text: "Яркий стенд для записи на занятия, WhatsApp, расписания и общения с родителями."
        }
      }
    },
    basic: {
      eyebrow: "QR Basic",
      title: "QR Basic — быстрый старт для офлайн-точки",
      copy: "Простой 3D QR-стенд для Google Reviews, меню, WhatsApp, Instagram и записи. Выглядит аккуратнее обычной таблички и понятен клиенту с первого взгляда.",
      cta: "Заказать QR Basic",
      items: ["Google Reviews Stand", "WhatsApp Stand", "Instagram Stand", "Menu QR Stand", "Booking QR Stand", "Payment QR Stand"]
    },
    benefits: {
      eyebrow: "Why it works",
      title: "Почему 3D QR-стенд работает лучше обычной таблички",
      items: [
        ["Привлекает внимание", "Объемный объект заметнее плоской наклейки и лучше работает на стойке, ресепшене или витрине."],
        ["Понятен по нише", "Стоматолог видит зуб, кофейня - чашку, мастер маникюра - руку. Это повышает релевантность предложения."],
        ["Ведет в онлайн", "QR отправляет клиента в отзывы, WhatsApp, Instagram, меню, оплату или онлайн-запись."],
        ["Усиливает бренд", "Логотип, цвета и 3D-элемент делают стенд частью визуального стиля бизнеса."],
        ["Помогает продажам", "Стенд не просто украшает стойку, а собирает действия: подписки, сообщения, заявки и отзывы."]
      ]
    },
    process: {
      eyebrow: "Process",
      title: "Как офлайн-клиент переходит в онлайн",
      items: [
        ["Определяем цель", "Вы выбираете, куда должен вести QR: Instagram, WhatsApp, Google Reviews, меню, запись или оплата."],
        ["Адаптируем под нишу", "Подбираем форму, цвета, текст и тематический 3D-элемент, который понятен вашему клиенту."],
        ["Печатаем и собираем", "Детали печатаются на 3D-принтере и собираются в готовый брендированный стенд."],
        ["Ставите в точке продаж", "Посетители сканируют QR и продолжают контакт с бизнесом уже онлайн."]
      ]
    },
    options: {
      eyebrow: "Customization",
      title: "Какие онлайн-действия можно встроить",
      copy: "Стенд можно настроить под конкретную маркетинговую цель: подписка, сообщение, отзыв, запись, меню, оплата или повторный контакт.",
      items: ["QR-код", "Логотип", "Instagram", "WhatsApp", "Google Reviews", "Меню", "Онлайн-запись", "Прайс", "Визитки", "Фирменные цвета", "3D-элемент", "Русский / Иврит / Английский"]
    },
    custom: {
      eyebrow: "Custom Premium",
      title: "Индивидуальный стенд под бренд и маркетинговую задачу",
      copy: "Подходит для клиник, салонов, ресторанов и локальных сетей, которым нужен физический продукт для продвижения соцсетей, отзывов и онлайн-заявок.",
      cta: "Обсудить Custom Premium"
    },
    final: {
      title: "Хотите больше переходов из офлайна в онлайн?",
      copy: "Напишите в WhatsApp, отправьте нишу, логотип или Instagram. Мы предложим идею 3D QR-стенда под ваш бизнес.",
      cta: "Получить идею стенда для моей ниши"
    },
    footer: {
      about: "3D QR-стенды для бизнеса: Instagram, WhatsApp, Google Reviews, меню, запись и офлайн-точки в Израиле.",
      catalogTitle: "Каталог",
      basic: "QR Basic",
      nail: "Маникюр",
      dental: "Стоматологии",
      coffee: "Кофейни",
      beauty: "Beauty & Hair",
      contactsTitle: "Контакты",
      email: "Email по запросу",
      workTitle: "Работаем",
      work: "Индивидуальный дизайн, 3D-печать, QR-стенды под бренд и партии для бизнесов в Израиле.",
      rights: "Все права защищены."
    },
    whatsappMessage: "Здравствуйте, хочу 3D QR-стенд для продвижения моего бизнеса"
  },
  he: {
    dir: "rtl",
    seo: {
      title: "Printola | מעמדי QR תלת-ממדיים לעסקים בישראל",
      description:
        "מעמדי QR תלת-ממדיים לעסקים בישראל: מחברים לקוחות מהדלפק ל-Instagram, WhatsApp, Google Reviews, תפריט והזמנות אונליין."
    },
    nav: { about: "אודות", catalog: "קטלוג", pricing: "חבילות", basic: "QR Basic", process: "תהליך", custom: "מותאם אישית" },
    cta: {
      whatsapp: "WhatsApp",
      write: "כתבו ב-WhatsApp",
      catalog: "לצפייה בקטלוג",
      card: "רוצה כזה"
    },
    hero: {
      eyebrow: "PRINTOLA / מעמדי QR תלת-ממדיים לעסקים",
      title: "מעמדי 3D שעושים את העסק בולט יותר",
      copy: "מעמדי 3D עם קוד QR שמובילים לקוחות ל-Instagram, WhatsApp, Google Reviews, תפריט או קביעת תור אונליין.",
      cardMain: "Nail Stand",
      badgeTop: "QR + WhatsApp",
      badgeBottom: "מותאם לנישה",
      points: ["מאופליין לאונליין", "Instagram / WhatsApp", "Google Reviews", "מותאם למותג ולנישה"]
    },
    levels: {
      eyebrow: "קו מוצרים",
      title: "שלושה פורמטים לקידום העסק",
      items: [
        { title: "QR Basic", price: "החל מ-199 ש\"ח", text: "מעמד QR מהיר לביקורות, תפריט, WhatsApp, Instagram או קביעת תור." },
        { title: "3D Niche Stand", price: "החל מ-399 ש\"ח", text: "מעמד 3D לפי נישה שמסביר ללקוח לאן לסרוק ולמה." },
        { title: "Custom Premium", price: "החל מ-700+ ש\"ח", text: "מוצר אישי לפי לוגו, עיצוב פנים, צבעי מותג וכמות לסניפים." }
      ]
    },
    about: {
      eyebrow: "אודות Printola",
      title: "Printola - סטודיו מחיפה למעמדי QR ומוצרי פרסום בהדפסת 3D",
      copy: "אנחנו יוצרים מעמדי QR תלת-ממדיים לעסקים שרוצים לקדם רשתות חברתיות, לקבל יותר ביקורות ולהעביר לקוחות מהנקודה הפיזית לתקשורת אונליין.",
      cta: "לדבר על מעמד לעסק שלי",
      points: [
        "מייצרים בחיפה ומתאימים את המעמדים לעסקים בישראל.",
        "משלבים QR, לוגו, צבעי מותג, Instagram, WhatsApp ו-Google Reviews.",
        "לפני ההדפסה מגדירים מטרה ל-QR: עוקבים, ביקורות, פניות, תפריט, תור או מעבר לרשתות."
      ]
    },
    pricing: {
      eyebrow: "חבילות",
      title: "חבילות לפי מטרת הקידום",
      copy: "בחרו מעמד QR פשוט או מעמד 3D נישתי שמוביל את הלקוח לפעולה הנכונה כבר בדלפק.",
      items: [
        {
          title: "QR Basic",
          price: "החל מ-199 ש\"ח",
          text: "למעבר מהיר ל-Google Reviews, תפריט, Instagram, WhatsApp או תורים.",
          features: ["מסגרת מודפסת עבה", "QR וקריאה קצרה לפעולה", "1-2 צבעים", "ייצור מהיר"],
          cta: "רוצה QR Basic"
        },
        {
          title: "Niche Stand",
          price: "החל מ-399 ש\"ח",
          text: "הפורמט המרכזי: מעמד לפי נישה שמושך תשומת לב ומוביל את הלקוח לאונליין.",
          features: ["בסיס וגב קשת", "אלמנט 3D לפי העסק", "אייקונים Instagram / WhatsApp / Reviews", "התאמת צבעים"],
          cta: "רוצה Niche Stand",
          featured: true
        },
        {
          title: "Custom",
          price: "החל מ-700+ ש\"ח",
          text: "מעמד אישי לפי מותג, עיצוב פנים, סניפים ומטרה שיווקית ברורה.",
          features: ["עיצוב אישי", "לוגו וצבעי מותג", "צורה מיוחדת", "כמויות לעסקים"],
          cta: "לדבר על Custom"
        }
      ]
    },
    catalog: {
      eyebrow: "קטלוג נישות",
      title: "מעמדי QR תלת-ממדיים לעסקים פופולריים",
      copy: "כל כרטיס מראה איך לקוח מהעסק הפיזי יכול לעבור ל-Instagram, WhatsApp, ביקורות, תפריט או תור לפי הנישה.",
      data: {
        nail: { title: "מניקור וסטודיו לציפורניים", meta: "יד עם ציפורניים", text: "מעמד על שולחן העבודה שמוביל לקוחות ל-Instagram, WhatsApp וקביעת תור אחרי הטיפול." },
        dental: { title: "מרפאות שיניים", meta: "שן תלת-ממדית", text: "QR ל-Google Reviews, קביעת תור או WhatsApp כדי לקבל ביקורת מהמטופל כבר בקבלה." },
        coffee: { title: "בתי קפה", meta: "כוס קפה וקרואסון", text: "תפריט QR, Instagram וביקורות בפורמט בולט שמתאים לדלפק ולחוויה של בית קפה." },
        bakery: { title: "מאפיות וקונדיטוריות", meta: "קרואסון, לחם או קאפקייק", text: "מעמד ויטרינה שמוביל להזמנות, Instagram ומבצעים עונתיים ליד המוצרים." },
        beauty: { title: "מספרות ויופי", meta: "מספריים, מסרק ומראה", text: "לתורים, מחירון, Instagram ו-WhatsApp במספרות, סלוני יופי וברברשופ." },
        restaurant: { title: "בתי אוכל ומסעדות", meta: "המבורגר, צלחת או סכו\"ם", text: "תפריט QR, ביקורות והזמנות בפורמט בולט יותר משלט QR שטוח." },
        cosmetology: { title: "קוסמטיקה ואסתטיקה", meta: "פנים, שפתיים וקרם", text: "מעמד פרימיום לתורים, Instagram, תעודות ובניית אמון בקליניקות אסתטיקה." },
        kids: { title: "מרכזי ילדים וחוגים", meta: "קוביות, כוכבים ועיפרון", text: "מעמד צבעוני לרישום לחוגים, WhatsApp, לוח שיעורים ותקשורת עם הורים." }
      }
    },
    basic: {
      eyebrow: "QR Basic",
      title: "QR Basic - התחלה מהירה לעסק פיזי",
      copy: "מעמד QR תלת-ממדי ל-Google Reviews, תפריט, WhatsApp, Instagram וקביעת תור. נראה מקצועי יותר משלט רגיל וברור ללקוח מיד.",
      cta: "להזמנת QR Basic",
      items: ["Google Reviews Stand", "WhatsApp Stand", "Instagram Stand", "Menu QR Stand", "Booking QR Stand", "Payment QR Stand"]
    },
    benefits: {
      eyebrow: "למה זה עובד",
      title: "למה מעמד QR תלת-ממדי עובד טוב יותר משלט רגיל",
      items: [
        ["מושך תשומת לב", "אובייקט תלת-ממדי בולט יותר ממדבקה או שלט שטוח על הדלפק."],
        ["רלוונטי לנישה", "רופא שיניים רואה שן, בית קפה רואה כוס, מניקוריסטית רואה יד."],
        ["מוביל לפעולה", "ה-QR מוביל לביקורות, WhatsApp, Instagram, תפריט, תשלום או תור."],
        ["מחזק את המותג", "לוגו, צבעים ואלמנט 3D הופכים את המעמד לחלק מהשפה הוויזואלית של העסק."],
        ["עוזר למכירות", "המעמד אוסף פעולות: עוקבים, הודעות, פניות, הזמנות וביקורות."]
      ]
    },
    process: {
      eyebrow: "תהליך",
      title: "איך לקוח עובר מאופליין לאונליין",
      items: [
        ["מגדירים מטרה", "בוחרים לאן ה-QR מוביל: Instagram, WhatsApp, Google Reviews, תפריט, תור או תשלום."],
        ["מתאימים לנישה", "בוחרים צורה, צבעים, טקסט ואלמנט 3D שמובן ללקוח שלכם."],
        ["מדפיסים ומרכיבים", "החלקים מודפסים במדפסת 3D ומורכבים למעמד ממותג מוכן."],
        ["מציבים בנקודת המכירה", "הלקוחות סורקים וממשיכים את הקשר עם העסק אונליין."]
      ]
    },
    options: {
      eyebrow: "התאמה אישית",
      title: "אילו פעולות אונליין אפשר לשלב",
      copy: "אפשר להתאים את המעמד למטרה שיווקית: עוקבים, הודעות, ביקורות, תורים, תפריט, תשלום או קשר חוזר.",
      items: ["QR", "לוגו", "Instagram", "WhatsApp", "Google Reviews", "תפריט", "קביעת תור", "מחירון", "כרטיסי ביקור", "צבעי מותג", "אלמנט 3D", "רוסית / עברית / אנגלית"]
    },
    custom: {
      eyebrow: "Custom Premium",
      title: "מעמד אישי לפי מותג ומטרה שיווקית",
      copy: "מתאים לקליניקות, סלונים, מסעדות ורשתות מקומיות שרוצות לקדם רשתות חברתיות, ביקורות ופניות אונליין דרך מוצר פיזי.",
      cta: "לדבר על Custom Premium"
    },
    final: {
      title: "רוצים יותר מעברים מהדלפק לאונליין?",
      copy: "כתבו ב-WhatsApp ושלחו נישה, לוגו או Instagram. נכין רעיון למעמד QR תלת-ממדי שמתאים לעסק שלכם.",
      cta: "לקבלת רעיון למעמד לנישה שלי"
    },
    footer: {
      about: "מעמדי QR תלת-ממדיים לעסקים: Instagram, WhatsApp, Google Reviews, תפריטים, תורים ונקודות מכירה בישראל.",
      catalogTitle: "קטלוג",
      basic: "QR Basic",
      nail: "מניקור",
      dental: "מרפאות שיניים",
      coffee: "בתי קפה",
      beauty: "Beauty & Hair",
      contactsTitle: "יצירת קשר",
      email: "אימייל לפי בקשה",
      workTitle: "שירותים",
      work: "עיצוב אישי, הדפסת 3D, מעמדי QR ממותגים וכמויות לעסקים בישראל.",
      rights: "כל הזכויות שמורות."
    },
    whatsappMessage: "שלום, אני רוצה מעמד QR תלת-ממדי לקידום העסק שלי"
  },
  en: {
    dir: "ltr",
    seo: {
      title: "Printola | 3D QR stands for businesses in Israel",
      description:
        "3D QR stands for businesses in Israel: connect offline visitors to Instagram, WhatsApp, Google Reviews, menus and online booking."
    },
    nav: { about: "About", catalog: "Catalog", pricing: "Packages", basic: "QR Basic", process: "Process", custom: "Custom" },
    cta: {
      whatsapp: "WhatsApp",
      write: "Message on WhatsApp",
      catalog: "View catalog",
      card: "I want this"
    },
    hero: {
      eyebrow: "PRINTOLA / 3D QR stands for business",
      title: "3D stands that make your business visible",
      copy: "Branded 3D stands with QR codes send people from your counter to Instagram, WhatsApp, Google Reviews, menus or online booking.",
      cardMain: "Nail Stand",
      badgeTop: "QR + WhatsApp",
      badgeBottom: "Made for your niche",
      points: ["Offline to online", "Instagram / WhatsApp", "Google Reviews", "Brand and niche fit"]
    },
    levels: {
      eyebrow: "Product line",
      title: "Three formats for business promotion",
      items: [
        { title: "QR Basic", price: "from ₪199", text: "A fast QR stand for reviews, menus, WhatsApp, Instagram or booking." },
        { title: "3D Niche Stand", price: "from ₪399", text: "A niche 3D stand that tells customers where to scan and why." },
        { title: "Custom Premium", price: "from ₪700+", text: "A custom product for your logo, interior, brand colors and locations." }
      ]
    },
    about: {
      eyebrow: "About Printola",
      title: "Printola is a Haifa studio for 3D QR advertising stands",
      copy: "We create 3D QR stands for businesses that want to grow social media, collect more reviews and move visitors from the physical location into online communication.",
      cta: "Discuss a stand for my business",
      points: [
        "Produced in Haifa and adapted for businesses in Israel.",
        "Built with QR codes, logos, brand colors, Instagram, WhatsApp and Google Reviews.",
        "Before printing, we define the QR goal: followers, reviews, messages, menu, booking or social media."
      ]
    },
    pricing: {
      eyebrow: "Packages",
      title: "Packages by promotion goal",
      copy: "Choose a simple QR stand or a niche 3D stand that helps customers take action at the counter.",
      items: [
        {
          title: "QR Basic",
          price: "from ₪199",
          text: "For fast access to Google Reviews, menus, Instagram, WhatsApp or booking.",
          features: ["thick 3D printed frame", "QR code and short call to action", "1-2 colors", "fast production"],
          cta: "I want QR Basic"
        },
        {
          title: "Niche Stand",
          price: "from ₪399",
          text: "The main format: a niche stand that attracts attention and sends customers online.",
          features: ["base and arch panel", "3D element for the business", "Instagram / WhatsApp / Reviews icons", "color adaptation"],
          cta: "I want Niche Stand",
          featured: true
        },
        {
          title: "Custom",
          price: "from ₪700+",
          text: "A custom stand for your brand, interior, locations and marketing goal.",
          features: ["personal design", "logo and brand colors", "custom shape", "business batches"],
          cta: "Discuss Custom"
        }
      ]
    },
    catalog: {
      eyebrow: "Niche catalog",
      title: "3D QR stands for popular business categories",
      copy: "Each card shows how an offline visitor can move to Instagram, WhatsApp, reviews, menu or booking for that niche.",
      data: {
        nail: { title: "Nail studios", meta: "Hand with nails", text: "A desk stand that leads clients to Instagram, WhatsApp and online booking after the treatment." },
        dental: { title: "Dental clinics", meta: "3D tooth", text: "QR for Google Reviews, booking or WhatsApp so patients can leave feedback at reception." },
        coffee: { title: "Coffee shops", meta: "Coffee cup and croissant", text: "QR menu, Instagram and reviews in a visible format made for cafe counters." },
        bakery: { title: "Bakeries and pastry shops", meta: "Croissant, bread or cupcake", text: "A display stand for orders, Instagram and seasonal offers next to the product." },
        beauty: { title: "Beauty & Hair", meta: "Scissors, comb and mirror", text: "For salons, hairdressers and barbershops: booking, prices, Instagram and WhatsApp." },
        restaurant: { title: "Cafes and restaurants", meta: "Burger, plate or cutlery", text: "QR menu, reviews and orders in a stronger format than a flat QR sign." },
        cosmetology: { title: "Aesthetic clinics", meta: "Face, lips and cream", text: "A premium stand for booking, Instagram, certificates and trust in aesthetic clinics." },
        kids: { title: "Kids centers", meta: "Blocks, stars and pencil", text: "A colorful stand for class registration, WhatsApp, schedules and parent communication." }
      }
    },
    basic: {
      eyebrow: "QR Basic",
      title: "QR Basic for physical business locations",
      copy: "A simple 3D QR stand for Google Reviews, menus, WhatsApp, Instagram and booking. Cleaner than a plain QR plaque and instantly clear to customers.",
      cta: "Order QR Basic",
      items: ["Google Reviews Stand", "WhatsApp Stand", "Instagram Stand", "Menu QR Stand", "Booking QR Stand", "Payment QR Stand"]
    },
    benefits: {
      eyebrow: "Why it works",
      title: "Why a 3D QR stand works better than a regular sign",
      items: [
        ["Gets attention", "A dimensional object is more noticeable than a sticker or a flat sign on the counter."],
        ["Fits the niche", "A dentist sees a tooth, a cafe sees a cup, a nail artist sees a hand."],
        ["Drives action", "The QR leads to reviews, WhatsApp, Instagram, menu, payment or booking."],
        ["Strengthens branding", "Logo, colors and 3D elements make the stand part of the business identity."],
        ["Supports sales", "The stand collects actions: followers, messages, leads, orders and reviews."]
      ]
    },
    process: {
      eyebrow: "Process",
      title: "How offline visitors move online",
      items: [
        ["Define the goal", "Choose where the QR should lead: Instagram, WhatsApp, Google Reviews, menu, booking or payment."],
        ["Adapt it to the niche", "We choose the shape, colors, text and 3D element that your customer understands."],
        ["Print and assemble", "Parts are 3D printed and assembled into a finished branded stand."],
        ["Place it at the point of sale", "Visitors scan the QR and continue the relationship with your business online."]
      ]
    },
    options: {
      eyebrow: "Customization",
      title: "Which online actions can be built in",
      copy: "The stand can be configured for a specific marketing goal: followers, messages, reviews, booking, menu, payment or repeat contact.",
      items: ["QR code", "Logo", "Instagram", "WhatsApp", "Google Reviews", "Menu", "Online booking", "Price list", "Business cards", "Brand colors", "3D element", "Russian / Hebrew / English"]
    },
    custom: {
      eyebrow: "Custom Premium",
      title: "A custom stand for your brand and marketing goal",
      copy: "Made for clinics, salons, restaurants and local chains that want to promote social media, reviews and online leads through a physical product.",
      cta: "Discuss Custom Premium"
    },
    final: {
      title: "Want more offline-to-online actions?",
      copy: "Message us on WhatsApp and send your niche, logo or Instagram. We will suggest a 3D QR stand idea for your business.",
      cta: "Get a stand idea for my niche"
    },
    footer: {
      about: "3D QR stands for businesses: Instagram, WhatsApp, Google Reviews, menus, booking and physical locations in Israel.",
      catalogTitle: "Catalog",
      basic: "QR Basic",
      nail: "Nail studios",
      dental: "Dental clinics",
      coffee: "Coffee shops",
      beauty: "Beauty & Hair",
      contactsTitle: "Contacts",
      email: "Email on request",
      workTitle: "Services",
      work: "Custom design, 3D printing, branded QR stands and business batches in Israel.",
      rights: "All rights reserved."
    },
    whatsappMessage: "Hello, I want a 3D QR stand to promote my business"
  }
};

let currentLang = "he";

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function whatsappHref(message) {
  return `${WA_URL}?text=${encodeURIComponent(message)}`;
}

function renderStaticText(lang) {
  const dict = i18n[lang];
  qsa("[data-i18n]").forEach((el) => {
    const value = getNested(dict, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  document.documentElement.lang = lang;
  document.body.dir = dict.dir;
  document.title = dict.seo.title;
  qs("#meta-description").setAttribute("content", dict.seo.description);
  qs('meta[property="og:title"]').setAttribute("content", dict.seo.title);
  qs('meta[property="og:description"]').setAttribute("content", dict.seo.description);
}

function renderHeroPoints(lang) {
  qs("#hero-points").innerHTML = i18n[lang].hero.points
    .map((point) => `<span class="pill">${point}</span>`)
    .join("");
}

function renderAbout(lang) {
  qs("#about-points").innerHTML = i18n[lang].about.points
    .map(
      (point, index) => `
        <div class="about-point">
          <span>${index + 1}</span>
          <p>${point}</p>
        </div>
      `
    )
    .join("");
}

function renderLevels(lang) {
  qs("#level-grid").innerHTML = i18n[lang].levels.items
    .map(
      (item, index) => `
        <article class="level-card reveal">
          <strong>${index + 1}</strong>
          <h3>${item.title}</h3>
          <span class="level-price">${item.price}</span>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderPricing(lang) {
  const dict = i18n[lang];
  qs("#pricing-grid").innerHTML = dict.pricing.items
    .map((item) => {
      const message = `${dict.whatsappMessage}: ${item.title}`;
      return `
        <article class="pricing-card reveal ${item.featured ? "is-featured" : ""}">
          <h3>${item.title}</h3>
          <span class="pricing-price">${item.price}</span>
          <p>${item.text}</p>
          <ul>
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="btn btn-primary whatsapp-cta" href="${whatsappHref(message)}" target="_blank" rel="noreferrer">${item.cta}</a>
        </article>
      `;
    })
    .join("");
}

function renderCatalog(lang) {
  const dict = i18n[lang];
  qs("#catalog-grid").innerHTML = sharedCatalog
    .map((item) => {
      const copy = dict.catalog.data[item.key];
      const message = `${dict.whatsappMessage}: ${copy.title}`;
      return `
        <article class="product-card reveal">
          <img src="${item.image}" alt="${copy.title}" loading="lazy">
          <div class="product-body">
            <div class="product-meta">${copy.meta}</div>
            <h3>${copy.title}</h3>
            <p>${copy.text}</p>
            <div class="function-list">
              ${item.functions.map((fn) => `<span>${fn}</span>`).join("")}
            </div>
            <a class="btn btn-primary whatsapp-cta" href="${whatsappHref(message)}" target="_blank" rel="noreferrer">${dict.cta.card}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderBasic(lang) {
  qs("#basic-list").innerHTML = i18n[lang].basic.items
    .map((item) => `<div class="basic-item reveal">${item}</div>`)
    .join("");
}

function renderBenefits(lang) {
  qs("#benefit-grid").innerHTML = i18n[lang].benefits.items
    .map(
      ([title, text], index) => `
        <article class="benefit-card reveal">
          <div class="benefit-icon">${index + 1}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderProcess(lang) {
  qs("#process-grid").innerHTML = i18n[lang].process.items
    .map(
      ([title, text], index) => `
        <article class="process-card reveal">
          <div class="step-number">${index + 1}</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderOptions(lang) {
  qs("#option-tags").innerHTML = i18n[lang].options.items
    .map((item) => `<span>${item}</span>`)
    .join("");
}

function updateWhatsappLinks(lang) {
  const href = whatsappHref(i18n[lang].whatsappMessage);
  qsa(".whatsapp-link").forEach((link) => {
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}

function revealVisible() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  qsa(".reveal").forEach((el) => observer.observe(el));
}

function setLanguage(lang) {
  currentLang = lang;
  renderStaticText(lang);
  renderHeroPoints(lang);
  renderAbout(lang);
  renderLevels(lang);
  renderPricing(lang);
  renderCatalog(lang);
  renderBasic(lang);
  renderBenefits(lang);
  renderProcess(lang);
  renderOptions(lang);
  updateWhatsappLinks(lang);
  qsa(".lang-btn").forEach((button) => button.classList.toggle("is-active", button.dataset.lang === lang));
  revealVisible();
}

qsa(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

qs("#year").textContent = new Date().getFullYear();
setLanguage(currentLang);
