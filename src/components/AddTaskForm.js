const AddTaskForm = () => {
    const form = $(document.createElement('form'));
    form.attr({
        class: 'container'
    });

    const taskNameInput = $(document.createElement('input'));
    taskNameInput.attr({
        class: 'form-control my-3',
        placeholder: 'Task name...'
    });

    const taskDescriptionInput = $(document.createElement('textarea'));
    taskDescriptionInput.attr({
        class: 'form-control mb-3',
        placeholder: 'Task description...'
    });

    const addTaskBtnWrapper = $(document.createElement('div'));
    addTaskBtnWrapper.attr({
        class: 'd-flex justify-content-center'
    });

    const addTaskBtn = $(document.createElement('button'));
    addTaskBtn.html('Add Task Btn');
    addTaskBtn.attr({
        class: 'btn btn-dark',
        type: 'button'
    });

    addTaskBtnWrapper.append(addTaskBtn);

    form.append([taskNameInput, taskDescriptionInput, addTaskBtnWrapper]);

    return form;
};

export default AddTaskForm;