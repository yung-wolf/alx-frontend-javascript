interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: 'London',
  contract: false,
};

// Override console.log to print the desired format
const originalConsoleLog = console.log;
console.log = function(...args: any[]): void {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
    const obj = args[0];
    const keys = Object.keys(obj);
    const output = keys.map(key => `${key}: ${obj[key]}`).join('\n');
    originalConsoleLog(obj.constructor.name);
    originalConsoleLog(output);
  } else {
    originalConsoleLog(...args);
  }
};

console.log(teacher3);
