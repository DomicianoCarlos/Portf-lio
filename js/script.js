//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
    $('.menu').slideToggle('slow');
});

$('nav ul li').click(function () {
    $('.menu').hide();
});

//Scroll menu
$('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate(
        {
            scrollTop: targetOffset,
        },
        1000
    );
});

//Scroll top
$(document).ready(function () {
    var scrollTop = $('.scrollTop');

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();

        //quantidade Y que o botão de scroll vai aparecer
        if (topPos > 500) {
            $(scrollTop).css('opacity', '1');
        } else {
            $(scrollTop).css('opacity', '0');
        }
    });
    //velocidade a animação
    $(scrollTop).click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            1300
        );
        return false;
    });
    //Links dos meus conhecimentos
    const techs = [
      {
        name: 'Python',
        url: 'https://www.python.org/'
    },
       {
        name: 'Java',
        url: 'https://www.java.com/pt-BR/'
    },
    {
        name: 'MySql',
        url: 'mysql.com'
    },
    {
        name: 'C',
        url: 'http://linguagemc.com.br/'
    },
     
    {
        name: 'wordpress',
        url: 'https://wordpress.com/start/user/pt-br?ref=features-lp'
    },
     {
        name: 'C#',
        url: 'https://docs.microsoft.com/pt-br/dotnet/csharp/'
    },
      {
        name: 'nodeJS',
        url: 'https://nodejs.org/en/docs/'
    },
     {
        name: 'PHP',
        url: 'https://www.php.net/'
    },
    {
        name: 'html5',
        url: 'https://html5.org/'
    }, {
        name: 'css',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }, {
        name: 'js',
        url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference',
    }, {
        name: 'sass',
        url: 'https://sass-lang.com/'
    }, {
        name: 'bs',
        url: 'https://getbootstrap.com/',
    }, {
        name: 'wp',
        url: 'https://br.wordpress.com/',
    }, {
        name: 'materialize',
        url: 'https://materializecss.com/',
    }, {
        name: 'ui',
        url: 'https://figma.com/'
    }]

    techs.forEach(tech => {
        $('.' + tech.name).on('click', () => {
            window.open(tech.url)
        })
    });

});

//Dark Mode
var darkMode;

if (localStorage.getItem('dark-mode')) {
    darkMode = 'light';
} else {
    darkMode = localStorage.getItem('dark-mode');
}

localStorage.getItem('dark-mode', darkMode);

if (localStorage.getItem('dark-mode') == 'dark') {
    $('body').addClass('dark');
    $('.dark-button').hide();
    $('.light-button').show();
}


$('.dark-button').on('click', function () {
    $('.dark-button').hide();
    $('.light-button').show();
    $('body').addClass('dark');
    localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function () {
    $('.light-button').hide();
    $('.dark-button').show();
    $('body').removeClass('dark');
    localStorage.setItem('dark-mode', 'light');
});

//Contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}