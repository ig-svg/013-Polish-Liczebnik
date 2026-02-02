import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Check,
  X,
  ArrowRight,
  RefreshCw,
  Trophy,
  Brain,
  ChevronRight,
  ChevronLeft,
  List,
  ExternalLink,
} from "lucide-react";

/**
 * ⚙️ НАЛАШТУВАННЯ ДЛЯ КОРИСТУВАЧА
 */
const GOOGLE_DOC_URL = "#";
const NEXT_APP_URL = "#"; // Це остання тема! Можна вести на фінальний іспит.
const PREV_APP_URL = "#"; // Посилання на ТЕМУ 12
const MENU_APP_URL = "#";

// --- БАЗА ПИТАНЬ (50 шт) - LICZEBNIK ---
const QUESTIONS_DB = [
  // --- 0-10 (Основи) ---
  {
    text: "1",
    options: ["Jeden", "Jedyn", "Raz"],
    correct: 0,
    explanation: "1 = Jeden.",
  },
  {
    text: "2",
    options: ["Dwa", "Dwo", "Dwu"],
    correct: 0,
    explanation: "2 = Dwa.",
  },
  {
    text: "3",
    options: ["Trzy", "Tszy", "Trzi"],
    correct: 0,
    explanation: "3 = Trzy.",
  },
  {
    text: "4",
    options: ["Cztery", "Czary", "Czteryery"],
    correct: 0,
    explanation: "4 = Cztery.",
  },
  {
    text: "5",
    options: ["Pięć", "Piec", "Pięc"],
    correct: 0,
    explanation: "5 = Pięć (носове ę, м'яке ć).",
  },
  {
    text: "6",
    options: ["Sześć", "Szesc", "Sześ"],
    correct: 0,
    explanation: "6 = Sześć.",
  },
  {
    text: "7",
    options: ["Siedem", "Siedim", "Siedm"],
    correct: 0,
    explanation: "7 = Siedem.",
  },
  {
    text: "8",
    options: ["Osiem", "Osię", "Oszem"],
    correct: 0,
    explanation: "8 = Osiem.",
  },
  {
    text: "9",
    options: ["Dziewięć", "Dziwięć", "Dziewieć"],
    correct: 0,
    explanation: "9 = Dziewięć.",
  },
  {
    text: "10",
    options: ["Dziesięć", "Dziesieć", "Dziesięc"],
    correct: 0,
    explanation: "10 = Dziesięć.",
  },

  // --- 11-19 (-naście) ---
  {
    text: "11",
    options: ["Jedenaście", "Jedennaście", "Jedynaście"],
    correct: 0,
    explanation: "11 = Jedenaście (одне n).",
  },
  {
    text: "12",
    options: ["Dwanaście", "Dwunaście", "Dwaście"],
    correct: 0,
    explanation: "12 = Dwanaście.",
  },
  {
    text: "13",
    options: ["Trzynaście", "Trzynaści", "Trzynascie"],
    correct: 0,
    explanation: "13 = Trzynaście.",
  },
  {
    text: "14",
    options: ["Czternaście", "Czterynaście", "Czternaśćie"],
    correct: 0,
    explanation: "14 = Czternaście.",
  },
  {
    text: "15",
    options: ["Piętnaście", "Pięćnaście", "Piętaście"],
    correct: 0,
    explanation: "15 = Piętnaście (ć змінюється на t).",
  },
  {
    text: "16",
    options: ["Szesnaście", "Sześćnaście", "Sześnaście"],
    correct: 0,
    explanation: "16 = Szesnaście (ść спрощується до s).",
  },
  {
    text: "17",
    options: ["Siedemnaście", "Siedmnaście", "Siedemnaśćie"],
    correct: 0,
    explanation: "17 = Siedemnaście.",
  },
  {
    text: "18",
    options: ["Osiemnaście", "Ośmnaście", "Osiemnaści"],
    correct: 0,
    explanation: "18 = Osiemnaście.",
  },
  {
    text: "19",
    options: ["Dziewiętnaście", "Dziewięćnaście", "Dziewietnascie"],
    correct: 0,
    explanation: "19 = Dziewiętnaście (ć змінюється на t).",
  },

  // --- 20, 30, 40 (-dzieścia / -dzieści) ---
  {
    text: "20",
    options: ["Dwadzieścia", "Dwudzieścia", "Dwadzieście"],
    correct: 0,
    explanation: "20 = Dwadzieścia.",
  },
  {
    text: "30",
    options: ["Trzydzieści", "Trzydzieścia", "Trzydzieść"],
    correct: 0,
    explanation: "30 = Trzydzieści.",
  },
  {
    text: "40",
    options: ["Czterdzieści", "Czterdzieścia", "Czterydzieści"],
    correct: 0,
    explanation: "40 = Czterdzieści.",
  },

  // --- 50-90 (-dziesiąt) ---
  {
    text: "50",
    options: ["Pięćdziesiąt", "Pięćdziesięć", "Piętdziesiąt"],
    correct: 0,
    explanation: "50 = Pięćdziesiąt (ć зберігається).",
  },
  {
    text: "60",
    options: ["Sześćdziesiąt", "Szesdziesiąt", "Sześćdziesięć"],
    correct: 0,
    explanation: "60 = Sześćdziesiąt.",
  },
  {
    text: "70",
    options: ["Siedemdziesiąt", "Siedemdziesięć", "Siedemdziesiat"],
    correct: 0,
    explanation: "70 = Siedemdziesiąt.",
  },
  {
    text: "80",
    options: ["Osiemdziesiąt", "Ośmdziesiąt", "Osiemdziesięć"],
    correct: 0,
    explanation: "80 = Osiemdziesiąt.",
  },
  {
    text: "90",
    options: ["Dziewięćdziesiąt", "Dziewiętdziesiąt", "Dziewiędziesiąt"],
    correct: 0,
    explanation: "90 = Dziewięćdziesiąt (ć зберігається).",
  },
  {
    text: "100",
    options: ["Sto", "Sta", "Stwa"],
    correct: 0,
    explanation: "100 = Sto.",
  },

  // --- Складні числа (21, 45...) ---
  {
    text: "21",
    options: ["Dwadzieścia jeden", "Dwa jeden", "Jeden i dwadzieścia"],
    correct: 0,
    explanation: "Читаємо як пишемо: 20 + 1.",
  },
  {
    text: "35",
    options: ["Trzydzieści pięć", "Trzydzieści i pięć", "Trzy pięć"],
    correct: 0,
    explanation: "30 + 5.",
  },
  {
    text: "48",
    options: ["Czterdzieści osiem", "Cztery osiem", "Czterdzieścia osiem"],
    correct: 0,
    explanation: "40 + 8.",
  },
  {
    text: "52",
    options: ["Pięćdziesiąt dwa", "Pięć dwa", "Piędziesiąt dwa"],
    correct: 0,
    explanation: "50 + 2.",
  },
  {
    text: "99",
    options: [
      "Dziewięćdziesiąt dziewięć",
      "Dziewięć dziewięć",
      "Dziewiętnaście dziewięć",
    ],
    correct: 0,
    explanation: "90 + 9.",
  },

  // --- Рід числівників (Dwa vs Dwie) ---
  {
    text: "______ (2) koty.",
    options: ["Dwa", "Dwie", "Dwoje"],
    correct: 0,
    explanation: "Чоловічий рід (Koty) &rarr; Dwa.",
  },
  {
    text: "______ (2) kobiety.",
    options: ["Dwie", "Dwa", "Dwóje"],
    correct: 0,
    explanation: "Жіночий рід (Kobiety) &rarr; Dwie.",
  },
  {
    text: "______ (2) okna.",
    options: ["Dwa", "Dwie", "Dwoje"],
    correct: 0,
    explanation: "Середній рід (Okna) &rarr; Dwa.",
  },
  {
    text: "______ (2) kawy.",
    options: ["Dwie", "Dwa", "Dwójki"],
    correct: 0,
    explanation: "Жіночий рід &rarr; Dwie.",
  },
  {
    text: "______ (2) telefony.",
    options: ["Dwa", "Dwie", "Dwój"],
    correct: 0,
    explanation: "Чоловічий неживий &rarr; Dwa.",
  },
  {
    text: "Mam ______ (1) brata.",
    options: ["jednego", "jeden", "jedny"],
    correct: 0,
    explanation: "Mam (kogo?) &rarr; Jednego (Biernik від Jeden).",
  },
  {
    text: "Mam ______ (1) siostrę.",
    options: ["jedną", "jeden", "jedna"],
    correct: 0,
    explanation: "Mam (kogo?) &rarr; Jedną (Biernik).",
  },

  // --- Порядкові (Który?) - Прикметники ---
  {
    text: "1. (перший)",
    options: ["Pierwszy", "Jedny", "Razowy"],
    correct: 0,
    explanation: "1. = Pierwszy.",
  },
  {
    text: "2. (другий)",
    options: ["Drugi", "Dwugi", "Dwatny"],
    correct: 0,
    explanation: "2. = Drugi.",
  },
  {
    text: "3. (третій)",
    options: ["Trzeci", "Trzyci", "Trzynasty"],
    correct: 0,
    explanation: "3. = Trzeci.",
  },
  {
    text: "4. (четвертий)",
    options: ["Czwarty", "Czternasty", "Czteryty"],
    correct: 0,
    explanation: "4. = Czwarty.",
  },
  {
    text: "5. (п'ятий)",
    options: ["Piąty", "Pięty", "Piecyt"],
    correct: 0,
    explanation: "5. = Piąty.",
  },
  {
    text: "6. (шостий)",
    options: ["Szósty", "Sześćty", "Szosty"],
    correct: 0,
    explanation: "6. = Szósty (ó).",
  },
  {
    text: "7. (сьомий)",
    options: ["Siódmy", "Siedemny", "Siedmy"],
    correct: 0,
    explanation: "7. = Siódmy (ó).",
  },
  {
    text: "8. (восьмий)",
    options: ["Ósmy", "Osiemny", "Osmy"],
    correct: 0,
    explanation: "8. = Ósmy (Ó).",
  },
  {
    text: "9. (дев'ятий)",
    options: ["Dziewiąty", "Dziewięćty", "Dziewity"],
    correct: 0,
    explanation: "9. = Dziewiąty.",
  },
  {
    text: "10. (десятий)",
    options: ["Dziesiąty", "Dziesięćty", "Dziesity"],
    correct: 0,
    explanation: "10. = Dziesiąty.",
  },
  {
    text: "To jest ______ (1.) raz.",
    options: ["pierwszy", "pierwsza", "pierwsze"],
    correct: 0,
    explanation: "Raz (Чол.рід) &rarr; Pierwszy.",
  },
  {
    text: "To jest ______ (2.) strona.",
    options: ["druga", "drugi", "drugie"],
    correct: 0,
    explanation: "Strona (Жін.рід) &rarr; Druga.",
  },
  {
    text: "Mieszkam na ______ (3.) piętrze.",
    options: ["trzecim", "trzeciej", "trzeciemu"],
    correct: 0,
    explanation:
      "Na (якому?) &rarr; Місцевий відмінок. Trzecie piętro &rarr; Na trzecim.",
  },
];

const PolishTrainerT13 = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showTheory, setShowTheory] = useState(true);

  // Ініціалізація
  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const shuffled = [...QUESTIONS_DB].sort(() => 0.5 - Math.random());
    setShuffledQuestions(shuffled);
    setCurrentQIndex(0);
    setScore(0);
    setCompleted(false);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (index) => {
    if (showFeedback) return;

    const question = shuffledQuestions[currentQIndex];
    const correct = index === question.correct;

    setSelectedOption(index);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < shuffledQuestions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setShowFeedback(false);
      setSelectedOption(null);
    } else {
      setCompleted(true);
    }
  };

  // --- RENDERERS ---

  if (shuffledQuestions.length === 0)
    return <div className="p-10 text-center">Завантаження...</div>;

  const question = shuffledQuestions[currentQIndex];
  const progressPercentage = Math.round(
    (currentQIndex / shuffledQuestions.length) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {/* 1. HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              A1
            </span>
            <h1 className="font-bold text-slate-800 truncate">
              Тема 13: Liczebnik
            </h1>
          </div>

          <div className="flex items-center gap-1">
            {/* Назад */}
            <a
              href={PREV_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                PREV_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Попередня тема"
            >
              <ChevronLeft size={24} />
            </a>

            {/* МЕНЮ */}
            <a
              href={MENU_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                MENU_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Усі теми"
            >
              <List size={24} />
            </a>

            {/* Вперед (ЗАБЛОКОВАНО - КІНЕЦЬ) */}
            <a
              href={NEXT_APP_URL}
              className={`p-2 rounded-full transition-colors ${
                NEXT_APP_URL === "#"
                  ? "text-slate-300 cursor-not-allowed"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              title="Курс завершено!"
            >
              <Check size={24} className="text-green-600" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-xl mx-auto w-full p-4 md:p-6 flex flex-col">
        {/* 2. THEORY BLOCK (Collapsible) */}
        <div className="mb-6 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div
            onClick={() => setShowTheory(!showTheory)}
            className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 font-semibold text-blue-700">
              <BookOpen size={20} />
              <span>Експрес-правила</span>
            </div>
            <span className="text-xs text-slate-400">
              {showTheory ? "Згорнути" : "Показати"}
            </span>
          </div>

          {showTheory && (
            <div className="p-5 text-sm leading-relaxed text-slate-700 space-y-4">
              <p>
                <b>Liczebnik (Числівник)</b> — Скільки? (Ile?) Котрий? (Który?).
              </p>

              <div className="grid grid-cols-1 gap-2">
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <strong className="block text-blue-800">
                    1. Кількісні (Ile?):
                  </strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      <b>11-19:</b> суфікс <b>-naście</b> (jedennaście,
                      dwanaście).
                    </li>
                    <li>
                      <b>20, 30, 40:</b> суфікс <b>-dzieścia / -dzieści</b>.
                    </li>
                    <li>
                      <b>50-90:</b> суфікс <b>-dziesiąt</b> (pięćdziesiąt).
                    </li>
                  </ul>
                </div>

                <div className="p-2 bg-green-50 rounded border border-green-100">
                  <strong className="block text-green-800">
                    2. Порядкові (Który?):
                  </strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Поводяться як прикметники! Мають рід.</li>
                    <li>
                      <i>
                        Pierwsz<b>y</b> dom, Drug<b>a</b> zona, Trzeci<b>e</b>{" "}
                        okno.
                      </i>
                    </li>
                  </ul>
                </div>

                <div className="p-2 bg-amber-50 rounded border border-amber-100">
                  <strong className="block text-amber-800">
                    ⚠️ Увага на правопис:
                  </strong>
                  <span className="text-xs">
                    Sześć &rarr; Szesnaście (ć спрощується). Dziewięć &rarr;
                    Dziewiętnaście.
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 mt-2">
                <a
                  href={GOOGLE_DOC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${
                    GOOGLE_DOC_URL === "#"
                      ? "text-slate-400 cursor-not-allowed"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  <ExternalLink size={14} />
                  {GOOGLE_DOC_URL === "#"
                    ? "Детальні правила (Скоро)"
                    : "Відкрити повні правила"}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 3. GAME ZONE */}
        {!completed ? (
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center mb-6 min-h-[160px] flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Питання {currentQIndex + 1} з {shuffledQuestions.length}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                {question.text}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-6">
              {question.options.map((opt, idx) => {
                let btnClass =
                  "p-4 rounded-xl font-semibold text-lg transition-all border-2 text-left relative ";

                if (showFeedback) {
                  if (idx === question.correct) {
                    btnClass += "bg-green-100 border-green-500 text-green-800";
                  } else if (selectedOption === idx) {
                    btnClass += "bg-red-100 border-red-500 text-red-800";
                  } else {
                    btnClass += "bg-white border-slate-100 text-slate-300";
                  }
                } else {
                  btnClass +=
                    "bg-white border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 shadow-sm active:scale-[0.98]";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={showFeedback}
                    className={btnClass}
                  >
                    {opt}
                    {showFeedback && idx === question.correct && (
                      <Check
                        size={20}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      />
                    )}
                    {showFeedback &&
                      idx !== question.correct &&
                      selectedOption === idx && (
                        <X
                          size={20}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        />
                      )}
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {!isCorrect && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-xl mb-4 text-sm border border-red-100 flex gap-3 items-start">
                    <Brain size={20} className="shrink-0 mt-0.5" />
                    <div>
                      <strong>Підказка:</strong> {question.explanation}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  className={`w-full p-4 rounded-xl font-bold text-lg text-white shadow-lg flex items-center justify-center gap-2 transition-all ${
                    isCorrect
                      ? "bg-green-600 hover:bg-green-700 shadow-green-200"
                      : "bg-slate-800 hover:bg-slate-900 shadow-slate-300"
                  }`}
                >
                  {currentQIndex < shuffledQuestions.length - 1
                    ? "Далі"
                    : "Завершити"}{" "}
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
            <div className="mb-6">
              {score === shuffledQuestions.length ? (
                <Trophy size={80} className="text-yellow-500 mx-auto" />
              ) : score >= shuffledQuestions.length * 0.8 ? (
                <Trophy size={80} className="text-blue-500 mx-auto" />
              ) : (
                <RefreshCw size={80} className="text-slate-300 mx-auto" />
              )}
            </div>

            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              {score === shuffledQuestions.length
                ? "Ідеально!"
                : "Тренування завершено!"}
            </h2>
            <p className="text-slate-500 mb-8 text-lg">
              Ваш результат: <strong className="text-slate-800">{score}</strong>{" "}
              з {shuffledQuestions.length}
            </p>

            <button
              onClick={restartGame}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <RefreshCw size={20} />
              Почати знову
            </button>
          </div>
        )}
      </main>

      {!completed && (
        <footer className="bg-white border-t border-slate-100 p-4">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
              <span>Прогрес</span>
              <span>
                {Math.round((score / (currentQIndex + 1)) * 100) || 0}% Успіху
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default PolishTrainerT13;
