import { House, MessageCircle, Gem, Bell } from 'lucide-react';

export const navigationItems = [
  { icon: <House size={42} strokeWidth={3} absoluteStrokeWidth color="white" />, path: '/home' },
  {
    icon: <MessageCircle size={42} strokeWidth={3} absoluteStrokeWidth color="white" />,
    path: '/message',
  },
  { icon: <Gem size={42} strokeWidth={3} absoluteStrokeWidth color="white" />, path: '/home' },
  { icon: <Bell size={42} strokeWidth={3} absoluteStrokeWidth color="white" />, path: '/home' },
];
