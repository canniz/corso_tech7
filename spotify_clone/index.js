window.addEventListener("load", async () => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer BQC0Lr-19HkdeUdM5Y0xZQ2fhNb0S524oSjz5horEPEgROPQHzTZHbe7oTQmjhNCL9YWgqB7J-rpmqHtZ6R_5-kERaCDSRO9xe3zNmr7lvkXxcl1MRIoAXn-uanVYLVhYXZKFZYnOnQacc9iFfFm5_kxCAheQzSYtdaV4uhROn5uU4UUjQkDuOf-j2pe-u4mUM7krC681mgBJnivndHSFPs15DkqONqTdteYCXNy3iNVF10KGsF_rca7u0WlE8QNT3C_qE0wQj_ktqKlI3TuvmJOMUFFeODFeSqTctQLDC8ulXg_F1cZh1y9GN9ZqcNhNuuKhie-36o3rF76Puo3HpxWON4",
    },
  });

  const result = await response.json();

  const elementContainerUsername = document.querySelector(
    ".container-username"
  );

  elementContainerUsername.innerHTML = `
    <p class="username">${result.display_name}</p>
  `;
});
