var myApp = new Framework7({
    material: true,
    template7Pages: true
});

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready', function () {
    StatusBar.backgroundColorByHexString("#5B5147");
    VeiculoController.init();
});

$$(document).on("page:init", function (e) {
    var page = e.detail.page;

    if (page.name === 'index') {
        var marcasList = null;
        var promise = VeiculoService.getMarcas();
        promise.done(function (data) {
            marcasList = VeiculoService.parseMarcasToObject(data);
        })
            .done(function (data) {
                var list = VeiculoController.buildListMarcas();
                list.items = marcasList;
                list.update();
            })
            .fail(function (err) {
                myApp.alert('Erro ao carregar os dados', err.status);
            });
    }

    if (page.name === 'modelo') {
        var storage = window.localStorage;
        var marca = storage.getItem("marca");

        var modelosList = null;
        var promise = VeiculoService.getModelos(marca);
        promise.done(function (data) {
            modelosList = VeiculoService.parseModelosToObject(data);
        })
            .done(function (data) {
                var list = VeiculoController.buildListModelos();
                list.items = modelosList;
                list.update();
            })
            .fail(function (err) {
                myApp.alert('Erro ao carregar os dados', err.status);
            });
    }

    if (page.name === 'ano') {
        var storage = window.localStorage;
        var marca = storage.getItem("marca");
        var modelo = storage.getItem("modelo");

        var anosList = null;
        var promise = VeiculoService.getAnos(marca, modelo);
        promise.done(function (data) {
            anosList = VeiculoService.parseAnosToObject(data);
        })
            .done(function (data) {
                var list = VeiculoController.buildListAnos();
                list.items = anosList;
                list.update();
            })
            .fail(function (err) {
                myApp.alert('Erro ao carregar os dados', err.status);
            });
    }

    if (page.name === 'veiculo') {
        var storage = window.localStorage;
        var marca = storage.getItem("marca");
        var modelo = storage.getItem("modelo");
        var ano = storage.getItem("ano");

        var veiculo = null;
        var promise = VeiculoService.getVeiculo(marca, modelo, ano);
        promise.done(function (data) {
            veiculosList = VeiculoService.parseVeiculoToObject(data);
        })
            .done(function (data) {
                var list = VeiculoController.buildListVeiculoInfo();
                list.items = veiculosList;
                list.update();
            })
            .fail(function (err) {
                myApp.alert('Erro ao carregar os dados', err.status);
            });
    }
}); 