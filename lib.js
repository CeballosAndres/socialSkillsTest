const questions = {
    1 : "Prestas atención a la persona que te está hablando y haces un esfuerzo para comprender lo que te está diciendo",
    2 : "Hablas con los demás de temas poco importantes para pasar luego a los más importantes",
    3 : "Hablas con otras personas sobre cosas que interesan a ambos",
    4 : "Clarificas la información que necesitas y se la pides a la persona adecuada",
    5 : "Permites que los demás sepan que les agradeces los favores",
    6 : "Te das a conocer a los demás por propia iniciativa",
    7 : "Ayudas a que los demás se conozcan entre sí",
    8 : "Dices que te gusta algún aspecto de la otra persona o alguna de las actividades que realiza",
    9 : "Pides que te ayuden cuando tienes alguna dificultad",
    10 : "Eliges la mejor forma para integrarte en un grupo o para participar en una determinada actividad",
    11 : "Explicas con claridad a los demás cómo hacer una tarea específica",
    12 : "Prestas atención a las instrucciones, pides explicaciones y llevas adelante las instrucciones correctamente",
    13 : "Pides disculpas a los demás por haber hecho algo mal",
    14 : "Intentas persuadir a los demás de que tus ideas son mejores y que serán de mayor utilidad que las de la otra persona",
    15 : "Intentas reconocer las emociones que experimentas",
    16 : "Permites que los demás conozcan lo que sientes",
    17 : "Intentas comprender lo que sienten los demás",
    18 : "Intentas comprender el enfado de la otra persona",
    19 : "Permites que los demás sepan que te interesas o preocupas por ellos",
    20 : "Piensas porqué estás asustado y haces algo para disminuir tu miedo",
    21 : "Te dices a ti mismo o haces cosas agradables cuando te mereces una recompensa",
    22 : "Reconoces cuando es necesario pedir permiso para hacer algo y luego lo pides a la perso- na indicada",
    23 : "Te ofreces para compartir algo que es apreciado por los demás",
    24 : "Ayudas a quien lo necesita",
    25 : "Llegas a establecer un sistema de negociación que te satisface tanto a ti mismo como a quienes sostienen posturas diferentes",
    26 : "Controlas tu carácter de modo que no se te “escapan las cosas de la mano”",
    27 : "Defiendes tus derechos dando a conocer a los demás cuál es tu postura",
    28 : "Te las arreglas sin perder el control cuando los demás te hacen bromas",
    29 : "Te mantienes al margen de situaciones que te pueden ocasionar problemas",
    30 : "Encuentras otras formas para resolver situaciones difíciles sin tener que pelearte",
    31 : "Dices a los demás cuándo han sido los responsables de originar un determinado problema e intentas encontrar una solución",
    32 : "Intentas llegar a una solución justa ante la queja justificada de alguien",
    33 : "Expresas un sincero cumplido a los demás por la forma en que han jugado",
    34 : "Haces algo que te ayude a sentir menos vergüenza o a estar menos cohibido",
    35 : "Eres consciente cuando te han dejado de lado en alguna actividad y, luego, haces algo para sentirte mejor en ese momento",
    36 : "Manifiestas a los demás que han tratado injustamente a un amigo",
    37 : "Consideras con cuidado la posición de la otra persona, comparándola con la propia, antes de decidir lo que hacer",
    38 : "Comprendes la razón por la cual has fracasado en una determinada situación y qué puedes hacer para tener más éxito en el futuro",
    39 : "Reconoces y resuelves la confusión que se produce cuando los demás te explican una cosa pero dicen o hacen otras que se contradicen",
    40 : "Comprendes lo que significa la acusación y por qué te la han hecho y, luego, piensas en la mejor forma de relacionarte con la persona que te ha hecho la acusación",
    41 : "Planificas la mejor forma para exponer tu punto de vista antes de una conversación pro- blemática",
    42 : "Decides lo que quieres hacer cuando los demás quieren que hagas otra cosa distinta",
    43 : "Resuelves la sensación de aburrimiento iniciando una nueva actividad interesante",
    44 : "Reconoces si la causa de algún acontecimiento es consecuencia de alguna situación bajo tu control",
    45 : "Tomas decisiones realistas sobre lo que eres capaz de realizar antes de comenzar una tarea",
    46 : "Eres realista cuando debes dilucidar cómo puedes desenvolverte en una determinada tarea",
    47 : "Resuelves qué necesitas saber y cómo conseguir la información",
    48 : "Determinas de forma realista cuál de los numerosos problemas es el más importante y el que deberías solucionar primero",
    49 : "Consideras las posibilidades y eliges la que te hará sentir mejor",
    50 : "Te organizas y te preparas para facilitar la ejecución de tu trabajo"
};

$(document).ready(function () {
    for (let key in questions) {
        appendQuestion(key, questions[key]);
    };
});

function appendQuestion(key, value) {
    $('#test').append('' +
        '<div class="row">' +
            '<p class="col-1">' + key + '</p>' +
            '<p class="col-7">' + value + '</p>' +
            '<div class="col-1">' +
                '<div class="form-check">' +
                    '<input type="radio" class="col-1 form-check-input" name="test-'+key+'" id="1">' +
                    '<label for="test-'+key+'" class="form-check-label"></label>' +
                '</div>' +
            '</div>' +
            '<div class="col-1">' +
                '<div class="form-check">' +
                    '<input type="radio" class="col-1 form-check-input" name="test-'+key+'" id="2">' +
                    '<label for="test-'+key+'" class="form-check-label"></label>' +
                '</div>' +
            '</div>' +
            '<div class="col-1">' +
                '<div class="form-check">' +
                    '<input type="radio" class="col-1 form-check-input" name="test-'+key+'" id="3">' +
                    '<label for="test-'+key+'" class="form-check-label"></label>' +
                '</div>' +
            '</div>' +
            '<div class="col-1">' +
                '<div class="form-check">' +
                    '<input type="radio" class="col-1 form-check-input" name="test-'+key+'" id="4">' +
                    '<label for="test-'+key+'" class="form-check-label"></label>' +
                '</div>' +
            '</div>' +
        '</div>'
    );
};
