import clsx from 'clsx';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <span
        className={clsx(
          css.statusDot,
          isOnline ? css.online : css.ofline
        )}
      ></span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}