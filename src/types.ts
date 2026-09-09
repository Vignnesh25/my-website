export interface ProjectMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  code: string;
  category: string;
  statusBadge: string;
  statusType: 'orange' | 'black' | 'gray';
  title: string;
  subtitle: string;
  compatibility: string;
  description: string;
  metrics: ProjectMetric[];
  tags: string[];
  footerIndicator: {
    icon: string;
    text: string;
  };
  actionText: string;
  schematics: {
    microcontroller: string;
    sensors: string[];
    protocols: string[];
    firmwareLang: string;
    sampleCode: string;
    pinoutTable: { pin: string; function: string; note: string }[];
  };
}

export interface SkillItem {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  category: 'embedded' | 'ai' | 'iot' | 'web' | 'workflow';
  tools: string[];
  level: string;
  colSpan?: boolean;
}

export interface CredentialItem {
  id: string;
  type: 'degree' | 'certification';
  title: string;
  issuer: string;
  issuerBadge: string;
  period: string;
  status: string;
  emphasis?: string;
  verificationId?: string;
  skillsAcquired: string[];
}

export interface TelemetryLog {
  timestamp: string;
  sensor: string;
  channel: string;
  value: string;
  status: 'NOMINAL' | 'TRIGGER' | 'SYNC';
}
