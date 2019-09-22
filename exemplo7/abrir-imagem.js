let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  let dsize = new cv.Size(src.rows, src.cols);
  // (data32F[0], data32F[1]) is the first point
  // (data32F[2], data32F[3]) is the sescond point
  // (data32F[4], data32F[5]) is the third point
  // (data32F[6], data32F[7]) is the fourth point
  let srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, [56, 65, 368, 52, 28, 387, 389, 390]);
  let dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, [0, 0, 300, 0, 0, 300, 300, 300]);
  let M = cv.getPerspectiveTransform(srcTri, dstTri);
  // You can try more different parameters
  cv.warpPerspective(src, dst, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  cv.imshow('output', dst);
  src.delete(); dst.delete(); M.delete(); srcTri.delete(); dstTri.delete();
}
