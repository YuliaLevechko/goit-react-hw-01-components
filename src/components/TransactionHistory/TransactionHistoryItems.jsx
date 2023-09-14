import PropTypes from 'prop-types';

const TransactionHistoryItems = ({ items }) => {
    const { id, type, amount, currency } = items;
    return (
        <tr key={id} >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
};

export default TransactionHistoryItems;

TransactionHistoryItems.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}