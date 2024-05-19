window.onload = function() {
    // Aktuelles Datum
    var currentDate = new Date();
    
    // Geburtsdatum
    var birthDate = new Date('2008-09-16');
    
    // Differenz in Millisekunden zwischen den beiden Daten
    var difference = currentDate - birthDate;
    
    // Berechne das Alter in Jahren
    var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

    // Festgelegte Daten für den Schuljahresbeginn
    var schoolYears = [
        { year: 2024, start: new Date('2023-09-09'), grade: " and go to 9th grade" },
        { year: 2025, start: new Date('2024-09-07'), grade: " and go to 10th grade" }
    ];

    // Durchsuche die festgelegten Daten und finde das passende Schuljahr
    var currentGrade = "";
    for (var i = 0; i < schoolYears.length; i++) {
        if (currentDate >= schoolYears[i].start) {
            currentGrade = schoolYears[i].grade;
        }
    }

    // Füge das aktuelle Schuljahr in das HTML-Element ein
    document.getElementById('grade').textContent = currentGrade;

    // Füge das Alter in das HTML-Element ein
    document.getElementById('age').textContent = age;

    // Aktuelles Jahr
    var currentYear = currentDate.getFullYear();

    // Setze das Copyright-Jahr in das HTML-Element ein
    document.getElementById('copyright').textContent = "Copyright © " + currentYear;
};