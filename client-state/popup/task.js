function getCookie(name) {

    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
  }
  
  let modal = document.getElementById("subscribe-modal");
  if (getCookie('modal') == 'true') { } else {
    modal.classList.add("modal_active");
  }
  
  let modalClose = document.querySelector("div.modal__close_times");
  
  console.log(document.cookie);
  
  modalClose.onclick = function () {
    modal.classList.remove("modal_active");
  
    document.cookie = "modal=true";
    console.log(document.cookie);
  
  };