export const productos = [
    {
        id: 1,
        nombre: "Parlante Negro",
        precio: 27399,
        categoria: "Accesorios",
        stock: 5,
        descripcion: "Parlante Negro",
        imagen: "https://mexx-img-2019.s3.amazonaws.com/Parlante-Logitech-S150-Negro_41228_1.jpeg"
    },
    {
        id: 2,
        nombre: "Fuente 550W",
        precio: 10900,
        categoria: "Fuentes",
        stock: 10,
        descripcion: "Fuente 550W 80 Plus",
        imagen: "https://mexx-img-2019.s3.amazonaws.com/FUENTE-SENTEY_40218_1.jpeg"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 113939,
        categoria: "Monitores",
        stock: 15,
        descripcion: 'Monitor Led 19"',
        imagen: "https://mexx-img-2019.s3.amazonaws.com/40032_1.jpeg"
    },
    {
        id: 4,
        nombre: "MotherBoard",
        precio: 103999,
        categoria: "Motherboards",
        stock: 20,
        descripcion: "MotherBoard AM4 - MSI B450M",
        imagen: "https://mexx-img-2019.s3.amazonaws.com/46555_1.jpeg"
    },
    {
        id: 5,
        nombre: "Placa de Video",
        precio: 746769,
        categoria: "Placas de Video",
        stock: 20,
        descripcion: "Placa de video GeForce RTX 4060",
        imagen: "https://mexx-img-2019.s3.amazonaws.com/Placa-De-Video-GeForce-RTX-4060-8Gb-Asus-Rog-Strix-Gaming-8Gb-OC_46926_1.jpeg"
    },
    {
        id: 6,
        nombre: "Memoria RAM",
        precio: 37299,
        categoria: "Memorias",
        stock: 20,
        descripcion: "Memoria RAM DDR4 8GB",
        imagen: "https://mexx-img-2019.s3.amazonaws.com/Memoria-Ram-DDR4-8Gb-3200-Mhz-Kingston-Fury-Beast_40388_1.jpeg"
    },
]

export const getProducts = () => {
    return new Promise ((response) => {
        setTimeout(() => {
            response(productos)
        }, 2000);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter(
            (el) => el.categoria === category
        )

        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        const productoFiltrado = productos.find((el) => el.id === parseInt(id))

        setTimeout(() => {
            resolve(productoFiltrado);
        }, 2000);
    })
}
