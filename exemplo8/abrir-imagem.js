let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  // You can try more different parameters
  cv.threshold(src, dst, 177, 200, cv.THRESH_BINARY);
  cv.imshow('output', dst);
  src.delete();
  dst.delete();
}
