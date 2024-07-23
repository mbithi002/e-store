import React from 'react';

const CustomCheckbox = ({ checked, onChange }) => {
    return (
        <label className="check-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <div className="checkmark size-5 after:size-4"></div>
        </label>
    );
};

export default CustomCheckbox;
