export type Marker = {
  id: number;
  cx: number;
  cy: number;
  name: string;
  from?: string;
  description: string;
  url: string;
  type: "artist" | "writer";
  imageUrl: string;
  mapId: number;
};

export const goldegAge: Marker[] = [
  {
    id: 1,
    cx: 700,
    cy: 200,
    type: "artist",
    imageUrl: "/images/1.png",
    name: "Суриков Василий Иванович (1848-1916)",
    description: "Сибирская красавица(1891)- написана в Красноярске",
    url: "https://my.tretyakov.ru/app/masterpiece/8464",
    mapId: 59,
  },
  {
    id: 2,
    cx: 140,
    cy: 220,
    type: "artist",
    imageUrl: "/images/2.jpeg",
    name: "Борисов Александр Алексеевич (1866-1934)",
    description: "На Мурмане. Близ гавани(1896) - была написана в Мурмане (ныне Кольский полуостров)",
    url: "https://my.tretyakov.ru/app/masterpiece/22072",
    mapId: 50,
  },
  {
    id: 3,
    cx: 170,
    cy: 660,
    type: "artist",
    imageUrl: "/images/3.jpeg",
    name: "Айвазовский Иван Константинович (1817-1900)",
    description: "Ялта(1866) - написана в Феодосии (Крым)",
    url: "https://my.tretyakov.ru/app/masterpiece/10946",
    mapId: 35,
  },
  {
    id: 4,
    cx: 90,
    cy: 370,
    type: "artist",
    imageUrl: "/images/4.jpeg",
    name: "Шишкин Иван Иванович (1832-1898)",
    description: "Дубки под Сестрорецком(1857) - написана в Сестрорецк(Санкт-Петербург)",
    url: "https://my.tretyakov.ru/app/masterpiece/20755",
    mapId: 23,
  },
  {
    id: 5,
    cx: 170,
    cy: 440,
    type: "artist",
    imageUrl: "/images/5.jpeg",
    name: "Репин Илья Ефимович (1844-1930)",
    description:
      "Запорожцы пишут письмо турецкому султану (1880-1890) - первые наброски в селе Абрамцево (Московская обл.)",
    url: "https://my.tretyakov.ru/app/masterpiece/8435",
    mapId: 51,
  },
  {
    id: 6,
    cx: 220,
    cy: 450,
    type: "writer",
    imageUrl: "/images/6.png",
    name: "Александр Сергеевич Пушкин (1799–1837)",
    description: "Самые известные произведения: «Евгений Онегин», «Капитанская дочка»",
    from: "Родился в Москве. Жил: Москва, Санкт-Петербург, Царское Село, Михайловское, Одесса",
    url: "https://www.culture.ru/persons/8195/aleksandr-pushkin",
    mapId: 52,
  },
  {
    id: 7,
    cx: 210,
    cy: 440,
    type: "writer",
    imageUrl: "/images/7.png",
    name: "Михаил Юрьевич Лермонтов (1814–1841)",
    description: "Самые известные произведения: «Герой нашего времени», «Мцыри». ",
    from: "Родился в Москве. Жил: Москва, Санкт-Петербург, Кавказ",
    url: "https://www.culture.ru/persons/8188/mikhail-lermontov",
    mapId: 52,
  },
  {
    id: 8,
    cx: 130,
    cy: 370,
    type: "writer",
    imageUrl: "/images/8.png",
    name: "Николай Васильевич Гоголь (1809–1852)",
    description: "Самые известные произведения: «Мёртвые души», «Ревизор».",
    from: "Родился в Великие Сорочинцы Жил: Санкт-Петербург, Москва, Рим (много путешествовал)",
    url: "https://www.culture.ru/persons/8127/nikolai-gogol",
    mapId: 23,
  },
  {
    id: 9,
    cx: 200,
    cy: 500,
    type: "writer",
    imageUrl: "/images/9.png",
    name: "Иван Сергеевич Тургенев (1818–1883)",
    description: "Самые известные произведения: «Отцы и дети», «Муму».",
    from: "Родился в Орёл, Российская империя Жил:Орёл, Москва, Санкт-Петербург, Германия, Франция (Много лет жил за границей.)",
    url: "https://www.culture.ru/persons/8217/ivan-turgenev",
    mapId: 43,
  },
  {
    id: 10,
    cx: 220,
    cy: 475,
    type: "writer",
    imageUrl: "/images/10.png",
    name: "Лев Николаевич Толстой (1828–1910)",
    description: "Самые известные произведения: «Война и мир», «Анна Каренина».",
    from: "Родился в Ясная Поляна, Тульская губерния Жил: Ясная Поляна, Москва, Санкт-Петербург, Кавказ, Крым (служба и путешествия)",
    url: "https://www.culture.ru/persons/8211/lev-tolstoi",
    mapId: 13,
  },
];
export const silverAge: Marker[] = [];
export const contemporary: Marker[] = [];
