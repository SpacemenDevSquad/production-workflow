import Intro from './components/Intro.tsx'
import { useState } from 'react'

const interests = [
  'AI & Machine Learning',
  'Cybersecurity',
  'Game Design',
  'Mobile Development',
]

type ReportKind = 'bug' | 'feature'
type Report = {
  id: string
  text: string
  kind: ReportKind
}

const sampleReport: Report = {
  id: '1',
  text: 'Navigation link is broken',
  kind: 'bug',
}
const initialReports: Report[] = [
  { id: '1', text: 'Navigation link is broken', kind: 'bug' },
  { id: '2', text: 'Add dark mode', kind: 'feature' },
]

function App() {
  const [reports, setReports] = useState<Report[]>([]);
  const [newReportText, setNewReportText] = useState('');

  function addReport() {
    const text = newReportText.trim();

    if (text.length === 0) return
    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,
      kind: 'bug',
    }

    setReports([...reports, newReport]);
    setNewReportText('');
  }

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return (
    <div className="bg-body-tertiary min-vh-100">
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container">
          <span className="navbar-brand fw-semibold">Peter Brumbach</span>
        </div>
      </nav>

      <main>
        <Intro
          name="Peter Brumbach"
          major="Computer Science, Grove City College"
          bio="I'm a computer science student who likes building things people can use, from Unity games to self-hosted web apps. Outside of code, I design lighting for theater productions."
          interests={interests}
          email="pmbrumbach@protonmail.com"
        />
      </main>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <input type="text" value={newReportText} onChange={(event) => setNewReportText(event.target.value)} placeholder="Describe a bug..." aria-label="New bug report"/>
        <button type="button" onClick={addReport}>
          Add Bug
        </button>
        <ul>
          {initialReports.map((report) => (
            <li key={report.id}>
              {report.text} ({report.kind})
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
