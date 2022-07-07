const fun = async () => {
  // alert("hi");

  var jaga = document.querySelector("#input_city").value;
  var output = document.querySelector("#jagah");
  var temp = document.querySelector("#temp");
  var status = document.querySelector("#status");
  var res = document.querySelector(".res");
  if (jaga === "") {
    output.innerText = `kuch likhye to pahle bhaiya`;
    res.classList.add("data_hide");
  } else {
    try {
      // output.innerHTML = jagah;
      res.classList.remove("data_hide");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${jaga}&units=metric&appid=554b48960f011879d9a84a8a794c2a13`;
      const data = await fetch(url);
      const orgdata = await data.json();
      const findata = [orgdata];
      output.innerHTML = `${findata[0].name}, ${findata[0].sys.country} `;
      temp.innerText = findata[0].main.temp;
      const tempmod = findata[0].weather[0].main;
      // statu.innerText = tempmod;
      if (tempmod == "Clear")
        status.innerHTML =
          "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
      else if (tempmod == "Clouds")
        status.innerHTML =
          " <i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>";
      else if (tempmod == "Rain")
        status.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>";
      else
        status.innerHTML =
          " <i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>";
    } catch (e) {
      output.innerText = `City ka naam ya connection check kariye`;
      res.classList.add("data_hide");
    }
  }
};
