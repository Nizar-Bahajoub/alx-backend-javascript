const getListStudentIds = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const newArr = [];
  array.map((line) => {
    newArr.push(line.id);
  });

  return newArr;
};

export default getListStudentIds;
