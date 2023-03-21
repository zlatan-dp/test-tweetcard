import { useEffect, useState } from 'react';
import { TweetCardWrap, Logo, Bg, Text, Button } from './TweetCard.styled';

import bgImg from '../../img/picture.png';
import logo from '../../img/logo.png';
import { Avatar } from 'components/Avatar/Avatar';

export const TweetCard = () => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem('followers')) || 100500;
  });
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) || false;
  });

  useEffect(() => {
    localStorage.setItem('followers', followers);
    localStorage.setItem('isFollowing', isFollowing);
  }, [followers, isFollowing]);

  const follow = () => {
    setIsFollowing(!isFollowing);
    isFollowing ? setFollowers(followers - 1) : setFollowers(followers + 1);
  };
  return (
    <TweetCardWrap>
      <Logo src={logo} alt="goit logo" width="76" />
      <Bg src={bgImg} alt="bg image" width="308" />
      <Avatar />
      <Text mb={'16px'}>777 tweets</Text>
      <Text mb={'26px'}>{followers.toLocaleString('en-US')} Followers</Text>
      <Button onClick={follow} bg={isFollowing}>
        {!isFollowing ? 'Follow' : 'Following'}
      </Button>
    </TweetCardWrap>
  );
};
