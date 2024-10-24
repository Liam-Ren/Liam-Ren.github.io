document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('line-canvas');
    const ctx = canvas.getContext('2d');
  
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
  
    function drawLine(x, y) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.strokeStyle = '#ff4500';
      ctx.lineWidth = 2;
  
      ctx.beginPath();
      ctx.moveTo(x - 20, y - 20);
      ctx.lineTo(x, y);
      ctx.lineTo(x + 20, y - 20);
      ctx.stroke();
    }
  
    resizeCanvas();
  
    window.addEventListener('resize', resizeCanvas);
  
    document.getElementById('article-block').addEventListener('mousemove', function(event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      drawLine(x, y);
    });
  
    document.getElementById('article-block').addEventListener('mouseleave', function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  });
  