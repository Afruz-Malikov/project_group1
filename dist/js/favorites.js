document.getElementById('filterCheckbox').addEventListener('change', function() {
    var checkbox = document.getElementById('filterCheckbox');
    var divsToHide = ['div1', 'div3', 'div4']; // Id дивов, которые нужно скрыть
    var containers = document.querySelectorAll('.container');
    
    containers.forEach(function(container) {
      var div = container.querySelector('div');
      if (checkbox.checked) {
        if (divsToHide.includes(div.id)) {
          container.style.display = 'none';
        } else {
          container.style.display = 'block';
        }
      } else {
        container.style.display = 'block';
      }
    });
  });