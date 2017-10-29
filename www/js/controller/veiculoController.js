var VeiculoController = {

    init: function () {
        VeiculoController.backToMainView();
    },

    backToMainView: function () {
        mainView.router.back({
            url: "index.html",
            reload: true,
            ignoreCache: true
        });
    },

    goToModelos: function (marca) {
        var storage = window.localStorage;
        storage.setItem("marca", marca);

        mainView.router.loadPage("modelo.html");
    },

    goToAnos: function (modelo) {
        var storage = window.localStorage;
        storage.setItem("modelo", modelo);

        mainView.router.loadPage("ano.html");
    },
    
    goToVeiculo: function (ano) {
        var storage = window.localStorage;
        storage.setItem("ano", ano);
        
        mainView.router.loadPage("veiculo.html");
    },

    buildListMarcas: function () {
        return myApp.virtualList('.list-block.marca-list', {
            cache: false,
            items: new Array(),
            template:
            '<li>' +
                '<a href="#" onclick="VeiculoController.goToModelos({{codigo}})" class="item-link">' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-name">{{nome}}</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li>'
        });
    },

    buildListModelos: function () {
        return myApp.virtualList('.list-block.modelo-list', {
            cache: false,
            items: new Array(),
            template:
            '<li>' +
                '<a href="#" onclick="VeiculoController.goToAnos({{codigo}})" class="item-link">' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-name">{{nome}}</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li>'
        });
    },

    buildListAnos: function () {
        return myApp.virtualList('.list-block.ano-list', {
            cache: false,
            items: new Array(),
            template:
            '<li>' +
                '<a href="#" onclick="VeiculoController.goToVeiculo(\'{{codigo}}\')" class="item-link">' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-name">{{nome}}</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</li>'
        });
    },
    
    buildListVeiculoInfo: function () {
        return myApp.virtualList('.list-block.veiculo-list', {
            cache: false,
            items: new Array(),
            template:
                '<li>' +
                    '<div class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-name">' +
                                '<b>Marca:</b> {{marca}}' +
                                '  <b>Modelo:</b> {{modelo}}' +
                                '  <b>Combustivel:</b> {{combustivel}}' +
                                '  <b>Ano:</b> {{ano}}' +
                                '  <b>Valor:</b> {{valor}}' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</li>'
        });
    }

}