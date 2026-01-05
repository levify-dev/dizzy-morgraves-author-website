document.addEventListener("DOMContentLoaded", () => {
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
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.toggle('active', true);
            } else {
                page.classList.toggle('active', false);
            }
        })
    }

    navHeaderOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            handlePageSelection(opt.id);
        })
    })

    const downloadFeaturedTitleButton = document.querySelector('#download-featured-title');

    downloadFeaturedTitleButton.addEventListener('click', () => {

        const a = document.createElement('a');
        a.href = './ebooks/Choke-Chain.epub';
        a.download = 'Choke-Chain.epub';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        gtag('event', 'download', {
            file_name: 'Choke-Chain.epub'
        })
    })

});