import { AvatarBox, AvatarWrap, Img } from './Avatar.styled';
import Ellipse from '../../img/Ellipse.png';
import Hansel from '../../img/Hansel.png';
import Rectangle from '../../img/Rectangle.png';

export const Avatar = () => {
  return (
    <AvatarWrap>
      <Img src={Rectangle} alt="decor" width="380" />
      <AvatarBox>
        <Img src={Hansel} alt="user avatar" width="75" />
        <Img src={Ellipse} alt="decor" width="80" />
      </AvatarBox>
    </AvatarWrap>
  );
};
