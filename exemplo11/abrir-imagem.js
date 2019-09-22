let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  // //desfocagem media
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let ksize = new cv.Size(3, 3);
  // let anchor = new cv.Point(-1, -1);
  // // You can try more different parameters
  // cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
  // // cv.boxFilter(src, dst, -1, ksize, anchor, true, cv.BORDER_DEFAULT)
  // cv.imshow('output', dst);
  // src.delete(); dst.delete();



  // //desfocagem  Gaussiano
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let ksize = new cv.Size(3, 3);
  // // You can try more different parameters
  // cv.GaussianBlur(src, dst, ksize, 0, 0, cv.BORDER_DEFAULT);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete();



  // // Desfoque médio
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // // You can try more different parameters
  // cv.medianBlur(src, dst, 5);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete();



  //Filtragem Bilateral
  let src = cv.imread(imgElement);
  let dst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB, 0);
  // You can try more different parameters
  cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
  cv.imshow('output', dst);
  src.delete(); dst.delete();


}
