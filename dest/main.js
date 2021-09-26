$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});

let urlApi = 'https://api.ncovvn.xyz/cityvn'

fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
        let index = 1;
        let template = ``

        let mainTable = document.getElementById('result');

        data.forEach(element => {
            template +=
                `<tr>
                    <td>${index}</td>
                    <td>${element.dia_diem}</td>
                    <td>${element.tu_vong}</td>
                    <td>${element.hom_nay}</td>
                    <td>${element.tong_ca_nhiem}</td>
                </tr>`
            index += 1
        });

        mainTable.innerHTML += template
    })
