function Projects(){
    return(
        <>
            <h1>Projects</h1>
            <ul className="projectBox">
                <li>
                    <a href="/projects/143" className="projectLink"><img className="projectImage" src={require('../assets/images/good-day-to-code.jpg')} alt="It's a good day to code"/></a>
                    <br /><a href="/projects/143" className="projectLink">It's a good day to code</a>
                </li>
                <li>
                    <a href="/projects/486" className="projectLink"><img className="projectImage" src={require('../assets/images/eat-sleep-code-repeat.jpg')} alt="Eat. Sleep. Code. Repeat."/></a>
                    <br /><a href="/projects/486" className="projectLink">Eat. Sleep. Code. Repeat.</a>
                </li>
            </ul>
        </>

    )
}
export default Projects