import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

CategoryField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    rows: PropTypes.number,
    hidden: PropTypes.bool,
};

CategoryField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    disabled: false,
    rows: null,
    hidden: false,
};

function CategoryField(props) {
    const {
        field,
        type,
        label,
        placeholder,
        disabled,
        rows,
        hidden,
        onChange,
        list
    } = props;
    const { name, onBlur } = field;
    return (
        <FormGroup>
            {label && <Label htmlFor={name} size="lg">{label}</Label>}
            <Input
                id={name}
                {...field}
                onChange={onChange || field.onChange}
                type="select"
                disabled={disabled}
                placeholder={placeholder}
                rows={rows}
                hidden={hidden}
            >
                <option value="">--/--</option>
                {list.map((item) => (
                    <option value={item}>
                        {item}
                    </option>
                ))}
            </Input>
            <ErrorMessage name={name}>
                {(msg) => <div className="err-msg">{msg}</div>}
            </ErrorMessage>
        </FormGroup>
    );
}

export default CategoryField;

