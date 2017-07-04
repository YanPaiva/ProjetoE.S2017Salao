$('select').material_select();
    

$('tbody td').click(function(e){
    var day = this.innerHTML
    this.innerHTML = '<a class="btn-floating btn-small waves-effect waves-light teal" style="text-align:center">'+day+'</a>'
})
