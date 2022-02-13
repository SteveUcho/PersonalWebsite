import './PhotoCard.css'

function PhotoCard(props) {
    return (
        <div className="photo-card" style={{backgroundImage: "url("+props.backgroundImage+")"}}></div>
    )
}

export default PhotoCard