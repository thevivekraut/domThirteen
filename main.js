
const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    addNewLineElement(object);
   }
  });

    function addNewLineElement(object) {
    const ul = document.getElementById("users");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.name + " " + object.emailId + " ")
    );
    console.log(document.createElement("i"));
    const a1 = document.createElement("input");
    a1.id = "yash";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", () => {
      console.log(object);
      document.getElementById("name").value = object.name;
      document.getElementById("email").value = object.emailId;
      li.remove();
    });

  var keys = Object.keys(localStorage),
  i = keys.length; 
  let stringifiedDetailsOfPeople, detailsOfPeople;

  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);
      addNewLineElement(detailsOfPeople);
    }
  });
 
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    localStorage.removeItem("userDetails" + object.emailId);
    li.remove();
  });
  console.log(a);
  li.appendChild(a);
  console.log(li);
  ul.appendChild(li);
}
