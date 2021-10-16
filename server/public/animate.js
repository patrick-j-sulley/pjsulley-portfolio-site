$(document).ready(function () {

    $("#kiaora").hover(
        function () {
            $(this).animate({ paddingLeft: '10%' }, 'fast')
            $(this).text("About")
        },
        function () {
            $(this).animate({ paddingLeft: '0' }, 'fast')
            $(this).text("Kia ora!")
        });

    $("#iam").hover(
        function () {
            $(this).animate({ paddingLeft: '10%' }, 'fast')
            $(this).text("Work")
        },
        function () {
            $(this).animate({ paddingLeft: '0' }, 'fast')
            $(this).text("I am")
        });

    $("#patrick").hover(
        function () {
            $(this).animate({ paddingLeft: '10%' }, 'fast')
            $(this).text("Contact")
        },
        function () {
            $(this).animate({ paddingLeft: '0' }, 'fast')
            $(this).text("Patrick")
        });
});