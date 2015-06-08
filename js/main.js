$(function() {
    function pegaParametro(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1].replace("/", "");
            }
        }
    }
    function randomizaHeroi() {
        var num = 1 + Math.floor(Math.random() * 8);
        console.log(num);
        if (num == 1) {
            heroi = "rock"
        } else if (num == 2) {
            heroi = "eletronico"
        } else if (num == 3) {
            heroi = "samba"
        } else if (num == 4) {
            heroi = "mpb"
        } else if (num == 5) {
            heroi = "rap"
        } else if (num == 6) {
            heroi = "reagge"
        } else if (num == 7) {
            heroi = "sertanejo"
        } else if (num == 8) {
            heroi = "pop"
        };
        logoMusica.attr("src", "img/" + conteudo[heroi].logocor + ".png");
        divHeroi.addClass('intro-' + heroi);
        corEstilo.css("color", conteudo[heroi].cor);
    }
    var heroi;
    var corEstilo = $('.cor-estilo');
    var logoMusica = $('.intro-musica');
    var divHeroi = $('#home-topo');
    var parametro = decodeURIComponent(pegaParametro('h'));
    $(function() {
          if (parametro != 'rock' && parametro != 'sertanejo' && parametro != 'eletronico' && parametro != 'rap' && parametro != 'pop' && parametro != 'reagge' && parametro != 'reggae' && parametro != 'mpb' && parametro != 'samba') {
            randomizaHeroi();
        } else {
            if(parametro == 'reggae'){
            heroi = 'reagge';
            }
            else{heroi = parametro;
            }
            logoMusica.attr("src", "img/" + conteudo[heroi].logocor + ".png");
            divHeroi.addClass('intro-' + heroi);
            corEstilo.css("color", conteudo[heroi].cor);
        }
    });
    var conteudo = {
        'eletronico': {
            'classe': 'intro-eletronico',
            'logocor': "deixeamusica-roxo",
            'cor': '#734a9a'
        },
        'rock': {
            'classe': 'intro-rock',
            'logocor': "deixeamusica-vermelho",
            'cor': '#c10000'
        },
        'samba': {
            'classe': 'intro-samba',
            'logocor': "deixeamusica-amarelo",
            'cor': '#f1cd15'
        },
        'mpb': {
            'classe': 'intro-mpb',
            'logocor': "deixeamusica-bordo",
            'cor': '#861142'
        },
        'reagge': {
            'classe': 'intro-reagge',
            'logocor': "deixeamusica-verde",
            'cor': '#1ca76c'
        },
        'rap': {
            'classe': 'intro-rap',
            'logocor': "deixeamusica-azul",
            'cor': '#10509b'
        },
        'pop': {
            'classe': 'intro-pop',
            'logocor': "deixeamusica-rosa",
            'cor': '#d32286'
        },
        'sertanejo': {
            'classe': 'intro-sertanejo',
            'logocor': "deixeamusica-laranja",
            'cor': '#eb6610'
        },
    };
});