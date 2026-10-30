const form = document.getElementById('risk-form');
const totalScoreEl = document.getElementById('total-score');
const riskResult = document.getElementById('risk-result');

function updateRisk() {
  const checkedInputs = form.querySelectorAll('input:checked');
  const total = checkedInputs.length;

  totalScoreEl.textContent = total;

  if (total > 2) {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Alto riesgo</h3>
      <small>La puntuación supera el umbral recomendado. Se requiere valoración cuidadosa y medidas preventivas.</small>
    `;
    riskResult.style.borderColor = '#a92424';
    riskResult.style.background = 'linear-gradient(135deg, #fbe8e4 0%, #f5d4cc 100%)';
  } else if (total >= 1) {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Riesgo moderado</h3>
      <small>Se recomienda monitorización y educación del paciente sobre prevención de caídas.</small>
    `;
    riskResult.style.borderColor = '#9c7c13';
    riskResult.style.background = 'linear-gradient(135deg, #fff7d8 0%, #f6ebbc 100%)';
  } else {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Sin riesgo identificado</h3>
      <small>Se recomienda reevaluar si cambia la condición clínica del paciente.</small>
    `;
    riskResult.style.borderColor = '#111111';
    riskResult.style.background = 'linear-gradient(135deg, #f7f5f0 0%, #ece7e0 100%)';
  }
}

form.addEventListener('change', updateRisk);
updateRisk();
