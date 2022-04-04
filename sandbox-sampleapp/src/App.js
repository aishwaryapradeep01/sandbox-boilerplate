import {
    Header,
    HeaderName,
} from "carbon-components-react/lib/components/UIShell";
import Component1 from "./components/componentOne.js";
import Component2 from "./components/componentTwo.js";
import FileUpload from "./components/fileUpload.js";
import "./App.css";
import { Tabs, Tab } from "carbon-components-react";

function App() {
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
                                <Component2 />
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}
export default App;