import { bindable, bindingMode } from 'aurelia-framework';


@bindable({
    name: 'todo',
    attribute: 'todo',
    defaultBindingMode: bindingMode.twoWay
})
export class EditTodoCustomElement {
}
