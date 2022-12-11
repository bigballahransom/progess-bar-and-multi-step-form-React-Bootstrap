import { Form } from 'react-bootstrap';
import { useState } from 'react';



export const FormItem = ({ item, onChange, answer }) => {
    const [currentValue, setCurrentValue] = useState(answer || null);
    switch(item.type) {
        case 'text':
        return(
           <>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
                type="text"
                id={item.label}
                onChange={(e) => onChange(e.target.value, item.value)}
                value={currentValue}
                />
           </> 
        )
        break;
        case 'select':
        return(
           <div className="mt-2">
               <Form.Select aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)} value={currentValue}>
                   <option>{item.label}</option>
                   {
                       item.options.map((opt, index) => {
                           <option value={opt}>{opt}</option>
                       })
                   }
               </Form.Select>
           </div> 
        )
        break;
        case 'information':
        return(
           <p>{item.label}</p>
        )
        break;
    }

    return (
        <></>
    )
}