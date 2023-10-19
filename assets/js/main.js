jQuery(document).ready(function ($) {
    $('#hamburger_menu').click(function () {
        let menu = $('#menu');
        menu.slideToggle(300)
    })
    $('#close').click(function () {
        let menu = $('#menu');
        menu.slideToggle(300)
    })

    $('.archive').click(function () {
        const el = $(this);
        const arrowMenu = el.find('.arrow_menu');
        const borderMenu = el.find('.border_menu');
        const archive_popup = el.find('.archive_popup')

        if (arrowMenu.hasClass('active')) {
            arrowMenu.removeClass('active');
            borderMenu.removeClass('active');
            archive_popup.slideUp(300)
        } else {
            arrowMenu.addClass('active');
            borderMenu.addClass('active');
            archive_popup.slideDown(300)
        }
    });

    $('.move_info').click(function () {
        let remove = $('.language').children()
        remove.removeClass('active');
        $(this).addClass('active')
        let text = $(this).data('language')
        if (text === "english") {
            $('#summary_persian').hide(300);
            $('#summary_english').show(300)
        } else if (text === "persian") {
            $('#summary_english').hide(300)
            $('#summary_persian').show(300);
        }
    })

    $('.menu_bottom_item').click(function () {
        let remove = $('.single_navbar').children();
        remove.removeClass('active');
        $(this).addClass('active');
        let data=$(this).data('id');
        let menu_nav=$('.data_content');
        let item=menu_nav.find('#'+ data);
        console.log(item);
       if(item.length === 1){
           menu_nav.children().hide();
           item.fadeIn(500)
       }
    })
})
window.onscroll = function () {
    scrollNav()
};

function scrollNav() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').classList.add('scrollNavbar')
    } else {
        document.getElementById('navbar').classList.remove('scrollNavbar')
    }
}

const form = document.querySelector('[name="verifyForm"]');
const inputs = form.querySelectorAll('.inputs_verify input');
const formData = new FormData();

function shouldSubmit() {
    return [...inputs].every((input) => input.value.length > 0);
}

function handleSubmit(e) {
    e.preventDefault();

    if (shouldSubmit()) {
        const code = [...formData.values()].join('');
        alert(`CODE ${code} VERIFIED!`);
    }
}

function handleInput(e) {
    // check for data that was inputted
    // if there is a next input, focus on it
    const input = e.target;
    if (input.value) {
        formData.append(input.name, input.value);

        if (input.nextElementSibling) {
            input.nextElementSibling.focus();
        }
    }
}

function handleFocus(e) {
    if (e.target.value) {
        e.target.select();
    }
}

function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    // loop over each input and populate with the index of that string
    inputs.forEach((input, i) => {
        input.value = paste[i] || '';
        formData.set(input.name, input.value);
    })

    if (shouldSubmit()) {
        handleSubmit();
    }
}

function handleKeyDown({ key, target }) {
    if (key !== 'Backspace') {
        return;
    } else if (target.previousElementSibling) {
        formData.delete(target.name)
        target.value = '';
        target.previousElementSibling.focus();
    }
}

inputs[0].addEventListener('paste', handlePaste)

form.addEventListener('input', handleInput);
form.addEventListener('focusin', handleFocus);
form.addEventListener('keydown', handleKeyDown);
form.onsubmit = handleSubmit;