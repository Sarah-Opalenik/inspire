export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp //look at brooklyn's slack to see what should go after ||
    this.fah = Math.ceil((data.main.temp - 273.15) * 9 / 5 + 32)
    this.cels = Math.round((data.main.temp) - 273.15)
  }
  get Template() {
    return `
    <div class="card card-weather p-5 m-1">
      <h5>City: ${this.city}</h5>
      <h6>Temperature: ${this.fah}&#716;F</h6>
    </div>
    `
    // make this like todo toggle template with each onclick to change between kelv, fah, and cels
  }

}