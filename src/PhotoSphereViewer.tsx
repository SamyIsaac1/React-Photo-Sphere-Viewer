import { useEffect } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { CubemapAdapter } from "@photo-sphere-viewer/cubemap-adapter";
import "@photo-sphere-viewer/core/index.css";

const PhotoSphereViewer = () => {
  useEffect(() => {
    const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";

    const viewer = new Viewer({
      container: "viewer",
      adapter: CubemapAdapter as any,
      panorama: {
        left: baseUrl + "cubemap/px.jpg",
        front: baseUrl + "cubemap/nz.jpg",
        right: baseUrl + "cubemap/nx.jpg",
        back: baseUrl + "cubemap/pz.jpg",
        top: baseUrl + "cubemap/py.jpg",
        bottom: baseUrl + "cubemap/ny.jpg",
      },
      // caption: "GFO Stone International LLC",
      loadingImg: baseUrl + "loader.gif",
      //   touchmoveTwoFingers: true,
      // mousewheelCtrlKey: true,
    });

    return () => {
      viewer.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return <div id="viewer" style={{ width: "100%", height: "70vh" }}></div>;
};

export default PhotoSphereViewer;
