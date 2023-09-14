import css from './TransactionHistory.module.css';
import TransactionHistoryItems from './TransactionHistoryItems';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead >
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items&& items.map((item)=>{
                    return(
                        <TransactionHistoryItems key={item.id} items={item} />
                    )
                })}
            </tbody>
        </table>
    )
}

export default TransactionHistory;
