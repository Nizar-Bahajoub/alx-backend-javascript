const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Connot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(','));

    const validStudents = students.filter((student) => student.length === 4);
    const fields = {};

    validStudents.forEach((student) => {
      const field = student[3];
      const firstname = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${validStudents.length}`);

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const studentsInField = fields[field];
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
