function Holi() {
    var centerAlert = document.createElement('div');
    centerAlert.style.display = 'flex';
    centerAlert.style.justifyContent = 'center';
    centerAlert.style.alignItems = 'center';
    centerAlert.style.height = '100vh';
    centerAlert.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    centerAlert.style.position = 'fixed';
    centerAlert.style.top = '0';
    centerAlert.style.left = '0';
    centerAlert.style.width = '100%';
    centerAlert.style.zIndex = '9999';

    var alertText = document.createElement('p');
    alertText.innerText = 'Aapko aur aapke parivaar ko badhai ho Holi ka rangin tyohar.';
    alertText.style.color = 'white';
    alertText.style.fontSize = '24px';
    alertText.style.textAlign = 'center';
    alertText.style.animation = 'fade-in 1s ease-in-out';

    centerAlert.appendChild(alertText);
    document.body.appendChild(centerAlert);

    setTimeout(function() {
        centerAlert.remove();
    }, 3000);
}