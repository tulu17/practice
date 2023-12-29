Przygotowanie projektu:
Utworzyć folder dla projektu
Stworzyć repo na githubie
Sklonować repo
Zmień folder na sklonowany
Stworzyć README.md, skopiować treść tego pliku
Konfiguracja projektu:
Zainstaluj Cypress
Skonfiguruj projekt dla e2e testów (poprzez Cypress UI)
Skonfiguruj “baseUrl” w cypress.config.js 
Stwórz cypress.env.json plik oraz uzupełnij go: 
{
    "username": "standard_user",
    "password": "secret_sauce",
    "firstName": "testUser",
    "lastName": "testUserl",
    "postalCode": "52-131"
  }
W folderze “Cypress” stwórz folder “pages”