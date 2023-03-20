import { AvatarBox, AvatarWrap, Img } from './Avatar.styled';
import Ellipse from '../../img/Ellipse.png';
import Hansel from '../../img/Hansel.png';
import Rectangle from '../../img/Rectangle.png';

export const Avatar = () => {
  return (
    <AvatarWrap>
      <Img src={Rectangle} />
      <AvatarBox>
        <Img src={Hansel} />
        <Img src={Ellipse} />
      </AvatarBox>
    </AvatarWrap>
  );
};
