import Commits from "./Commits";
import Profile from "./Profile";
import { Col, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import axios from 'axios';

function Home(){

    const [ commits, setCommits ] = useState( [] );
    const [ user, setUser ] = useState( {} );

    useEffect( () => {
        const getUserData = async () =>{
            const res = await axios.get('http://localhost:1337/user')
                .then( f => {
                    if( f.status === 200 ){
                        return f.data ;   
                    }else{
                        return {}
                    }
                } )
                .catch( e => {
                    console.log(`Get user data failed. ${e}`);
                    return {};
                });
            setUser( res );
        }
    
        const getCommits = async () =>{
            const res = await axios.get("http://localhost:1337/repo")
                .then( f =>{
                    if( f.status === 200 ){
                        return f.data ;   
                    }else{
                        return []
                    }
                }).catch( e => {
                    console.log(`Get commits data failed. ${e}`);
                    return [];
                });
            setCommits( res );
        }

        getUserData();
        getCommits();
    }, [])



    

    return(
        <>
            <section className="section">
                <Row className="container">
                    <Col className="col"> 
                        <Profile user ={ user }/>
                    </Col>
                    <Col className="col">
                        <Commits commits={ commits }/>
                    </Col>
                </Row>
            </section>
        </>
    )
}


export default Home;