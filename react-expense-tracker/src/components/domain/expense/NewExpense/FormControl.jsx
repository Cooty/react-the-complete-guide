import {useLabel} from "@react-aria/label";

function FormControl(props) {
    const {labelProps, fieldProps} = useLabel(props);
    const { value, onChange, label, ...rest } = props;
    const extendedFieldProps = {
        ...rest,
        ...fieldProps
    }

    return (
        <div className="new-expense__control">
            <label {...labelProps}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                {...extendedFieldProps}
            />
        </div>
    );
}

export default FormControl;