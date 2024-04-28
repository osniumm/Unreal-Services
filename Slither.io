<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Games</title>
  <style>
    .games-button {
      position: fixed;
      top: 10px;
      right: 10px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    #slither-container {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    #slither-game {
      width: 500px;
      height: 500px;
      border: 2px solid #000;
    }
  </style>
</head>
<body>
  <button class="games-button" onclick="toggleSlither()">Games</button>
  <div id="slither-container">
    <img src="https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA" alt="Slither.io">
    <p>Slither.io</p>
    <canvas id="slither-game"></canvas>
  </div>

  <script>
    let slitherVisible = false;

    function toggleSlither() {
      const slitherContainer = document.getElementById('slither-container');
      slitherVisible = !slitherVisible;
      slitherContainer.style.display = slitherVisible ? 'block' : 'none';
    }
  </script>
</body>
</html>
