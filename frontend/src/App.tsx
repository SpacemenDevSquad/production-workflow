import Intro from './components/Intro.tsx'

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

function App() {
  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }
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
        <p>{sampleReport.text} ({sampleReport.kind})</p>
      </section>
    </div>
  )
}

export default App
