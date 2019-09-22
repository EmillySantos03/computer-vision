let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
   imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
   let src = cv.imread(imgElement);
   let dst = new cv.Mat();
   let dsize = new cv.Size(300, 300);
   // You can try more different parameters
   cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
   cv.imshow('output', dst);
   src.delete();
   dst.delete();
}
