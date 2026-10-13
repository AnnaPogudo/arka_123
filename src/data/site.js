export const mapUrl = 'https://maps.google.com/?q=%D0%9C%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%86%D0%B0+10+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA'

export const media = {
  exterior: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_3-3a7b12d7-cf64-4256-8202-1ff46fe1e1ae.png',
  emptyRoom: '/images/room-layout-empty.jpg',
  hall: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_1__1_-647eac0d-3fc0-46c8-a29e-48f5094311a3.png',
  room: '/images/c__Users_Admin_AppData_Roaming_Cursor_User_workspaceStorage_6bad7d2f0fe5437e0eb93d5140122639_images_4-b915520d-003b-479b-a340-2cf9e7ce33d7.png',
  communication: '/images/room-layout-communication.png',
}

export const roomLayouts = [
  {
    id: 'empty',
    label: 'Пустой зал',
    text: 'Свободная площадь: так зал выглядит до расстановки.',
    image: '/images/room-layout-empty.jpg',
    alt: 'Пустой зал АРКА 123 с арочными окнами',
  },
  {
    id: 'workshop',
    label: 'Мастер-класс',
    text: 'Экран и ряды кресел для небольшой группы.',
    image: '/images/room-layout-workshop.jpg',
    alt: 'Зал АРКА 123 в расстановке для мастер-класса',
  },
  {
    id: 'seminar',
    label: 'Семинар',
    text: 'Общий стол для обсуждения и совместной работы.',
    image: '/images/room-layout-seminar.jpg',
    alt: 'Зал АРКА 123 в расстановке для семинара',
  },
]

export const storyBeats = [
  { at: 0, eyebrow: 'ВАШ ХОСТ', title: 'Здравствуйте. Я Анна.', body: 'Помогу представить пространство, где встречаются люди и рождаются идеи.' },
  { at: 0.34, eyebrow: 'ПРОСТРАНСТВО', title: 'Выберите свой формат.', body: 'Мастер-класс, семинар или встреча за общим столом — пространство можно адаптировать под задачу.' },
  { at: 0.67, eyebrow: 'ВИД НА ГОРОД', title: 'Встречаемся напротив Библиотеки.', body: 'АРКА 123 — место, которое легко найти и приятно запомнить.' },
]
