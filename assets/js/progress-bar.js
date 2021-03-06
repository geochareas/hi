window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  let progressBar = document.getElementById("myProgress");
  if (progressBar) {
    progressBar.style.height = scrolled + "%";
  }
};
