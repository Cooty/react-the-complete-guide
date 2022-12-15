import "components/domain/expense/ExpenseItem/ExpenseItem.css";
import ExpenseDate from "components/domain/expense/ExpenseDate/ExpenseDate";
import Card from "components/ui/Card/Card";
import Currency from "components/utils/Currency";

function ExpenseItem({title, date, amount}) {
    return (
        <Card className="expense-item" as="li">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    <Currency amount={amount} />
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;