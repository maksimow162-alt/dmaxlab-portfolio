import type { LucideIcon } from 'lucide-react';
import {
  Bot,
  BrainCircuit,
  Workflow,
  Code2,
  Gauge,
  Gem,
  Handshake,
  Layers,
  LayoutTemplate,
  MessageCircle,
  Monitor,
  PenTool,
  Rocket,
  Scissors,
  Search,
  ShieldCheck,
  Smartphone,
  Store,
  Target,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export interface PortfolioProject {
  name: string;
  url: string;
  preview: { src: string; alt: string; width: number; height: number };
  niche: string;
  description: string;
  tags: string[];
  accent: 'blue' | 'violet';
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const navItems: NavItem[] = [
  { label: 'О студии', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Этапы', href: '#process' },
  { label: 'Преимущества', href: '#advantages' },
];

export const services: ServiceItem[] = [
  {
    icon: Code2,
    title: 'Веб-разработка',
    description:
      'Создаём современные цифровые продукты: от презентационных сайтов и интернет-магазинов до функциональных веб-приложений. Продумываем структуру, дизайн и пользовательский опыт.',
    items: [
      'Корпоративные сайты и лендинги',
      'Интернет-магазины и каталоги',
      'Веб-приложения и личные кабинеты',
      'Адаптивный дизайн и интеграции',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI-решения',
    description:
      'Интегрируем возможности искусственного интеллекта в цифровые продукты и бизнес-процессы. Помогаем создавать интеллектуальные инструменты для работы с информацией и клиентами.',
    items: [
      'AI-ассистенты и чат-помощники',
      'Интеграция языковых моделей',
      'Обработка и анализ информации',
      'Интеллектуальные функции для сервисов',
    ],
  },
  {
    icon: Bot,
    title: 'Telegram-боты',
    description:
      'Разрабатываем Telegram-ботов для взаимодействия с клиентами и автоматизации повседневных задач. От простых сценариев до интеграций с внешними сервисами.',
    items: [
      'Боты для приёма заявок',
      'Уведомления и автоматические ответы',
      'Интеграции с API и внешними сервисами',
      'Панели управления и системы доступа',
    ],
  },
  {
    icon: Workflow,
    title: 'Автоматизация бизнеса',
    description:
      'Соединяем цифровые инструменты и автоматизируем повторяющиеся процессы. Помогаем сократить ручную работу и сделать рабочие процессы удобнее.',
    items: [
      'Автоматизация обработки заявок',
      'Интеграции между сервисами',
      'Связь сайтов, ботов и CRM',
      'Автоматические уведомления и сценарии',
    ],
  },
];

export const baseDeliverables: Advantage[] = [
  {
    icon: Smartphone,
    title: 'Адаптация под смартфоны',
    description: 'Вёрстка проверяется на телефонах и планшетах: меню, кнопки и формы удобны на любом экране.',
  },
  {
    icon: Search,
    title: 'Базовая SEO-настройка',
    description:
      'Мета-заголовки и описания для каждой страницы, понятная структура заголовков H1-H3 и подписи к изображениям. Это техническая основа, а не продвижение в поиске.',
  },
  {
    icon: Layers,
    title: 'Понятная структура',
    description: 'Меню, разделы и путь от первого экрана до связи с вами продуманы так, чтобы не было тупиков.',
  },
  {
    icon: Gauge,
    title: 'Быстрая загрузка',
    description: 'Изображения подготавливаются под веб, чтобы страницы открывались быстро даже с мобильного интернета.',
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'BLACK LABEL',
    url: 'https://black-label-barbersh-ss0i.bolt.host/',
    preview: {
      src: `${import.meta.env.BASE_URL}previews/black-label.jpg`,
      alt: 'Главная страница сайта BLACK LABEL: чёрно-золотой дизайн барбершопа',
      width: 1200,
      height: 630,
    },
    niche: 'Барбершоп',
    description:
      'Цифровая презентация премиального барбершопа. Разработали выразительную визуальную концепцию, продумали структуру услуг и создали удобный интерфейс для взаимодействия с клиентами.',
    tags: ['Web-разработка', 'UI/UX-дизайн', 'Адаптивный интерфейс'],
    accent: 'blue',
  },
  {
    name: 'Чистый Дом',
    url: 'https://kazan-clean-home-demo.lovable.app/',
    preview: {
      src: `${import.meta.env.BASE_URL}previews/chistyi-dom.png`,
      alt: 'Главная страница сайта «Чистый Дом»: уборка квартир и офисов в Казани',
      width: 1920,
      height: 1080,
    },
    niche: 'Клининг',
    description:
      'Цифровой продукт для клининговой компании. Продумали структуру услуг, визуальную систему и удобный сценарий взаимодействия с потенциальными клиентами.',
    tags: ['Web-разработка', 'UX-проектирование', 'Лендинг'],
    accent: 'violet',
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    title: 'Обсуждение задачи',
    description: 'Изучаем вашу идею, цели бизнеса и задачи, которые должен решать будущий цифровой продукт.',
  },
  {
    icon: Handshake,
    title: 'Планирование проекта',
    description: 'Определяем функциональность, технологии, стоимость, сроки и согласовываем план разработки.',
  },
  {
    icon: PenTool,
    title: 'Проектирование решения',
    description: 'Продумываем структуру, пользовательский сценарий, интерфейс и логику будущего продукта.',
  },
  {
    icon: Code2,
    title: 'Разработка',
    description: 'Создаём продукт, реализуем необходимые функции, интеграции и автоматизацию.',
  },
  {
    icon: ShieldCheck,
    title: 'Тестирование',
    description: 'Проверяем функциональность, удобство работы, корректность интеграций и исправляем обнаруженные ошибки.',
  },
  {
    icon: Rocket,
    title: 'Запуск проекта',
    description: 'Подготавливаем продукт к работе, публикуем его и передаём необходимые инструкции по использованию.',
  },
];

export const advantages: Advantage[] = [
  {
    icon: Target,
    title: 'Решения под реальные задачи',
    description: 'Не предлагаем технологии ради технологий. Изучаем задачу и подбираем подходящий способ её решения.',
  },
  {
    icon: BrainCircuit,
    title: 'Современный технологический подход',
    description: 'Используем возможности веб-разработки, искусственного интеллекта и современных цифровых инструментов.',
  },
  {
    icon: Workflow,
    title: 'Единая цифровая экосистема',
    description: 'Продумываем интеграции и автоматизацию, чтобы разные инструменты работали вместе, а не по отдельности.',
  },
];

export const aboutPoints: { icon: LucideIcon; text: string }[] = [
  {
    icon: Code2,
    text: 'Разрабатываем цифровые продукты: от современных сайтов до полноценных веб-приложений и сервисов.',
  },
  {
    icon: BrainCircuit,
    text: 'Внедряем AI-решения и интеллектуальные инструменты, которые помогают решать реальные задачи бизнеса.',
  },
  {
    icon: Workflow,
    text: 'Объединяем сервисы, интеграции и автоматизацию в удобные системы, которые упрощают рабочие процессы.',
  },
];
