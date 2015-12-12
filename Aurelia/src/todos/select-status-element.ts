import { bindable, bindingMode } from 'aurelia-framework';
import { statuses } from './Todos';


@bindable({
    name: 'status',
    attribute: 'status',
    defaultBindingMode: bindingMode.twoWay
})
export class SelectStatusCustomElement {
    statuses = statuses;
}
