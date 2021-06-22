
export default class EmployeesModel {

    name: string;
    age: number;
    username: string;
    hiredate: string;

    /**
     * 
     * @param name 
     * @param age 
     * @param username 
     * @param hiredate 
     */
    constructor(name: string, age: number, username: string, hiredate: string) {
        this.name = name;
        this.age = age;
        this.username = username;
        this.hiredate = hiredate;
    }
}