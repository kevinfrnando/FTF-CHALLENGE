import { Col, Image, Row } from "react-bootstrap";
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
function Profile( props ){
    const { user } = props; 

    return(
        <>
            <a href="https://www.kevinvergara.com" target="_blank">
                <Image 
                    className="profile-image" 
                    src="https://avatars.githubusercontent.com/u/37157835?v=4"/>
            </a>
            <h4 style={{ marginTop:"10px"}}>{user.name}</h4>
            <h6 style={{ color: "gray" }}>OWNER</h6>
            <div className="profile-bio">
                <b>Bio: </b>{ user.bio }<br/>
                <b>Location: </b>{ user.location }<br/>
                <b>GitHub User since: </b>{user.created_at}<br/>
                <b>Public Repos: </b>{ user.public_repos }<br/>
                <b>Total Repos: </b>{ user.total_private_repos }<br/>
            </div>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <a href={user.html_url} target="_blank">
                        <AiFillGithub size="40"/>
                    </a>
                </Col>
                <Col xs lg="2"> 
                    <a href={`https://twitter.com/${user.twitter_username}`} target="_blank">
                        <AiFillTwitterCircle size="40"/>
                    </a>
                </Col>
            </Row>
        </>
    )
}


export default Profile;