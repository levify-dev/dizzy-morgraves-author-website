




document.addEventListener("DOMContentLoaded", () => {
    const defaultPage = 'home';
    const navHeaderOptions = document.querySelectorAll('#nav-sub-header a');
    const pages = document.querySelectorAll('.content');

    const handlePageSelection = (id) => {
        // Update nav header
        navHeaderOptions.forEach(opt => {
            if (opt.id === id) {
                opt.classList.toggle('active', true);
            } else {
                opt.classList.toggle('active', false);
            }
        })

        // Update page content
        const pageId = id.split('nav-')?.[1];
        console.log({pageId})
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.toggle('active', true);
            } else {
                page.classList.toggle('active', false);
            }
        })
    }

    console.log({navHeaderOptions});

    navHeaderOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            handlePageSelection(opt.id);
        })
    })

});