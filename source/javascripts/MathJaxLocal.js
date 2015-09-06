MathJax.Hub.Config({
    jax: ["input/TeX","output/HTML-CSS"],
    extensions: ["tex2jax.js","MathMenu.js","MathZoom.js"],
    tex2jax:
        {
            inlineMath: [ ['$','$'], ['\\(','\\)'] ],
            displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
            skipTags: ["script","noscript","style","textarea","pre","code"],
            processEscapes: true
        },
    TeX:
        {
            equationNumbers: { autoNumber: "AMS" },
            TagSide: "left",

        },
    "HTML-CSS": { availableFonts: ["TeX"] }
});
MathJax.Hub.Queue(function() {
    var all = MathJax.Hub.getAllJax(), i;
    for(i=0; i < all.length; i += 1) {
        all[i].SourceElement().parentNode.className += ' has-jax';
    }
});
MathJax.Ajax.loadComplete("http://vikasrtr.github.io/javascripts/MathJaxLocal.js");