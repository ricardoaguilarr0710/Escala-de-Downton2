const form = document.getElementById('risk-form');
const totalScoreEl = document.getElementById('total-score');
const riskResult = document.getElementById('risk-result');

function getCareMeasures(total) {
  if (total > 2) {
    return `
      <div class="care-measures" style="color: #1c1c1c; line-height: 1.5;">
        <p style="color: #1c1c1c; margin-bottom: 0.5rem;"><strong>Medidas de cuidado y precauciones:</strong></p>
        <ul style="margin: 0.5rem 0 0 1.25rem; color: #1c1c1c; padding-left: 1rem;">
          <li style="color: #1c1c1c;">Evitar caminar descalzo o sobre superficies resbaladizas.</li>
          <li style="color: #1c1c1c;">Usar calzado con suela antideslizante y bien ajustado.</li>
          <li style="color: #1c1c1c;">Instalar barras de apoyo, buena iluminación y retirar obstáculos en casa.</li>
          <li style="color: #1c1c1c;">Solicitar ayuda al movilizarse si presenta mareos, debilidad o pérdida de equilibrio.</li>
          <li style="color: #1c1c1c;">Revisar la medicación y consultar al profesional si aumenta el riesgo de caídas.</li>
        </ul>
      </div>
    `;
  } else if (total >= 1) {
    return `
      <div class="care-measures" style="color: #1c1c1c; line-height: 1.5;">
        <p style="color: #1c1c1c; margin-bottom: 0.5rem;"><strong>Medidas de cuidado y precauciones:</strong></p>
        <ul style="margin: 0.5rem 0 0 1.25rem; color: #1c1c1c; padding-left: 1rem;">
          <li style="color: #1c1c1c;">Reforzar la educación del paciente sobre prevención de caídas.</li>
          <li style="color: #1c1c1c;">Promover la atención al caminar y evitar prisas o cambios bruscos de postura.</li>
          <li style="color: #1c1c1c;">Mantener espacios libres de obstáculos y con buena iluminación.</li>
          <li style="color: #1c1c1c;">Valorar la necesidad de apoyo físico o ayudas técnicas si el paciente presenta inestabilidad.</li>
        </ul>
      </div>
    `;
  }

  return `
    <div class="care-measures" style="color: #1c1c1c; line-height: 1.5;">
      <p style="color: #1c1c1c; margin-bottom: 0.5rem;"><strong>Medidas de cuidado y precauciones:</strong></p>
      <ul style="margin: 0.5rem 0 0 1.25rem; color: #1c1c1c; padding-left: 1rem;">
        <li style="color: #1c1c1c;">Reevaluar la condición clínica si cambian los síntomas o la movilidad.</li>
        <li style="color: #1c1c1c;">Mantener hábitos de seguridad en el hogar y evitar riesgos de tropiezo.</li>
        <li style="color: #1c1c1c;">Continuar con la supervisión habitual del estado del paciente.</li>
      </ul>
    </div>
  `;
}

function updateRisk() {
  const checkedInputs = form.querySelectorAll('input:checked');
  const total = checkedInputs.length;

  totalScoreEl.textContent = total;

  if (total > 2) {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Alto riesgo</h3>
      <small>La puntuación supera el umbral recomendado. Se requiere valoración cuidadosa y medidas preventivas.</small>
      ${getCareMeasures(total)}
    `;
    riskResult.style.borderColor = '#a92424';
    riskResult.style.background = 'linear-gradient(135deg, #fbe8e4 0%, #f5d4cc 100%)';
  } else if (total >= 1) {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Riesgo moderado</h3>
      <small>Se recomienda monitorización y educación del paciente sobre prevención de caídas.</small>
      ${getCareMeasures(total)}
    `;
    riskResult.style.borderColor = '#9c7c13';
    riskResult.style.background = 'linear-gradient(135deg, #fff7d8 0%, #f6ebbc 100%)';
  } else {
    riskResult.innerHTML = `
      <p>Riesgo actual:</p>
      <h3>Sin riesgo identificado</h3>
      <small>Se recomienda reevaluar si cambia la condición clínica del paciente.</small>
      ${getCareMeasures(total)}
    `;
    riskResult.style.borderColor = '#111111';
    riskResult.style.background = 'linear-gradient(135deg, #f7f5f0 0%, #ece7e0 100%)';
  }
}

form.addEventListener('change', updateRisk);
updateRisk();
