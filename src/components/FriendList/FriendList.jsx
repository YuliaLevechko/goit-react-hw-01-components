import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <>
    <ul className={css.friend_list}>
        {friends.map(({ avatar, name, isOnline, id }) => 
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        )}
            </ul>
            </>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}