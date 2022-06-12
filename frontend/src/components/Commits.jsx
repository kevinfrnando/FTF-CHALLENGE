import { Card } from "react-bootstrap";

function Commits( props ){

    const { commits } = props; 
    return(
        <>
            <h3>Commit History</h3>
            <div className="commits-container">
                {
                    commits.map( ( e ) => (
                        <Card key={ e.sha} className="commit-card">
                            <Card.Header> { e.commit.author.date} </Card.Header>
                            <Card.Body>
                                <Card.Title> { e.commit.message }</Card.Title>
                                <Card.Text>
                                    <b>Author: </b><a href={e?.author?.url} target="_blank">{ e?.commit?.author?.name}</a><br/>
                                    <b>Email: </b>{ e?.commit?.author?.email}<br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}


export default Commits;