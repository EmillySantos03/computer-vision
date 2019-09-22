let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  //imagem PyrDown
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // // You can try more different parameters
  // cv.pyrDown(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete();

  //imagem PyrUp
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  // You can try more different parameters
  cv.pyrUp(src, dst, new cv.Size(0, 0), cv.BORDER_DEFAULT);
  cv.imshow('output', dst);
  src.delete(); dst.delete();
}
