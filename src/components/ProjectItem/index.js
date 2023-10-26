import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, path} = projectDetails

  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
        <a href={path} target="_blank" rel="noopener noreferrer">
          View More
        </a>
      </li>
    </>
  )
}

export default ProjectItem
