const petite = document.getElementById("petite");
const grande = document.getElementById ("grande");
const moyenne = document.getElementById ("moyenne");
const contenu = document.getElementById ("dimns").innerHTML;

['mouseover','mouseout'].forEach(e => {
    if (e === 'mouseover') {
        petite.addEventListener (e, () => {
           alert ('Dimensions : 26cm de diamètre pour 1/2 personnes.')
        });
        moyenne.addEventListener (e, () => {
            alert ('Dimensions : 33cm de diamètre pour 2/3 personnes.')
        });
        grande.addEventListener (e, () => {
            alert ('Dimensions : 40cm de diamètre pour 3/4 personnes')
        });

    } else if (e === 'mouseout') {
        petite.addEventListener (e, () => {
        });
    }
});
