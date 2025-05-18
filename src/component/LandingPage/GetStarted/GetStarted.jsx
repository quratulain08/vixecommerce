import "./GetStarted.css"
import image from "../../../assets/GetStarted.png"

const GetStarted = () => {
  window.scrollTo(0,0);
  return (
    <section className="get-started-section">
      <div className="gradient-overlay"></div>
      <div className="get-started-container">
        <div className="get-started-content">
          <div className="expert-tag">AMAZON EXPERTS</div>

          <h1 className="main-heading">
            Your end-to-end
            <br />
            <span className="highlight">brand management</span>
            <br />
            is done in one <span className="no-break">place</span>
          </h1>

          <div className="expert-description">
            <p>
              We have individual expert team members of <span className="highlight-text">Product Research</span> &{" "}
              <span className="highlight-text">Sourcing Experts</span>,{" "}
              <span className="highlight-text">Content writers</span>,{" "}
              <span className="highlight-text">Graphic Designers</span>, <span className="highlight-text">SEO</span>,
              and <span className="highlight-text">PPC managers</span> all under one roof. No need to hire across
              multiple agencies or freelancers to pay them a large amount separately when you can all get it done in one
              place.
            </p>
          </div>

          <div className="cta-container">
            <button className="book-call-button">Book Call Now</button>
          </div>
        </div>

        <div className="image-container">
          <img src={image || "/placeholder.svg"} alt="Brand Management" className="get-started-image" />
        </div>
      </div>
    </section>
  )
}

export default GetStarted
