let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
  let anchor = new cv.Point(-1, -1);
  // You can try more different parameters
  cv.filter2D(src, dst, cv.CV_8U, M, anchor, 0, cv.BORDER_DEFAULT);
  cv.imshow('output', dst);
  src.delete();
  dst.delete();
  M.delete();
}
