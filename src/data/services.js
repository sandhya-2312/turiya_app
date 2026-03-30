import {
  BarChart2,
  Cpu,
  Database,
  Monitor,
  PieChart,
  TrendingUp,
} from 'react-feather'

export const servicesList = [
  {
    id: 'erp',
    icon: Database,
    title: 'ERP',
    desc: 'Unify finance, HR, operations, and supply chain in one place—fewer silos, automated workflows, and real-time visibility for growth.',
    iconMod: 'pasona-services-card__icon--1',
  },
  {
    id: 'eai',
    icon: Monitor,
    title: 'Enterprise Application Integration',
    desc: 'Connect your systems so data and processes flow automatically—less manual work, clearer visibility, faster transformation.',
    iconMod: 'pasona-services-card__icon--2',
  },
  {
    id: 'de-bi',
    icon: PieChart,
    title: 'Data Engineering & Business Intelligence',
    desc: 'Build pipelines and analytics that turn raw data into reliable insight—so teams decide faster and run smarter operations.',
    iconMod: 'pasona-services-card__icon--3',
  },
  {
    id: 'agentic-ai',
    icon: TrendingUp,
    title: 'Agentic AI',
    desc: 'Goal-driven AI that reasons, acts, and adapts with light oversight—scaling intelligent automation where work is complex.',
    iconMod: 'pasona-services-card__icon--4',
  },
  {
    id: 'iot',
    icon: BarChart2,
    title: 'Internet of Things',
    desc: 'Connect equipment and systems for live monitoring and prediction—better asset control, uptime, and productivity.',
    iconMod: 'pasona-services-card__icon--5',
  },
  {
    id: 'digital-twins',
    icon: Cpu,
    title: 'Digital Twins',
    desc: 'Virtual models of assets and processes for monitoring, simulation, and optimization—less downtime and clearer decisions.',
    iconMod: 'pasona-services-card__icon--6',
  },
]

export function getServiceById(id) {
  return servicesList.find((s) => s.id === id)
}
