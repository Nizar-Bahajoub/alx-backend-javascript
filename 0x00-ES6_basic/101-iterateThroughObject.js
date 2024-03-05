export default function iterateThroughObject(reportWithIterator) {
  const empls = [];

  for (const empl of reportWithIterator) {
    empls.push(empl);
  }

  return empls.join(' | ');
}
