let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
   imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
   let src = cv.imread(imgElement);
   let dst = new cv.Mat();
   let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
   let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
   // You can try more different parameters
   cv.inRange(src, low, high, dst);
   cv.imshow('output', dst);
   src.delete();
   dst.delete();
   low.delete();
   high.delete();
}
