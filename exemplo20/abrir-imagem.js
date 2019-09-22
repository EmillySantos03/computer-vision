let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  //Equalize Histogram Example
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.equalizeHist(src, dst);
  // cv.imshow('output', src);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete();


  //Image CLAHE 
  let src = cv.imread(imgElement);
  let equalDst = new cv.Mat();
  let claheDst = new cv.Mat();
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.equalizeHist(src, equalDst);
  let tileGridSize = new cv.Size(8, 8);
  // You can try more different parameters
  let clahe = new cv.CLAHE(40, tileGridSize);
  clahe.apply(src, claheDst);
  cv.imshow('output', equalDst);
  cv.imshow('output', claheDst);
  src.delete(); equalDst.delete(); claheDst.delete(); clahe.delete();

}
