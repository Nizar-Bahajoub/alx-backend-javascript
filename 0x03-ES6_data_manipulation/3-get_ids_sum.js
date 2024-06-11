export default function getStudentIdsSum(students) {
  return students.reduce(
    (current, next) => current + next.id, 0,
  );
}
