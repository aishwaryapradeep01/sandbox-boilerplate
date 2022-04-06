/* eslint-disable */
import axios from 'axios';
import { FileUploaderItem, FileUploaderDropContainer, ToastNotification } from 'carbon-components-react';
import React, { useState, useCallback, useEffect } from 'react';

let lastId = 0;
function uid(prefix = 'id') {
    lastId++;
    return `${prefix}${lastId}`;
}

function Fileupload() {

    const [files, setFiles] = useState([]);
    const [notifyStatus, setnotifyStatus] = useState(false);
    const [notify, setnotify] = useState({
        title: "",
        type: "",
        message: ""
    })

    let valid = true;

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        //console.log(e);
    };

    const handleDragover = (e) => {
        e.preventDefault();
        e.stopPropagation();
        //console.log(e);

    };

    useEffect(() => {
        document.addEventListener('drop', handleDrop);
        document.addEventListener('dragover', handleDragover);
        return () => {
            document.removeEventListener('drop', handleDrop);
            document.removeEventListener('dragover', handleDragover);

        };
    }, []);



    const uploadFile = async (fileToUpload) => {
        // file size validation

        if (fileToUpload.filesize <= 15000000) {
            valid = true;
        }
        else {
            valid = false;
            const updatedFile = {
                ...fileToUpload,
                status: 'edit',
                iconDescription: 'Delete file',
                invalid: true,
                errorSubject: 'File size exceeds limit',
                errorBody: 'Max file size is 15MB. Select a new file and try again.',
            };
            setFiles((files) =>
                files.map((file) =>
                    file.uuid === fileToUpload.uuid ? updatedFile : file
                )
            );
            return;
        }

        // file type validation
        if (fileToUpload.invalidFileType) {
            const updatedFile = {
                ...fileToUpload,
                status: 'edit',
                iconDescription: 'Delete file',
                invalid: true,
                errorSubject: 'Invalid file type',
                errorBody: `"${fileToUpload.name}" does not have a valid file type.`,
            };
            setFiles((files) =>
                files.map((file) =>
                    file.uuid === fileToUpload.uuid ? updatedFile : file
                )
            );
            return;
        }

        else {
            valid = true;
        }

        try {
            const response = await fetch(
                'https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=1000ms',
                {
                    method: 'POST',
                    mode: 'cors',
                    body: fileToUpload,
                }
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // show x icon after 1 second
            setTimeout(() => {
                const updatedFile = {
                    ...fileToUpload,
                    status: 'edit',
                    iconDescription: 'Remove file',
                };
                setFiles((files) =>
                    files.map((file) =>
                        file.uuid === fileToUpload.uuid ? updatedFile : file
                    )
                );
            }, 1000);
        }
        catch (error) {
            valid = false;
            const updatedFile = {
                ...fileToUpload,
                status: "edit",
                iconDescription: "Upload failed",
                invalid: true,
            };
            setFiles((files) =>
                files.map((file) =>
                    file.uuid === fileToUpload.uuid ? updatedFile : file
                )
            );
            //console.log(error);
        }
    };


    const onAddFiles = async (evt, { addedFiles }) => {
        evt.stopPropagation();
        const newFiles = addedFiles.map((file) => ({
            uuid: uid(),
            name: file.name,
            filesize: file.size,
            status: 'uploading',
            iconDescription: 'Uploading',
        }));

        if (addedFiles[0]) {

            setFiles([newFiles[0]]);
            uploadFile(newFiles[0]);

            if (valid) {
                const data = new FormData()
                data.append('file', addedFiles[0])
                let updatedFile;
                try {
                    const res = await axios.post("/upload", data, {})
                    if (res.status === 200) {

                        updatedFile = {
                            ...newFiles[0],
                            status: "complete",
                            iconDescription: "Upload complete",
                        };
                        //console.log("file uploaded"); 
                        setnotifyStatus(true);
                        setnotify({ title: "Success Notification", type: 'success', message: "File Upload Successful" })
                    }
                    else {
                        //console.log("file not uploaded");
                        setnotifyStatus(true);
                        setnotify({ title: "Error Notification", type: 'error', message: "File Upload Failed" })

                    }

                }
                catch (err) {
                    updatedFile = {
                        ...newFiles[0],
                        status: "edit",
                        iconDescription: "Upload failed",
                        invalid: true,
                    };
                    //console.log("Issue with uploaded file");
                    setnotifyStatus(true);
                    setnotify({ title: "Error Notification", type: 'error', message: "File Upload Failed" })
                }

            }
        }
        else {
            //console.log("Issue with uploaded file");
            setnotifyStatus(true);
            setnotify({ title: "Error Notification", type: 'error', message: "File Upload Failed" })
        }
    };

    const handleFileUploaderItemClick = useCallback(
        (_, { uuid: clickedUuid }) =>
            setFiles(files.filter(({ uuid }) => clickedUuid !== uuid)),
        [files]
    );

    return (

        <div class="bx--form-item">
            <strong class="bx--file--label">Upload File</strong>
            <p class="bx--label-description">Max file size is 15 MB. Supported file type is .csv</p>
            <FileUploaderDropContainer
                labelText="Drag and drop here or click to upload"
                onAddFiles={onAddFiles}
                accept={['.csv']}
            />
            <div className="uploaded-files" style={{ width: "100%" }}>
                {files.map(
                    ({
                        uuid,
                        name,
                        filesize,
                        status,
                        iconDescription,
                        invalid,
                        ...rest
                    }) => (
                        <FileUploaderItem
                            key={uid()}
                            uuid={uuid}
                            name={name}
                            filesize={filesize}
                            size="lg"
                            status={status}
                            iconDescription={iconDescription}
                            invalid={invalid}
                            onDelete={handleFileUploaderItemClick}
                            {...rest}
                        />))}
            </div>


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

        </div>

    );

}

export default Fileupload;