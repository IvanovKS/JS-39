function welcome() {
  const date = new Date();
  console.log('Welcome. Today is ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
}
welcome();