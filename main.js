const encuesta = {
    zapatillas : ['1: Running', '2: Gimnasio', '3: Futbol', '4: Comunes'],

    eleccion: new Array(4).fill(0),

    nuevaEleccion () {

        const registrar = Number (
            prompt (`${this.zapatillas.join('\n')} \n(Elija la zapatilla adecuada para su actividad) `)
            );

        typeof registrar === `number` &&
        registrar < this.eleccion.length && 
        this.eleccion [registrar]++;

        return this.nuevaEleccion;
    },
};

const captureOn = function () {
    const confirmacion = confirm (
        `${encuesta.zapatillas.join()}`
    );

    if (confirmacion === true) {
        const memoria = eleccion.nuevaEleccion();
        const a = [];
        eleccion.zapatillas.map((element, index, Array) => {
            const conteo = `${element.padEnd(3)} ${memoria[index]} `;
            a.push(conteo);
        });
        alert(`Votos: ${a.join()}`);
        console.log(a)
        llamada();
    } else if (confirmacion === false){
        alert('Gracias vuelva pronto');
    };
    
};

const llamada = function (){
    captureOn();
    const memoria = eleccion.nuevaEleccion();
    console.log(memoria);
};

captureOn()


