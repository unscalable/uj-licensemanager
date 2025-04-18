window.addEventListener('message', function (event) {
    if (event.data.action === "openUI") {
        openUI();
    } else if (event.data.action === "updateLicenseTypes") {
        // Update the licenseType dropdown options
        const licenseTypes = event.data.licenseTypes;

        const licenseTypeSelect = document.getElementById("licenseType");
        licenseTypeSelect.innerHTML = '<option value="" disabled selected>Select License Type</option>'; // Reset options

        licenseTypes.forEach(function (license) {
            const option = document.createElement("option");
            option.value = license.value;  // Assumes license object has a `value` property
            option.textContent = license.label;  // Assumes license object has a `label` property
            licenseTypeSelect.appendChild(option);
        });
    }
});

// Function to open the UI
function openUI() {
    document.body.style.display = "flex";
    document.getElementById("licenseForm").reset(); // Clear previous data
}

// Function to close the UI
function closeUI() {
    document.body.style.display = "none";
    fetch(`https://${GetParentResourceName()}/closeUI`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    });
}

// Submit form data to the server
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

// Close the UI on Escape key press
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeUI();
    }
});

// Show an alert message (replace with a custom popup if needed)
function showAlert(message) {
    alert(message);
}
