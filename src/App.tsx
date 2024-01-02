import "./App.css";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import PhotoSphereViewer from "./PhotoSphereViewer";

function App() {
  return (
    <div className="App">
      <h1>One Image </h1>
      <ReactPhotoSphereViewer
        container={"viewer"}
        src="Test_Pano.jpg"
        height={"70vh"}
        width={"100vw"}
        caption="GFO Stone International LLC"
        loadingImg="https://photo-sphere-viewer-data.netlify.app/assets/loader.gif"
      ></ReactPhotoSphereViewer>
      <br />
      <br />
      <ReactPhotoSphereViewer
        container={"viewer"}
        src="m-1.jpg"
        height={"70vh"}
        width={"100vw"}
        caption="GFO Stone International LLC"
        loadingImg="https://photo-sphere-viewer-data.netlify.app/assets/loader.gif"
      ></ReactPhotoSphereViewer>

      <h1>6 Images (Left, Right, Front, Back, Top, Bottom) </h1>
      <PhotoSphereViewer />
    </div>
  );
}

export default App;
