import { useContext, useEffect, useRef, useState } from 'react';
import { SessionContext } from '../../context/sessionContext';
import Sidebar from '../ui/sideBar/Sidebar';
import ChatRoom from '../chatRoom/ChatRoom';
import NewChatOverlay from '../ui/newChatOverlay/NewChatOverlay';
import { useOuterClick } from 'react-outer-click';


const ChatsPage = (props) => {
  const {setNewChatOpen, newChatOpen} = useContext(SessionContext)
  const [roomId, setRoomId] = useState(0);
  const sideBarRef = useRef(null);


 useOuterClick(sideBarRef, (event) => {
    if (sideBarRef.current && newChatOpen) {
        setNewChatOpen(false);
    }
  }); 

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="grid grid-cols-default w-full h-full">
        <div className="col-span-5 border-r border-gray-300">
          <Sidebar currentRoomId={roomId} setRoomId={setRoomId} setNewChatOpen={setNewChatOpen}>
            <NewChatOverlay setRoomId={setRoomId}   />
          </Sidebar>
        </div>
          <ChatRoom roomId={roomId} data={props.data} />
      </div>
    </div>
  );
};

export default ChatsPage;