import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";
export default function () {
  const xs = [150, 160, 170, 180];
  const ys = [50, 60, 70, 80];

  tfvis.render.scatterplot(
    { name: "线性回归训练集" },
    { values: xs.map((x, i) => ({ x, y: ys[i] })) },
    { xAxisDomain: [140, 190], yAxisDomain: [40, 90] }
  );

  var initalValues = tf.ones([8]);
  initalValues.print();

  //biases变量，通过assign方法更新其值

  var biases = tf.variable(initalValues);
  biases.print();

  var updatedValues = tf.tensor1d([0, 1, 2, 3, 4, 5, 6, 7]);
  updatedValues.print();

  biases.assign(updatedValues);

  biases.print();
}
