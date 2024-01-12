const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function sendEmail() {
    Email.send({
      SecureToken: "d4211377-f5c5-48c5-a278-04f390399e68", // Replace with actual secure token
      To: "0aloo0aloo0@gmail.com",
      From: "abhi99190@gmail.com",
      Subject: "Portfolio Form Submission",
      Body:
        "Name: " +
        document.getElementById("Name").value +
        "<br> Email: " +
        document.getElementById("Email").value +
        "<br> Message: " +
        document.getElementById("Message").value,
    }).then((message) => {
        if (message.toLowerCase() === "ok") {
            swal("Successful", "Your form was successfully submitted", "success");
            resetForm();
        } else {
            swal("Error! Please try again later.", "error");
        }
    });
  }
  function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
  }

const openTab = (tabName) => {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for(let tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

const menu = document.getElementById("menu");

const openMenu = () => {
    menu.style.right = "0";
}

const closeMenu = () => {
    menu.style.right = "-200px";
}