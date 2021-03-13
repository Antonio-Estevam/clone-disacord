import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcone } from './styles';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages/>

            <InputWrapper>

                <Input />
                
                <InputIcone/>

            </InputWrapper>
        </Container>
    );
};

export default ChannelData;