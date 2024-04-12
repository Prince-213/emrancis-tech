"use server";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function logIn(formData: FormData) {
  await delay(5000);

  console.log("new form is");
  const data = Object.fromEntries(formData);

  console.log(data);
}
