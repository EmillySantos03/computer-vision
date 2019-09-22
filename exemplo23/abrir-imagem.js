let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  let src = cv.imread(imgElement);
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8U);
  let circles = new cv.Mat();
  let color = new cv.Scalar(255, 0, 0);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // You can try more different parameters
  cv.HoughCircles(src, circles, cv.HOUGH_GRADIENT,
    1, 45, 75, 40, 0, 0);
  // draw circles
  for (let i = 0; i < circles.cols; ++i) {
    let x = circles.data32F[i * 3];
    let y = circles.data32F[i * 3 + 1];
    let radius = circles.data32F[i * 3 + 2];
    let center = new cv.Point(x, y);
    cv.circle(dst, center, radius, color);
  }
  cv.imshow('output', dst);
  src.delete(); dst.delete(); circles.delete();
}
