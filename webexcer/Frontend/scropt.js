<script>
    document.getElementById("registration-form").addEventListener("submit", function(event) {
        event.preventDefault();

    let name = document.getElementById("uname").value;

    if (name.trim() === "") {
        alert("Enter a name please");
    return;
    }

    alert("Form submitted successfully");
});
</script>