import Navigation from './components/Navigation.js';
import AddTaskForm from './components/AddTaskForm.js';

const root = $('#root');
const nav = Navigation();
const form = AddTaskForm();

root.append([nav, form]);