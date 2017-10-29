var VeiculoService = {

    marcas: new Array(),
    modelos: new Array(),
    anos: new Array(),
    veiculos: new Array(),

    getMarcas: function () {
        var marcasCall = $.ajax({
            type: "GET",
            url: "https://fipe.parallelum.com.br/api/v1/carros/marcas"
        });
        return marcasCall;
    },

    parseMarcasToObject: function (data) {
        $.each(data, function () {
            var marca = new Marca(this.nome, this.codigo);
            VeiculoService.marcas.push(marca);
        });
        return VeiculoService.marcas;
    },

    //-----------------------------------------------------------------------------
    getModelos: function (marca) {
        var modelosCall = $.ajax({
            type: "GET",
            url: "https://fipe.parallelum.com.br/api/v1/carros/marcas/"
            + marca + "/modelos"
        });
        return modelosCall;
    },

    parseModelosToObject: function (data) {
        $.each(data.modelos, function () {
            var modelo = new Modelo(this.nome, this.codigo);
            VeiculoService.modelos.push(modelo);
        });
        return VeiculoService.modelos;
    },

    //-----------------------------------------------------------------------------
    getAnos: function (marca, modelo) {
        var anosCall = $.ajax({
            type: "GET",
            url: "https://fipe.parallelum.com.br/api/v1/carros/marcas/"
            + marca + "/modelos/" + modelo + "/anos"
        });
        return anosCall;
    },

    parseAnosToObject: function (data) {
        $.each(data, function () {
            var ano = new Ano(this.nome, this.codigo);      
            VeiculoService.anos.push(ano);
        });
        return VeiculoService.anos;
    },

    //-----------------------------------------------------------------------------
    getVeiculo: function (marca, modelo, ano) {
        var veiculoCall = $.ajax({
            type: "GET",
            url: "https://fipe.parallelum.com.br/api/v1/carros/marcas/"
            + marca + "/modelos/" + modelo + "/anos/" + ano
        });
        return veiculoCall;
    },

    parseVeiculoToObject: function (data) {
        var veiculo = new Veiculo(data.Marca, data.Modelo, data.Combustivel, data.AnoModelo, data.Valor);
        VeiculoService.veiculos.push(veiculo);
        return VeiculoService.veiculos;
    }

}