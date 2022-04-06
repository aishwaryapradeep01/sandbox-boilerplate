import React, { useState } from 'react';
import { Button, TextInput, Form, Loading, ToastNotification, Select, SelectItem } from 'carbon-components-react';

function Component2() {

    const [isLoading, setisLoading] = useState(false);
    const [inputOne, setinputOne] = useState('');
    const [notifyStatus, setnotifyStatus] = useState(false);
    const [notify, setnotify] = useState({
        title: "",
        type: "",
        message: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setisLoading(true);
        if (inputOne) {
            setnotifyStatus(true);
            setnotify({ title: "Success Notification", type: 'success', message: "Input filled" })
            setisLoading(false);
        }
        else {
            setnotifyStatus(true);
            setnotify({ title: "Error Notification", type: 'error', message: "Input not filled" })
            setisLoading(false);
        }
    }
    const dropdowndata = [
        {
            id: 'a',
            value: 'Option A',
        },
        {
            id: 'b',
            value: 'Option B',
        },
        {
            id: 'c',
            value: 'Option C',
        },
    ];
    var [selectsetOne, setselectOne] = useState(dropdowndata[0].id);

    return (
        <>

            <Loading active={isLoading} overlay={true} />

            <Form onSubmit={handleSubmit}>
                <div className="TextArea" >
                    <TextInput type="text" id={'inputOne'} labelText={'Input*'} helperText="Input value details" placeholder={'Input Field Placeholder'} size='lg' value={inputOne} onChange={(e) => setinputOne(e.target.value)} />
                </div>

                <div className="SelectArea" >
                    <Select labelText="Sample Select" id={'selectsetOne'} size="lg" value={selectsetOne} onChange={(e) => { setselectOne(e.target.value) }}>
                        {dropdowndata.map((item, i) => (
                            <SelectItem value={item.id} key={i} text={item.value} />
                        ))}
                    </Select>
                </div>

                <div className="ButtonArea">
                    <Button type="submit"> Submit</Button>
                </div>

            </Form>

            {notifyStatus ?
                <ToastNotification
                    iconDescription="Close notification"
                    kind={notify.type}
                    subtitle={<span>{notify.message}</span>}
                    timeout={3000}
                    onClose={() => setnotifyStatus(false)}
                    title={notify.title}
                />
                : null}

        </>
    );
}
export default Component2;