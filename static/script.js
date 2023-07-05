function updateGearOptions() {
    const transmissionSelect = document.getElementById("transmission");
    const gearsSelect = document.getElementById("gears");
  
    gearsSelect.innerHTML = "";
  
    const transmission = transmissionSelect.value;
  
    switch (transmission) {
      case "A":
        addOption(gearsSelect, "3", "3 gears");
        addOption(gearsSelect, "4", "4 gears");
        addOption(gearsSelect, "5", "5 gears");
        addOption(gearsSelect, "6", "6 gears");
        addOption(gearsSelect, "7", "7 gears");
        addOption(gearsSelect, "8", "8 gears");
        addOption(gearsSelect, "9", "9 gears");
        addOption(gearsSelect, "10", "10 gears");
        break;
      case "AM":
        addOption(gearsSelect, "5", "5 gears");
        addOption(gearsSelect, "6", "6 gears");
        addOption(gearsSelect, "7", "7 gears");
        addOption(gearsSelect, "8", "8 gears");
        addOption(gearsSelect, "9", "9 gears");
        break;
      case "AS":
        addOption(gearsSelect, "4", "4 gears");
        addOption(gearsSelect, "5", "5 gears");
        addOption(gearsSelect, "6", "6 gears");
        addOption(gearsSelect, "7", "7 gears");
        addOption(gearsSelect, "8", "8 gears");
        addOption(gearsSelect, "9", "9 gears");
        addOption(gearsSelect, "10", "10 gears");
        break;
      case "AV":
        addOption(gearsSelect, "", "0 gears");
        addOption(gearsSelect, "1", "1 gear");
        addOption(gearsSelect, "6", "6 gears");
        addOption(gearsSelect, "7", "7 gears");
        addOption(gearsSelect, "8", "8 gears");
        addOption(gearsSelect, "10", "10 gears");
        break;
      case "M":
        addOption(gearsSelect, "4", "4 gears");
        addOption(gearsSelect, "5", "5 gears");
        addOption(gearsSelect, "6", "6 gears");
        addOption(gearsSelect, "7", "7 gears");
        break;
      default:
        break;
    }
  }
  
  function addOption(selectElement, value, text) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
  }
  
  function closePopup() {
    const popupElement = document.getElementById("popup");
    popupElement.style.display = "none";
  }

  function sendData() {


    
    const popupElement = document.getElementById("popup");
    popupElement.style.display = "block";
    const transmissionSelect = document.getElementById("transmission");
    const gearsSelect = document.getElementById("gears");
    const transmission = transmissionSelect.value;
    const gears = gearsSelect.value;
    const combinedTransmission = transmission + gears;
    var t={"data": {"hello" : 1}};
    console.log(t);
    $.ajax({
      url: '/predict',
      type: 'POST',
      data: JSON.stringify({
        "ENGINE SIZE": [
          parseFloat(document.getElementById("ENGINE SIZE").value)
        ],
        "CYLINDERS": [
          parseFloat(document.getElementById("CYLINDERS").value)
        ],
        "FUEL CONSUMPTION": [
          parseFloat(document.getElementById("FUEL CONSUMPTION").value)
        ],
        "TRANSMISSION": [
          combinedTransmission
        ],
        "FUEL": [
          document.getElementById("FUEL").value
        ],
        "HWY (L/100 km)": [
          parseFloat(document.getElementById("HWY (L/100 km)").value)
        ],
        "COMB (L/100 km)": [
          parseFloat(document.getElementById("COMB (L/100 km)").value)
        ],
        "COMB (mpg)": [
          parseFloat(document.getElementById("COMB (mpg)").value)
        ]
    }),
      contentType: 'application/json;charset=UTF-8',
      success: function(response) {
        const popupResultElement = document.getElementById("popup-result");
        popupResultElement.textContent = "Estimated Tailpipe Carbon dioxide Emissions is "+response+" g/km."; 
        const popupElement = document.getElementById("popup");
        popupElement.style.display = "block";
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  
  const transmissionSelect = document.getElementById("transmission");
  transmissionSelect.addEventListener("change", updateGearOptions);
  