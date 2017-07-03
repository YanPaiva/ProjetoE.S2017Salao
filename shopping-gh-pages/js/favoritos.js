//Associação entre elemento na lista de Ofertas e na Lista de Favoritos
var clones = []

var toggleFavorito = function(event, el){
    //Inventei isso
    preventRedirect = true
    
    var parent = el.parentElement.parentElement.parentElement.parentElement
    if(el.innerHTML == 'favorite_border'){
        el.innerHTML = "favorite"
        //Remove efeito de seleção antes de copiar
        var ripple = parent.getElementsByClassName('waves-ripple')[0]
        ripple.parentElement.removeChild(ripple)
        
        //Deep copy do elemento na oferta é colocado na lista de favoritos
        var clone = parent.cloneNode(true)
        document.getElementById('favoritos').appendChild(clone)
        clones.push([parent, clone])
    }else{
        var clone;
        var index;
        //Para remover o favorito, acha ele na lista de "clones".
        //O usuário pode ter clicado no salão na lista de ofertas ou na lista de favoritos
        //Qualquer um dos dois serve.
        for(var i=0; i < clones.length; i++){
            if(parent.isEqualNode(clones[i][0]) || parent.isEqualNode(clones[i][1])){
                clone = clones[i]
                index = i;
                break;
            }
        }
        if(clone){
            //Remove da lista de favoritos;
            //Muda ícone da lista de Salões
            //Remove elemento da lista de clones
            document.getElementById('favoritos').removeChild(clone[1])
            clone[0].getElementsByTagName('i')[1].innerHTML = 'favorite_border'
            clones.splice(index, 1)
        }
    }
}

