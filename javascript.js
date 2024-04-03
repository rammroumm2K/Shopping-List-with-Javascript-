const itemInput = document.getElementById("itemInput");
    const itemList = document.getElementById("itemList");

   
    const savedList = localStorage.getItem("listaSpesa");
    if (savedList) {
      const loadedList = JSON.parse(savedList);
      for (const item of loadedList) {
        createListItem(item);
      }
    }

    function createListItem(itemText) {
      const li = document.createElement("li");
      const itemSpan = document.createElement("span");
      itemSpan.textContent = itemText;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";

      deleteBtn.addEventListener("click", () => {
        li.remove();
        updateLocalStorage();
      });

      li.appendChild(itemSpan);
      li.appendChild(deleteBtn);
      itemList.appendChild(li);
    }

    function addItem() {
      const newItem = itemInput.value.trim();

      if (newItem !== "") {
        createListItem(newItem);
        itemInput.value = "";
        updateLocalStorage();
      }
    }

    function updateLocalStorage() {
      const updatedList = Array.from(itemList.querySelectorAll("li"))
        .map((li) => li.querySelector("span").textContent);
      localStorage.setItem("listaSpesa", JSON.stringify(updatedList));
    }

    itemList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        updateLocalStorage();
      }
    });

    function calcola() {
      var stipendio = document.getElementById("stipendio").value;
      var affitto = stipendio * 0.5;
      var fabbisogno = stipendio * 0.3;
      var risparmio = stipendio * 0.2;
      
      var risultato = "<p>Stipendio : " + stipendio + "€</p>";
      risultato += "<p>Affitto e fatture: " + affitto + "€ (" + (affitto/stipendio)*100 + "%)</p>";
      risultato += "<p>Fabbisogno: " + fabbisogno + "€ (" + (fabbisogno/stipendio)*100 + "%)</p>";
      risultato += "<p>Risparmio: " + risparmio + "€ (" + (risparmio/stipendio)*100 + "%)</p>";
      
      document.getElementById("risultato").innerHTML = risultato;
  }