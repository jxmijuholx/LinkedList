"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkitettyLista = /** @class */ (function () {
    function LinkitettyLista() {
        this.pää = undefined;
        this.length = 0;
    }
    // Lisätään uusi solmu listan alkuun
    LinkitettyLista.prototype.prepend = function (arvo) {
        var solmu = { arvo: arvo, seuraava: this.pää };
        this.pää = solmu;
        this.length++;
    };
    // Lisää uuden solmun annettuun indeksiin
    LinkitettyLista.prototype.insertAt = function (arvo, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.prepend(arvo);
            return;
        }
        var current = this.pää;
        for (var i = 0; i < index - 1; i++) {
            current = current === null || current === void 0 ? void 0 : current.seuraava;
        }
        var solmu = { arvo: arvo, seuraava: current === null || current === void 0 ? void 0 : current.seuraava };
        current.seuraava = solmu;
        this.length++;
    };
    // Lisää uuden solmun listan loppuun
    LinkitettyLista.prototype.append = function (arvo) {
        var solmu = { arvo: arvo, seuraava: undefined };
        if (!this.pää) {
            this.pää = solmu;
        }
        else {
            var current = this.pää;
            while (current.seuraava) {
                current = current.seuraava;
            }
            current.seuraava = solmu;
        }
        this.length++;
    };
    // Poistaa solmun
    LinkitettyLista.prototype.remove = function (arvo) {
        if (!this.pää) {
            return;
        }
        if (this.pää.arvo === arvo) {
            var poistettu = this.pää.arvo;
            this.pää = this.pää.seuraava;
            this.length--;
            return poistettu;
        }
        var current = this.pää;
        while (current.seuraava) {
            if (current.seuraava.arvo === arvo) {
                var poistettu = current.seuraava.arvo;
                current.seuraava = current.seuraava.seuraava;
                this.length--;
                return poistettu;
            }
            current = current.seuraava;
        }
    };
    // Poistaa solmun annetusta indeksistä
    LinkitettyLista.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            var poistettu_1 = this.pää.arvo;
            this.pää = this.pää.seuraava;
            this.length--;
            return poistettu_1;
        }
        var current = this.pää;
        for (var i = 0; i < index - 1; i++) {
            current = current === null || current === void 0 ? void 0 : current.seuraava;
        }
        var poistettu = current.seuraava.arvo;
        current.seuraava = current.seuraava.seuraava;
        this.length--;
        return poistettu;
    };
    // Palauttaa solmun annetusta indeksistä
    LinkitettyLista.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        var current = this.pää;
        for (var i = 0; i < index; i++) {
            current = current.seuraava;
        }
        return current.arvo;
    };
    return LinkitettyLista;
}());
exports.default = LinkitettyLista;
