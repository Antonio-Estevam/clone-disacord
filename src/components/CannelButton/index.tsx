import React from 'react';
import { HashtagIcon } from '../ChannelInfo/styles';

import { Container, HastagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;     
}

const CannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HastagIcon />
                <span>{channelName}</span>
            </div>
            
            <div>
                <InviteIcon />
                <SettingsIcon/>
            </div>
        </Container>
    );
};

export default CannelButton;