document.getElementById('year').textContent = new Date().getFullYear();

(function(){
  const btn=document.getElementById('toggleTheme');
  if(!btn) return;
  btn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('light');
    if(document.documentElement.classList.contains('light')){
      document.documentElement.style.setProperty('--bg','#1A1A1D');
      document.documentElement.style.setProperty('--card','#222831');
      document.documentElement.style.setProperty('--text','#ffffff');
      document.documentElement.style.setProperty('--muted','#456882');
      document.documentElement.style.setProperty('--chip','#456882');
      document.documentElement.style.setProperty('--line','#e6e9ef');
    }else{
      document.documentElement.style.removeProperty('--bg');
      document.documentElement.style.removeProperty('--card');
      document.documentElement.style.removeProperty('--text');
      document.documentElement.style.removeProperty('--muted');
      document.documentElement.style.removeProperty('--chip');
      document.documentElement.style.removeProperty('--line');
    }
  });
})();