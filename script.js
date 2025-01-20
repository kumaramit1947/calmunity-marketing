const chatList = [
  {
    id: 1,
    name: "Chandler",
    text: "Bro! Can you arrange drugs for me?"
  },
  {
    id: 2,
    name: "Sushant",
    text: "What! No man. But, why do you need it?"
  },
  {
    id: 3,
    name: "Chandler",
    text: "I just... I think...  I am going through depression. So maybe..."
  },
  {
    id: 4,
    name: "Sushant",
    text: "Bro! that's not the solution. Why don't you try Calmunity? It's a mental wellness app."
  },
  {
    id: 5,
    name: "Chandler",
    text: "Really! So we have got a Mental Wellness App before GTA-6, lol!"
  }
];
function createChatContainer(chatList, chatSection, index=0){
    const chat = chatList[index];
  
    const chatContainer = document.createElement("div");
  chatSection.appendChild(chatContainer);
    chatContainer.classList.add("chat-container");
    const chatName = document.createElement("div");
    chatName.classList.add("chat-name");
    const chatText = document.createElement("div");
    chatText.classList.add("chat-text");
    const chatSeparator = document.createElement("div");
    chatSeparator.classList.add("chat-separator");
    chatContainer.appendChild(chatName);
    chatContainer.appendChild(chatSeparator);
    chatContainer.appendChild(chatText);
    chatName.textContent = chat.name;
    chatSeparator.textContent = ":"
    textTypingEffect(chatText, chat);
    chatSection.scrollTop = chatSection.scrollHeight;
    if(index === chatList.length - 1) {
      
      return;
    };
    setTimeout(()=> createChatContainer(chatList, chatSection, index+1),chat.text.length*60)
  
}

function textTypingEffect(element, chat, index=0){
  element.textContent+=chat.text[index];
  if(index === chat.text.length-1) {
    if(chat.id === 5){
      const buttonSection = document.getElementsByClassName("button-section")[0];
      buttonSection.classList.remove("hide");
    }
    return;
  };

  setTimeout(()=>textTypingEffect(element, chat, index+1),50)
}

const chatSection = document.getElementsByClassName("chat-section")[0];
createChatContainer(chatList, chatSection);
