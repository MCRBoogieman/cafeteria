const w = new Vue({
  el : '#wish',
  data : {
    wl: [],
    fpm: 100,
    fnm: ''
  }
 
});

const c = new Vue({
  el : '#cart',
  data : {
    cl: []
  },
  computed : {
    stl () {
      return (this.ttl*.84).toFixed(2);
    },
    iva () {
      return (this.ttl*.16).toFixed(2);
    },
    ttl (){
      cn = 0;
      for (i = 0; i < this.cl.length; i++){
        cn+=this.cl[i].pr;
      }
      return cn.toFixed(2);
    }
  }
 
});

const p = new Vue({
  el : '#section',
  data : {
    arrcffe: [
      {nm:'Americano',ing:'café americano y azucar glass',tam:'s',pr:35,vig:true,src:'img/c1.jpg'},
      {nm:'Cappuccino',ing:'Café, azucar glass, crema',tam:'m',pr:50,vig:true,src:'img/c2.jpg'},
      {nm:'Café con leche',ing:'Café, leche, azucar glass, crema',tam:'l',pr:75,vig:false,src:'img/c3.jpg'},
      {nm:'Café con canela',ing:'Café, canela, azucar glass',tam:'m',pr:40,vig:true,src:'img/c4.jpg'},
      {nm:'Café con chocolate',ing:'Café, azucar glass, crema, chocolate',tam:'l',pr:75,vig:false,src:'img/c5.jpg'},
      {nm:'Frappuccino',ing:'Hielo, crema, café, galleta, azucar glass',tam:'m',pr:45,vig:true,src:'img/c6.jpg'}
    ]
  },
  methods : {    
    nwl (it) {
      ban = false;
      for (i = 0; i < w.wl.length; i++){
        if (w.wl[i].nm == it.nm){
          ban=true;
        }
      }
      if(!ban){
        w.wl.push({nm:it.nm,ing:it.ing,tam:it.tam,pr:it.pr,vig:it.vig,src:it.src});
      }
    },
    ncl (it) {
      c.cl.push({nm:it.nm,ing:it.ing,tam:it.tam,pr:it.pr,vig:it.vig,src:it.src});
    },
    clr (ban) {
      return ban ? "background-color:#ffffff;" : "background-color:#D3D3D3;";
    },
    trns (ban) {
      return ban ? "opacity: 1;" : "opacity: .2;";
    }
  },
  computed : {
    busc (){
      return this.arrcffe.filter(o => o.nm.toUpperCase().includes(w.fnm.toUpperCase().trim())).filter(o => o.pr <= w.fpm);
    },
    cnm () {
      return w.fnm;
    }
  }
 
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 250 });
