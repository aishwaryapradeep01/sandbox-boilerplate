# Local Setup

Sandbox Asset Repository Template|
--|
[![Use the sandbox boilerplate template](https://user-images.githubusercontent.com/52746337/160120439-ab1e6eb7-f4ba-4f57-bb0c-9f048cd5fe83.png)](https://github.com/aishwaryapradeep01/sandbox-boilerplate/generate)

Alternatively,

## Steps to run the sample app locally
1) Clone the repository
    ```
    git clone https://github.com/aishwaryapradeep01/sandbox-boilerplate.git
    ```
2) Install application dependencies
    ```
    cd sandbox-boilerplate/sandbox-sampleapp/ && npm install
    ```
3) Launch the application by running
    ```
    npm run server
    ```
4) Access the application in your browser with this [URL](http://localhost:3100/)
5) To view any changes made to the code, you have to rebuild and then run step 3 again. Rebuild the application by running
    ```
    npm run build
    ``` 

## Steps to run the sample didact locally
1) Install this [extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-didact)
2) Open the file in your local Visual Studio Code IDE 
3) Right-click the file in the panel to start the didact
> Note: Every didact file should follow this convention: `your-filename.didact.md`

## Steps to deploy the application to IKS
1) Install [Docker](https://docs.docker.com/get-docker/) or [Podman](https://podman.io/getting-started/installation)
2. Build the Docker Image. 
    ```
    docker build -t docker_username/sandbox-app .
    ```
3. To run the image locally execute the following command.
    ```
    docker run -p 3100:3100 -it docker_username/sandbox-app
    ```
4. Push the image to a registry like [Docker](https://hub.docker.com) or [Quay](quay.io). Login with your credentials.
    ```
    docker login
    ```
    Then push the image to the registry
    ```
    docker push docker_username/sandbox-app
    ```
5. Once the image is pushed to docker registry, go to `deployment.yaml` file, and replace `IMAGE_NAME` with your image i.e (docker_username/sandbox-app)
6. To connect the CLI to the IKS(IBM Kubernetes Service) follow the below steps:
* Create a new [IBM Kubernetes cluster](https://cloud.ibm.com/kubernetes/catalog/create) or use an existing IKS cluster.
* Execute the following command in the terminal, replace the `CLUSTER_ID` with the created cluster_id
    ```
    ibmcloud ks cluster config --cluster CLUSTER_ID
    ```
* Set the kubectl context by executing this command 
    ```
    kubectl config current-context
    ```
* To deploy the application, execute the command 
    ```
    kubectl apply -f deployment.yaml
    ```
* To get the deployed IP, execute 
    ```
    kubectl get nodes -o wide
    ```
    copy the value under EXTERNAL-IP(eg:159.122.177.131)
    to get the port number, execute 
    ```
    kubectl get services
    ```
    under the PORT(S) section, copy the 5 digit port number. eg: If the value is 5000:31001/TCP, the 5 digit port number is 31001. Go to any browser and load the endpoint which is EXTERNAL-IP:ROUTE (eg: 159.122.177.131:31001)