import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

export default observer(function ProfilePage() {
    const {username} = useParams();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile, isCurrentUser, setActiveTab} = profileStore;

    useEffect(() => {
        if (username) loadProfile(username);
        return () => {
            setActiveTab(0);
        }
    }, [loadProfile, username]);
    return (
        <Grid>
            <Grid.Column width={16}>
                {profile && 
                <>
                <ProfileHeader profile={profile} />
                <ProfileContent profile={profile} isCurrentUser={isCurrentUser}/>
                </>}
             </Grid.Column>
        </Grid>
    )
})