const sharingPane = document.querySelector("#sharingPane");
const sharingButton = document.querySelector("#sharingButton");

let isShown = false;

const showSharingPane = () => {
  sharingPane.classList.add("show");
  setTimeout(hideSharingPane, 3600);
};

const hideSharingPane = () => {
  sharingPane.classList.remove("show");
};

sharingButton.addEventListener("click", showSharingPane);
