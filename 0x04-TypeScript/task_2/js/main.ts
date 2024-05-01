interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks'
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  console.log("Salary:", salary);

  if (typeof salary === 'number' && salary < 500) {
    const newTeacher = new Teacher();
    return newTeacher;
  }
    const newDirector = new Director();
    return newDirector;
}

function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: any) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects =  'Math' | 'History';

function teachClass(todaysClass: Subjects) {
  console.log(`Teaching ${todaysClass}`);
}
