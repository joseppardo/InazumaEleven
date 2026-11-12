// Exercici 1: galeria. En clicar una miniatura, actualitzem la imatge gran.
document.addEventListener('DOMContentLoaded',function(){
  const miniatures=document.querySelectorAll('.thumb');
  const gran=document.getElementById('imatgeGran');
  const peu=document.getElementById('peuImatge');
  miniatures.forEach(function(boto){
    boto.addEventListener('click',function(){
      gran.src=boto.dataset.src;
      gran.alt='Imatge ampliada: '+boto.dataset.label;
      peu.textContent=boto.dataset.label;
      miniatures.forEach(x=>x.classList.remove('active'));
      boto.classList.add('active');
    });
  });
  // Exercici 4: validar longitud mínima i coincidència.
  const form=document.getElementById('formulari');
  if(form) form.addEventListener('submit',function(e){
    e.preventDefault();
    const p1=document.getElementById('pass1').value;
    const p2=document.getElementById('pass2').value;
    const r=document.getElementById('resposta');
    if(p1.length<8){alert('La contrasenya ha de tenir com a mínim 8 caràcters.');r.textContent='La contrasenya és massa curta.';r.className='result err';}
    else if(p1!==p2){alert('Les dues contrasenyes no coincideixen.');r.textContent='Les contrasenyes no coincideixen.';r.className='result err';}
    else{r.textContent='S’ha canviat correctament la contrasenya';r.className='result ok';}
  });
});
// Exercici 2: funcions utilitzades amb onmouseover i onmouseout.
function activaZona(){const z=document.getElementById('zona');const p=document.getElementById('paragrafOcult');if(z&&p){z.classList.add('on');p.classList.add('show');}}
function desactivaZona(){const z=document.getElementById('zona');const p=document.getElementById('paragrafOcult');if(z&&p){z.classList.remove('on');p.classList.remove('show');}}
