import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const emotions = [
  {
    name: 'Радость',
    icon: 'Smile',
    color: 'bg-yellow-100 text-yellow-700',
    description: 'Чувство удовольствия и благополучия. Радость делает нас открытыми миру и другим людям.',
    benefits: ['Укрепляет иммунитет', 'Улучшает отношения', 'Повышает творчество']
  },
  {
    name: 'Грусть',
    icon: 'CloudRain',
    color: 'bg-blue-100 text-blue-700',
    description: 'Естественная реакция на потерю. Грусть помогает переосмыслить ценности и замедлиться.',
    benefits: ['Способствует рефлексии', 'Учит эмпатии', 'Помогает принять изменения']
  },
  {
    name: 'Гнев',
    icon: 'Flame',
    color: 'bg-red-100 text-red-700',
    description: 'Энергия для защиты границ. Гнев сигнализирует о нарушении важных для нас правил.',
    benefits: ['Мобилизует силы', 'Защищает границы', 'Показывает ценности']
  },
  {
    name: 'Страх',
    icon: 'AlertTriangle',
    color: 'bg-purple-100 text-purple-700',
    description: 'Древний защитный механизм. Страх предупреждает об опасности и готовит к действию.',
    benefits: ['Повышает внимание', 'Активирует защиту', 'Учит осторожности']
  },
  {
    name: 'Удивление',
    icon: 'Sparkles',
    color: 'bg-pink-100 text-pink-700',
    description: 'Реакция на неожиданное. Удивление открывает ум для нового опыта и знаний.',
    benefits: ['Стимулирует обучение', 'Расширяет восприятие', 'Развивает гибкость']
  },
  {
    name: 'Отвращение',
    icon: 'X',
    color: 'bg-green-100 text-green-700',
    description: 'Защита от токсичного. Отвращение помогает избегать того, что вредит нашему благополучию.',
    benefits: ['Защищает здоровье', 'Формирует вкус', 'Устанавливает стандарты']
  }
];

const tests = [
  {
    title: 'Тест эмоционального интеллекта',
    description: 'Узнай, насколько хорошо ты понимаешь свои и чужие эмоции',
    questions: 12,
    time: 8,
    icon: 'Brain'
  },
  {
    title: 'Определение базовой эмоции',
    description: 'Какая эмоция преобладает в твоей жизни прямо сейчас',
    questions: 8,
    time: 5,
    icon: 'Heart'
  },
  {
    title: 'Уровень стресса',
    description: 'Оцени текущее состояние и получи рекомендации',
    questions: 10,
    time: 6,
    icon: 'Activity'
  }
];

const meditations = [
  {
    title: 'Утреннее пробуждение',
    duration: '10 мин',
    description: 'Мягкое начало дня с благодарностью и намерением',
    category: 'Утро',
    icon: 'Sunrise'
  },
  {
    title: 'Дыхание при тревоге',
    duration: '5 мин',
    description: 'Быстрая практика для снижения стресса и беспокойства',
    category: 'Скорая помощь',
    icon: 'Wind'
  },
  {
    title: 'Сканирование тела',
    duration: '15 мин',
    description: 'Глубокое расслабление через осознание физических ощущений',
    category: 'Релаксация',
    icon: 'Waves'
  },
  {
    title: 'Практика любящей доброты',
    duration: '12 мин',
    description: 'Развитие сострадания к себе и другим',
    category: 'Отношения',
    icon: 'Heart'
  },
  {
    title: 'Вечернее благодарение',
    duration: '8 мин',
    description: 'Рефлексия дня и настройка на спокойный сон',
    category: 'Вечер',
    icon: 'Moon'
  },
  {
    title: 'Работа с гневом',
    duration: '7 мин',
    description: 'Техника осознанного проживания сильных эмоций',
    category: 'Эмоции',
    icon: 'Flame'
  }
];

export default function Index() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
            Психология Эмоций
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуй мир эмоций, пройди психологические тесты и открой практики осознанности для гармоничной жизни
          </p>
        </header>

        <Tabs defaultValue="emotions" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="emotions" className="flex items-center gap-2">
              <Icon name="Smile" size={16} />
              <span className="hidden sm:inline">Эмоции</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="flex items-center gap-2">
              <Icon name="ClipboardList" size={16} />
              <span className="hidden sm:inline">Тесты</span>
            </TabsTrigger>
            <TabsTrigger value="meditations" className="flex items-center gap-2">
              <Icon name="Sparkles" size={16} />
              <span className="hidden sm:inline">Медитации</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="emotions" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Базовые эмоции</h2>
              <p className="text-muted-foreground">
                Каждая эмоция — это мудрый учитель. Познакомься с ними поближе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emotions.map((emotion, index) => (
                <Card
                  key={emotion.name}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedEmotion === emotion.name ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedEmotion(selectedEmotion === emotion.name ? null : emotion.name)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-full ${emotion.color}`}>
                        <Icon name={emotion.icon as any} size={24} />
                      </div>
                      <CardTitle className="font-heading text-xl">{emotion.name}</CardTitle>
                    </div>
                    <CardDescription>{emotion.description}</CardDescription>
                  </CardHeader>
                  {selectedEmotion === emotion.name && (
                    <CardContent className="animate-accordion-down">
                      <div className="pt-4 border-t">
                        <p className="font-semibold mb-3 text-sm">Польза эмоции:</p>
                        <ul className="space-y-2">
                          {emotion.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-sm">
                              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tests" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Психологические тесты</h2>
              <p className="text-muted-foreground">
                Узнай себя лучше через научно обоснованные методики
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test, index) => (
                <Card
                  key={test.title}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Icon name={test.icon as any} size={24} />
                      </div>
                      <Badge variant="secondary">{test.time} мин</Badge>
                    </div>
                    <CardTitle className="font-heading text-lg">{test.title}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Icon name="FileQuestion" size={16} />
                      <span>{test.questions} вопросов</span>
                    </div>
                    <Button className="w-full" size="sm">
                      Начать тест
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meditations" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-semibold mb-3">Медитации и практики</h2>
              <p className="text-muted-foreground">
                Техники осознанности для ежедневной практики
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meditations.map((meditation, index) => (
                <Card
                  key={meditation.title}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 rounded-full bg-accent text-accent-foreground">
                        <Icon name={meditation.icon as any} size={24} />
                      </div>
                      <Badge variant="outline">{meditation.category}</Badge>
                    </div>
                    <CardTitle className="font-heading text-lg">{meditation.title}</CardTitle>
                    <CardDescription>{meditation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{meditation.duration}</span>
                      </div>
                      <Button className="w-full" size="sm" variant="secondary">
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать практику
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-20 text-center text-sm text-muted-foreground border-t pt-8">
          <p>Психология — это путешествие к себе. Будьте добры к себе на этом пути 💜</p>
        </footer>
      </div>
    </div>
  );
}
