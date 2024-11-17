function DateDisplay(){
    const currentYear = new Date().getFullYear(); // Get the current year
    return <footer>© {currentYear} All rights reserved by Ezra Mekuria Tessema.
    </footer>;
  };

export default DateDisplay;