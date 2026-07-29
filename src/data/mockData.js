import {
  Activity,
  BarChart3,
  CalendarDays,
  Compass,
  HeartPulse,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'

export const features = [
  {
    title: 'Menstrual Tracker',
    description: 'Understand your cycle patterns with gentle reminders and effortless logging.',
    icon: CalendarDays,
    badge: 'Cycle insights',
  },
  {
    title: 'Symptom Tracker',
    description: 'Log mood, energy, pain, and symptoms to spot meaningful patterns over time.',
    icon: Activity,
    badge: 'Daily check-ins',
  },
  {
    title: 'Disease Library',
    description: 'Explore clear, medically reviewed information about common women’s health concerns.',
    icon: ShieldCheck,
    badge: 'Trusted knowledge',
  },
  {
    title: 'Wellness Tips',
    description: 'Receive tailored wellness routines that support rest, nutrition, and recovery.',
    icon: Sparkles,
    badge: 'Personalized care',
  },
  {
    title: 'Community',
    description: 'Connect with supportive voices, peer stories, and expert-led spaces.',
    icon: Users,
    badge: 'Inclusive support',
  },
  {
    title: 'Health Dashboard',
    description: 'Keep every insight in one beautiful view with actionable recommendations.',
    icon: BarChart3,
    badge: 'Live overview',
  },
]

export const stats = [
  { label: 'Active members', value: '120K+' },
  { label: 'Health insights tracked', value: '4.8M' },
  { label: 'Care plans improved', value: '96%' },
  { label: 'Expert-led resources', value: '300+' },
]

export const testimonials = [
  {
    quote:
      'HerCare helped me feel more in tune with my body and made wellness feel calm, clear, and achievable.',
    name: 'Maya T.',
    role: 'Wellness Member',
  },
  {
    quote:
      'The dashboard feels luxurious and useful at once. I finally have a place to understand my patterns.',
    name: 'Dr. Nia P.',
    role: 'Entrepreneur',
  },
  {
    quote:
      'Every feature is crafted with care. The interface is thoughtful, polished, and genuinely supportive.',
    name: 'Lina S.',
    role: 'Creative Director',
  },
]

export const faqs = [
  {
    question: 'Is HerCare only for tracking periods?',
    answer:
      'No. HerCare supports wellness, symptom awareness, educational guidance, and a broader view of health habits.',
  },
  {
    question: 'Can I access my dashboard without signing up?',
    answer:
      'The dashboard is protected and requires a simple account sign-up or login experience for privacy-minded access.',
  },
  {
    question: 'Is the experience suitable for mobile users?',
    answer:
      'Yes. Every screen is designed to feel refined and effortless across mobile, tablet, and desktop.',
  },
]

export const dashboardStats = [
  { label: 'Today’s energy', value: '82%', change: '+8%', icon: Sparkles },
  { label: 'Cycle balance', value: 'Stable', change: 'On track', icon: Compass },
  { label: 'Recovery score', value: '91/100', change: '+5%', icon: HeartPulse },
  { label: 'Care notes', value: '12', change: 'Updated', icon: Stethoscope },
]

export const recentActivities = [
  { title: 'Symptom log updated', time: '12 mins ago', detail: 'Tracked energy and mood patterns.' },
  { title: 'Wellness reminder set', time: '1 hour ago', detail: 'Meditation and hydration plan saved.' },
  { title: 'Community check-in', time: 'Yesterday', detail: 'Shared progress with your support circle.' },
]

export const quickActions = [
  { title: 'Add wellness note', description: 'Capture how you feel today.' },
  { title: 'Review insights', description: 'See trends in your health story.' },
  { title: 'Explore resources', description: 'Open the disease library and community guides.' },
]
