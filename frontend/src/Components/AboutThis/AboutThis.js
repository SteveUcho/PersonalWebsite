import { Container } from "react-bootstrap"

function AboutThis() {
    return (
        <div id="aboutThis" className="big-section monokai-cream-bg">
            <Container>
                <h1><strong>About This Website</strong></h1>
                <h5 className="pb-2">An Important Note</h5>
                <p className="about-me-blurb">
                    This website seeks to tell the story of who I am as a collection of interests and hobbies.
                    This website is a sort of self reflection, and quite frankly the hardest part in the making of this website was the writing.
                    I plan to use this website as a platform to display and put to practice my skills in Front and Back End Developement, and General Software Development.
                    
                </p>
            </Container>
        </div>
    )
}

export default AboutThis