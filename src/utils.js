export function toSnakeCase(obj) {
  if (Array.isArray(obj)) {
    return obj.map(toSnakeCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
      acc[snakeKey] = toSnakeCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

export function defineUserFriendlyRoleName(name) {
  switch (name) {
    case 'admin':
      return 'Администратор';
    case 'audit':
      return 'Аудитор';
    case 'user':
      return 'Автовладелец';
  }
}

export function isAdmin() {
  return localStorage.getItem('role') == 'admin';
}

export function isAudit() {
  return localStorage.getItem('role') == 'audit';
}