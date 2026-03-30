/**
 * Long-form copy for /services/:serviceId pages — keyed by services.js `id`.
 */
export const serviceDetailsById = {
  erp: {
    heroLead:
      'Modern ERP aligns finance, HR, supply chain, and operations on one source of truth—so leaders see the same numbers and teams move in sync.',
    overview: [
      'We help you select, implement, and evolve ERP platforms around how your business actually runs—not generic templates. That means clean master data, integrated workflows, and reporting your teams trust.',
      'Whether you are consolidating legacy systems or replacing spreadsheets, we focus on adoption: clear roles, training, and change support so the platform delivers value after go-live.',
    ],
    capabilities: [
      'Finance, procurement, inventory, and project accounting on a unified ledger',
      'HR, payroll, and workforce planning integrated with operations',
      'Manufacturing, quality, and maintenance aligned to demand and supply',
      'Governance, security, and audit-ready controls by design',
    ],
    outcomes: [
      'Fewer manual reconciliations and faster period close',
      'Better inventory and working-capital visibility',
      'Scalable processes as you add sites, products, or entities',
    ],
  },
  eai: {
    heroLead:
      'Integration is the backbone of digital transformation—when applications share events and data reliably, your people stop copying and start deciding.',
    overview: [
      'We design integration architectures that fit your landscape: APIs, messaging, ETL, and iPaaS where they belong. Patterns are documented, monitored, and owned so changes do not break production.',
      'From legacy mainframes to SaaS, we connect systems without turning every project into a one-off script—governance, versioning, and observability are part of the delivery.',
    ],
    capabilities: [
      'API design, event streams, and batch pipelines for hybrid estates',
      'Canonical data models and mapping between operational systems',
      'Error handling, replay, and alerting for operational resilience',
      'Security, identity, and least-privilege access across integrations',
    ],
    outcomes: [
      'Faster onboarding of new applications and partners',
      'Reduced duplicate entry and reconciliation effort',
      'Clear ownership when something breaks—fix it once, fix it right',
    ],
  },
  'de-bi': {
    heroLead:
      'Data engineering and BI turn raw signals into trusted metrics—so dashboards reflect reality and analysts spend time on insight, not cleanup.',
    overview: [
      'We build lakehouse-style pipelines, dimensional models, and semantic layers that match how your business asks questions. Quality checks and lineage are built in—not bolted on later.',
      'From executive KPIs to operational drill-downs, we align metrics to decisions: one definition of revenue, one view of inventory, one path from source to board pack.',
    ],
    capabilities: [
      'Ingestion, transformation, and orchestration for batch and near–real time',
      'Warehouse / lake design, slowly changing dimensions, and conformed dimensions',
      'Self-service BI with governed datasets and row-level security',
      'Performance tuning, cost control, and documentation for scale',
    ],
    outcomes: [
      'Single version of the truth for critical business measures',
      'Shorter time from question to answer across teams',
      'Foundation for AI and advanced analytics on clean data',
    ],
  },
  'agentic-ai': {
    heroLead:
      'Agentic AI pairs language and reasoning with tools and guardrails—so automation handles ambiguity where rules alone fall short.',
    overview: [
      'We prototype and harden agents against your real workflows: ticketing, document intake, scheduling, and exception handling—with human-in-the-loop where risk requires it.',
      'Security, prompt injection defense, and evaluation against your data are non-negotiable. We help you move from demo to production without surprise behavior in front of customers.',
    ],
    capabilities: [
      'Tool use against approved APIs, databases, and knowledge bases',
      'Retrieval with citation, access control, and freshness policies',
      'Evaluation harnesses, logging, and rollback for safe iteration',
      'Integration with existing IAM, audit, and monitoring stacks',
    ],
    outcomes: [
      'Automation for knowledge-heavy tasks with measurable quality',
      'Faster resolution and fewer swivel-chair handoffs',
      'A path to scale that your risk and compliance teams can stand behind',
    ],
  },
  iot: {
    heroLead:
      'IoT connects the physical world to your digital backbone—telemetry, alerts, and commands where seconds matter for safety and uptime.',
    overview: [
      'We help you ingest device data at scale, normalize protocols, and route events to the right systems—MES, CMMS, analytics, or ticketing—without drowning in noise.',
      'Edge vs cloud, offline tolerance, and firmware update strategy are decided up front so your architecture survives real plant and field conditions.',
    ],
    capabilities: [
      'Device onboarding, identity, and certificate lifecycle',
      'Streaming ingestion, time-series storage, and anomaly signals',
      'Integration with maintenance, quality, and supply workflows',
      'Dashboards and alerting tuned to operator and engineering roles',
    ],
    outcomes: [
      'Higher asset uptime and fewer unplanned stops',
      'Earlier detection of drift, wear, or environmental risk',
      'Data ready for digital twin and optimization initiatives',
    ],
  },
  'digital-twins': {
    heroLead:
      'Digital twins mirror assets and processes so you can monitor, simulate, and optimize before committing capital or downtime.',
    overview: [
      'We combine IoT feeds, engineering models, and operational data into living representations—useful for production planning, energy use, and what-if scenarios.',
      'The twin evolves with the asset: configuration changes, sensor calibration, and process updates stay reflected so decisions are based on the plant as it runs today.',
    ],
    capabilities: [
      '3D / logical twin scoping tied to business outcomes',
      'Simulation hooks for throughput, energy, and maintenance scenarios',
      'Integration with ERP, MES, and analytics for closed-loop insight',
      'Roadmaps from pilot line to fleet-scale rollout',
    ],
    outcomes: [
      'Lower risk when changing layouts, schedules, or recipes',
      'Better capex and energy decisions backed by scenarios',
      'Shared language between engineering, operations, and leadership',
    ],
  },
}
