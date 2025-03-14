let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  // (data32F[0], data32F[1]) is the first point
  // (data32F[2], data32F[3]) is the sescond point
  // (data32F[4], data32F[5]) is the third point
  let srcTri = cv.matFromArray(3, 1, cv.CV_32FC2, [0, 0, 0, 1, 1, 0]);
  let dstTri = cv.matFromArray(3, 1, cv.CV_32FC2, [0.6, 0.2, 0.1, 1.3, 1.5, 0.3]);
  let dsize = new cv.Size(src.rows, src.cols);
  let M = cv.getAffineTransform(srcTri, dstTri);
  // You can try more different parameters
  cv.warpAffine(src, dst, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  cv.imshow(output, dst);
  src.delete(); dst.delete(); M.delete(); srcTri.delete(); dstTri.delete();

}
