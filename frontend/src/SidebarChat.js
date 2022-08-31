import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import "./css/SidebarChat.css";

function SidebarChat({messages}) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);
    return (
        <div className="sidebarChat">
           {/* <Avatar /> */}

           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>User Name</h2>
                    <p>last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
