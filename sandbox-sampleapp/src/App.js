import React, { useState } from 'react'
import { Header, HeaderName, } from "carbon-components-react/lib/components/UIShell";
import { Tabs, Tab, RadioButtonGroup, RadioButton } from "carbon-components-react";
import Component1 from "./components/componentOne.js";
import Component2 from "./components/componentTwo.js";
import FileUpload from "./components/fileUpload.js";
import "./App.css";


function App() {

    const [displayOption1, setdisplayOption1] = useState(false);
    const [displayOption2, setdisplayOption2] = useState(false);

    return (
        <>
            <Header aria-label="IBM">
                <HeaderName href="#" prefix="">
                    <div style={{ whiteSpace: "nowrap" }}>
                        IBM Developer Technology Sandbox Asset
                    </div>
                </HeaderName>
            </Header>
            <div className="App">
                <div className="AppContent">
                    <Tabs type="container">
                        <Tab id="tab-1" label="Tab 1">
                            <div className="TabArea">
                                <Component1 />
                            </div>
                        </Tab>
                        <Tab id="tab-2" label="Tab 2">
                            <div className="TabArea">

                                <div className="RadioButtonArea">
                                    <RadioButtonGroup legendText="Choose mode" name="radio-button-group" >
                                        <RadioButton labelText="File Upload" value="fileupload" id="fileupload" onClick={() => { setdisplayOption1(true); setdisplayOption2(false) }} />
                                        <RadioButton labelText="No File Upload" value="nofileupload" id="nofileupload" onClick={() => { setdisplayOption2(true); setdisplayOption1(false) }} />
                                    </RadioButtonGroup>
                                </div>
                                {displayOption1 ?
                                    <FileUpload />
                                    : null}
                                {displayOption2 ?
                                    <Component2 />
                                    : null}


                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
export default App;