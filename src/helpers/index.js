const handleValidatedAndSubmit = async (event, onSubmit) => {
  event.preventDefault();
  event.stopPropagation();
  setTimeout(async () => {
    const errorElement = document.querySelector(
      ".form-control:invalid, .form-check-input:invalid, .form-select:invalid, .react-select-validated__control"
    );
    errorElement?.scrollIntoView();
    if (errorElement) {
      console.log("Ошибка");
    } else {
      onSubmit();
    }
  });
};

export { handleValidatedAndSubmit };
