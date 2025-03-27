const getVal = (id) => parseFloat(document.querySelector(id)?.value) || 0;
const setText = (id, text) => (document.querySelector(id).textContent = text);

document.querySelector("#cal-btn").addEventListener("click", () => {
  const [tripDistKm, fuelEffi, fuelCost] = [
    "#trip-distance",
    "#fuel-effi",
    "#fuel-cost",
  ].map(getVal);

  if (!tripDistKm || !fuelEffi || !fuelCost)
    return alert("Please fill in all fields.");

  const totalCost = ((tripDistKm / fuelEffi) * fuelCost).toLocaleString(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }
  );

  setText("#result", `Your fuel cost will be around: ${totalCost}`);

  ["#trip-distance", "#fuel-effi", "#fuel-cost"].forEach(
    (id) => (document.querySelector(id).value = "")
  );
});
