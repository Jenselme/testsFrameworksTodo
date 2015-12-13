import { moment } from 'moment';


export class LastTenValueConverter {
    toView(todos) {
        let orderedTodos = todos.slice(0) || [];

        orderedTodos.sort(
            (todo1, todo2) => todo2.modificationDate - todo1.modificationDate);

        return orderedTodos.slice(0, 5);
    }
}


export class ModificationDateValueConverter {
    toView(todos) {
        let orderedTodos = todos.slice(0) || [];

        orderedTodos.sort(
            (todo1, todo2) => todo2.modificationDate - todo1.modificationDate);

        return orderedTodos;
    }
}


export class DateValueConverter {
    toView(value, format) {
        if (!value) {
            return null;
        }
        if (moment) {
            return moment(value).format(format);
        } else {
            return value;
        }
    }
}
