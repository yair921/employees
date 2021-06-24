
export default class EmployeesModel {

    id: number;
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
    constructor(id: number, name: string, age: number, username: string, hiredate: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.username = username;
        this.hiredate = hiredate;
    }
}