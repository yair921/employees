import PlainData from "../persistency/PlainData";
import EmployeesModel from '../models/EmployeesModel';
import Helper from "../lib/Helper";
const CLASS_NAME = 'Employees';

export default class Employees {

    employees: EmployeesModel[];
    private static instance: Employees;

    /**
     * 
     */
    private constructor() {
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
    public static GetInstance(): Employees {
        if (!Employees.instance) {
            Employees.instance = new Employees();
        }
        return Employees.instance;
    }

    /**
     * 
     * @returns 
     */
    public GetEmployees(): object {
        try {
            return {
                status: true,
                data: this.employees
            };
        } catch (error) {
            let err = Helper.ProcessError(`${CLASS_NAME}.GetEmployees`, error);
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
    public DeleteEmployee(global: any, { username }: any): object {
        try {
            let employees = this.employees.filter(e => {
                return e.username !== username;
            });
            this.employees = employees;
            return {
                status: true
            };
        } catch (error) {
            let err = Helper.ProcessError(`${CLASS_NAME}.DeleteEmployee`, error);
            return {
                status: false,
                error: err
            }
        }
    }
}