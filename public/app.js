(() => {
  const params = new URLSearchParams(location.search);
  const campaign = {
    source: params.get('utm_source') || 'direct',
    medium: params.get('utm_medium') || 'website',
    campaign: params.get('utm_campaign') || 'sahyajinashi_edition2',
    content: params.get('utm_content') || 'homepage'
  };
  sessionStorage.setItem('nirankush_campaign', JSON.stringify(campaign));

  const form = document.querySelector('#reserve-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "नमस्कार, मला ‘सह्यजिनशी’च्या द्वितीय आवृत्तीची प्रत राखायची आहे.",
      `नाव: ${data.get('name')}`,
      `मोबाईल: ${data.get('mobile')}`,
      `पिनकोड: ${data.get('pincode')}`,
      `प्रती: ${data.get('quantity')}`,
      `स्रोत: ${campaign.source}/${campaign.medium}/${campaign.campaign}/${campaign.content}`
    ].join('\n');
    location.href = `https://wa.me/918983539860?text=${encodeURIComponent(message)}`;
  });
})();
