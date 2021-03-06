import React from 'react';

import { Container,
     Profile,
     Avatar,
     UserData,
     Icons,
     MicIcon,
     HeadsetIcon,
     SettingsIcon 
    } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <strong>Antonio Estevam</strong>
                    <span>#7765</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon/>
                <HeadsetIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    );
};

export default UserInfo;


//https://youtu.be/x4FdZd2-_uU?t=5906