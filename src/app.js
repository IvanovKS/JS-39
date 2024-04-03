function welcome() {
  const date = new Date();
  const today = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;
  console.log('Welcome. Today is ' + today);
}
welcome();