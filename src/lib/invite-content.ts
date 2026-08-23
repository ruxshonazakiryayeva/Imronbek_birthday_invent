export const PARTY = {
  name: "Imronbek",
  age: 5,
  // Bu shablonni imronbek_invitation_settings jadvalidagi boshqa yozuvlardan ajratib turadigan noyob slug
  invitationSlug: "imronbek-birthday",
  // Sana/vaqtni bu yerda o'zgartiring
  date: new Date("2026-11-15T16:00:00+05:00"),
  mapUrl: "",
  // Fon musiqasi: YouTube video ID
  youtubeId: "GRKSqxWDqwY",
  adminPin: "1317",
};

export type Lang = "uz" | "ru" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

type Dict = {
  invitation: string;
  heroTitle: string;
  heroSub: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  whenWhere: string;
  place: string;
  placeText: string;
  mapBtn: string;
  mapSoon: string;
  gallery: string;
  gallerySub: string;
  rsvp: string;
  rsvpSub: string;
  yourName: string;
  namePh: string;
  coming: string;
  notComing: string;
  guests: string;
  wish: string;
  wishPh: string;
  send: string;
  sending: string;
  thanks: string;
  error: string;
  music: string;
  pin: string;
  pinPh: string;
  open: string;
  wrongPin: string;
  guestList: string;
  totalYes: string;
  totalGuests: string;
  empty: string;
  footer: string;
  schedule: string;
  scheduleSub: string;
  scheduleItems: { time: string; title: string }[];
};

export const T: Record<Lang, Dict> = {
  uz: {
    invitation: "Taklifnoma",
    heroTitle: "{name} {age} yoshga to'ladi!",
    heroSub: "Kichkina sarkardamiz bilan bu ajoyib kunni birga nishonlaymiz!",
    days: "kun",
    hours: "soat",
    minutes: "daqiqa",
    seconds: "soniya",
    whenWhere: "Qachon va qayerda",
    place: "Manzil",
    placeText: "Manzilni shu yerga yozing",
    mapBtn: "Xaritada ko'rish",
    mapSoon: "Xarita havolasi tez orada",
    gallery: "Eng qiziqarli lahzalar",
    gallerySub: "Sarguzashtlardan lavhalar",
    rsvp: "Kelishingizni tasdiqlang",
    rsvpSub: "Iltimos, bir necha so'z yozib qoldiring",
    yourName: "Ismingiz",
    namePh: "Ism va familiya",
    coming: "Kelaman",
    notComing: "Kelolmayman",
    guests: "Mehmonlar soni",
    wish: "Tabrik xati",
    wishPh: "Botirimizga tilaklaringiz...",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    thanks: "Rahmat! Javobingiz qabul qilindi.",
    error: "Xatolik yuz berdi. Yana urinib ko'ring.",
    music: "Musiqa",
    pin: "Parol",
    pinPh: "Parolni kiriting",
    open: "Ochish",
    wrongPin: "Parol xato",
    guestList: "Mehmonlar ro'yxati",
    totalYes: "Tasdiqlagan",
    totalGuests: "Jami mehmon",
    empty: "Hozircha javoblar yo'q",
    footer: "Sizni kutamiz!",
    schedule: "Bayram dasturi",
    scheduleSub: "Kun davomida bizni nima kutmoqda",
    scheduleItems: [
      { time: "16:00", title: "Mehmonlarni kutib olish" },
      { time: "16:30", title: "Qiziqarli o'yinlar" },
      { time: "17:30", title: "Bayram dasturxoni" },
      { time: "18:00", title: "Tort kesish" },
      { time: "18:20", title: "Musiqa va raqs" },
      { time: "19:00", title: "Esdalik uchun suratga tushish" },
    ],
  },
  ru: {
    invitation: "Приглашение",
    heroTitle: "С днём рождения, {name}! Уже {age}!",
    heroSub: "Отпразднуем этот особенный день вместе с нашим маленьким героем!",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    whenWhere: "Когда и где",
    place: "Адрес",
    placeText: "Укажите адрес здесь",
    mapBtn: "Смотреть на карте",
    mapSoon: "Ссылка на карту скоро появится",
    gallery: "Самые яркие моменты",
    gallerySub: "Кадры из приключений",
    rsvp: "Подтвердите участие",
    rsvpSub: "Пожалуйста, оставьте пару слов",
    yourName: "Ваше имя",
    namePh: "Имя и фамилия",
    coming: "Приду",
    notComing: "Не смогу",
    guests: "Количество гостей",
    wish: "Поздравление",
    wishPh: "Наилучшие пожелания нашему герою...",
    send: "Отправить",
    sending: "Отправляем...",
    thanks: "Спасибо! Ваш ответ получен.",
    error: "Произошла ошибка. Попробуйте снова.",
    music: "Музыка",
    pin: "Пароль",
    pinPh: "Введите пароль",
    open: "Открыть",
    wrongPin: "Неверный пароль",
    guestList: "Список гостей",
    totalYes: "Подтвердили",
    totalGuests: "Всего гостей",
    empty: "Пока нет ответов",
    footer: "Ждём вас!",
    schedule: "Программа праздника",
    scheduleSub: "Что нас ждёт в течение дня",
    scheduleItems: [
      { time: "16:00", title: "Встреча гостей" },
      { time: "16:30", title: "Весёлые игры" },
      { time: "17:30", title: "Праздничный стол" },
      { time: "18:00", title: "Разрезание торта" },
      { time: "18:20", title: "Музыка и танцы" },
      { time: "19:00", title: "Памятное фото" },
    ],
  },
  en: {
    invitation: "Invitation",
    heroTitle: "{name} turns {age}!",
    heroSub: "Join us to celebrate this special day with our little explorer!",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    whenWhere: "When & where",
    place: "Address",
    placeText: "Add the venue address here",
    mapBtn: "View on map",
    mapSoon: "Map link coming soon",
    gallery: "The brightest moments",
    gallerySub: "Snapshots from the adventure",
    rsvp: "Please RSVP",
    rsvpSub: "Leave us a few words",
    yourName: "Your name",
    namePh: "First and last name",
    coming: "I'll be there",
    notComing: "Can't make it",
    guests: "Number of guests",
    wish: "Birthday wish",
    wishPh: "Best wishes to our little hero...",
    send: "Send",
    sending: "Sending...",
    thanks: "Thank you! Your reply was received.",
    error: "Something went wrong. Please try again.",
    music: "Music",
    pin: "Password",
    pinPh: "Enter password",
    open: "Open",
    wrongPin: "Wrong password",
    guestList: "Guest list",
    totalYes: "Confirmed",
    totalGuests: "Total guests",
    empty: "No replies yet",
    footer: "See you there!",
    schedule: "Party schedule",
    scheduleSub: "What awaits us during the day",
    scheduleItems: [
      { time: "4:00 PM", title: "Welcoming guests" },
      { time: "4:30 PM", title: "Fun games" },
      { time: "5:30 PM", title: "Festive table" },
      { time: "6:00 PM", title: "Cake cutting" },
      { time: "6:20 PM", title: "Music & dancing" },
      { time: "7:00 PM", title: "Memory photos" },
    ],
  },
};
