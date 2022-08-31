import React from 'react'
import "./css/Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import piyush from './';
import SidebarChat from './SidebarChat';
function Sidebar({lastmessage}) {
    
    return (
        <div className="sidebar">


            {/* sidebar icon header */}
            <div className="sidebar_header">
                <IconButton>
                 
                </IconButton>
               <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
               </div>
            </div>
            {/* sidebar icon header end */}


            {/* sidebar search bar  */}
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" name="" id="" placeholder="Search or start new chat"/>
                </div>
            </div>
            {/* sidebar search bar end */}

            {/* user chat block */}
            <div className="sidebar_chats scrollbar-thin">

                <div className="sidebarChat">
                    <Avatar src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4h1B8CMfadXgfKeNcNleBEARIvHzdnjZRw&usqp=CAU`}/>
                    <div className="sidebarChat_info">
                        <h2>Anupam</h2>
                        <p>{lastmessage}</p>
                        
                    </div>
                </div>

              

                
            </div>
            {/* user chat block end */}


        </div>
    )
}

export default Sidebar
