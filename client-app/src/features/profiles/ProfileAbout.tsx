import React, { useState } from 'react';
import { Button, Grid, Header, Image, Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfileEdit from './ProfileEdit';


interface Props {
    profile: Profile;
    isCurrentUser: boolean;
}

export default function ProfileAbout({profile, isCurrentUser}: Props) {
    const [editMode, setEditMode] = useState(false);
    
    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width='16'>
                    <Header floated='left' icon='user' content={`About ${profile?.displayName}`} />
                    {isCurrentUser && (
                      <Button floated='right' basic content={editMode ? 'Cancel' : 'Edit Profile'}
                        onClick={() => setEditMode(!editMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width='16'>
                    {editMode ? <ProfileEdit setEditMode={setEditMode} /> :
                    <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
}