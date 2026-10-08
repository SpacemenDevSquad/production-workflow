// The "shape" of the data this component needs.
// TypeScript checks that whoever uses <Intro /> passes all of these.
type IntroProps = {
  name: string
  major: string
  bio: string
  interests: string[]
  email: string
}

// Props are destructured right in the parameter list,
// so we can write `name` instead of `props.name`.
function Intro({ name, major, bio, interests, email }: IntroProps) {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5 text-center">
              {/* Visual element: a Bootstrap Icon inside a circle */}
              <div className="d-inline-block bg-primary text-white rounded-circle p-4 mb-4">
                <i className="bi bi-code-slash display-4"></i>
              </div>

              <h1 className="display-5 fw-bold">{name}</h1>
              <p className="lead text-primary mb-3">{major}</p>
              <p className="text-body-secondary mb-4">{bio}</p>

              {/* One badge per interest: .map() turns an array of strings into an array of JSX */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                {interests.map((interest) => (
                  <span key={interest} className="badge rounded-pill text-bg-light border">
                    {interest}
                  </span>
                ))}
              </div>

              <a href={`mailto:${email}`} className="btn btn-primary">
                <i className="bi bi-envelope me-2"></i>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
