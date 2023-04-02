import React, {useState} from 'react';

const Field = ({ number: number }) => {
    const [isNum, setIsNum] = useState();

    const onGetNumber = () => {
        return setIsNum(number);
    }

    return (
        <div style={{ border: "1px solid", width: "30px", height: "30px", textAlign: 'center', lineHeight: '30px', display: 'inline-block', margin: '10px 5px', cursor: 'pointer' }} onClick={onGetNumber}>{isNum}</div>
    );
};

export default Field;
