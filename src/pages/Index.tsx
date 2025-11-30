import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const scenarios = [
  {
    id: 1,
    title: 'Первое свидание',
    expectation: {
      title: 'Ожидание',
      description: 'Идеальный вечер, непринужденная беседа до утра, мгновенная химия и понимание с полуслова.',
      icon: 'Heart',
      color: 'text-pink-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Неловкие паузы, опоздание на 15 минут, разговоры о погоде и поиск общих тем.',
      icon: 'Coffee',
      color: 'text-amber-500'
    },
    insight: 'Настоящая близость строится постепенно. Нервозность — это нормально, она показывает, что вам не всё равно.',
    category: 'Отношения'
  },
  {
    id: 2,
    title: 'Новая работа',
    expectation: {
      title: 'Ожидание',
      description: 'Вы сразу станете частью команды, быстро освоите все процессы и покажете блестящие результаты.',
      icon: 'Briefcase',
      color: 'text-blue-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Путаница с доступами, незнакомые системы, чувство потерянности и учёба в первые месяцы.',
      icon: 'Laptop',
      color: 'text-slate-500'
    },
    insight: 'Адаптация занимает 3-6 месяцев. Не сравнивайте свой первый день с чужими успехами спустя годы.',
    category: 'Карьера'
  },
  {
    id: 3,
    title: 'Переезд в новый город',
    expectation: {
      title: 'Ожидание',
      description: 'Новая захватывающая жизнь, множество друзей, постоянные приключения и открытия.',
      icon: 'Plane',
      color: 'text-purple-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Одиночество первых месяцев, тоска по привычному, поиск новых связей и рутина обустройства.',
      icon: 'Home',
      color: 'text-orange-500'
    },
    insight: 'Ностальгия — это часть перехода. Новые корни прорастают медленно, но именно это делает их крепкими.',
    category: 'Изменения'
  },
  {
    id: 4,
    title: 'Саморазвитие',
    expectation: {
      title: 'Ожидание',
      description: 'Прочитаю книгу — и моя жизнь кардинально изменится. Сразу стану лучшей версией себя.',
      icon: 'BookOpen',
      color: 'text-emerald-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Знания остаются теорией без практики. Изменения требуют ежедневных маленьких усилий.',
      icon: 'TrendingUp',
      color: 'text-teal-500'
    },
    insight: 'Трансформация — это не событие, а процесс. 1% улучшения каждый день даёт 37-кратный рост за год.',
    category: 'Личное'
  },
  {
    id: 5,
    title: 'Социальные сети vs жизнь',
    expectation: {
      title: 'Ожидание',
      description: 'Безупречная жизнь других: идеальные отношения, карьера, путешествия и счастье 24/7.',
      icon: 'Instagram',
      color: 'text-rose-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Люди показывают highlight-reel. За красивым фото — обычные будни, проблемы и сомнения.',
      icon: 'Eye',
      color: 'text-gray-500'
    },
    insight: 'Сравнение — вор радости. Ваша обычная жизнь так же ценна, как чужие отредактированные моменты.',
    category: 'Социум'
  },
  {
    id: 6,
    title: 'Терапия и психолог',
    expectation: {
      title: 'Ожидание',
      description: 'Психолог даст волшебные советы, и все проблемы решатся за пару сессий.',
      icon: 'Sparkles',
      color: 'text-yellow-500'
    },
    reality: {
      title: 'Реальность',
      description: 'Терапия — это труд. Психолог не даёт ответы, а помогает вам самим их находить.',
      icon: 'MessageCircle',
      color: 'text-indigo-500'
    },
    insight: 'Изменения начинаются с осознания. Готовность к честности с собой важнее поиска быстрого решения.',
    category: 'Психология'
  }
];

const principles = [
  {
    title: 'Эффект разрыва ожиданий',
    description: 'Чем выше ожидания, тем сильнее разочарование. Счастье = Реальность − Ожидания.',
    icon: 'TrendingDown',
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Позитивная иллюзия',
    description: 'Мы склонны переоценивать будущие события и недооценивать текущий момент.',
    icon: 'Glasses',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Планирование ошибок',
    description: 'Люди систематически недооценивают время и усилия, необходимые для выполнения задач.',
    icon: 'Clock',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Гедоническая адаптация',
    description: 'Мы быстро привыкаем к хорошему и возвращаемся к базовому уровню счастья.',
    icon: 'RefreshCw',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Ошибка атрибуции',
    description: 'Мы судим себя по намерениям, а других — по их действиям и результатам.',
    icon: 'Users',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    title: 'Парадокс выбора',
    description: 'Больше вариантов ведёт к более высоким ожиданиям и большей вероятности разочарования.',
    icon: 'GitBranch',
    color: 'bg-pink-50 border-pink-200'
  }
];

const practices = [
  {
    title: 'Техника "Лучший/Реальный/Худший"',
    description: 'Перед событием продумайте три сценария: оптимистичный, реалистичный и пессимистичный. Это снижает эмоциональные качели.',
    steps: [
      'Опишите идеальный исход',
      'Представьте наиболее вероятный',
      'Подумайте о худшем варианте',
      'Примите, что любой из них нормален'
    ],
    icon: 'List',
    duration: '10 мин'
  },
  {
    title: 'Дневник благодарности настоящему',
    description: 'Каждый вечер записывайте 3 вещи, которые в вашей текущей реальности уже хороши — без сравнения с будущим.',
    steps: [
      'Найдите тихое место',
      'Вспомните сегодняшний день',
      'Запишите 3 момента благодарности',
      'Почувствуйте их ценность'
    ],
    icon: 'BookHeart',
    duration: '5 мин'
  },
  {
    title: 'Медитация принятия',
    description: 'Практика осознанного наблюдения за разницей между ожиданиями и реальностью без осуждения.',
    steps: [
      'Примите удобную позу',
      'Вспомните недавнее разочарование',
      'Наблюдайте эмоции без оценки',
      'Отпустите необходимость контроля'
    ],
    icon: 'Flower',
    duration: '15 мин'
  },
  {
    title: 'Вопросы для пересмотра',
    description: 'Когда чувствуете разочарование, задайте себе эти вопросы для переосмысления ситуации.',
    steps: [
      'Какие ожидания у меня были?',
      'Откуда они взялись?',
      'Что хорошего есть в реальности?',
      'Чему это меня учит?'
    ],
    icon: 'HelpCircle',
    duration: '7 мин'
  }
];

export default function Index() {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('scenarios');

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 py-20 mb-12"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/fbfdb689-971d-4493-ab0b-f5890a30c46c/files/90a23a7a-0531-48a1-92f3-1f1b1a9add00.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Психология восприятия
            </Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ожидание и Реальность
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Почему жизнь редко соответствует нашим представлениям о ней — и как с этим работать для большего счастья
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="scenarios" className="flex items-center gap-2">
              <Icon name="Split" size={16} />
              <span className="hidden sm:inline">Сценарии</span>
            </TabsTrigger>
            <TabsTrigger value="psychology" className="flex items-center gap-2">
              <Icon name="Brain" size={16} />
              <span className="hidden sm:inline">Психология</span>
            </TabsTrigger>
            <TabsTrigger value="practices" className="flex items-center gap-2">
              <Icon name="Target" size={16} />
              <span className="hidden sm:inline">Практики</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scenarios" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Типичные ситуации</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Узнайте себя в этих сценариях и поймите психологию разрыва между ожиданиями и реальностью
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {scenarios.map((scenario, index) => (
                <Card
                  key={scenario.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    selectedScenario === scenario.id ? 'ring-2 ring-primary scale-[1.02]' : ''
                  }`}
                  onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">
                          {scenario.category}
                        </Badge>
                        <CardTitle className="font-heading text-xl mb-2">{scenario.title}</CardTitle>
                      </div>
                      <Icon
                        name={selectedScenario === scenario.id ? 'ChevronUp' : 'ChevronDown'}
                        size={20}
                        className="text-muted-foreground"
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={scenario.expectation.icon as any} size={18} className={scenario.expectation.color} />
                          <h3 className="font-semibold text-sm">{scenario.expectation.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{scenario.expectation.description}</p>
                      </div>

                      <div className="p-4 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name={scenario.reality.icon as any} size={18} className={scenario.reality.color} />
                          <h3 className="font-semibold text-sm">{scenario.reality.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{scenario.reality.description}</p>
                      </div>
                    </div>

                    {selectedScenario === scenario.id && (
                      <div className="pt-4 border-t animate-accordion-down">
                        <div className="flex gap-3 p-4 bg-accent/50 rounded-lg">
                          <Icon name="Lightbulb" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold mb-2">Психологический инсайт</h4>
                            <p className="text-sm text-muted-foreground">{scenario.insight}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="psychology" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Когнитивные искажения</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Научные принципы, объясняющие, почему наш мозг создаёт нереалистичные ожидания
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <Card
                  key={principle.title}
                  className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${principle.color}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="p-3 rounded-full bg-background w-fit mb-3">
                      <Icon name={principle.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg">{principle.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{principle.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-orange-200">
              <div className="flex gap-4">
                <Icon name="BookOpen" size={32} className="text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-3">Формула счастья</h3>
                  <p className="text-lg mb-4 text-muted-foreground">
                    <span className="font-semibold text-foreground">Счастье = Реальность − Ожидания</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Это не значит, что нужно ничего не ожидать. Но осознанность в формировании ожиданий позволяет
                    видеть жизнь такой, какая она есть — и находить в ней больше хорошего. Снижение нереалистичных
                    ожиданий не делает нас пессимистами, а помогает быть благодарными за настоящее.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="practices" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Практики работы с ожиданиями</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Инструменты для развития реалистичного и сострадательного взгляда на жизнь
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practices.map((practice, index) => (
                <Card
                  key={practice.title}
                  className="hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon name={practice.icon as any} size={24} className="text-primary" />
                      </div>
                      <Badge variant="secondary">{practice.duration}</Badge>
                    </div>
                    <CardTitle className="font-heading text-lg">{practice.title}</CardTitle>
                    <CardDescription>{practice.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-semibold text-sm">Шаги практики:</p>
                      <ul className="space-y-2">
                        {practice.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                              {idx + 1}
                            </span>
                            <span className="text-muted-foreground pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать практику
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex gap-4">
                <Icon name="Heart" size={32} className="text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl font-semibold mb-3">Принцип сострадания к себе</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Разочарование в реальности часто связано с внутренней критикой: "Я должен был знать", "Почему я
                    так наивен", "Другие бы справились лучше". Но ожидания — это не ошибка мышления, а попытка мозга
                    подготовиться к будущему.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Будьте добры к себе</span> в моменты, когда жизнь
                    идёт не по плану. Это не слабость — это мудрость принятия несовершенства мира и себя в нём.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-20 text-center text-sm text-muted-foreground border-t pt-8">
          <p className="mb-2">
            "Ожидание — это привязанность к конкретному исходу. Надежда — это открытость к возможностям."
          </p>
          <p className="text-xs">— Исследования по позитивной психологии</p>
        </footer>
      </div>
    </div>
  );
}
