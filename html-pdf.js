var phantom = require('phantom');   
var filePath = "https://westafricaweekly.substack.com/p/cornflakes-for-jihad-the-boko-haram?r=p0z0&utm_campaign=post&utm_medium=web&utm_source"

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open(filePath).then(function(status) {
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});