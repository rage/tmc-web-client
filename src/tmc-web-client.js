/* exported TMCWebClient */

var TMCWebClient = (function () {

    var _module = {};

    function findExerciseContainers() {

        return $('[data-type="tmc-exercise"]');
    }

    function initEditors(containers) {

        var container = containers[0],
            editorContainer = $('<div/>').addClass('tmc-exercise');

        $(container).append(editorContainer);
        var editor = ace.edit(editorContainer.get(0));

        // Editor
        editor.setPrintMarginColumn(false);
        editor.setDisplayIndentGuides(false);
        editor.getSession().setFoldStyle('markbeginend');

        // Text
        editor.setTheme('ace/theme/chrome');
        editor.setFontSize(12);
        editor.getSession().setTabSize(4);
        editor.getSession().setUseWrapMode(true);
        editor.getSession().setWrapLimitRange(120, 120);
        editor.getSession().setMode('ace/mode/java');

        editor.setValue('System.out.println("Java on kiva");\n');
    }

    _module.init = function () {

        console.log('Ready!');
        initEditors(findExerciseContainers());
    }

    return _module;
})();