let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  //Image HoughLinesP
  let src = cv.imread(imgElement);
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  let lines = new cv.Mat();
  let color = new cv.Scalar(255, 0, 0);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.Canny(src, src, 50, 200, 3);
  // You can try more different parameters
  cv.HoughLinesP(src, lines, 1, Math.PI / 180, 2, 0, 0);
  // draw lines
  for (let i = 0; i < lines.rows; ++i) {
    let startPoint = new cv.Point(lines.data32S[i * 4], lines.data32S[i * 4 + 1]);
    let endPoint = new cv.Point(lines.data32S[i * 4 + 2], lines.data32S[i * 4 + 3]);
    cv.line(dst, startPoint, endPoint, color);
  }
  cv.imshow('output', dst);
  src.delete(); dst.delete(); lines.delete();

  //Hough Lines
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // let lines = new cv.Mat();
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.Canny(src, src, 50, 200, 3);
  // // You can try more different parameters
  // cv.HoughLines(src, lines, 1, Math.PI / 180,
  //   30, 0, 0, 0, Math.PI);
  // // draw lines
  // for (let i = 0; i < lines.rows; ++i) {
  //   let rho = lines.data32F[i * 2];
  //   let theta = lines.data32F[i * 2 + 1];
  //   let a = Math.cos(theta);
  //   let b = Math.sin(theta);
  //   let x0 = a * rho;
  //   let y0 = b * rho;
  //   let startPoint = { x: x0 - 1000 * b, y: y0 + 1000 * a };
  //   let endPoint = { x: x0 + 1000 * b, y: y0 - 1000 * a };
  //   cv.line(dst, startPoint, endPoint, [255, 0, 0, 255]);
  // }
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); lines.delete();


}
