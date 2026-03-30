import { Building2, Droplet, Factory, FlaskConical, Pill, Ship } from 'lucide-react'

/**
 * Full industries page content (/industries). Home `IndustriesSection` still uses `bigDataPage.industries`.
 */
export const industriesPageItems = [
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    Icon: Droplet,
    description:
      'From upstream exploration to midstream logistics and downstream operations, we help energy leaders integrate SCADA, ERP, and real-time analytics so teams can monitor assets, reduce unplanned downtime, and meet stringent safety and environmental standards. Our solutions bridge legacy field systems with modern cloud and edge platforms—enabling predictive maintenance, production optimization, and auditable workflows across the value chain.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    Icon: Factory,
    description:
      'Smart factories demand connected machines, transparent shop-floor data, and agile supply chains. We design and implement MES integration, IoT telemetry, digital work instructions, and quality analytics that align OT and IT without disrupting production. The result is higher OEE, faster changeovers, and traceability from raw material to finished goods—backed by governance your auditors expect.',
  },
  {
    id: 'process-industry',
    title: 'Process Industry',
    Icon: FlaskConical,
    description:
      'Chemicals, materials, and continuous-process plants operate under tight batch recipes, energy constraints, and regulatory oversight. We deliver historian connectivity, batch reporting, laboratory and quality system integration, and operator-friendly dashboards so engineers can tune processes with confidence. Agent-assisted monitoring and exception workflows help surface anomalies early—before they become costly incidents or compliance gaps.',
  },
  {
    id: 'marine',
    title: 'Marine',
    Icon: Ship,
    description:
      'Maritime operations span fleet management, port logistics, classification data, and crew safety in harsh, disconnected environments. We build resilient integrations between vessel systems, shore-side ERP, and maintenance platforms—with offline-capable patterns where connectivity is intermittent. Unified visibility supports voyage efficiency, regulatory documentation, and lifecycle asset care across global routes.',
  },
  {
    id: 'aec',
    title: 'AEC',
    Icon: Building2,
    description:
      'Architecture, engineering, and construction firms juggle BIM, project controls, subcontractor collaboration, and capital planning. We connect design tools, document management, and financial systems so project managers see a single version of cost, schedule, and scope. Data pipelines from site IoT and progress reporting feed executive dashboards—improving forecast accuracy and reducing rework across complex builds.',
  },
  {
    id: 'pharma',
    title: 'Pharma',
    Icon: Pill,
    description:
      'Life sciences require validated systems, data integrity (ALCOA+), and seamless handoffs from R&D through commercial manufacturing. We implement integration layers around LIMS, MES, QMS, and ERP—preserving audit trails while accelerating batch release and serialization compliance. Analytics and controlled automation help quality and operations teams respond faster without compromising regulatory rigor.',
  },
]
