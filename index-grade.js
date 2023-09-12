const grade = (testpoints) => {
  let score = Math.round(testpoints);
  if (score < 0 || score > 100) {
    console.log("error");
  } else if (score >= 80) {
    console.log("grade = A");
  } else if (score < 80 && score > 69) {
    console.log("grade = B");
  } else if (score < 70 && score > 59) {
    console.log("grade = C");
  } else if (score < 60 && score > 49) {
    console.log("grade = D");
  } else {
    console.log("grade = F");
  }
};

grade(60.5);
grade(55);
grade(40);
grade(90);
grade(101);
