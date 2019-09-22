let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  //Convexity Defects
  let src = cv.imread(imgElement);
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.threshold(src, src, 100, 200, cv.THRESH_BINARY);
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  let hull = new cv.Mat();
  let defect = new cv.Mat();
  let cnt = contours.get(0);
  let lineColor = new cv.Scalar(255, 0, 0);
  let circleColor = new cv.Scalar(255, 255, 255);
  cv.convexHull(cnt, hull, false, false);
  cv.convexityDefects(cnt, hull, defect);
  for (let i = 0; i < defect.rows; ++i) {
    let start = new cv.Point(cnt.data32S[defect.data32S[i * 4] * 2],
      cnt.data32S[defect.data32S[i * 4] * 2 + 1]);
    let end = new cv.Point(cnt.data32S[defect.data32S[i * 4 + 1] * 2],
      cnt.data32S[defect.data32S[i * 4 + 1] * 2 + 1]);
    let far = new cv.Point(cnt.data32S[defect.data32S[i * 4 + 2] * 2],
      cnt.data32S[defect.data32S[i * 4 + 2] * 2 + 1]);
    cv.line(dst, start, end, lineColor, 2, cv.LINE_AA, 0);
    cv.circle(dst, far, 3, circleColor, -1);
  }
  cv.imshow('output', dst);
  src.delete(); dst.delete(); hierarchy.delete(); contours.delete(); hull.delete(); defect.delete();


  //Match Shape
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let contourID0 = 10;
  // let contourID1 = 5;
  // let color0 = new cv.Scalar(255, 0, 0);
  // let color1 = new cv.Scalar(0, 0, 255);
  // // You can try more different parameters
  // let result = cv.matchShapes(contours.get(contourID0), contours.get(contourID1), 1, 0);
  // matchShapesOutput.innerHTML = result;
  // cv.drawContours(dst, contours, contourID0, color0, 1, cv.LINE_8, hierarchy, 100);
  // cv.drawContours(dst, contours, contourID1, color1, 1, cv.LINE_8, hierarchy, 100);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete();

}
