<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="didact-config/style.css">
    <style>
        .header{
            background-image: url('https://github.com/IBM/Developer-Playground/blob/master/didact/images/banner-image.jpg?raw=true');
        }
    </style>
</head>
<body>
    <div style="margin-top:2rem"></div>
    <div class="header">
        <div class="right-content">
            <div class="apptitle">
                Sandbox Sample Asset Title
            </div>
            <div class="subheading">
                Familiarise with Sandbox sample asset's Didact experience
            </div>
        </div>
    </div>
    <div class="section" style="font-size:16px; margin-top:-1.25rem">
        <p>Didact is an executable README. This is a sample Didact file with the designs aligned to sandbox constructs. Each CTA in the timeline in the "Instructions" section get enabled accordingly when the user interacts with previous CTA</p>
        <p>Run through this didact which is setup for the sandbox sample app. Note that the didact file must contian the "didact.md" extension to work. The progressive elements are enabled by files in the didact-config file (these files should be untouched). </p>
        <p> You can recreate the didact for your application by replacing the commands for the below CTA with encoded commands. You can use <a href="https://www.urlencoder.org/">this tool</a> to encode your commands. You can also change the introduction image beside the asset title. The marketplace CTAs in the footer can lead your users to further information about your product/services </p>
    </div>
    <div class="section">
        <p style="font-size:24px">Learning Resources</p>
        <div>
            <a href="https://developer.ibm.com/sandbox">Provide Learning Resource (if any)</a></br>
        </div>
    </div>
    <div class="section">
        <p style="font-size:24px">Included Components</p>
        <div>
            <p><a href="https://developer.ibm.com/sandbox">Component for eg) IBM Text-to-Speech</a></p>
        </div>
    </div>
    <div class="section">
        <p style="font-size:24px">Pre-requisites</p>
        <div>
            <ol>
                <li>You can provide steps the user needs to follow to run the application</li>
                <ul>
                    <li>For eg, steps to obtain API credentials</li>
                    <li>You can provide urls to subscribe/sign up for a trial</li>
                    <li>Or, steps to sign up for any cloud services</li>
                </ul>
            </ol>
        </div>
    </div>
    <div class="section">
        <p style="font-size:24px">Instructions</p>
        <p>Please follow all the below steps in proper sequence.</p>
    </div>
    <div class="timeline-container">
        <div class="timeline step git-clone">
            <div class="content">
                <p>Clone the GitHub repository.</p>
            </div>
            <input type="checkbox"><a id="step" class="button is-dark is-medium" title="Get the Code"
                href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=sample$$git%20clone%20https://github.com/aishwaryapradeep01/sandbox-boilerplate.git"
                target="_blank"><span>Get Code</span></a>
            <span class="dot"><svg fill="white" id="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 32 32">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                            }
                        </style>
                    </defs>
                    <polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414" />
                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
                        width="32" height="32" />
                </svg></span>
        </div>
        <div class="timeline step install-dependencies">
            <div class="content">
                <p>Install required dependencies for executing application.</p>
            </div>
            <input type="checkbox"><a id="step" class="button is-dark is-medium" title="Build the Application"
                href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=sample$$cd%20sandbox-boilerplate/sandbox-sampleapp%20%26%26%20npm%20install"
                target="_blank"><span>Install Dependencies</span></a>
            <span class="dot"><svg fill="white" id="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 32 32">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                            }
                        </style>
                    </defs>
                    <polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414" />
                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
                        width="32" height="32" />
                </svg></span>
        </div>
        <div class="timeline step configure-application">
            <div class="content">
                <p>Configure the application. See prerequisites.</p>
            </div>
            <input type="checkbox"><a id="step" class="button is-dark is-medium" title="Open the File"
                href="didact://?commandId=vscode.open&projectFilePath=sandbox-boilerplate/sandbox-sampleapp/.env"
                target="_blank"><span>Configure Application</span></a>
            <span class="dot"><svg fill="white" id="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 32 32">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                            }
                        </style>
                    </defs>
                    <polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414" />
                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
                        width="32" height="32" />
                </svg></span>
        </div>
        <div class="timeline step launch-application">
            <div class="content">
                <p>Launch the application in the preview window.</p>
            </div>
            <input type="checkbox"><a id="step" class="button is-dark is-medium" title="Launch the Application"
                href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=sample$$cd%20sandbox-boilerplate/sandbox-sampleapp%20%26%26%20npm%20run%20server"
                target="_blank"><span>Launch Application</span></a>
            <span class="dot"><svg fill="white" id="icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 32 32">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: none;
                            }
                        </style>
                    </defs>
                    <polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414" />
                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1"
                        width="32" height="32" />
                </svg></span>
        </div>
    </div>
        <div class="footer">
            <div class="footer-cta">
            <div class="footer-step stop-application" style="background:transparent">
                <p>To edit or explore the application, make sure to stop it first.</p>
                <a class="button is-dark is-medium" title="Stop Application"
                    href="didact://?commandId=vscode.didact.sendNamedTerminalCtrlC&text=sample">Stop Application</a>
            </div>
             <div class="footer-step explore-application" style="background:transparent">
                <p class="afterbutton">Explore and update the code as per your requirement.</p>
                <a class="button is-dark is-medium" title="Explore the Code"
                    href="didact://?commandId=vscode.open&projectFilePath=sandbox-boilerplate/sandbox-sampleapp/src/App.js">Explore
                    Code</a>
            </div>
             <div class="footer-step re-launch-application" style="background:transparent">
                <p class="afterbutton ">Re-launch the application to view the changes made.</p>
                <a class="button is-dark is-medium" title="Re-Launch the Application"
                    href="didact://?commandId=vscode.didact.sendNamedTerminalAString&text=sample$$cd%20sandbox-boilerplate/sandbox-sampleapp%20%26%26%20rm%20-rf%20build%20%26%26%20npm%20run%20build%20%26%26%20npm%20run%20server">Re-Launch
                    Application</a>
            </div>
            </div>
            <div class="image-div">
                <p class="image-content">Want to explore this project more?
                    <span style="font-size:15px;margin-top:0px;display:block;">Head over to the <a
                            href="https://github.com/aishwaryapradeep01/sandbox-boilerplate/tree/main/sandbox-sampleapp" target="_blank">Github
                            Repository</a></span>
                    <span style="font-size:15px;margin-top:0px;display:block;">For further assistance reach out to <a
                            href="https://github.com/IBM/Technology-Sandbox-Support/issues/new/choose" target="_blank">
                            Help &
                            Support</a></span>
                    <span style="font-size:15px;margin-top:0px;display:block;">Check out our <a
                            href="https://ibm.github.io/Technology-Sandbox-Support/" target="_blank">FAQs</a></span>
                </p>
                <div class="image-btn">
                    <a class="image-link"
                        href="#"
                        target="_blank">
                        View Product Details
                        <span>
                            <svg style="position: absolute; right: 10px;" fill="#ffffff" focusable="false"
                                preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/  svg" width="25"
                                height="25" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
                                <title>Arrow right</title>
                            </svg>
                        </span>
                    </a>
                    <a class="image-link"
                        href="#"
                        target="_blank">
                        Get Trial Subcription
                        <span>
                            <svg style="position: absolute; right: 10px;" fill="#ffffff" focusable="false"
                                preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/  svg" width="25"
                                height="25" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
                                <title>Arrow right</title>
                            </svg>
                        </span>
                    </a>
                    <a class="image-link no-hover"></a>
                </div>
            </div>
        </div>
</body>
<script src="didact-config/progressive.js"></script>
</html>