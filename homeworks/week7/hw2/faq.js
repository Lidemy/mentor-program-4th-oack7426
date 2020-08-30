function toogle() {
  if (document.querySelector('.qa-inbox').style.display === 'none') {
    document.querySelector('.qa-inbox').style.display = 'block';
  } else {
    document.querySelector('.qa-inbox').style.display = 'none';
  }
}

document.querySelector('.qa-box').addEventListener('click', toogle);
