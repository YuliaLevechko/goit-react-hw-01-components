import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <>
            <li className={css.item}>
                { isOnline === true ?
                    (<span className={css.status}>{isOnline}</span>)
                    : (<span className={css.status_red}>{isOnline}</span> )}
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            </li>
            </>
    )
}

export default FriendListItem;

FriendListItem.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
    )
}