function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks) {
    this.marks = [...this.marks, ...marks];
  }
}

Student.prototype.getAverage = function() {
  if (this.marks && this.marks.length > 0) {
    return this.marks.reduce((acc, mark, index, arr) => acc + mark / arr.length, 0);
  }

  return 0;
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;

  this.excluded = reason;
}