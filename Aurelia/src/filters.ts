export class LastTenValueConverter {
    toView(todos) {
        let orderedTodos = todos.slice(0) || [];

        orderedTodos.sort(
            (todo1, todo2) => todo2.modificationDate - todo1.modificationDate);

        return orderedTodos.slice(0, 5);
    }
}
