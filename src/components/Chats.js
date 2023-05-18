import React from 'react'
// import { authentication } from "./../firebaseConfig";
import './Chats.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Accordion from 'react-bootstrap/Accordion'
// import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { getUsers } from "./../store/action";
import { setChats, getChats } from "./../store/action";
// import { removeChat } from "./../store/action";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function Chats() {

    const { chats } = useSelector(state => ({
        chats: state.chats
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChats("NViW6p3fcuCoA5uUXYo"))
        //console.log('Users-->', users);

    }, []);

    const [chatUser, setChatUser] = useState({})
    const [message, setMessage] = useState("")

/*
    function startChat(user) {
        const chatsUid = merge_uid(current_user.uid, user.uid)
        setChatUser(user)
        // setChatUser(preState => {
        //   return Object.assign({}, preState, user);
        // })
        dispatch(getChats(chatsUid))
    }

    function merge_uid(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else
            return uid2 + uid1
    }
*/
    function send() {
        // const chatsUid = merge_uid(current_user.uid, chatUser.uid)
        // console.log("chatsUid-->", chatsUid)
        let data = {
            message: message,
            // name: current_user.name,
            // uid: current_user.uid,
            // chatUid: chatsUid
        }
        // console.log("data-->", data)
        dispatch(setChats(data)) //This will not only Set Chats in State but also in Firebase DB, whiich in return invoke onValue listener and cause a re-render
        setMessage("")

    }
/*
    function deleteChat(chatID) {
        const mergeddUid = merge_uid(current_user.uid, chatUser.uid)
        // console.log('Mergged-->',mergeddUid)
        // console.log('ChatUid-->',mergeddUid)

        dispatch(removeChat(mergeddUid, chatID))
    }
*/
    return (
        <section id="chats">
            <div className="container-fluid" id="chats-container">
                <div className="row" id="chats-row">
                    <div className="col-md-8 order-md-first m-auto pb-4" id="chats-col">
                        <h1>Task-2---Chat Functionality</h1>

                        <div style={{ display: 'flex', textAlign: 'left', justifyContent: 'center' }}>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    {/* <Card.Title>{chatUser.name}</Card.Title> */}
                                    <Table striped size="sm" hover>
                                        <tbody>
                                            {chats.length > 0 ?
                                                chats.map((v, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{<h6 style={{ color: "royalblue" }}>{v.message}</h6>}</td>
                                                            {/* <td>{v.uid === current_user.uid && <Button variant="outline-primary" size="sm" onClick={() => { deleteChat(v.chatUid) }}><FontAwesomeIcon icon={faTrashCan} size="lg" /></Button>}</td> */}

                                                            {/* <td>{v.uid === current_user.uid ? <h6 style={{ color: "royalblue" }}>You-> {v.message}</h6> : <h6 style={{ color: "gray" }}>{chatUser.name}-> {v.message}</h6>}</td>
                                                            <td>{v.uid === current_user.uid && <Button variant="outline-primary" size="sm" onClick={() => { deleteChat(v.chatUid) }}><FontAwesomeIcon icon={faTrashCan} size="lg" /></Button>}</td> */}
                                                        </tr>

                                                    )
                                                })
                                                :
                                                <h3>No Chats in DB</h3>
                                            }
                                        </tbody>
                                    </Table>

                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Write your message"
                                            aria-label="Write your message"
                                            aria-describedby="basic-addon2"
                                            value={message}
                                            onChange={(e) => { setMessage(e.target.value) }}
                                        />
                                        <Button variant="primary" id="button-addon2" onClick={() => send()}>Send</Button>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chats