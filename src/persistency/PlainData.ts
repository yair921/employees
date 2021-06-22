import EmployessModel from '../models/EmployeesModel';

export default class PlainData {

    private name: string;
    private age: number;
    private username: string;
    private hiredate: string;

    constructor(model: EmployessModel) {
        this.name = model.name;
        this.age = model.age;
        this.username = model.username;
        this.hiredate = model.hiredate;
    }

    /**
     * 
     * @returns 
     */
    GetProperties(): object {
        return {
            name: this.name,
            age: this.age,
            username: this.username,
            hiredate: this.hiredate
        }
    }

}