type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

interface ClassDictionary {
  [id: string]: any;
}

interface ClassArray extends Array<ClassValue> {}

const dictionaryToClassName = (classObject: ClassDictionary): string => {
  let className = '';

  for (const classValue in classObject) {
    if (classObject[classValue]) {
      className && (className += ' ');
      className += classValue;
    }
  }

  return className;
};

const arrayToClassName = (classArray: ClassArray): string => {
  let className = '';

  for (const classValue of classArray) {
    if (classValue) {
      const flattenedClassValue = toClassName(classValue);

      if (flattenedClassValue) {
        className && (className += ' ');
        className += flattenedClassValue;
      }
    }
  }

  return className;
};

const toClassName = (classValue: ClassValue): string => {
  if (typeof classValue === 'boolean' || !classValue) {
    return '';
  }

  if (typeof classValue === 'string') {
    return classValue;
  }

  if (typeof classValue === 'number') {
    return classValue.toString();
  }

  if (Array.isArray(classValue)) {
    return arrayToClassName(classValue);
  }

  return dictionaryToClassName(classValue);
};

const cls = (...args: ClassValue[]): string => {
  let classNames = '';

  for (const arg of args) {
    if (arg) {
      const className = toClassName(arg);

      if (className) {
        classNames && (classNames += ' ');
        classNames += toClassName(arg).trim();
      }
    }
  }

  return classNames;
};

export default cls;
