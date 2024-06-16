import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import './Style.css'
import { useEffect } from "react";

function ProjectDetail() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/campaign/${id}`);
        const result = await response.json();
        setProjectData(result);
        console.log('Fetched Data:', result); // Log the fetched data for debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className="donate-card-container">
      <div className="donate-card">
        <div className="donate-card-image">
          <img src={"http://localhost:5000"+projectData.imageUrl} alt="Project Image" />
          <span className="username">{projectData.userName}</span>
        </div>
        <div className="donate-card-content">
          <h2 className="project-name">{projectData.campaignName}</h2>
          <p className="description">{projectData.description}</p>
          <p className="goal">Goal: $10,000</p>
          <p className="raised">Raised: $5,000</p>
          <Link to="/now">
            <button className="donate-btn">Donate Now</button>
          </Link>

        </div>
      </div>
      <div className="stats-container">
        <div className="stats">
          <div className="stat">
            <p >Days Left: <span>{projectData.endsAt} Days</span></p>
          </div>
          <div className="stat">
            <p>Donors: <span>20</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectDetail;