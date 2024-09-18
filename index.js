<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Introduction</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #1a1a1a;
            color: white;
            overflow-x: hidden;
        }

        /* Rainfall Background */
        .rain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .raindrop {
            position: absolute;
            bottom: 100%;
            width: 1px;
            height: 60px;
            background-color: white;
            animation: fall linear infinite;
        }

        @keyframes fall {
            to {
                transform: translateY(120vh);
            }
        }

        /* Container for the main content */
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            opacity: 0;
            animation: fadeIn 3s forwards; /* Fade-in animation */
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Panel with image */
        .intro-panel {
            position: relative;
            width: 300px;
            height: 400px;
            background-color: rgba(40, 40, 40, 0.9);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
            cursor: pointer;
            transition: transform 0.5s ease;
        }

        .intro-panel:hover {
            transform: scale(1.05);
        }

        .intro-panel img {
            width: 100%;
            height: auto;
        }

        .attributes {
            margin-top: 50px;
            opacity: 0;
            animation: fadeIn 1s forwards 2.5s; /* Fade-in after delay */
        }

        .attributes p {
            margin: 10px 0;
            font-size: 1.2rem;
        }

        /* Button to scroll */
        .scroll-button {
            margin-top: 20px;
            padding: 10px 20px;
            border: 2px solid white;
            background: transparent;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
        }

        .scroll-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

    </style>
</head>
<body>

    <!-- Rainfall animation -->
    <div class="rain"></div>

    <!-- Main content container -->
    <div class="container">
        <!-- Panel with an image (your photo) -->
        <div class="intro-panel" onclick="scrollDown()">
            <img src="https://yoursrchere" alt="Profile Image">
        </div>

        <!-- Hidden attributes section -->
        <div class="attributes" id="attributes">
            <p>Name: Your Name</p>
            <p>Age: 15</p>
            <p>Class: 8</p>
            <p>Frontend Developer</p>
        </div>

        <!-- Scroll button -->
        <button class="scroll-button" onclick="scrollDown()">Scroll Down</button>
    </div>

    <!-- Background music: Rickroll (plays after 3 seconds) -->
    <audio id="rickroll" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>

    <script>
        // Rainfall animation
        function createRaindrop() {
            const rain = document.querySelector('.rain');
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * 100}vw`;
            raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
            rain.appendChild(raindrop);

            setTimeout(() => {
                raindrop.remove();
            }, 4000);
        }

        setInterval(createRaindrop, 100);

        // Play Rickroll after 3 seconds
        setTimeout(() => {
            const rickrollAudio = document.getElementById('rickroll');
            rickrollAudio.play();
        }, 3000);

        // Scroll down to reveal attributes
        function scrollDown() {
            document.getElementById('attributes').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>
