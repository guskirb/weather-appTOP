const condition = document.getElementById('condition');
const location = document.getElementById('location');
const temp = document.getElementById('temp');

export default class Render {
    constructor(data) {
        this.data = data;
        this.condition = this.renderCondition();
        this.location = this.renderLocation();
        this.temp = this.renderTemp();
    }

    renderCondition() {
        condition.textContent = this.data.current.condition.text;
    }

    renderLocation() {
        location.textContent = this.data.location.name;
    }

    renderTemp() {
        temp.textContent = `Temperature: ${this.data.current.temp_c}`;
    }


}