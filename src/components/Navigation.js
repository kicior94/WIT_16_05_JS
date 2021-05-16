const Navigation = () => {
    const nav = $(document.createElement('nav'));
    nav.attr({
        class: 'navbar navbar-dark bg-dark'
    });

    const div = $(document.createElement('div'));
    div.attr({
        class: 'container-fluid'
    });

    const span = $(document.createElement('span'));
    span.attr({
        class: 'navbar-brand mb-0 h1'
    });
    span.html('Zajęcia WIT - To-Do App');

    div.append(span);
    nav.append(div);

    return nav;
};

export default Navigation;