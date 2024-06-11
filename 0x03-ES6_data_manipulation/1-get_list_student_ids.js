const getListStudentIds = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.map((line) => line.id);
};

export default getListStudentIds;
