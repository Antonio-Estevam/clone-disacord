import React from 'react';
import CannelButton from '../CannelButton';

import { Container, Category, AddCategoriaIcon } from './styles';

const ChannelList: React.FC = () => {
    return <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoriaIcon />
            </Category>

            <CannelButton channelName="chat-livre" />
            <CannelButton channelName="trabalho" />
            <CannelButton channelName="lolzino" />
            <CannelButton channelName="csgo" />
            <CannelButton channelName="valorant" /> 
        </Container>
    
};

export default ChannelList;