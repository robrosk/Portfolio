function toggleSection(sectionId) {
    var content = document.getElementById(sectionId);
    
    // Toggle the visibility of the selected section without closing others
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Initially show the education section when the page loads
document.addEventListener('DOMContentLoaded', function() {
    toggleSection('education');
});

