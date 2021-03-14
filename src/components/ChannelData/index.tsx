import React, { useRef, useEffect } from 'react';
import ChannelMessage,{Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcone } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>

                {Array.from(Array(10).keys()).map((n) =>(
                    <ChannelMessage
                    key={n}
                    author="Antonio Estevam Filho"
                    date="22/10/2021"
                    content="Hoje é o meu aniversário"
                />
                ))}


                <ChannelMessage
                    author="Lucas Silva "
                    date="22/10/2021"
                    content={
                        <>
                            <Mention>@Antonio</Mention> vamos jogar?
                        </>                        
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>

                <Input type="text" placeholder="Conversar em #chate-liver" />
                
                <InputIcone/>

            </InputWrapper>
        </Container>
    );
};
//https://youtu.be/x4FdZd2-_uU?t=8503
export default ChannelData;