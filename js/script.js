jQuery.fn.htmlClean = function() {
    this.contents().filter(function() {
        if (this.nodeType != 3) {
            $(this).htmlClean();
            return false;
        }
        else {
            this.textContent = $.trim(this.textContent);
            return !/\S/.test(this.nodeValue);
        }
    }).remove();
    return this;
}