const url = 'http://localhost:3000/carros';

let carros = [];

// =========================
// CARROS FIXOS (SEUS PRODUTOS)
// =========================
const carrosFixos = [
    {
        nome: "Toyota Corolla",
        marca: "Toyota",
        ano: 2023,
        preco: 150000,
        imagem: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400"
    },
    {
        nome: "Honda Civic",
        marca: "Honda",
        ano: 2022,
        preco: 145000,
        imagem: "https://cdn.motor1.com/images/mgl/x7xoq/s3/2022-honda-civic-first-drive-review.jpg"
    },
    {
        nome: "Chevrolet Onix",
        marca: "Chevrolet",
        ano: 2024,
        preco: 85000,
        imagem: "https://mundodoautomovelparapcd.com.br/wp-content/uploads/2020/09/chevrolet-onix-rs-2021-brasil-20.jpg"
    },
    {
        nome: "Hyundai HB20",
        marca: "Hyundai",
        ano: 2023,
        preco: 82000,
        imagem: "https://www.automaistv.com.br/wp-content/uploads/2022/07/Hyundai-HB20-2023-1_edited.jpg"
    },
    {
        nome: "Jeep Compass",
        marca: "Jeep",
        ano: 2023,
        preco: 180000,
        imagem: "https://cdn.motor1.com/images/mgl/g40NPo/s1/jeep-compass-s.jpg"
    },
    {
        nome: "Jeep Renegade",
        marca: "Jeep",
        ano: 2022,
        preco: 130000,
        imagem: "https://www.webmotors.com.br/wp-content/uploads/2022/02/10110436/Jeep-Renegade-Sport-11.png"
    },
    {
        nome: "Omega",
        marca: "Chevrolet",
        ano: 1992,
        preco: 60000,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOOv3BoMoQxjqaWS7VToJRnf1E6pnpB3y7g&s"
    },
    {
        nome: "VW Polo",
        marca: "Volkswagen",
        ano: 2024,
        preco: 90000,
        imagem: "https://image1.mobiauto.com.br/images/api/images/v1.0/275004269/transform/fl_progressive,f_webp,q_auto"
    },
    {
        nome: "GM Tracker",
        marca: "Chevrolet",
        ano: 2023,
        preco: 140000,
        imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/04/Chevrolet-Tracker-Premier-1.0-2023-traseira.jpg?quality=70&strip=info"
    },
    {
        nome: "Jetta TSI",
        marca: "Volkswagen",
        ano: 2014,
        preco: 80000,
        imagem: "https://s3.ecompletocarros.dev/images/lojas/108/veiculos/72150/veiculoInfoVeiculoImagesMobile/vehicle_image_1630183952_d41d8cd98f00b204e9800998ecf8427e.jpeg"
    }
];

// =========================
// ELEMENTOS
// =========================
const grid = document.getElementById("gridCarros");
const modal = document.getElementById("modalCarro");
const btnAbrir = document.getElementById("btnAbrirModal");
const btnFechar = document.getElementById("btnFecharModal");
const form = document.getElementById("formCarro");

// INPUTS
const nomeInput = document.getElementById("nome");
const marcaInput = document.getElementById("marca");
const anoInput = document.getElementById("ano");
const precoInput = document.getElementById("preco");
const imagemInput = document.getElementById("imagem");

// =========================
// MODAL
// =========================
btnAbrir.onclick = () => modal.classList.remove("oculto");
btnFechar.onclick = () => modal.classList.add("oculto");

// =========================
// CARREGAR CARROS
// =========================
carregarCarros();

function carregarCarros() {
    fetch(url + '/listar')
        .then(res => res.json())
        .then(data => {
            carros = [...carrosFixos, ...data];
            listarCarros();
        })
        .catch(() => {
            carros = carrosFixos;
            listarCarros();
        });
}

// =========================
// LISTAR
// =========================
function listarCarros() {
    grid.innerHTML = '';

    carros.forEach(carro => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${carro.imagem}">
            <h3>${carro.nome}</h3>
            <p>Ano: ${carro.ano} | Preço: R$ ${formatarPreco(carro.preco)}</p>
            ${carro.id ? `<button onclick="excluirCarro(${carro.id})">Excluir</button>` : ''}
        `;

        grid.appendChild(card);
    });
}

// =========================
// FORMATAR PREÇO
// =========================
function formatarPreco(valor) {
    return Number(valor).toLocaleString('pt-BR');
}

// =========================
// CADASTRAR
// =========================
form.addEventListener("submit", e => {
    e.preventDefault();

    const novoCarro = {
        nome: nomeInput.value,
        marca: marcaInput.value,
        ano: Number(anoInput.value),
        preco: Number(precoInput.value),
        imagem: imagemInput.value
    };

    fetch(url + '/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoCarro)
    })
        .then(() => {
            alert("Carro cadastrado!");
            modal.classList.add("oculto");
            form.reset();
            carregarCarros();
        })
        .catch(() => alert("Erro ao cadastrar"));
});

// =========================
// EXCLUIR
// =========================
function excluirCarro(id) {
    if (!confirm("Deseja excluir?")) return;

    fetch(url + '/excluir/' + id, {
        method: 'DELETE'
    })
        .then(() => {
            alert("Excluído!");
            carregarCarros();
        })
        .catch(() => alert("Erro ao excluir"));
}