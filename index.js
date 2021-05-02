function clickItem(){
    // click message
    var item = document.querySelector("._7UhW9");
    setTimeout(()=>item.click(), 500);
    console.log('Conversa Selecionado --->', item.textContent);
    
    // click opt
    setTimeout(function(){
        var opt = document.querySelector(".QBdPU");
        setTimeout(()=>{opt.click()}, 0);
        console.log('Clicando em opções...');
    }, 1000);
    
    // //Delete
    setTimeout(function(){
        var de = document.querySelector(".xLCgt.MMzan.fDdiY.uL8Hv.M8ipN");
        setTimeout(()=>{de.click()}, 0);
        console.log('Opção selecionada', de.textContent);
    }, 2000);
    
    // Delete Confirm
    setTimeout(function(){
        var deConfirm = document.querySelector(".mt3GC .aOOlW");
        setTimeout(()=>{deConfirm.click()}, 0);
        console.log('Deletando conversa...');
        setTimeout(()=>{
            console.log('Conversa deletada com sucesso!')
            console.log('##############################')
        }, 750);
    }, 4000);
}
setInterval(clickItem , 5000)