const open = (object, attempt) => {
  let current = object;
  attempt.split(".").forEach(subObject => {
    if (current === undefined) return undefined;
    current = current[subObject];
  });
  return current;
};

module.exports = open;
