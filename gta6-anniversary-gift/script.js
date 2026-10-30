const shell = document.querySelector('#giftShell');
const open = document.querySelector('#openGift');
const again = document.querySelector('#again');

open.addEventListener('click', () => {
  shell.classList.add('unlocked');
  navigator.vibrate?.([40, 30, 80]);
});

again.addEventListener('click', () => {
  shell.classList.remove('unlocked');
  void shell.offsetWidth;
});
