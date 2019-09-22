let imgElement = document.querySelector("#imageSrc");
let inputElement = document.querySelector("#fileInput");

inputElement.addEventListener("change", event => {
  imgElement.src = URL.createObjectURL(event.target.files[0]);
});

imgElement.onload = function () {
  //não deu certo
  //momentos da imagem
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(0);
  // // You can try more different parameters
  // let Moments = cv.moments(cnt, false);
  // momentsOutput.innerHTML = Moments.m00;
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete();

  //Área de Contorno
  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(20);
  // // You can try more different parameters
  // let area = cv.contourArea(cnt, false);
  // areaOutput.innerHTML = area;
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();

  //Perímetro de contorno
  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(20);
  // // You can try more different parameters
  // let perimeter = cv.arcLength(cnt, true);
  // perimeterOutput.innerHTML = perimeter;
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


  //imagem ApproxPolyDP
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 100, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // let poly = new cv.MatVector();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // for (let i = 0; i < contours.size(); ++i) {
  //   let tmp = new cv.Mat();
  //   let cnt = contours.get(i);
  //   cv.approxPolyDP(cnt, tmp, 3, true);
  //   poly.push_back(tmp);
  //   cnt.delete(); tmp.delete();
  // }
  // for (let i = 0; i < contours.size(); ++i) {
  //   let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
  //     Math.round(Math.random() * 255));
  //   cv.drawContours(dst, poly, i, color, 1, 8, hierarchy, 0);
  // }
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); hierarchy.delete(); contours.delete(); poly.delete();


  //Casco Convexo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 100, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // let hull = new cv.MatVector();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // // approximates each contour to convex hull
  // for (let i = 0; i < contours.size(); ++i) {
  //   let tmp = new cv.Mat();
  //   let cnt = contours.get(i);
  //   // You can try more different parameters
  //   cv.convexHull(cnt, tmp, false, true);
  //   hull.push_back(tmp);
  //   cnt.delete(); tmp.delete();
  // }
  // // draw contours with random Scalar
  // for (let i = 0; i < contours.size(); ++i) {
  //   let colorHull = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
  //     Math.round(Math.random() * 255));
  //   cv.drawContours(dst, hull, i, colorHull, 1, 8, hierarchy, 0);
  // }
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); hierarchy.delete(); contours.delete(); hull.delete();

  // //delimitação correta
  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(0);
  // let rect = cv.boundingRect(cnt);
  // let contoursColor = new cv.Scalar(255, 255, 255);
  // let rectangleColor = new cv.Scalar(255, 0, 0);
  // cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  // let point1 = new cv.Point(rect.x, rect.y);
  // let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
  // cv.rectangle(dst, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
  // cv.imshow('output', dst);
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


  // // Retângulo girado Exemplo de área mínima retificada
  //  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(0);
  // // You can try more different parameters
  // let rotatedRect = cv.minAreaRect(cnt);
  // let vertices = cv.RotatedRect.points(rotatedRect);
  // let contoursColor = new cv.Scalar(255, 255, 255);
  // let rectangleColor = new cv.Scalar(255, 0, 0);
  // cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  // // draw rotatedRect
  // for (let i = 0; i < 4; i++) {
  //   cv.line(dst, vertices[i], vertices[(i + 1) % 4], rectangleColor, 2, cv.LINE_AA, 0);
  // }
  // cv.imshow('Output', dst);
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


  // //Círculo de fechamento mínimo
  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(0);
  // // You can try more different parameters
  // let circle = cv.minEnclosingCircle(cnt);
  // let contoursColor = new cv.Scalar(255, 255, 255);
  // let circleColor = new cv.Scalar(255, 0, 0);
  // cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  // cv.circle(dst, circle.center, circle.radius, circleColor);
  // cv.imshow('Output', dst);
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


  // //Montagem de uma eclipse
  //Não deu certo
  // let src = cv.imread(imgElement);
  // let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  // cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  // cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  // let contours = new cv.MatVector();
  // let hierarchy = new cv.Mat();
  // cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  // let cnt = contours.get(0);
  // // You can try more different parameters
  // let rotatedRect = cv.fitEllipse(cnt);
  // let contoursColor = new cv.Scalar(255, 255, 255);
  // let ellipseColor = new cv.Scalar(255, 0, 0);
  // cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  // cv.ellipse1(dst, rotatedRect, ellipseColor, 1, cv.LINE_8);
  // cv.imshow('Output', dst);
  // src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); cnt.delete();


  // //linha de ajuste
  //Não deu certo
  let src = cv.imread(imgElement);
  let dst = cv.Mat.zeros(src.rows, src.cols, cv.CV_8UC3);
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
  cv.threshold(src, src, 177, 200, cv.THRESH_BINARY);
  let contours = new cv.MatVector();
  let hierarchy = new cv.Mat();
  let line = new cv.Mat();
  cv.findContours(src, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);
  let cnt = contours.get(0);
  // You can try more different parameters
  cv.fitLine(cnt, line, cv.DIST_L2, 0, 0.01, 0.01);
  let contoursColor = new cv.Scalar(255, 255, 255);
  let lineColor = new cv.Scalar(255, 0, 0);
  cv.drawContours(dst, contours, 0, contoursColor, 1, 8, hierarchy, 100);
  let vx = line.data32F[0];
  let vy = line.data32F[1];
  let x = line.data32F[2];
  let y = line.data32F[3];
  let lefty = Math.round((-x * vy / vx) + y);
  let righty = Math.round(((src.cols - x) * vy / vx) + y);
  let point1 = new cv.Point(src.cols - 1, righty);
  let point2 = new cv.Point(0, lefty);
  cv.line(dst, point1, point2, lineColor, 2, cv.LINE_AA, 0);
  cv.imshow('output', dst);
  src.delete(); dst.delete(); contours.delete(); hierarchy.delete(); line.delete(); cnt.delete();

}
