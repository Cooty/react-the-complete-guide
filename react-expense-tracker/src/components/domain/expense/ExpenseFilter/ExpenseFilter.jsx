import {useLabel} from "@react-aria/label";
import "components/domain/expense/ExpenseFilter/ExpenseFilter.css";

const ExpensesFilter = ({ onFilter, selected, as }) => {
    const changeHandler= (e) => {
        onFilter(e.target.value);
    }
    const TagName = as || 'div';
    const label = 'Filter by year';
    const {labelProps, fieldProps} = useLabel({ label, onFilter, selected, as });

    return (
        <TagName className="expenses-filter">
            <div className="expenses-filter__control">
                <label {...labelProps}>
                    {label}
                </label>
                <select
                    value={selected}
                    onChange={changeHandler}
                    {...fieldProps}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </TagName>
    );
};

export default ExpensesFilter;
