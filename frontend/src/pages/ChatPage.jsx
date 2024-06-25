import { useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
  };
  useEffect(() => {
    fetchChat();
  }, []);
  return <div>Chat</div>;
};

export default ChatPage;
