const totalGroups = [32, 24, 28, 36, 48, 32];
const groupsLabels = ['Grupo I', 'Grupo II', 'Grupo III', 'Grupo IV', 'Grupo V', 'Grupo VI'];
const questions = {
    1: "Prestas atención a la persona que te está hablando y haces un esfuerzo para comprender lo que te está diciendo",
    2: "Hablas con los demás de temas poco importantes para pasar luego a los más importantes",
    3: "Hablas con otras personas sobre cosas que interesan a ambos",
    4: "Clarificas la información que necesitas y se la pides a la persona adecuada",
    5: "Permites que los demás sepan que les agradeces los favores",
    6: "Te das a conocer a los demás por propia iniciativa",
    7: "Ayudas a que los demás se conozcan entre sí",
    8: "Dices que te gusta algún aspecto de la otra persona o alguna de las actividades que realiza",
    9: "Pides que te ayuden cuando tienes alguna dificultad",
    10: "Eliges la mejor forma para integrarte en un grupo o para participar en una determinada actividad",
    11: "Explicas con claridad a los demás cómo hacer una tarea específica",
    12: "Prestas atención a las instrucciones, pides explicaciones y llevas adelante las instrucciones correctamente",
    13: "Pides disculpas a los demás por haber hecho algo mal",
    14: "Intentas persuadir a los demás de que tus ideas son mejores y que serán de mayor utilidad que las de la otra persona",
    15: "Intentas reconocer las emociones que experimentas",
    16: "Permites que los demás conozcan lo que sientes",
    17: "Intentas comprender lo que sienten los demás",
    18: "Intentas comprender el enfado de la otra persona",
    19: "Permites que los demás sepan que te interesas o preocupas por ellos",
    20: "Piensas porqué estás asustado y haces algo para disminuir tu miedo",
    21: "Te dices a ti mismo o haces cosas agradables cuando te mereces una recompensa",
    22: "Reconoces cuando es necesario pedir permiso para hacer algo y luego lo pides a la persona indicada",
    23: "Te ofreces para compartir algo que es apreciado por los demás",
    24: "Ayudas a quien lo necesita",
    25: "Llegas a establecer un sistema de negociación que te satisface tanto a ti mismo como a quienes sostienen posturas diferentes",
    26: "Controlas tu carácter de modo que no se te “escapan las cosas de la mano”",
    27: "Defiendes tus derechos dando a conocer a los demás cuál es tu postura",
    28: "Te las arreglas sin perder el control cuando los demás te hacen bromas",
    29: "Te mantienes al margen de situaciones que te pueden ocasionar problemas",
    30: "Encuentras otras formas para resolver situaciones difíciles sin tener que pelearte",
    31: "Dices a los demás cuándo han sido los responsables de originar un determinado problema e intentas encontrar una solución",
    32: "Intentas llegar a una solución justa ante la queja justificada de alguien",
    33: "Expresas un sincero cumplido a los demás por la forma en que han jugado",
    34: "Haces algo que te ayude a sentir menos vergüenza o a estar menos cohibido",
    35: "Eres consciente cuando te han dejado de lado en alguna actividad y, luego, haces algo para sentirte mejor en ese momento",
    36: "Manifiestas a los demás que han tratado injustamente a un amigo",
    37: "Consideras con cuidado la posición de la otra persona, comparándola con la propia, antes de decidir lo que hacer",
    38: "Comprendes la razón por la cual has fracasado en una determinada situación y qué puedes hacer para tener más éxito en el futuro",
    39: "Reconoces y resuelves la confusión que se produce cuando los demás te explican una cosa pero dicen o hacen otras que se contradicen",
    40: "Comprendes lo que significa la acusación y por qué te la han hecho y, luego, piensas en la mejor forma de relacionarte con la persona que te ha hecho la acusación",
    41: "Planificas la mejor forma para exponer tu punto de vista antes de una conversación problemática",
    42: "Decides lo que quieres hacer cuando los demás quieren que hagas otra cosa distinta",
    43: "Resuelves la sensación de aburrimiento iniciando una nueva actividad interesante",
    44: "Reconoces si la causa de algún acontecimiento es consecuencia de alguna situación bajo tu control",
    45: "Tomas decisiones realistas sobre lo que eres capaz de realizar antes de comenzar una tarea",
    46: "Eres realista cuando debes dilucidar cómo puedes desenvolverte en una determinada tarea",
    47: "Resuelves qué necesitas saber y cómo conseguir la información",
    48: "Determinas de forma realista cuál de los numerosos problemas es el más importante y el que deberías solucionar primero",
    49: "Consideras las posibilidades y eliges la que te hará sentir mejor",
    50: "Te organizas y te preparas para facilitar la ejecución de tu trabajo"
};

$(document).ready(function () {
    for (let key in questions) {
        appendQuestion(key, questions[key]);
    };
});

function appendQuestion(key, value) {
    let markup = '<tr><th scope="row">' + key + '</th>' +
        '<td>' + value + '</td>';

    for (let i = 0; i < 4; i++) {
        markup += '<td><input type="radio" class="form-check-input" name="' + key + '" id="' + (i + 1) + '" ></td>';
    }
    markup += '</tr>';
    $('#tableTest').append(markup);
};

function tableSummary(values, chartValues) {
    const rowTitles = ['PDO', 'PDM', 'PDP(%)'];
    const displayValues = [values, totalGroups, chartValues];

    const tableHead = $('#tableHead').html("<th></th>");
    for (const title of groupsLabels) {
        tableHead.append('<th>' + title + '</th>');
    }

    const tableBody = $('#tableBody').html("");
    for (let row = 0; row < 3; row++) {
        let markup = "<tr><th scope='row'>" + rowTitles[row] + "</th>";
        for (let col = 0; col < values.length; col++) {
            markup += "<td>" + displayValues[row][col] + "</td>";
        }
        markup += '</tr>';
        tableBody.append(markup);
    }
}


function chart() {
    const checked = $('input[type=radio]:checked');
    if (checked.length == 50) {
        // clean errors
        $('#errors').html("");
        // get checked values
        const values = getValues();
        // get fixed values for chart
        const chartValues = computeChartValues([...values]);
        // fill table summary
        tableSummary(values, chartValues);
        // make bar chart
        makeChart(chartValues);
    } else {
        checked.parent().parent().addClass("table-success");
        const unchecked = 50 - checked.length; 
        $('#errors').html('<div class="alert alert-warning" role="alert">Falta ' +
            unchecked + (unchecked === 1 ? ' pregunta' : ' preguntas') +
            ' por contestar.</div>');
    }
};



function getValues() {
    let values = [0, 0, 0, 0, 0, 0];
    const radioChecked = $('input[type=radio]:checked');
    for (const radio of radioChecked) {
        const ask = parseInt(radio.name);
        const value = parseInt(radio.id);
        switch (true) {
            case (ask <= 8):
                values[0] += value;
                break;
            case (ask <= 14):
                values[1] += value;
                break;
            case (ask <= 21):
                values[2] += value;
                break;
            case (ask <= 30):
                values[3] += value;
                break;
            case (ask <= 42):
                values[4] += value;
                break;
            case (ask <= 50):
                values[5] += value;
                break;
        }
    }
    return values;
}

function computeChartValues(values) {
    let chartValues = values;
    for (let i = 0; i < chartValues.length; i++) {
        chartValues[i] = Math.round(chartValues[i] / totalGroups[i] * 10000) / 100;
    }
    return chartValues;
}

function makeChart(values) {

    const labels = groupsLabels;
    const data = {
        labels: labels,
        datasets: [{
            label: 'Gráfica de Resultados',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'],
            borderWidth: 1
        }]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    $('#chart').html("");
    $('#chart').append('<canvas id="myChart"></canvas>');

    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

function testing(number) {
    const radioInputs = $('input[type=radio]');
    for (radio of radioInputs) {
        if (radio.id == number ) {
            radio.checked = true;
        }
    }
}