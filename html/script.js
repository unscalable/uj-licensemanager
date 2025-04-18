window.addEventListener('message', function (event) {
    if (event.data.action === "openUI") {
        openUI();
    }
});

function openUI() {
    document.body.style.display = "flex";
    document.getElementById("licenseForm").reset(); // Clear previous data
}

function closeUI() {
    document.body.style.display = "none";
    fetch(`https://${GetParentResourceName()}/closeUI`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    });
}

document.getElementById("licenseForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const playerId = document.getElementById("playerId").value.trim();
    const licenseType = document.getElementById("licenseType").value;
    const action = document.getElementById("action").value;

    if (!playerId || !licenseType || !action) {
        showAlert("Please fill in all fields.");
        return;
    }

    const payload = {
        playerId,
        licenseType,
        action
    };

    fetch(`https://${GetParentResourceName()}/submitForm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).then(response => {
        if (!response.ok) throw new Error("Server returned an error");
        closeUI();
    }).catch(error => {
        console.error("Error submitting form:", error);
        showAlert("There was an error submitting the form.");
    });
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeUI();
    }
});

function showAlert(message) {
    alert(message); // You can replace this with a custom UI popup if desired
}
