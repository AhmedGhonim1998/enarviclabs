import { Component } from '@angular/core';

interface ProjectMetric {
  value: string;
  label: string;
  highlight?: boolean;
}
interface Project {
  category: string;
  status: string;
  locations: string;
  title: string;
  subtitle: string;
  description: string;
  architecture: string[];
  metrics: ProjectMetric[];
  linkLabel: string;
  year: string;
  browserUrl: string;
  image: string;
  imageAlt: string;
  footerLeft: string;
  footerRight: string;
}
@Component({
  selector: 'app-solutions',
  imports: [],
  templateUrl: './solutions.html',
  styleUrl: './solutions.css',
})
export class Solutions {

  projects: Project[] = [
    {
      category: 'FINTECH',
      status: 'Active Series A Scale',
      locations: 'London · New York',
      title: 'Synapse Core',
      subtitle: 'Enterprise Workflow Telemetry & Continuous Compliance Engine',
      description:
        'Tier-1 investment banks and neobanks struggle with disjointed regulatory reporting pipelines. Synapse Core orchestrates high-throughput transaction telemetry into real-time regulatory ledgers, guaranteeing immutable cross-jurisdiction audit trails with sub-second reconciliations.',
      architecture: ['Rust Event Loop', 'Kafka · ClickHouse', 'GraphQL Federation', 'Zero-Knowledge Verification'],
      metrics: [
        { value: '$12.4M', label: 'Current ARR Scale' },
        { value: '99.999%', label: 'Ledger Accuracy', highlight: true },
        { value: '< 340ms', label: 'Settlement Cycle' },
      ],
      linkLabel: 'View Technical Architecture Blueprint',
      year: 'Incubated 2023',
      browserUrl: 'app.synapsecore.io/telemetry',
      image: 'images/project1.png',
      imageAlt: 'Synapse Core Web Application Interface',
      footerLeft: 'PROD // TELEMETRY_STREAM',
      footerRight: 'LATENCY 4.2ms',
    },
    {
      category: 'CLOUD INFRA',
      status: 'Enterprise Live',
      locations: 'Singapore · Tokyo',
      title: 'Aura Cloud',
      subtitle: 'Distributed Data Lakehouse Management UI & Query Accelerator',
      description:
        'Aura Cloud delivers an ultra-responsive control layer over object storage data lakes (S3/GCS/Azure Blob). By weaving DuckDB-Wasm query acceleration directly into a distributed orchestration console, engineering teams analyze petabyte-scale Iceberg tables in fractional time without egress penalties.',
      architecture: ['Apache Iceberg', 'WebAssembly / DuckDB', 'Arrow Flight SQL', 'Golang Cluster Daemon'],
      metrics: [
        { value: '3.8x', label: 'Query Speedup' },
        { value: '-68%', label: 'Cloud Egress Cost', highlight: true },
        { value: '4.2 PB', label: 'Managed Under Mesh' },
      ],
      linkLabel: 'View Infrastructure Whitepaper',
      year: 'Deployed 2024',
      browserUrl: 'app.auracloud.io/lakehouse',
      image: 'images/project2.png',
      imageAlt: 'Aura Cloud Management UI',
      footerLeft: 'AURA-02 // DUCKDB MESH',
      footerRight: '32 NODES SYNCED',
    },
    {
      category: 'FINTECH',
      status: 'Active Series A Scale',
      locations: 'London · New York',
      title: 'Synapse Core',
      subtitle: 'Enterprise Workflow Telemetry & Continuous Compliance Engine',
      description:
        'Tier-1 investment banks and neobanks struggle with disjointed regulatory reporting pipelines. Synapse Core orchestrates high-throughput transaction telemetry into real-time regulatory ledgers, guaranteeing immutable cross-jurisdiction audit trails with sub-second reconciliations.',
      architecture: ['Rust Event Loop', 'Kafka · ClickHouse', 'GraphQL Federation', 'Zero-Knowledge Verification'],
      metrics: [
        { value: '$12.4M', label: 'Current ARR Scale' },
        { value: '99.999%', label: 'Ledger Accuracy', highlight: true },
        { value: '< 340ms', label: 'Settlement Cycle' },
      ],
      linkLabel: 'View Technical Architecture Blueprint',
      year: 'Incubated 2023',
      browserUrl: 'app.synapsecore.io/telemetry',
      image: 'images/project3.png',
      imageAlt: 'Synapse Core Web Application Interface',
      footerLeft: 'PROD // TELEMETRY_STREAM',
      footerRight: 'LATENCY 4.2ms',
    },
  ];
}

