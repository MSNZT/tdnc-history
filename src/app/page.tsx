"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/golden-age", title: "Золотой век" },
  { href: "/silver-age", title: "Серебряный век" },
  { href: "/contemporary", title: "Современники" },
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  return (
    <main className="relative min-h-screen w-full bg-black flex flex-col items-center justify-start">
      <section className="relative min-h-svh w-full overflow-hidden bg-[#d7c5a9]">
        <div
          className="
            absolute inset-0 z-0
            bg-[url('/main-bg.webp')]
            bg-cover bg-center bg-no-repeat
    "
        />

        <Image
          src="/ornate-arch-transparent-light.webp"
          alt=""
          width={1440}
          height={480}
          priority
          className="
            pointer-events-none
            absolute top-0 left-1/2 z-10
            h-auto
            w-[clamp(1180px,100vw,1920px)]
            max-w-none
            -translate-x-1/2
            select-none
    "
          sizes="(max-width: 640px) 1180px, (max-width: 1024px) 1350px, 100vw"
        />

        <div className="relative z-20 mx-auto min-h-svh w-full max-w-5xl px-4">
          <div className="flex min-h-svh w-full flex-col items-center pt-[clamp(245px,18vw,360px)]">
            <h1 className="flex max-w-[1100px] flex-col items-center text-center gap-1">
              <span className="font-badscript text-[clamp(1rem,1.25vw,1.55rem)] leading-tight text-stone-800">
                Традиционные духовно-нравственные
              </span>

              <span
                className="
            uppercase text-red-900 font-ptserif
            text-[clamp(1.45rem,2.25vw,2.75rem)]
            leading-none font-bold tracking-tight
          ">
                ценности через Российскую культуру
              </span>

              <span className="font-badscript text-[clamp(0.9rem,1.05vw,1.35rem)] text-stone-700">
                (писатели, поэты, художники)
              </span>
            </h1>

            <div
              className="
          relative mt-[clamp(18px,2vw,34px)]
          flex w-full flex-col items-center
          gap-[clamp(12px,1.2vw,22px)]
        ">
              <Link
                href="#about"
                className="
                  absolute
                  -top-7
                  right-2 sm:right-6 md:right-[clamp(1rem,18vw,13rem)]
                  cursor-pointer
                  w-8 h-8
                  rounded-full
                  flex items-center justify-center
                  bg-[#e8d5b5]
                  border-2 border-[#8b6914]
                  text-[#3d3226]
                  font-serif text-2xl font-bold
                  shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.5)]
                  hover:bg-[#f0e0c0]
                  hover:scale-110
                  transition-all duration-300
                  z-20
                ">
                i
              </Link>

              <nav className="flex w-full flex-col items-center gap-[clamp(12px,1.2vw,22px)]">
                {links.map((l) => (
                  <Link
                    href={l.href}
                    key={l.title}
                    className="
                      relative
                      font-hand font-bold
                      w-[clamp(220px,17vw,300px)]
                      aspect-360/172
                      bg-[url('/button.avif')] bg-contain bg-no-repeat bg-center
                      flex items-center justify-center
                      text-[clamp(1.05rem,1.5vw,1.65rem)]
                      text-[#4a3421]
                      whitespace-nowrap
                      pb-[1%] px-[15%] text-center leading-tight
                      transition-all duration-300 ease-out
                      hover:scale-105 hover:brightness-110
                      active:scale-95
                   ">
                    {l.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen w-full bg-[#faf6eb]">
        <div className="flex items-center justify-center bg-[#faf6eb]">
          <div className="max-w-5xl w-full">
            <div className="p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#c2a366] rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#c2a366] rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#c2a366] rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#c2a366] rounded-br-lg" />

              <div className="text-center mb-10">
                <h2 className="font-ptserif text-[clamp(1.8rem,3vw,2.5rem)] text-[#8b4513] font-bold tracking-wide">
                  О проекте
                </h2>

                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="h-px w-12 bg-linear-to-r from-transparent to-[#c2a366]" />
                  <span className="text-[#c2a366] text-xl">❦</span>
                  <span className="h-px w-12 bg-linear-to-l from-transparent to-[#c2a366]" />
                </div>
              </div>

              <div className="space-y-6 text-[#4a3b2a] font-serif text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.85]">
                <p>
                  Традиционные духовно-нравственные ценности не существуют в отрыве от реальной среды. Они формируются
                  там, где живёт и работает человек, и передаются через то, что он создаёт. Наш проект представляет
                  собой три карты — Золотой век, Серебряный век и Современники, — на которых отмечены места рождения и
                  творчества значимых для отечественной культуры фигур. Эти точки позволяют наглядно увидеть связь между
                  географией страны и содержанием её культурного наследия.
                </p>

                <p>
                  Как именно через эти точки формируются ценности? Когда мы наносим на карту место создания
                  произведения, мы фиксируем важную закономерность: среда определяет содержание. Столичные центры давали
                  авторам доступ к образованию и профессиональному кругу. Малые города и усадьбы формировали знание
                  народного быта и чувство родной природы. Места путешествий и вынужденных отъездов расширяли кругозор и
                  меняли оптику. Всё это находило отражение в текстах и образах, а читатель и зритель, соприкасаясь с
                  ними, неосознанно впитывал те самые ценности — любовь к Отечеству, милосердие, чувство долга, связь с
                  родной землёй.
                </p>

                <p>
                  Факт наличия точки на карте запускает и познавательный процесс. Видя географическую привязку, человек
                  задаётся вопросом: что именно здесь было создано и почему. Для ответа он обращается к биографии,
                  истории региона, культурному контексту эпохи. Так одна точка становится входом в более широкое
                  изучение, что напрямую способствует повышению интеллектуальной грамотности. В последние годы растёт
                  интерес к культурному наследию, увеличивается посещаемость учреждений культуры, расширяется аудитория
                  просветительских программ. Люди действительно стали больше интересоваться тем, что связано с
                  отечественной культурой.
                </p>

                <p>
                  Три карты проекта показывают, что этот процесс не был ограничен одной эпохой или одним регионом.
                  Культурные центры распределены по всей территории страны, и традиция продолжается сегодня — карта
                  Современников это наглядно демонстрирует. Таким образом, через простую визуализацию мест рождения и
                  творчества наш проект показывает реальный механизм того, как внедряются духовно-нравственные ценности
                  посредством российской культуры. Для курса «Основы российской государственности» это служит наглядным
                  подтверждением связи между территорией, культурой и формированием общего ценностного пространства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        onClick={onClickScrollTop}
        className={`
          cursor-pointer
          fixed bottom-6 right-6 z-9999
          w-10 h-10 md:w-12 md:h-12
          rounded-full flex items-center justify-center
          bg-[#e8d5b5] border-2 border-[#8b6914]
          text-[#3d3226] font-bold
          shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.5)]
          hover:bg-[#f0e0c0] hover:scale-110 active:scale-100
          transition-all duration-300 ease-in-out
          ${
            showScrollTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}>
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </main>
  );
}
