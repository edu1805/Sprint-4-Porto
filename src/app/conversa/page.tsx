import { useEffect } from "react";

declare global {
    interface Window {
      watsonAssistantChatOptions: {
        integrationID: string;
        region: string;
        serviceInstanceID: string;
        clientVersion?: string;
        onLoad: (instance: any) => void;
      };
    }
  }
  
  export default function Conversa() {
  
    useEffect(() => {
      // Definindo as opções do Watson Assistant no objeto window
      window.watsonAssistantChatOptions = {
        integrationID: "bc79f3b1-ccc9-42d0-97f1-59222ca9e07d", // O ID da integração
        region: "us-south", // Região onde sua integração está hospedada
        serviceInstanceID: "be0981d1-7e5f-4b85-978d-e9792df83dea", // ID da instância de serviço
        onLoad: async (instance: any) => {
          await instance.render(); // Renderizando o chat na página
        },
      };
  
      // Carregando o script do Watson Assistant
      setTimeout(() => {
        const t = document.createElement('script');
        t.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
          window.watsonAssistantChatOptions.clientVersion || 'latest'
        }/WatsonAssistantChatEntry.js`;
        document.head.appendChild(t);
      }, 0);
    }, []);
  
    return (
      <>
        <h2 className = "text-black text-center text-[40px] mt-[6em]">Clique a direita para iniciar a conversa</h2>
        <div id="watson-assistant-chat" />
      </>
    );
  }