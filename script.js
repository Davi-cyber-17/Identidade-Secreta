'use strict';
const SK={clara:'#f6d2ad',morena:'#c98e5e',negra:'#6d452e'},SH={clara:'#e0aa7e',morena:'#a8714a',negra:'#4a2c1c'};
const HC={loiro:'#f1cf6a',preto:'#1b1b1b',castanho:'#6a4026',ruivo:'#d8531f',roxo:'#5b2a86',nenhum:'none'};
const EY={azuis:'#2f7fd6',castanhos:'#4a2c14',verdes:'#2f9a4f'};
const HAT={Bobby:'#e8661c',Denis:'#d62828',Ana:'#2c5f8a',Suzi:'#f2c230',Gadi:'#3b2a1a'};
const CL=['#3a6ea5','#7b3fa0','#1f7a6d','#a33a5b','#4a5a8a','#b5651d'];
// nome, sexo, pele, cabelo, estilo, olhos, flags (g=óculos h=chapéu b=barba m=bigode)
const P=(n,s,k,h,st,e,f='')=>({n,s,k,h,st,e,g:f.includes('g'),h2:f.includes('h'),b:f.includes('b'),m:f.includes('m')});
const C=[
P('Tristan','m','morena','preto','curto','castanhos','g'),P('Bobby','m','morena','castanho','curto','castanhos','h'),
P('Linda','f','clara','ruivo','longo','azuis','g'),P('Kellen','f','clara','loiro','longo','azuis'),
P('Floyd','m','clara','preto','longo','castanhos','g'),P('Cleo','f','negra','roxo','longo','castanhos'),
P('Todd','m','clara','loiro','curto','azuis','g'),P('Fred','m','clara','preto','curto','verdes','m'),
P('Lola','f','clara','castanho','longo','castanhos'),P('Chuck','m','clara','loiro','curto','azuis','b'),
P('Renata','f','clara','preto','longo','castanhos'),P('Aline','f','clara','preto','longo','castanhos'),
P('Andy','m','clara','preto','curto','castanhos'),P('Samuel','m','negra','nenhum','careca','castanhos','gb'),
P('Gadi','m','clara','castanho','curto','verdes','hb'),P('Gigi','f','clara','loiro','curto','azuis','g'),
P('Melissa','f','clara','castanho','longo','castanhos'),P('Roni','m','clara','nenhum','careca','castanhos','m'),
P('Leo','m','clara','nenhum','careca','azuis','b'),P('Denis','m','clara','ruivo','curto','verdes','h'),
P('Ana','f','clara','ruivo','longo','verdes','h'),P('Suzi','f','clara','castanho','longo','castanhos','hg'),
P('Maude','f','negra','preto','afro','castanhos'),P('Sônia','f','morena','preto','longo','castanhos')
];
function avatar(c,i){
  const sk=SK[c.k],sh=SH[c.k],hc=HC[c.h],bc=hc==='none'?'#444':hc;
  let s=`<svg viewBox="0 0 100 100"><defs><radialGradient id="s${i}" cx=".4" cy=".35"><stop offset="0" stop-color="${sk}"/><stop offset="1" stop-color="${sh}"/></radialGradient></defs><path d="M10 100Q14 80 50 79Q86 80 90 100Z" fill="${CL[i%6]}"/>`;
  if(c.st==='longo')s+=`<rect x="17" y="18" width="66" height="72" rx="28" fill="${hc}"/>`;
  if(c.st==='afro')s+=`<circle cx="50" cy="38" r="37" fill="${hc}"/>`;
  s+=`<rect x="41" y="74" width="18" height="14" fill="${sh}"/><circle cx="24" cy="54" r="5" fill="${sh}"/><circle cx="76" cy="54" r="5" fill="${sh}"/><ellipse cx="50" cy="52" rx="27" ry="30" fill="url(#s${i})"/>`;
  if(c.st==='curto'||c.st==='longo')s+=`<path d="M22 50Q19 13 50 13Q81 13 78 50Q71 31 50 33Q29 31 22 50Z" fill="${hc}"/>`;
  if(c.st==='afro')s+=`<path d="M24 46Q30 29 50 30Q70 29 76 46Q66 37 50 37Q34 37 24 46Z" fill="${hc}"/>`;
  if(c.h!=='nenhum')s+='<path d="M32 26Q50 14 68 26" stroke="#fff" stroke-opacity=".2" stroke-width="3" fill="none" stroke-linecap="round"/>';
  s+=`<path d="M32 44Q39 40 46 44M54 44Q61 40 68 44" stroke="${hc==='none'?'#333':hc}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  [39,61].forEach(x=>s+=`<circle cx="${x}" cy="52" r="5.5" fill="#fff"/><circle cx="${x}" cy="52" r="3.2" fill="${EY[c.e]}"/><circle cx="${x}" cy="52" r="1.3" fill="#000"/><circle cx="${x+1.2}" cy="50.8" r=".9" fill="#fff"/>`);
  s+=`<path d="M50 56Q46 63 50 64" stroke="${sh}" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="31" cy="62" r="5" fill="#ff6a8a" opacity=".15"/><circle cx="69" cy="62" r="5" fill="#ff6a8a" opacity=".15"/>`;
  s+='<path d="M41 69Q50 75 59 69" stroke="#7a2e2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
  if(c.b)s+=`<path d="M24 58Q26 90 50 90Q74 90 76 58Q70 76 50 76Q30 76 24 58Z" fill="${bc}"/>`;
  if(c.m)s+=`<path d="M37 65Q50 57 63 65Q50 69 37 65Z" fill="${bc}"/>`;
  if(c.g)s+='<g stroke="#222" stroke-width="2.5" fill="rgba(160,230,255,.25)"><circle cx="39" cy="52" r="9"/><circle cx="61" cy="52" r="9"/><path d="M48 52h4"/></g><path d="M34 48l4-3M56 48l4-3" stroke="#fff" stroke-width="1.5" opacity=".7"/>';
  if(c.h2)s+=`<path d="M20 38Q21 7 50 7Q79 7 80 38Z" fill="${HAT[c.n]||'#c33'}"/><rect x="12" y="35" width="76" height="7" rx="3" fill="#000" opacity=".35"/>`;
  if(c.n==='Sônia')s+='<circle cx="72" cy="22" r="6" fill="#e84a8a"/>';
  return s+'</svg>';
}
const cardHTML=i=>`<div class="av">${avatar(C[i],i)}</div><b>${C[i].n.toUpperCase()}</b><i class="x">✕</i>`;
const CATS=[['SEXO','#d9261c'],['COR PELE','#ea4a14'],['OLHOS','#f06a12'],['CABELO','#f58a14'],['OUTROS','#f5a614']];
const Q=[];
const q=(cat,t,f)=>Q.push({cat,t,f});
q(0,'É homem?',c=>c.s==='m');q(0,'É mulher?',c=>c.s==='f');
['clara','morena','negra'].forEach(k=>q(1,`Tem a pele ${k}?`,c=>c.k===k));
['azuis','castanhos','verdes'].forEach(e=>q(2,`Tem olhos ${e}?`,c=>c.e===e));
q(2,'Usa óculos?',c=>c.g);
['loiro','preto','castanho','ruivo','roxo'].forEach(h=>q(3,`Tem cabelo ${h}?`,c=>c.h===h));
q(3,'É careca?',c=>c.st==='careca');q(3,'Tem cabelo comprido?',c=>c.st==='longo');
q(4,'Usa chapéu ou boné?',c=>c.h2);q(4,'Tem barba?',c=>c.b);q(4,'Tem bigode?',c=>c.m);

const $=id=>document.getElementById(id);
const PCFG={config:{iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:stun1.l.google.com:19302'},{urls:'stun:global.stun.twilio.com:3478'},
{urls:'turn:openrelay.metered.ca:80',username:'openrelayproject',credential:'openrelayproject'},
{urls:'turn:openrelay.metered.ca:443',username:'openrelayproject',credential:'openrelayproject'},
{urls:'turn:openrelay.metered.ca:443?transport=tcp',username:'openrelayproject',credential:'openrelayproject'}]}};
let mode,G,peer,conn,tick,roomCode,host,rm=[0,0],snd=true,auto=true,AC;
const show=id=>['menu','online','game'].forEach(s=>$(s).classList.toggle('hidden',s!==id));
const rnd=()=>Math.floor(Math.random()*C.length);
const view=()=>mode==='local'?G.turn:G.me;
const myTurn=()=>!G.over&&(mode==='local'?!G.lock:(G.turn===G.me&&!G.wait));
const ans=a=>`<b class="${a?'y':'n'}">${a?'SIM':'NÃO'}</b>`;

// ===== Som, avisos e diálogos =====
function beep(f,d=.1,ty='sine'){if(!snd)return;try{AC=AC||new AudioContext();const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime;o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(AC.destination);o.start();o.stop(t+d)}catch(e){}}
const sfx={tap:()=>beep(520,.05),yes:()=>{beep(660);setTimeout(()=>beep(990),90)},no:()=>beep(200,.25,'sawtooth'),win:()=>[523,659,784,1047].forEach((f,i)=>setTimeout(()=>beep(f,.18),i*110)),lose:()=>[400,300,200].forEach((f,i)=>setTimeout(()=>beep(f,.25,'sawtooth'),i*160))};
function toast(h,c){const t=$('toast');t.innerHTML=h;t.className=c||'';void t.offsetWidth;t.classList.add('go')}
function dlg(html,btns){
  $('dTxt').innerHTML=html;const b=$('dBtns');b.innerHTML='';
  btns.forEach(([l,f,c])=>{const x=document.createElement('button');x.className='big '+(c||'');x.textContent=l;x.onclick=()=>{$('dlg').classList.add('hidden');f&&f()};b.appendChild(x)});
  $('dlg').classList.remove('hidden');
}
const hideDlg=()=>$('dlg').classList.add('hidden');

// ===== Jogo =====
function begin(first,me){
  rm=[0,0];hideDlg();
  G={turn:first,me,secret:[rnd(),rnd()],flip:[new Set(),new Set()],asked:[{},{}],log:[[],[]],cat:0,lock:false,wait:false,guessing:false,over:false,t0:Date.now()};
  $('board').innerHTML='';
  C.forEach((c,i)=>{const d=document.createElement('div');d.className='card';d.innerHTML=cardHTML(i);d.onclick=()=>clickCard(i);$('board').appendChild(d)});
  show('game');clearInterval(tick);
  tick=setInterval(()=>{const s=Math.floor((Date.now()-G.t0)/1000);$('timer').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000);
  if(mode==='local'){while(G.secret[1]===G.secret[0])G.secret[1]=rnd();G.lock=true;
    dlg(`Jogador ${first+1}, toque para começar.<small>(o outro jogador não pode olhar)</small>`,[['Começar',()=>{G.lock=false;render()}]])}
  else toast(first===me?'Você começa!':'O oponente começa!');
  render();
}
function render(){
  const v=view(),f=G.flip[v],mine=myTurn();
  $('tabs').innerHTML='';
  CATS.forEach(([n,col],i)=>{const b=document.createElement('button');b.textContent=n;b.style.setProperty('--col',col);b.className=i===G.cat?'on':'';b.onclick=()=>{G.cat=i;render()};$('tabs').appendChild(b)});
  $('qpanel').innerHTML='';
  Q.forEach((o,i)=>{if(o.cat!==G.cat)return;const u=i in G.asked[v],b=document.createElement('button');
    b.textContent=o.t;b.className=u?(G.asked[v][i]?'yes':'no'):'';b.disabled=!mine||u;b.onclick=()=>ask(i);$('qpanel').appendChild(b)});
  const p=$('pill');p.className=G.over?'':G.guessing?'guess':mine?'me':'wait';
  p.textContent=G.over?'FIM DE JOGO':G.guessing?'TOQUE NO PERSONAGEM':mine?'SUA VEZ · FAÇA UMA PERGUNTA':mode==='local'?'AGUARDE':'OPONENTE JOGANDO…';
  $('left').textContent=C.length-f.size;
  let k=0;[...$('board').children].forEach((d,i)=>{const on=f.has(i);d.style.transitionDelay=on&&!d.classList.contains('flip')?(k++*30)+'ms':'0ms';d.classList.toggle('flip',on)});
  $('board').classList.toggle('guessing',G.guessing);
  $('secret').innerHTML=`<div class="card">${cardHTML(G.secret[v])}</div>`;
  $('log').innerHTML=G.log[v].map(l=>`<div>${l}</div>`).reverse().join('');
  const g=$('guessBtn');g.className=G.guessing?'on':'';g.disabled=!mine;g.textContent=G.guessing?'Cancelar palpite':'Já sabe quem é?';
  $('bAuto').classList.toggle('on',auto);$('bSnd').textContent=snd?'🔊':'🔇';
}
function clickCard(i){
  if(G.over)return;
  if(G.guessing){if(!myTurn())return;sfx.tap();
    dlg(`Seu palpite é <b>${C[i].n}</b>?<div class="pv"><div class="card">${cardHTML(i)}</div></div><small>Palpite errado = derrota!</small>`,[['Confirmar',()=>guess(i)],['Cancelar',null,'ghost']]);return}
  const f=G.flip[view()];f.has(i)?f.delete(i):f.add(i);sfx.tap();render();
}
function reply(v,i,a){
  G.asked[v][i]=a;G.log[v].push(`${Q[i].t} → ${ans(a)}`);
  if(auto)C.forEach((c,j)=>{if(Q[i].f(c)!==a)G.flip[v].add(j)});
  a?sfx.yes():sfx.no();
}
function ask(i){
  if(!myTurn())return;const v=view();sfx.tap();
  if(mode==='online'){G.wait=true;conn.send({t:'ask',q:i});render();return}
  const a=Q[i].f(C[G.secret[1-v]]);reply(v,i,a);G.lock=true;render();
  dlg(`<small>${Q[i].t}</small><div class="ans ${a?'y':'n'}">${a?'SIM':'NÃO'}</div>`,[['Passar o aparelho',()=>
    dlg(`Jogador ${2-v}, toque para começar.<small>(o outro jogador não pode olhar)</small>`,[['Começar',()=>{G.turn=1-v;G.lock=false;G.guessing=false;render()}]])]]);
}
$('guessBtn').onclick=()=>{if(myTurn()){G.guessing=!G.guessing;sfx.tap();render()}};
function guess(i){
  G.guessing=false;
  if(mode==='online'){G.wait=true;conn.send({t:'guess',i});render();return}
  const v=G.turn,t=G.secret[1-v],ok=i===t;
  finish(ok,`Jogador ${ok?v+1:2-v} venceu!`,ok?`Era ${C[i].n} mesmo!`:`Jogador ${v+1} errou o palpite.`,t);
}
function finish(won,title,sub,sIdx){
  G.over=true;clearInterval(tick);render();won?sfx.win():sfx.lose();
  const b=[['Voltar ao menu',toMenu,'ghost']];
  b.unshift(mode==='online'?['Revanche',rematch]:['Jogar de novo',()=>begin(Math.random()<.5?0:1,0)]);
  dlg(`<h2 class="${won?'w':'l'}">${title}</h2>${sub}<div class="pv"><div class="card">${cardHTML(sIdx)}</div></div>`,b);
}
function toMenu(){clearInterval(tick);hideDlg();if(conn){try{conn.close()}catch(e){}}if(peer){try{peer.destroy()}catch(e){}}conn=peer=G=null;rm=[0,0];show('menu')}
$('bMenu').onclick=()=>dlg('Sair da partida?',[['Sair',toMenu,'alt'],['Continuar',null,'ghost']]);
$('bAuto').onclick=()=>{auto=!auto;toast(auto?'Eliminação automática: LIGADA':'Eliminação automática: DESLIGADA<small>Elimine os cards tocando neles.</small>');render()};
$('bSnd').onclick=()=>{snd=!snd;render();sfx.tap()};
$('bHelp').onclick=()=>dlg('<h2>Como jogar</h2><small>Cada jogador recebe um personagem secreto. Na sua vez, faça uma pergunta de SIM/NÃO: os cards que não combinam são eliminados sozinhos (ou toque neles para eliminar na mão). Quando souber quem é, toque em “Já sabe quem é?” e escolha o card. Acertou, venceu. Errou, perdeu!</small>',[['Entendi',null]]);

// ===== Online =====
function rematch(){rm[0]=1;conn.send({t:'rm'});dlg('Aguardando o oponente aceitar a revanche…',[['Menu',toMenu,'ghost']]);chk()}
function chk(){if(host&&rm[0]&&rm[1]){const f=Math.random()<.5?0:1;conn.send({t:'start',first:f});begin(f,0)}}
function onMsg(m){
  if(m.t==='start'){begin(m.first,1);return}
  if(m.t==='rm'){rm[1]=1;if(!rm[0])toast('O oponente quer revanche!');chk();return}
  if(!G)return;
  if(m.t==='ask'){const a=Q[m.q].f(C[G.secret[G.me]]);conn.send({t:'ans',q:m.q,a});
    G.log[G.me].push(`Oponente: ${Q[m.q].t} → ${ans(a)}`);G.turn=G.me;G.wait=false;toast(`O oponente perguntou:<small>${Q[m.q].t}</small>Resposta: ${a?'SIM':'NÃO'}`);sfx.tap();render()}
  else if(m.t==='ans'){reply(G.me,m.q,m.a);G.turn=1-G.me;G.wait=false;toast(`${Q[m.q].t}<b>${m.a?'SIM ✔':'NÃO ✘'}</b>`,m.a?'y':'n');render()}
  else if(m.t==='guess'){const s=G.secret[G.me],ok=m.i===s;conn.send({t:'res',ok,s});
    ok?finish(false,'Você perdeu!',`O oponente adivinhou: era ${C[s].n}.`,s):finish(true,'Você venceu!',`O oponente errou o palpite (${C[m.i].n}).`,s)}
  else if(m.t==='res'){m.ok?finish(true,'Você venceu!','Você descobriu o personagem!',m.s):finish(false,'Você perdeu!','Palpite errado.',m.s)}
}
function setup(cn){
  cn.on('data',onMsg);
  cn.on('close',()=>{if(G&&(!G.over||rm[0])){G.over=true;clearInterval(tick);dlg('Oponente saiu.<small>A conexão foi encerrada.</small>',[['Voltar ao menu',toMenu]])}});
}
const msg=t=>{$('onMsg').textContent=t;$('bCopy').classList.add('hidden')};
const link=()=>location.origin+location.pathname+'?sala='+roomCode;
const noLib=()=>typeof Peer==='undefined'&&(msg('A biblioteca online não carregou. Verifique a internet.'),true);
$('bCopy').onclick=async()=>{try{await navigator.clipboard.writeText(link());msg('Link copiado! Envie ao seu amigo.')}catch(e){prompt('Copie o link:',link())}};
$('bOnline').onclick=()=>{mode='online';msg('');show('online')};
$('bLocal').onclick=()=>{mode='local';begin(0,0)};
$('bBack').onclick=toMenu;
function create(){
  if(noLib())return;
  if(peer)try{peer.destroy()}catch(e){}
  conn=null;host=true;
  const code=Math.random().toString(36).slice(2,6).toUpperCase();
  roomCode=code;peer=new Peer('caraacara-'+code,PCFG);
  peer.on('open',()=>{$('onMsg').innerHTML='Sala criada. Código:<b>'+code+'</b>Aguardando seu amigo entrar...';$('bCopy').classList.remove('hidden')});
  peer.on('error',e=>e.type==='unavailable-id'?create():msg('Sem conexão com o servidor. Verifique sua internet e tente de novo.'));
  peer.on('connection',cn=>{if(conn){cn.close();return}conn=cn;setup(cn);
    cn.on('open',()=>{const first=Math.random()<.5?0:1;cn.send({t:'start',first});begin(first,0)})});
}
$('bCreate').onclick=()=>{msg('Criando sala...');create()};
$('bJoin').onclick=()=>{
  const code=$('codeIn').value.trim().toUpperCase();if(code.length<4){msg('Digite o código de 4 letras.');return}
  if(noLib())return;
  msg('Entrando...');if(peer)try{peer.destroy()}catch(e){}conn=null;host=false;peer=new Peer(undefined,PCFG);
  peer.on('open',()=>{conn=peer.connect('caraacara-'+code,{reliable:true});setup(conn);
    setTimeout(()=>{if(!G)msg('Não conectou. Confira o código e a internet dos dois aparelhos.')},15000)});
  peer.on('error',e=>msg(e.type==='peer-unavailable'?'Sala não encontrada. Confira o código.':'Sem conexão com o servidor. Tente de novo.'));
};
// Entrar direto pelo link (?sala=ABCD)
const sala=new URLSearchParams(location.search).get('sala');
if(sala){mode='online';show('online');$('codeIn').value=sala.slice(0,4).toUpperCase();$('bJoin').click()}
