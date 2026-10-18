$(document).ready(function () {
  // Javascript untuk memproses data katalog game dan me-render ke halaman index.html dan detail_game.html

  // Array of Object untuk menyimpan data katalog game
  const games = [
    {
      id: "clair-obscur",
      kategori: "Top Game 2025",
      judul: "Clair Obscur Expedition 33",
      pengembang: "Sandfall Interactive",
      tahun_rilis: "2025",
      gambar: "assets/Clair Obscur 33.png",
      sinopsis:
        "Sebuah RPG bergiliran (turn-based) bertempo cepat dengan visual memukau yang menceritakan rombongan 'Expedition 33'. Mereka bertaruh nyawa menjalankan misi nekat untuk menghancurkan sang Paintress sebelum sosok misterius itu merenggut nyawa semua orang yang berusia 33 tahun.",
      link: "detail_game.html?id=clair-obscur",
    },
    {
      id: "ds2",
      kategori: "Top Game 2025",
      judul: "Death Stranding 2: On The Beach",
      pengembang: "Kojima Productions",
      tahun_rilis: "2025",
      gambar: "assets/Death Stranding 2.jpg",
      sinopsis:
        "Melanjutkan perjalanan Sam Porter Bridges di dunia pasca-apokaliptik yang terisolasi. Bersama rekan-rekan barunya, Sam kembali melintasi lanskap asing yang penuh ancaman demi menghubungkan sisa-sisa kemanusiaan yang terancam punah.",
      link: "detail_game.html?id=ds2",
    },
    {
      id: "yotei",
      kategori: "Top Game 2025",
      judul: "Ghost of Yōtei",
      pengembang: "Sucker Punch Productions",
      tahun_rilis: "2025",
      gambar: "assets/Ghost of Yotei.webp",
      sinopsis:
        "Berlatar di wilayah sekitar Gunung Yōtei pada tahun 1603, game ini menghadirkan pahlawan baru bernama Atsu. Dalam balutan kisah perjalanan yang emosional dan penuh aksi, kamu akan menjelajahi keindahan alam liar Hokkaido yang memukau sekaligus berbahaya.",
      link: "detail_game.html?id=yotei",
    },
    {
      id: "hades2",
      kategori: "Top Game 2025",
      judul: "Hades II",
      pengembang: "Supergiant Games",
      tahun_rilis: "2024",
      gambar: "assets/hades 2.webp",
      sinopsis:
        "Mengendalikan Melinoë, Putri Dunia Bawah sekaligus penyihir tangguh, kamu akan bertarung melintasi dunia mitologi Yunani. Berbekal sihir hitam dan senjata mematikan, ia berjuang menembus lini pertahanan musuh demi mengalahkan sang Titan Waktu, Chronos.",
      link: "detail_game.html?id=hades2",
    },
    {
      id: "asftu",
      kategori: "Cerita Mengharukan",
      judul: "A Space for the Unbound",
      pengembang: "Mojiken Studio",
      tahun_rilis: "2023",
      gambar: "assets/a space for the unbound.png",
      sinopsis:
        "Berlatar di pedesaan Indonesia era 90-an, game piksel ini mengisahkan Atma dan Raya yang menghadapi kecemasan, masalah kesehatan mental, dan fenomena gaib di akhir masa sekolah mereka dalam sebuah kisah persahabatan yang sangat menyentuh hati.",
      link: "detail_game.html?id=asftu",
    },
    {
      id: "until-then",
      kategori: "Cerita Mengharukan",
      judul: "Until Then",
      pengembang: "Polychroma Games",
      tahun_rilis: "2024",
      gambar: "assets/until then.png",
      sinopsis:
        "Dibalut seni piksel indah berlatar Filipina, game naratif ini mengikuti perjalanan Mark dan teman-teman SMA-nya saat mereka belajar menerima duka, trauma masa lalu, serta misteri hilangnya ingatan dan orang-orang terdekat mereka secara perlahan.",
      link: "detail_game.html?id=until-then",
    },
    {
      id: "lis",
      kategori: "Cerita Mengharukan",
      judul: "Life is Strange",
      pengembang: "Dontnod Entertainment",
      tahun_rilis: "2015",
      gambar: "assets/life is strange.png",
      sinopsis:
        "Mengisahkan Max Caulfield, siswi fotografi yang mendadak memiliki kemampuan memutar balik waktu. Ketika ia berusaha menyelamatkan sahabatnya, Max dihadapkan pada dilema moral berat yang membuktikan bahwa setiap pilihan memiliki konsekuensi emosional mendalam.",
      link: "detail_game.html?id=lis",
    },
    {
      id: "edith-finch",
      kategori: "Cerita Mengharukan",
      judul: "What Remains of Edith Finch",
      pengembang: "Giant Sparrow",
      tahun_rilis: "2017",
      gambar: "assets/what remains of edith finch.png",
      sinopsis:
        "Petualangan interaktif di mana kamu menelusuri rumah megah keluarga Finch untuk mengungkap kisah dan takdir tragis yang menimpa setiap anggota keluarga dari generasi ke generasi melalui sudut pandang yang unik dan puitis.",
      link: "detail_game.html?id=edith-finch",
    },
  ];

  // Function untuk memproses dan render data katalog game ke halaman index.html
  function renderGames() {
    const top25Container = $(".carousel-header-top25-game");
    const sadGameContainer = $(".carousel-header-sad-game");

    top25Container.find(".card").remove();
    sadGameContainer.find(".card").remove();

    games.forEach((game) => {
      const cardHTML = `
          <div class="card">
            <a href="${game.link}" class="card-link">
              <img src="${game.gambar}" alt="${game.judul}" />
            </a>
            <h3>${game.judul}</h3>
            <p>${game.sinopsis}</p>
          </div>
        `;

      if (game.kategori === "Top Game 2025") {
        top25Container.append(cardHTML);
      } else if (game.kategori === "Cerita Mengharukan") {
        sadGameContainer.append(cardHTML);
      }
    });
  }

  // Panggil fungsi render hanya jika berada di halaman index.html
  if ($(".carousel-header-top25-game").length > 0) {
    renderGames();
  }

  // Render data game ke halaman detail_game.html
  if ($(".detail-page").length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("id");

    const selectedGame = games.find((g) => g.id === gameId);

    if (selectedGame) {
      $(".game-title").text(selectedGame.judul);
      $(".detail-poster").attr("src", selectedGame.gambar);
      $(".detail-poster").attr("alt", selectedGame.judul);
      $(".synopsis p").text(selectedGame.sinopsis);
      $('.game-meta').text(`Pengembang: ${selectedGame.pengembang} | Tahun Rilis: ${selectedGame.tahun_rilis}`);

      document.title = "Vixel - " + selectedGame.judul;
    } else {
      $(".game-title").text("Game Tidak Ditemukan");
      $(".synopsis p").text(
        "Maaf, data game yang kamu cari tidak ada di katalog kami."
      );
      $(".detail-poster").attr("src", "");
    }
  }

  // JQuery untuk menambahkan interaktivitas pada halaman detail_game.html dan login.html

  // Efek Animasi slideToggle pada Halaman Detail Game
  if ($(".synopsis").length > 0) {

    $(".synopsis").append(
      '<button id="toggle-synopsis" class="btn btn-sm btn-outline-dark mt-3">Sembunyikan Sinopsis</button>'
    );

    $("#toggle-synopsis").on("click", function () {
      $(".synopsis p").slideToggle("slow", function () {
        if ($(".synopsis p").is(":visible")) {
          $("#toggle-synopsis").text("Sembunyikan Sinopsis");
        } else {
          $("#toggle-synopsis").text("Baca Sinopsis");
        }
      });
    });

    $(".btn-wishlist").on("click", function () {
      $(this)
        .text("✓ Tersimpan di Wishlist")
        .css({ "background-color": "#28a745", color: "white" });
      $(this).fadeOut(150).fadeIn(150); // Animasi blink cepat
    });
  }

  // Event Handling & Validasi Form pada Halaman Login
  if ($(".login-section").length > 0) {
    $("form").on("submit", function (e) {
      const email = $("#email").val().trim();
      const password = $("#password").val().trim();

      if (email === "" || password === "") {
        e.preventDefault();
        alert("Peringatan: Email dan Kata Sandi tidak boleh kosong!");
      } else {
        alert("Berhasil Masuk! Selamat datang di Vixel.");
      }
    });
  }
});
