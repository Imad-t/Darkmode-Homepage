document.getElementById('darkmode').addEventListener('change', (event) => {
    const root = document.documentElement;
    //switch the css color variables to get darkmode
    if (event.target.checked) {
        root.style.setProperty('--bg-color', '#223344');
        root.style.setProperty('--txt-color', '#F2F9FE');
        root.style.setProperty('--toggle-bg', '#111729');
    } else {
        root.style.setProperty('--bg-color', ''); 
        root.style.setProperty('--txt-color', '');
        root.style.setProperty('--toggle-bg', '');
    }

     //change the color of the icon
    const icon = document.getElementById('icon');
    const paths = icon.querySelectorAll('path');
    paths.forEach(path => {
        const currentFill = path.getAttribute('fill');
    
        if (event.target.checked && currentFill === '#223344') {
            path.setAttribute('fill', '#F2F9FE');
        } else if (event.target.checked && currentFill === '#F2F9FE') {
            path.setAttribute('fill', '#223344');
        } else if (!event.target.checked && currentFill === '#223344'){
            path.setAttribute('fill', '#F2F9FE');
        } else if (!event.target.checked && currentFill === '#F2F9FE') {
            path.setAttribute('fill', '#223344');
        }
    });
});
