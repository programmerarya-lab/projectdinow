<script>
  function toggleInstructions() {
    const panel = document.getElementById("instructionPanel");
    panel.classList.toggle("expanded");
  }

  // Close if clicked outside
  document.addEventListener("click", function (e) {
    const panel = document.getElementById("instructionPanel");
    if (
      panel.classList.contains("expanded") &&
      !panel.contains(e.target)
    ) {
      panel.classList.remove("expanded");
    }
  });
</script>
