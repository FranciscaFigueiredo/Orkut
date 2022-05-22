import { Link } from "react-router-dom";
import { AvatarImage, InfoSocialStyle } from "../../styles/SocialStyle";
import { PropsUserInfo } from "../Header";

export function Friend({ id, username, avatar }: PropsUserInfo) {
    return (
        <Link to={`/users/${id}` } >
            <InfoSocialStyle>
                <AvatarImage src={ avatar } />
                <h6>{ username }</h6>
            </InfoSocialStyle>
        </Link>
    );
}
