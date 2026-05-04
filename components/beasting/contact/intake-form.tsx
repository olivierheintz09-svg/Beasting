'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '../icon'

const STEPS = [
  { id: 'company',   label: 'BEDRIJF' },
  { id: 'team',      label: 'TEAM' },
  { id: 'goal',      label: 'DOEL' },
  { id: 'logistics', label: 'LOGISTIEK' },
  { id: 'contact',   label: 'CONTACT' },
]

type FormData = {
  company: string; industry: string
  teamSize: string; fitness: string
  goal: string; goalNotes: string
  duration: string; timing: string; location: string
  name: string; role: string; email: string; phone: string; notes: string
}

const INIT: FormData = {
  company: '', industry: '',
  teamSize: '20-40', fitness: 'gemiddeld',
  goal: 'leiderschap', goalNotes: '',
  duration: 'kort', timing: 'q3-2026', location: 'NL',
  name: '', role: '', email: '', phone: '', notes: '',
}

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <div style={{ font: '700 11px/1 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-widest)', color: 'var(--ink-black)', marginBottom: 12 }}>
      {children}
      {optional && <span style={{ marginLeft: 8, opacity: 0.5, fontWeight: 400 }}>· OPTIONEEL</span>}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '16px 18px',
  background: 'transparent', border: '1.5px solid var(--ink-black)',
  color: 'var(--ink-black)', font: '500 16px/1.4 var(--font-sans)', outline: 'none',
}

function SegBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} type="button" style={{
      flex: 1, padding: '14px 16px',
      background: active ? 'var(--ink-black)' : 'transparent',
      color: active ? 'var(--brand-bone)' : 'var(--ink-black)',
      border: '1.5px solid var(--ink-black)', cursor: 'pointer',
      font: '500 12px/1.2 var(--font-sans)', textTransform: 'uppercase',
      letterSpacing: 'var(--track-wider)', transition: 'all 220ms',
    }}>{children}</button>
  )
}

function StepCompany({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 32px' }}>
        OVER UW BEDRIJF.
      </h2>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <FieldLabel>Bedrijfsnaam</FieldLabel>
          <input style={inputStyle} value={data.company} onChange={e => set('company', e.target.value)} placeholder="bv. NOCCO Benelux" />
        </div>
        <div>
          <FieldLabel>Branche / sector</FieldLabel>
          <input style={inputStyle} value={data.industry} onChange={e => set('industry', e.target.value)} placeholder="bv. FMCG, Technologie, Finance" />
        </div>
      </div>
    </div>
  )
}

function StepTeam({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 32px' }}>
        WIE GAAT MEE?
      </h2>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div>
          <FieldLabel>Aantal deelnemers</FieldLabel>
          <div style={{ display: 'flex', gap: 0 }}>
            {['8-20', '20-40', '40-80', '80+'].map(s => (
              <SegBtn key={s} active={data.teamSize === s} onClick={() => set('teamSize', s)}>{s}</SegBtn>
            ))}
          </div>
        </div>
        <div>
          <FieldLabel>Gemiddeld fitnessniveau</FieldLabel>
          <div style={{ display: 'flex', gap: 0 }}>
            {[['laag', 'Laag'], ['gemiddeld', 'Gemiddeld'], ['hoog', 'Hoog'], ['gemengd', 'Gemengd']].map(([k, l]) => (
              <SegBtn key={k} active={data.fitness === k} onClick={() => set('fitness', k)}>{l}</SegBtn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StepGoal({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 32px' }}>
        WAT WILT U BEREIKEN?
      </h2>
      <FieldLabel>Belangrijkste doel</FieldLabel>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginBottom: 32 }}>
        {[
          ['leiderschap', 'Leiderschap onder druk'],
          ['onboarding',  'Onboarding nieuwe lichting'],
          ['transitie',   'Transitie / verandering'],
          ['momentum',    'Sales- of ops-momentum'],
          ['fitness',     'Fitness & gezondheid'],
          ['client',      'Klant- of partner-event'],
        ].map(([k, l]) => (
          <SegBtn key={k} active={data.goal === k} onClick={() => set('goal', k)}>{l}</SegBtn>
        ))}
      </div>
      <FieldLabel optional>Vertel ons meer over de context</FieldLabel>
      <textarea
        rows={4}
        style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-sans)' }}
        value={data.goalNotes}
        onChange={e => set('goalNotes', e.target.value)}
        placeholder="Vrije tekst — context, geschiedenis, specifieke wensen..."
      />
    </div>
  )
}

function StepLogistics({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 32px' }}>
        LOGISTIEK.
      </h2>
      <div style={{ display: 'grid', gap: 32 }}>
        <div>
          <FieldLabel>Gewenste duur</FieldLabel>
          <div className="form-grid" style={{ display: 'flex', gap: 0 }}>
            {[['kort', '3-6 uur'], ['lang', '12-24 uur'], ['maat', 'Op maat'], ['nvt', 'Weet ik nog niet']].map(([k, l]) => (
              <SegBtn key={k} active={data.duration === k} onClick={() => set('duration', k)}>{l}</SegBtn>
            ))}
          </div>
        </div>
        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <FieldLabel>Voorkeurstiming</FieldLabel>
            <div style={{ display: 'flex', gap: 0 }}>
              {[['q2-2026', "Q2 '26"], ['q3-2026', "Q3 '26"], ['q4-2026', "Q4 '26"], ['flex', 'Flexibel']].map(([k, l]) => (
                <SegBtn key={k} active={data.timing === k} onClick={() => set('timing', k)}>{l}</SegBtn>
              ))}
            </div>
          </div>
          <div>
            <FieldLabel>Voorkeurslocatie</FieldLabel>
            <div style={{ display: 'flex', gap: 0 }}>
              {[['NL', 'Heel NL'], ['rand', 'Randstad'], ['eigen', 'Eigen locatie'], ['nvt', 'Nog open']].map(([k, l]) => (
                <SegBtn key={k} active={data.location === k} onClick={() => set('location', k)}>{l}</SegBtn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepContact({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div>
      <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 32px' }}>
        WAAR BEREIKEN WE U?
      </h2>
      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <FieldLabel>Naam</FieldLabel>
          <input style={inputStyle} value={data.name} onChange={e => set('name', e.target.value)} placeholder="Voor- en achternaam" />
        </div>
        <div>
          <FieldLabel>Functie</FieldLabel>
          <input style={inputStyle} value={data.role} onChange={e => set('role', e.target.value)} placeholder="bv. Hoofd People & Culture" />
        </div>
        <div>
          <FieldLabel>E-mail</FieldLabel>
          <input type="email" style={inputStyle} value={data.email} onChange={e => set('email', e.target.value)} placeholder="naam@bedrijf.nl" />
        </div>
        <div>
          <FieldLabel>Telefoon</FieldLabel>
          <input type="tel" style={inputStyle} value={data.phone} onChange={e => set('phone', e.target.value)} placeholder="+31 6 ..." />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <FieldLabel optional>Aanvullende opmerkingen</FieldLabel>
          <textarea rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-sans)' }} value={data.notes} onChange={e => set('notes', e.target.value)} placeholder="Bijzonderheden, dieetwensen, vragen..." />
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .form-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  )
}

export default function IntakeForm() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [data, setData] = useState<FormData>(INIT)

  const set = (k: keyof FormData, v: string) => setData(d => ({ ...d, [k]: v }))

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 0' }}>
        <Icon name="check" size={64} color="var(--ink-black)" stroke={2} style={{ margin: '0 auto 32px' }} />
        <div className="kicker" style={{ color: '#6a5a52', marginBottom: 24 }}>INTAKE-AANVRAAG VERSTUURD</div>
        <h2 className="display-condensed" style={{ color: 'var(--ink-black)', margin: '0 0 24px' }}>
          ONTVANGEN.
        </h2>
        <p style={{ font: 'var(--type-body-lg)', color: '#3a2a26', maxWidth: 560, margin: '0 auto 40px' }}>
          Wij bellen u binnen één werkdag terug op <strong style={{ color: 'var(--ink-black)' }}>{data.phone || data.email}</strong>. Eerst luisteren, daarna pas voorstellen.
        </p>
        <Link href="/" className="btn-stencil btn-stencil--ink" style={{ padding: '16px 28px' }}>← Terug naar home</Link>
      </div>
    )
  }

  return (
    <>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 48, borderTop: '2px solid var(--ink-black)', borderBottom: '1px solid rgba(10,7,7,0.18)' }}>
        {STEPS.map((s, i) => (
          <div key={s.id} style={{
            flex: 1, padding: '20px 12px',
            borderRight: i < STEPS.length - 1 ? '1px solid rgba(10,7,7,0.18)' : 'none',
            background: i === step ? 'var(--ink-black)' : 'transparent',
            color: i === step ? 'var(--brand-bone)' : (i < step ? 'var(--ink-black)' : '#9a8a82'),
            cursor: i < step ? 'pointer' : 'default',
            transition: 'background 220ms',
          }} onClick={() => i < step && setStep(i)}>
            <div className="roman" style={{ font: '700 11px/1 var(--font-titling)', letterSpacing: 'var(--track-widest)', marginBottom: 6, color: 'inherit', opacity: 0.7 }}>
              STAP {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{ font: '700 14px/1 var(--font-sans)', textTransform: 'uppercase', letterSpacing: 'var(--track-wider)', color: 'inherit' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Step content */}
      <div key={step} style={{ animation: 'pageIn 280ms var(--ease-out)' }}>
        {step === 0 && <StepCompany   data={data} set={set} />}
        {step === 1 && <StepTeam      data={data} set={set} />}
        {step === 2 && <StepGoal      data={data} set={set} />}
        {step === 3 && <StepLogistics data={data} set={set} />}
        {step === 4 && <StepContact   data={data} set={set} />}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(10,7,7,0.18)' }}>
        <button
          onClick={() => setStep(s => Math.max(s - 1, 0))}
          disabled={step === 0}
          className="btn-stencil btn-stencil--ink"
          style={{ padding: '14px 28px', opacity: step === 0 ? 0.3 : 1 }}
        >
          <Icon name="arrow-left" size={14} /> Terug
        </button>
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep(s => Math.min(s + 1, STEPS.length - 1))}
            className="btn-stencil btn-stencil--ink"
            style={{ padding: '14px 28px', background: 'var(--ink-black)', color: 'var(--brand-bone)' }}
          >
            Volgende <Icon name="arrow-right" size={14} />
          </button>
        ) : (
          <button
            onClick={() => setDone(true)}
            className="btn-stencil btn-stencil--red"
            style={{ padding: '14px 32px' }}
          >
            Verstuur intake-aanvraag <Icon name="arrow-right" size={14} />
          </button>
        )}
      </div>
    </>
  )
}
