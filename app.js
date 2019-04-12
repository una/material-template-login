import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const ripple = new MDCRipple(document.querySelector('.mdc-button'));
const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = checkbox;
