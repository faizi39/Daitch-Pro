// Thumbnails change main image
document.addEventListener('DOMContentLoaded', function() {
  const thumbs = document.querySelectorAll('.thumb');
  const mainImage = document.getElementById('mainImage');
  
  thumbs.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all thumbs
      thumbs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked thumb
      btn.classList.add('active');
      
      // Update main image
      const src = btn.getAttribute('data-src');
      mainImage.src = src;
    });
  });

  // Copy affiliate link
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const input = document.getElementById('affInput');
      input.select();
      input.setSelectionRange(0, 99999);
      
      navigator.clipboard.writeText(input.value)
        .then(() => {
          // Show temporary success message
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          copyBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          
          setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
          }, 2000);
        })
        .catch(() => {
          alert('Failed to copy link. Please try again.');
        });
    });
  }

  // Tab switching logic
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Hide all panels
      panels.forEach(p => {
        p.classList.add('hidden');
      });
      
      // Show the selected panel
      const target = tab.getAttribute('data-tab');
      const panel = document.getElementById(target);
      if (panel) {
        panel.classList.remove('hidden');
      }
    });
  });

  // Like button functionality
  const likeBtn = document.querySelector('.icon-like');
  if (likeBtn) {
    likeBtn.addEventListener('click', function() {
      if (likeBtn.textContent === '♡') {
        likeBtn.textContent = '♥';
        likeBtn.style.color = '#ef4444';
      } else {
        likeBtn.textContent = '♡';
        likeBtn.style.color = '';
      }
    });
  }

  // Buy now button functionality
  const buyBtn = document.querySelector('.btn-buy');
  if (buyBtn) {
    buyBtn.addEventListener('click', function() {
      alert('Thank you for your purchase! You will be redirected to the checkout page.');
    });
  }

  // Voice chat button functionality
  const voiceChatBtn = document.querySelector('.btn-gradient');
  if (voiceChatBtn) {
    voiceChatBtn.addEventListener('click', function() {
      alert('AI Voice Agent is starting... This feature would connect you with our AI assistant.');
    });
  }

  // Contact seller button functionality
  const contactSellerBtn = document.querySelector('.btn-outline');
  if (contactSellerBtn) {
    contactSellerBtn.addEventListener('click', function() {
      alert('Opening contact form for AI Innovators...');
    });
  }

  // Try in sandbox button
  const sandboxBtn = document.querySelector('.btn-sandbox');
  if (sandboxBtn) {
    sandboxBtn.addEventListener('click', function() {
      alert('Opening secure sandbox environment...');
    });
  }
});