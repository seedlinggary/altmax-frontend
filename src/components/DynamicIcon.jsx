import {
  Building2,
  Wrench,
  Users,
  LineChart,
  Smartphone,
  ShieldCheck,
  FileText,
  HardHat,
  HeartHandshake,
  MapPin,
  Home,
  History,
  Zap,
  Calculator,
  Cpu,
  TrendingUp,
  HelpCircle,
} from 'lucide-react'

// Explicit map (rather than `import * as Icons`) so unused icons get tree-shaken.
const ICONS = {
  Building2,
  Wrench,
  Users,
  LineChart,
  Smartphone,
  ShieldCheck,
  FileText,
  HardHat,
  HeartHandshake,
  MapPin,
  Home,
  History,
  Zap,
  Calculator,
  Cpu,
  TrendingUp,
}

export default function DynamicIcon({ name, className = 'h-6 w-6' }) {
  const IconComponent = ICONS[name] || HelpCircle
  return <IconComponent className={className} />
}
