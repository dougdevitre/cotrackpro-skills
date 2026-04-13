import React from 'react';

const ROLES = [
  { name: "Parent / Co-Parent", file: "cotrackpro-parent-coparent" },
  { name: "Attorney", file: "cotrackpro-attorney" },
  { name: "Judge", file: "cotrackpro-judge" },
  { name: "Guardian ad Litem", file: "cotrackpro-gal" },
  { name: "Therapist", file: "cotrackpro-therapist" },
  { name: "Mediator", file: "cotrackpro-mediator" },
  { name: "Coach", file: "cotrackpro-coach" },
  { name: "Evaluator", file: "cotrackpro-evaluator" },
  { name: "Parenting Coordinator", file: "cotrackpro-parenting-coordinator" },
  { name: "Supervisor", file: "cotrackpro-supervisor" },
  { name: "Police", file: "cotrackpro-police" },
  { name: "Advocate", file: "cotrackpro-advocate" },
  { name: "Court Clerk", file: "cotrackpro-clerk" },
  { name: "Bailiff", file: "cotrackpro-bailiff" },
  { name: "Pro Se Parent", file: "cotrackpro-parent-pro-se" },
  { name: "Survivor Safety", file: "cotrackpro-parent-survivor-safety" },
  { name: "High-Conflict Strategy", file: "cotrackpro-parent-high-conflict-strategy" },
  { name: "Alienation Support", file: "cotrackpro-parent-alienation-support" },
];

export default function App() {
  return (
    <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
          CoTrackPro Skills Directory
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
          AI-powered role skills for every participant in the family court system.
          Each skill provides specialized guidance, templates, and tools.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 1fr))',
        gap: '0.75rem',
      }}>
        {ROLES.map((role) => (
          <div
            key={role.file}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
              cursor: 'default',
              transition: 'border-color 0.15s, background 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            }}
          >
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>
              {role.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
