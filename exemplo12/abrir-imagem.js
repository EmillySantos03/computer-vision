let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  // //erosão da imagem
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(5, 5, cv.CV_8U);
  // let anchor = new cv.Point(-1, -1);
  // // You can try more different parameters
  // cv.erode(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  // //Dilatação
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(5, 5, cv.CV_8U);
  // let anchor = new cv.Point(-1, -1);
  // // You can try more different parameters
  // cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  // //Abertura
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(5, 5, cv.CV_8U);
  // let anchor = new cv.Point(-1, -1);
  // // You can try more different parameters
  // cv.morphologyEx(src, dst, cv.MORPH_OPEN, M, anchor, 1,
  //   cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  // //Fechamento
  // let src = cv.imread(imgElement);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(5, 5, cv.CV_8U);
  // // You can try more different parameters
  // cv.morphologyEx(src, dst, cv.MORPH_CLOSE, M);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  // //gradiente de imagem 
  //pegou a borda
  // let src = cv.imread(imgElement);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(5, 5, cv.CV_8U);
  // // You can try more different parameters
  // cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  //Cartola
  // let src = cv.imread(imgElement);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(9, 9, cv.CV_8U);
  // // You can try more different parameters
  // cv.morphologyEx(src, dst, cv.MORPH_TOPHAT, M);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  //Chapéu preto
  // let src = cv.imread(imgElement);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
  // let dst = new cv.Mat();
  // let M = cv.Mat.ones(53, 53, cv.CV_8U);
  // // You can try more different parameters
  // cv.morphologyEx(src, dst, cv.MORPH_BLACKHAT, M);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); M.delete();

  //Elemento Estruturante
  let src = cv.imread(imgElement);
  cv.cvtColor(src, src, cv.COLOR_RGBA2RGB);
  let dst = new cv.Mat();
  let M = new cv.Mat();
  let ksize = new cv.Size(5, 5);
  // You can try more different parameters
  M = cv.getStructuringElement(cv.MORPH_CROSS, ksize);
  cv.morphologyEx(src, dst, cv.MORPH_GRADIENT, M);
  cv.imshow('output', dst);
  src.delete(); dst.delete(); M.delete();


}
