interface Solmu<T> {
    arvo : T,
    seuraava : Solmu<T> | undefined
}

export default class LinkitettyLista<T> {
    public pää: Solmu<T> | undefined;
    public length: number;

    constructor() {
        this.pää = undefined;
        this.length = 0;
    }

    // Lisätään uusi solmu listan alkuun
    prepend(arvo: T): void {
        const solmu: Solmu<T> = { arvo, seuraava: this.pää };
        this.pää = solmu;
        this.length++;
    }

    // Lisää uuden solmun annettuun indeksiin
    insertAt(arvo: T, index: number): void{

        if (index < 0 || index > this.length) {
            return ;
        }

        if (index === 0) {
            this.prepend(arvo);
            return;
        }

        let current = this.pää;
        for (let i = 0; i < index - 1; i++) {
            current = current?.seuraava;
        }

        const solmu: Solmu<T> = { arvo, seuraava: current?.seuraava };
        current!.seuraava = solmu;
        this.length++;
    }

    // Lisää uuden solmun listan loppuun
    append(arvo: T): void {
        const solmu: Solmu<T> = { arvo, seuraava: undefined };
        if (!this.pää) {
            this.pää = solmu;
        } else {
            let current = this.pää;
            while (current.seuraava) {
                current = current.seuraava;
            }
            current.seuraava = solmu;
        }
        this.length++;
    }

    // Poistaa solmun
    remove(arvo: T): T | void{
        if (!this.pää) {
            return ;
        }

        if (this.pää.arvo === arvo) {
            const poistettu = this.pää.arvo;
            this.pää = this.pää.seuraava;
            this.length--;
            return poistettu;
        }

        let current = this.pää;
        while (current.seuraava) {
            if (current.seuraava.arvo === arvo) {
                const poistettu = current.seuraava.arvo;
                current.seuraava = current.seuraava.seuraava;
                this.length--;
                return poistettu;
            }
            current = current.seuraava;
        }
    }

    // Poistaa solmun annetusta indeksistä
    removeAt(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return ;
        }

        if (index === 0) {
            const poistettu = this.pää!.arvo;
            this.pää = this.pää!.seuraava;
            this.length--;
            return poistettu;
        }

        let current = this.pää;
        for (let i = 0; i < index - 1; i++) {
            current = current?.seuraava;
        }

        const poistettu = current!.seuraava!.arvo;
        current!.seuraava = current!.seuraava!.seuraava;
        this.length--;
        return poistettu;
    }

    // Palauttaa solmun annetusta indeksistä
    get(index: number): T | void {
        if (index < 0 || index >= this.length) {
            return ;
        }

        let current = this.pää;
        for (let i = 0; i < index; i++) {
            current = current!.seuraava;
        }
        return current!.arvo;
    }
}