$(function() {
    //Next functionality COULD BE REFACTORED
    $('#next1').click(function(){
        if ($('#who').val() != "") {
            $('#target1').text($('#who').val());
            $('#section1').hide();
            $('#section2').show();
            $('#navItem1').removeClass("navActive");
            $('#navItem1').addClass("navPassed");
            $('#navItem2').addClass("navActive");
        } else alert("Please do not leave text input empty.");
    });
    $('#next2').click(function(){
        if ($('#target2').text() != '[verb]') {
            $('#section2').hide();
            $('#section3').show();
            $('#navItem2').removeClass("navActive");
            $('#navItem2').addClass("navPassed");
            $('#navItem3').addClass("navActive");
        } else alert ("Please select a verb from the list.");
    });
    $('#next3').click(function(){
        if ($('#goal').val() != "") {
            $('#target3').text($('#goal').val());
            $('#section3').hide();
            $('#section4').show();
            $('#navItem3').removeClass("navActive");
            $('#navItem3').addClass("navPassed");
            $('#navItem4').addClass("navActive");
        } else alert("Please do not leave text input empty.");
    }); 
    $('#next4').click(function(){
        if ($('#condition').val() != "") {
            $('#target4').text($('#condition').val());
            $('#section4').hide();
            $('#result').show();
            $('#navItem4').removeClass("navActive");
            $('#navItem4').addClass("navPassed");
            $('#navItem5').addClass("navActive");
            $('#navItem5').addClass("navPassed");
        } else alert("Please do not leave text input empty.");
    });
    
    //Bloom Categories
    $('#remembering').click(function(){
        $('#remembering').addClass("active");
        $('#understanding').removeClass("active");
        $('#applying').removeClass("active");
        $('#analyzing').removeClass("active");
        $('#evaluating').removeClass("active");
        $('#creating').removeClass("active");
        
        $('#rememberingOptions').show();
        $('#understandingOptions').hide();
        $('#applyingOptions').hide();
        $('#analyzingOptions').hide();
        $('#evaluatingOptions').hide();
        $('#creatingOptions').hide();
    });    
    $('#understanding').click(function(){
        $('#understanding').addClass("active");
        $('#remembering').removeClass("active");
        $('#applying').removeClass("active");
        $('#analyzing').removeClass("active");
        $('#evaluating').removeClass("active");
        $('#creating').removeClass("active");
        
        $('#understanding').addClass("active");
        $('#understandingOptions').show();
        $('#rememberingOptions').hide();
        $('#applyingOptions').hide();
        $('#analyzingOptions').hide();
        $('#evaluatingOptions').hide();
        $('#creatingOptions').hide();
    });
    $('#applying').click(function(){
        $('#applying').addClass("active");
        $('#remembering').removeClass("active");
        $('#understanding').removeClass("active");
        $('#analyzing').removeClass("active");
        $('#evaluating').removeClass("active");
        $('#creating').removeClass("active");
        
        $('#applying').addClass("active");
        $('#applyingOptions').show();
        $('#rememberingOptions').hide();
        $('#understandingOptions').hide();
        $('#analyzingOptions').hide();
        $('#evaluatingOptions').hide();
        $('#creatingOptions').hide();
    });
    $('#analyzing').click(function(){
        $('#analyzing').addClass("active");
        $('#remembering').removeClass("active");
        $('#applying').removeClass("active");
        $('#understanding').removeClass("active");
        $('#evaluating').removeClass("active");
        $('#creating').removeClass("active");
        
        $('#analyzing').addClass("active");
        $('#analyzingOptions').show();
        $('#rememberingOptions').hide();
        $('#applyingOptions').hide();
        $('#understandingOptions').hide();
        $('#evaluatingOptions').hide();
        $('#creatingOptions').hide();
    });
    $('#evaluating').click(function(){
        $('#evaluating').addClass("active");
        $('#remembering').removeClass("active");
        $('#applying').removeClass("active");
        $('#analyzing').removeClass("active");
        $('#understanding').removeClass("active");
        $('#creating').removeClass("active");
        
        $('#evaluating').addClass("active");
        $('#evaluatingOptions').show();
        $('#rememberingOptions').hide();
        $('#applyingOptions').hide();
        $('#analyzingOptions').hide();
        $('#understandingOptions').hide();
        $('#creatingOptions').hide();
    });
    $('#creating').click(function(){
        $('#creating').addClass("active");
        $('#remembering').removeClass("active");
        $('#applying').removeClass("active");
        $('#analyzing').removeClass("active");
        $('#evaluating').removeClass("active");
        $('#understanding').removeClass("active");
        
        $('#creating').addClass("active");
        $('#creatingOptions').show();
        $('#rememberingOptions').hide();
        $('#applyingOptions').hide();
        $('#analyzingOptions').hide();
        $('#evaluatingOptions').hide();
        $('#understandingOptions').hide();
    });
    
    //Bloom Options
    $('.bloomVal').click(function() {
        $('#target2').text(this.innerHTML.toLowerCase());
        $('.bloomVal').removeClass('active');
        $(this).addClass('active');
        
    });
    
    
    //Navigation functionality COULD BE REFACTORED
    $('#navItem1').click(function(){
        if ($('#navItem1').hasClass('navPassed')){
            
            if ($('#who').val() != "") {
                $('#target1').text($('#who').val());
            }
            if ($('#goal').val() != "") {
                $('#target3').text($('#goal').val());
            }
            if ($('#condition').val() != "") {
                $('#target4').text($('#condition').val());
            }
            
            $('#section1').show();
            $('#section2').hide();
            $('#section3').hide();
            $('#section4').hide();
            $('#result').hide();
            
            if ($('.navActive').attr('id') == "navItem1") {
                if ($('#target1').text() != ('[who]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem2") {
                if ($('#target2').text() != ('[verb]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem3") {
                if ($('#target3').text() != ('[goal]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem4") {
                if ($('#target4').text() != ('[condition]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            $('.navActive').removeClass('navActive');
            $('#navItem1').addClass('navActive');
        }
    });
    $('#navItem2').click(function(){
        if ($('#navItem2').hasClass('navPassed')){
            
            if ($('#who').val() != "") {
                $('#target1').text($('#who').val());
            }
            if ($('#goal').val() != "") {
                $('#target3').text($('#goal').val());
            }
            if ($('#condition').val() != "") {
                $('#target4').text($('#condition').val());
            }
            
            $('#section1').hide();
            $('#section2').show();
            $('#section3').hide();
            $('#section4').hide();
            $('#result').hide();
            
            if ($('.navActive').attr('id') == "navItem1") {
                if ($('#target1').text() != ('[who]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem2") {
                if ($('#target2').text() != ('[verb]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem3") {
                if ($('#target3').text() != ('[goal]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem4") {
                if ($('#target4').text() != ('[condition]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            $('.navActive').removeClass('navActive');
            $('#navItem2').addClass('navActive');
        }
    });
    $('#navItem3').click(function(){
        if ($('#navItem3').hasClass('navPassed')){
            
            if ($('#who').val() != "") {
                $('#target1').text($('#who').val());
            }
            if ($('#goal').val() != "") {
                $('#target3').text($('#goal').val());
            }
            if ($('#condition').val() != "") {
                $('#target4').text($('#condition').val());
            }
            
            $('#section1').hide();
            $('#section2').hide();
            $('#section3').show();
            $('#section4').hide();
            $('#result').hide();
            
            if ($('.navActive').attr('id') == "navItem1") {
                if ($('#target1').text() != ('[who]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem2") {
                if ($('#target2').text() != ('[verb]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem3") {
                if ($('#target3').text() != ('[goal]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem4") {
                if ($('#target4').text() != ('[condition]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            $('.navActive').removeClass('navActive');
            $('#navItem3').addClass('navActive');
        }
    });
    $('#navItem4').click(function(){
        if ($('#navItem4').hasClass('navPassed')){
            
            if ($('#who').val() != "") {
                $('#target1').text($('#who').val());
            }
            if ($('#goal').val() != "") {
                $('#target3').text($('#goal').val());
            }
            if ($('#condition').val() != "") {
                $('#target4').text($('#condition').val());
            }
            
            $('#section1').hide();
            $('#section2').hide();
            $('#section3').hide();
            $('#section4').show();
            $('#result').hide();
            
            if ($('.navActive').attr('id') == "navItem1") {
                if ($('#target1').text() != ('[who]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem2") {
                if ($('#target2').text() != ('[verb]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem3") {
                if ($('#target3').text() != ('[goal]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            if ($('.navActive').attr('id') == "navItem4") {
                if ($('#target4').text() != ('[condition]')) {
                    $('.navActive').addClass('navPassed');
                }
            }
            $('.navActive').removeClass('navActive');
            $('#navItem4').addClass('navActive');
        }
    });
    $('#navItem5').click(function(){
        if ($('#navItem5').hasClass('navPassed')){
            
            if ($('#who').val() != "") {
                $('#target1').text($('#who').val());
            }
            if ($('#goal').val() != "") {
                $('#target3').text($('#goal').val());
            }
            if ($('#condition').val() != "") {
                $('#target4').text($('#condition').val());
            }
            
            $('#section1').hide();
            $('#section2').hide();
            $('#section3').hide();
            $('#section4').hide();
            $('#result').show();
            
            $('.navActive').addClass('navPassed');
            $('.navActive').removeClass('navActive');
            $('#navItem5').addClass('navActive');
        }
    });
    
    
    //Result Buttons
    $('#emailButton').click(function() {
        var ebody = 'Your learning objective is: \r\n' + $('#textBuild').text();
        window.location.href = ('mailto:?subject=CELT%20Learning%20Objective&body='+ ebody);
    });
    
    $('#copyButton').click(function() {
        window.prompt("Copy to clipboard: Ctrl/Cmd + C, Enter", $('#textBuild').text())
    });
});