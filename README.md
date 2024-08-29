
# Check Jewish Shabbos and Yom Tov

This project helps determine whether a given date is a Jewish Shabbos (Sabbath) or Yom Tov (Jewish holiday).

## Installation

1. Clone the repository:
    ```sh
    npm i check-jewish-shabbos-and-yom-tov
    ```
    or
    ```sh
    git clone https://github.com/ivrtop770/check-jewish-shabbos-and-yom-tov.git
    ```
2. Navigate to the project directory:
    ```sh
    cd check-jewish-shabbos-and-yom-tov
    ```
3. Install the required dependencies:
    ```sh
    npm install
    ```

## Usage

To check if a date is Shabbos or Yom Tov, run the following command:
```node
const checkJewishShabbosAndYomTov = require('check-jewish-shabbos-and-yom-tov');

console.log(checkJewishShabbosAndYomTov(new Date("2024-10-16"))); // true becose is sukkut

//or 

console.log(checkJewishShabbosAndYomTov()); // for current day - true or false

```
