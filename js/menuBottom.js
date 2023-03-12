let templateAlarm = document.createElement('template');
templateAlarm.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
<link rel="stylesheet" href="../css/main-style.css" />
<div class="bottom">
    <button>
        <a href="../pages/alarm.html"><i class="fa-solid fa-bell"></i></a>
    </button>
    <button>
        <a href="../pages/worldClock.html"><i class="fa-solid fa-globe"></i></a>
    </button>
    <button>
        <a href="../pages/stopWatch.html"><i class="fa-sharp fa-solid fa-stopwatch"></i></a>
    </button>
    <button>
        <a href="../pages/timer.html"><i class="fa-regular fa-clock"></i></a>
    </button>
</div>
    `;
class menuBottom extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.appendChild(templateAlarm.content.cloneNode(true));
    }
}
window.customElements.define('menu-bottom', menuBottom);