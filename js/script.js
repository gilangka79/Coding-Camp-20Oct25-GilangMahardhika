welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleString();
}

updateTime();

document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("outNama").textContent = document.getElementById("nama").value;
  document.getElementById("outTanggal").textContent = document.getElementById("tgl_pesan").value;
  document.getElementById("outGender").textContent = document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("outSize").textContent = document.getElementById("size").value;
  document.getElementById("outPesan").textContent = document.getElementById("pesan").value;

  updateTime();
});
