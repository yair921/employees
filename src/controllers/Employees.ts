import PlainData from "../persistency/PlainData";
import EmployeesModel from '../models/EmployeesModel';
import Helper from "../lib/Helper";
const CLASS_NAME = 'Employees';

export default class Employees {

    employees: EmployeesModel[];

    /**
     * 
     */
    constructor() {
        this.employees = [
            new EmployeesModel('Yair Montes', 36, 'yair921', '2021-06-28'),
            new EmployeesModel('Diana Gómez', 25, 'dianag', '2020-04-28'),
            new EmployeesModel('Juan Pérez', 29, 'juanp', '2021-03-14')
        ];
    }

    /**
     * 
     * @returns 
     */
    public GetAll(): object {
        try {
            return {
                status: true,
                data: this.employees
            };
        } catch (error) {
            let err = Helper.ProcessError(`${CLASS_NAME}.GetAll`, error);
            return {
                status: false,
                error: err
            }
        }
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    public DeleteEmployee(username: string): object {
        try {
            let employees = this.employees.filter(e => {
                return e.username !== username;
            });
            this.employees = employees;
            return {
                status: true
            };
        } catch (error) {
            let err = Helper.ProcessError(`${CLASS_NAME}.GetAll`, error);
            return {
                status: false,
                error: err
            }
        }
    }
}