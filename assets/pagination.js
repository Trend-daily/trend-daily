document.addEventListener("DOMContentLoaded",()=>{

   
  // Array of pagination button data
  const buttonsData = [
    { label: "Trending Bags", link: "trending-bags.html" },
    { label: "Streetwear", link: "streetwear-trends.html" },
    { label: "Formal Wear", link: "formalwear-trends.html" },
    { label: "Sneakers", link: "sneakers-trends.html" },
    { label: "5", link: "page5.html" },
    { label: "6", link: "page6.html" },
    { label: "7", link: "page7.html" },
    { label: "8", link: "page8.html" },
    { label: "9", link: "page9.html" },
    { label: "10", link: "page10.html" }
  ];

  const paginationContainer = document.getElementById("paginationButtons");
  const toggleMore = document.getElementById("toggleMore");
  let expanded = false;

  // Render pagination buttons based on expanded state
  function renderButtons() {
    paginationContainer.innerHTML = ""; // Clear previous buttons

    buttonsData.forEach((btn, index) => {
      const button = document.createElement("button");
      button.textContent = btn.label;
      button.onclick = () => window.location.href = btn.link;

      // Hide buttons after the first 2 if not expanded
      if (!expanded && index > 1) {
        button.classList.add("hidden");
      }

      paginationContainer.appendChild(button);
    });
  }

  // Toggle 'More' link to show or hide extra buttons
  toggleMore.addEventListener("click", (e) => {
    e.preventDefault();
    expanded = !expanded;
    toggleMore.textContent = expanded ? "Show Less" : "More";
    renderButtons();
  });

  // Call once on page load
  renderButtons();

  // OPTIONAL: Add new button dynamically (example)
  // buttonsData.push({ label: "11", link: "page11.html" });
  // renderButtons();
  
  
  

})
