import theme from "lib/styles/theme";
import styled from "styled-components";

type ProfileType = {
    name: string;
    job: string;
    team: string;
    introduction: string,
    imageUrl: string,
}

const ProfileStyled = styled.div`
    display: flex;
    background-color: white;
    border-radius: 24px;
    padding: 20px;
    
    .info{
        margin-left: 15px;
    }
    .name{
        font-weight: bold;
        font-size: 18px;
    }
    .team{
        font-size: 12px;
        font-weight: 500;
        color: ${theme.colors.subtitle}
    }
    .introduction{
        font-size: 12px;
        color: ${theme.colors.subtitle}
    }
`

const Profile:React.FC<ProfileType> = ({name, job, team, introduction, imageUrl}) => {
    return (
        <ProfileStyled className="profile">
            <div className="image">
                <img src='/profile-image.png'></img>
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="team">{job} @{team}</div>
                <div className="introduction">{introduction}</div>
            </div>
        </ProfileStyled>
    )
}

export default Profile;