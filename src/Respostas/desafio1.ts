interface Employee {
    code: number,
    name: string
};

const employeeObj = {} as Employee;
employeeObj.code = 10;
employeeObj.name = 'João';

const employeeObj2: Employee = {
    code: 10,
    name: 'João'
}