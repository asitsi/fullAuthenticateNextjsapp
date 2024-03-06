"use client"
import { useDispatch, useSelector } from 'react-redux';
import { incrementFollowCount, decrementFollowCount, selectFollowCount } from '../redux/features/userSlice';
import { FaUserPlus } from "react-icons/fa6";

const Header = () => {
  const dispatch = useDispatch();
  const followCount = useSelector(selectFollowCount);

  const handleFollowClick = (isFollowing) => {
    if (isFollowing) {
      dispatch(decrementFollowCount());
    } else {
      dispatch(incrementFollowCount());
    }
  };

  return (
    <div>
      <button onClick={() => handleFollowClick(false)} style={{border: "none", background: "none"}}><FaUserPlus style={{fontSize: '2rem'}}/>{followCount}</button>
      {/* <button onClick={() => handleFollowClick(true)}>Unfollow</button> */}
    </div>
  );
};

export default Header;
