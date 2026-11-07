import type { LucideIcon } from 'lucide-react';
import {
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
    icon: Monitor,
    title: 'Сайты-визитки',
    description:
      'Сайт из 2-4 страниц: главная с коротким предложением, страница о вас, страница услуг и контакты. Подходит, когда нужно быстро показать, чем вы занимаетесь, и дать клиенту способ связаться.',
    items: [
      'Главная страница с предложением и кнопками связи',
      'Страницы «О нас» и «Услуги» с понятным описанием',
      'Блок с контактами, адресом и режимом работы',
      'Оформление в стиле вашего бренда',
    ],
  },
  {
    icon: Rocket,
    title: 'Лендинги',
    description:
      'Одна страница, построенная вокруг одного предложения: заголовок, выгоды, примеры работ, ответы на вопросы и призыв к действию. Подходит для акций и запуска новой услуги.',
    items: [
      'Структура из 6-8 блоков под одно предложение',
      'Призыв к действию в начале и в конце страницы',
      'Ссылки на мессенджеры и социальные сети',
      'Анимации, которые не мешают чтению',
    ],
  },
  {
    icon: Scissors,
    title: 'Сайты для салонов и услуг',
    description:
      'Сайт с каталогом услуг, страницами мастеров или специалистов и понятным путём к записи. Для салонов красоты, барбершопов, клиник, фитнес-студий и других сервисных бизнесов.',
    items: [
      'Каталог услуг с разделами и описаниями',
      'Страницы мастеров или специалистов',
      'Кнопки записи по телефону и в мессенджере',
      'Раздел с работами, который вы наполняете сами',
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
      src: '/previews/black-label.jpg',
      alt: 'Главная страница сайта BLACK LABEL: чёрно-золотой дизайн барбершопа',
      width: 1200,
      height: 630,
    },
    niche: 'Барбершоп',
    description:
      'Демонстрационный сайт барбершопа: выразительная подача бренда, понятная структура услуг и адаптивная верстка.',
    tags: ['Барбершоп', 'Визитка', 'Адаптивность'],
    accent: 'blue',
  },
  {
    name: 'Чистый Дом',
    url: 'https://kazan-clean-home-demo.lovable.app/',
    preview: {
      src: '/previews/chistyi-dom.png',
      alt: 'Главная страница сайта «Чистый Дом»: уборка квартир и офисов в Казани',
      width: 1920,
      height: 1080,
    },
    niche: 'Клининг',
    description:
      'Демонстрационный сайт клининговой компании: спокойная визуальная система, ясная подача услуг и простой путь к заявке.',
    tags: ['Клининг', 'Услуги', 'Лендинг'],
    accent: 'violet',
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageCircle,
    title: 'Обсуждение задачи',
    description: 'Разбираем ваш бизнес, цели сайта и то, что должен сделать посетитель.',
  },
  {
    icon: Handshake,
    title: 'Согласование стоимости и сроков',
    description: 'Фиксируем состав работ, стоимость и сроки. Разработка начинается только после вашего согласования.',
  },
  {
    icon: PenTool,
    title: 'Разработка дизайна',
    description: 'Создаём визуальный стиль и макеты, которые подчёркивают ваш бренд.',
  },
  {
    icon: Code2,
    title: 'Создание сайта',
    description: 'Превращаем утверждённый дизайн в быстрый и аккуратный сайт.',
  },
  {
    icon: ShieldCheck,
    title: 'Проверка и исправления',
    description: 'Проверяем работу на разных экранах, формы, ссылки и скорость загрузки, затем вносим правки.',
  },
  {
    icon: Rocket,
    title: 'Публикация и передача сайта',
    description: 'Запускаем сайт и передаём его вам вместе с пояснением, что делать дальше, чтобы его развивать.',
  },
];

export const advantages: Advantage[] = [
  {
    icon: Target,
    title: 'Индивидуальный подход',
    description: 'Каждый сайт проектируется под конкретный бизнес, а не собирается из шаблона.',
  },
  {
    icon: Smartphone,
    title: 'Адаптация под смартфоны',
    description: 'Большинство клиентов заходит с телефона, поэтому мобильная версия продумана с самого начала.',
  },
  {
    icon: Layers,
    title: 'Понятная структура',
    description: 'Посетитель быстро находит нужную информацию и понимает, как оставить заявку.',
  },
];

export const aboutPoints: { icon: LucideIcon; text: string }[] = [
  { icon: Store, text: 'Сайты для малого бизнеса: салонов, мастеров и сервисных компаний' },
  { icon: LayoutTemplate, text: 'Чистый дизайн, который работает на узнаваемость вашего бренда' },
  { icon: Gem, text: 'Аккуратная разработка без лишних элементов и перегруженных экранов' },
];
