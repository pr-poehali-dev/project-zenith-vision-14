import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Что такое QR-квест и как он работает?",
    answer:
      "QR-квест — это обучающий маршрут, где участники сканируют QR-коды в разных точках и выполняют задания прямо на смартфоне. Никаких приложений устанавливать не нужно — всё открывается через браузер по ссылке из QR-кода.",
  },
  {
    question: "Нужен ли смартфон у каждого участника?",
    answer:
      "Да, для сканирования QR-кодов нужен смартфон с камерой. Подходит любой современный телефон — iPhone или Android. Стандартная камера умеет сканировать QR-коды без дополнительных приложений.",
  },
  {
    question: "Можно ли проводить квест командами?",
    answer:
      "Да! Участники могут проходить квест как индивидуально, так и в командах. Команда сканирует один QR-код вместе, обсуждает задание и движется дальше — это отлично работает для тимбилдинга и групповых занятий.",
  },
  {
    question: "Как создать свой квест?",
    answer:
      "Вы составляете задания и маршрут, а мы генерируем QR-коды для каждой точки. Распечатайте их и разместите в нужных местах. Участники следуют по маршруту, сканируя коды и выполняя задания.",
  },
  {
    question: "Где можно проводить квест?",
    answer:
      "Где угодно: в школе, офисе, музее, на улице, в торговом центре или на природе. Квест работает в любом месте, где есть возможность разместить распечатанные QR-коды.",
  },
  {
    question: "Как начать создание квеста?",
    answer:
      "Нажмите кнопку «Попробовать квест», расскажите нам о своей идее — и мы поможем настроить всё необходимое. Первый квест можно запустить уже сегодня.",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Всё о QR-квесте — коротко
            <br className="hidden md:block" />
            и по делу.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}