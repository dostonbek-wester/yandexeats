import React from 'react'
import './home.css'
import { Rating } from '@mui/material'
import { Button } from '@mui/material'



const Home = () => {
  return (
    <div className='navbar'>

      <div className='Navbar'>

        <div className='d-flex'>

          <img className='img-navbar' src="https://grizzlysms.com/api/storage/image/15078_w-800_h-400_fit-crop.webp" alt="" />
          <p className='navbar-p'>
            Bizning internet sahifalarimiz:
          </p>
          <a href='https://instagram.com/yandex_eats' >

            <Button className='navbar-btn'>
              Instagram
            </Button> </a>

          <a href='https://t.me/Seyranbek_developer' >

            <Button className='navbar-btn'>
              Telegram
            </Button> </a>

          <a href='https://facebook.com/Yandex Delivery Uzbekistan' >

            <Button className='navbar-btn'>
              Facebook
            </Button> </a>

        </div>
      </div>

      <div className='Swipper'>
        <img className='rasm' src="https://image.winudf.com/v2/image1/cnUuZm9vZGZveC52ZW5kb3Jfc2NyZWVuXzVfMTYxNDI2MjEzNF8wOTk/screen-5.jpg?fakeurl=1&type=.jpg" alt="" />
      </div>


      <h3> Taomlar </h3>

      <div className='card-container1'>


        <div className='card1'>
          <img className='rasm-block' src="https://t4.ftcdn.net/jpg/02/31/48/03/360_F_231480324_BqyB5EmbS8LQg2uPF9SZHLovPQK8MfuO.jpg" alt="" />
          <h4>Uyg'ur Lag'mon </h4>
          <h5> Narxi:25 000 so'm</h5>
          <h6> ID:1</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>

        </div>

        <div className='card1'>
          <img className='rasm-block' src="https://arbuz.com/wp-content/uploads/2009/07/Uzbek-Plov.jpg" alt="" />
          <h4> Palov</h4>
          <h5> Narxi:50 000 so'm</h5>
          <h6> ID:2</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://img1.russianfood.com/dycontent/images_upl/283/big_282013.jpg" alt="" />
          <h4>Mastava </h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:3</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block' src="https://kartinki.pics/uploads/posts/2021-08/1630124526_8-kartinkin-com-p-bifshteks-uzbekskii-yeda-krasivo-foto-8.jpg" alt="" />
          <h4>Bifshteks</h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:4</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>

      <div className='card-container2'>


        <div className='card1'>
          <img className='rasm-block1' src="https://ic.pics.livejournal.com/stalic/2762948/1449915/1449915_original.jpg" alt="" />
          <h4>Dimlama </h4>
          <h5> Narxi:20 000 so'm</h5>
          <h6> ID:5</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block' src="https://www.lamaistas.lt/uploads/editor/image/grietines%20ir%20pomidoru%20pastos%20padazas.jpg" alt="" />
          <h4>Bifstroganof</h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:6</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://recipe-catalog.ru/wp-content/uploads/2019/01/chuchvara.jpg" alt="" />
          <h4>Chuchvara  </h4>
          <h5> Narxi:20 000 so'm</h5>
          <h6> ID:7</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://i.ytimg.com/vi/-vdc_YXYktQ/maxresdefault.jpg" alt="" />
          <h4>Nohot sho'rva</h4>
          <h5> Narxi:25 000 so'm</h5>
          <h6> ID:8</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>


      <h3> Pizza  </h3>

      <div className='card-container3'>



        <div className='card1'>
          <img className='rasm-block1' src="https://i1.sndcdn.com/avatars-000510097554-5jkz08-t500x500.jpg" alt="" />
          <h4>Dodo Pizza </h4>
          <h5> Narxi:38 000 so'm</h5>
          <h6> ID:9</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://apps.bringo.uz/public/assets/products/250x250/90881_1992464059.jpg_94734" alt="" />
          <h4>Moskov Pizza</h4>
          <h5> Narxi:45 000 so'm</h5>
          <h6> ID:10</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block' src="https://slicelife.imgix.net/137/photos/original/LittleItaly_peppizza.jpg?auto=compress&auto=format" alt="" />
          <h4>Little Italy </h4>
          <h5> Narxi:40 000 so'm</h5>
          <h6> ID:11</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://avatars.mds.yandex.net/get-eda/3781088/7633343ce80121332f9fe2ce4410b992/M_height" alt="" />
          <h4>Angels Pizza </h4>
          <h5> Narxi:40 000 so'm</h5>
          <h6> ID:12</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


      </div>

      <div className='card-container4'>



        <div className='card1'>
          <img className='rasm-block1' src="https://milanopizza.com/wp-content/uploads/2019/03/phpZzEIA8.jpg" alt="" />
          <h4>Milano Pizza </h4>
          <h5> Narxi:38 000 so'm</h5>
          <h6> ID:13</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://live.staticflickr.com/2771/4316055913_4d24b06237_b.jpg" alt="" />
          <h4>Chaban Pizza</h4>
          <h5> Narxi:45 000 so'm</h5>
          <h6> ID:14</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block' src="https://i.siteapi.org/RP5inIM3nLZvwUKVJJ1y_-AjdpU=/fit-in/330x/top/s2.siteapi.org/5edbf59b99b4431/img/7qnjaw9f6nswk84c40gg8k40w8wcw0" alt="" />
          <h4>Meksikanskiy Pizza </h4>
          <h5> Narxi:40 000 so'm</h5>
          <h6> ID:15</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://dailysushi.ru/wp-content/uploads/2021/05/tempimageisjs8k-scaled-e1620315688481.jpg" alt="" />
          <h4>Miks Pizza </h4>
          <h5> Narxi:40 000 so'm</h5>
          <h6> ID:16</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


      </div>

      <h3> Ichimliklar  </h3>

      <div className='card-container5'>



        <div className='card1'>
          <img className='rasm-block1' src="https://catalog.milliykatalogi.uz/s3/med/be3c33ed-463a-91b9-d15c-523a24e507ba.jpg" alt="" />
          <h4>Pepsi 1.5L </h4>
          <h5> Narxi:14 000 so'm</h5>
          <h6> ID:17</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://pizza.ochagkafe.by/images/stories/virtuemart/product/Coca-Cola%20(%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F)%201000%20%D0%BC%D0%BB%20%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%A1%D0%A1.jpg" alt="" />
          <h4>Coca-Cola 1L</h4>
          <h5> Narxi:10 000 so'm</h5>
          <h6> ID:18</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13010424_XL1_20221103.jpg " alt="" />
          <h4>Fanta 1.5 L</h4>
          <h5> Narxi:13 000 so'm</h5>
          <h6> ID:19</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://vashi-sushi.by/wp-content/uploads/2019/10/sprite-1l.png" alt="" />
          <h4>Sprite 1L </h4>
          <h5> Narxi:12 000 so'm</h5>
          <h6> ID:20</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>

      <div className='card-container6'>



        <div className='card1'>
          <img className='rasm-block1' src="https://familygroup.uz/thumb/2/uLXzydvCR2HN1PzMsmFFTg/1066c500/d/463248_fmgstsw6.jpg" alt="" />
          <h4>Ark tea 1.5L </h4>
          <h5> Narxi:14 000 so'm</h5>
          <h6> ID:21</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://1119001045.rsc.cdn77.org/wa-data/public/shop/products/51/31/3151/images/9667/ananas.970.png" alt="" />
          <h4>Bliss 1L</h4>
          <h5> Narxi:10 000 so'm</h5>
          <h6> ID:22</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://marketing.uz/brend-goda-2022/uploads/works/covers/f721708718ccf5194c8872db90d1afe4.jpg" alt="" />
          <h4>Dinay 1 L</h4>
          <h5> Narxi:13 000 so'm</h5>
          <h6> ID:23</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhATExMWFhIVGBsWFhcVFhUfGBsXFx8YGRYaGh8eHiggIBslHRoYITEjJyktLi4uFx8zODUvNy0uLysBCgoKDg0OGxAQGyslICY3Ly8vLSswMC0vLS0rLi0vLS8tLy0vLS0vLS8wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJsBRQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABJEAACAQIDBQUEBgUKBAcAAAABAgADEQQSIQUGIjFBE1FhcYEHMkKRFCNiobHBJDNygqIVNVJTkrKzwtHwQ3OD4hY0VJOU0uH/xAAZAQEBAQEBAQAAAAAAAAAAAAAABAIDBQH/xAAwEQACAQICBwcFAQEBAAAAAAAAAQIDEQQhEjFRYXGx8BMygZGhweEiM0HR8SMFFP/aAAwDAQACEQMRAD8A7jERAEREAREQBERAEREAREQBERAEREAREQBIvaW3MNh9KtTKbXtZibAE/CD0ElJzTe4LVr4oGqF7Oy2tzBprc35DVyPOVYShGtU0ZXtuOGIrdlDSLCd/9lg5TXKnlrSrW0uOeS3MGWLCYqnVRalNg6MLqykEEeBn5wxoZsxJXmeTKeZJ6HxnavZa5OzMLfmO0HoKj5f4bH1lWPwNOhBSg3rtnbY9y2H2jV00W2IieWdhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBOX7S20743EV6ar9HpoMOGyBjUdGdmIJ5LmYi4ve1+suW9GMdaYpUmC18Qezpm+oFiXcAa8K9ehIvYSt1tlCkiUlKBUAFgwv6/76y7BxgvqnwXu/bz2EWLnK2jHrYihYTDtlxANNC9QHKStwpN+hIA5851X2d7TFbB0qbC1XDqtGoPFAAreTKAfO46Su09nm/wjzIE9MHWp4LE06pr0VWpanWQ1UvY+41r/AAnqehIluMca8HbWs17rx52JMI5UpZ6nrOkRETxD2BERAEREAREQBERAEREAREQBERAEREAREQBERAEr22N7sJhnKVC+Yc8qk+MsM47viyVqlWwZh9Isr5V1pgAVDcWJAfMBc6gesswVCFapozvbcT4it2UVI6jsTa9HF0VrUWLUySNVIN1NiCD4yRlM9l4RcI1IFs6VamdWtcZmJQjwKZT55h0lzk9aChUlFakztCSlFNCIiczQiIgHyxtrKpjPaFgKR42qAd4Qkfdr90sO0qqJRqs7ZUVGLMOYFjcjx7pxDbeFNUj6tlqdhquVR9d0XhsAOVzr5y/A4anWb7S+WyxNiK/ZNbzu9GoGVWBurAEHwOonpI7YVam+HotTYsmRQpPvWAA4h0bSxHeDJGQWtkU6xERAERI7b2KNLDYioCAy02Kk8s9rJ/FYes+pNuyPjdlciNjVRXxWKxJ4lpk0KGVWICLY1mDWsS9QW0J0pjxk2b3OWk2vUsoH4k/dIrdmqKeDwyrTZUSkgLOVGthmJ1JuTcm/fJVcU592mfXQfO06zTUnuy8urnJSi0v0GNTrSB8nH5gStb3bOwz0XaphzmA+JM17a2JQkAE6G/S/LmLOa1Uc6a28HJPyyiRu1toqaVRWRhcfFlW/lmM1RclNOPo/k51lHRd/VfBoeznbbYrBr2jhq1ImnUOmY29xmHeVt5kGWycp9mdCrQxlYMuSlWUhSXpnO6HMgUKTchTUPledWn3FwjCtLR1a1bf+jeGm5005axERJjuIiIBG7Y2xRwqhqpOt7ZRc6c/xE0Ng73YPGVHpUWbtFXOVZCOEEAkHlzI69ZD+0CvTL0qZDMRTqFwoU5VawQm4JDMy2Fu5pXPZjh6dLGBmzK9SgyLcAIWzB3Xqc2VFYeAeehDC03hXVd9L01/BL/6LVuzZ1yIieeVCIiAIiIBA7b3qwuFYrVLXFr5Vva/KbOwNuYfGUzVoMSoYo11IIYAEgg+BB075znft0q1MSFDNaoihsq2zKAtUAjUqtgOfvZpYfZXSp06OKpKWz9sajBwAcrKqow+yQlteqtPQq4anHDKor6WV9hLTxGlVdNl6iInnlQiIgCIiARe28QQqUkOWpWbs1b+iLFnfzCg2+0VEiKm7dLQK1lUBVCoxAA0AuI2ptmjRxxFWoiZKClS4Yk9s75gtv+St/wB3xgb87P8AixdIHuyvz69JTTVWK+i+ez+E9SMJv6jTYjA4ihUzIaVUijU1YVLsfqyVOllY8+gZvW7zmG/W8uDxOFaiMRTfMQRlR82ncCQP4usve7ON7fCYWrcnPSRrtzNwNT4nn6z7XjJwjOWvU/brcKDSlKC1L3JSIiSlAiIgEFtYCvVFAkBKYWtUueZJPYr5ZlLnuyJ3zQbdxL3znv8A1b2+c1sDvNhqZxTPWp02OIqhlYPm+qbsAWIFrWpAjTlbxm0d+Nn8vptLN+w/pK4qrBWje3W4lnGnN3kfG72I7DE1MIxTKwNWlkZja1hUVr8ibhrD7frbpyjeHeTDVMbgKqVlZqVRVHZobntCFyksRYENbQHQzq8ziYNOMnraz46vnxN4eV047HYRESY7iVj2j4Z6mzcYqe9lDeYR1dh6hSJZ5Bb6swwGNK+92TW+X4zdJtTi1tXMzJXi0UhN7to1EqslXCUkphC718yoM5yrqCeZmhV3x22iq9qLK5y0ytGse0Otuy6PcC+nTWQ423UwtHEikzpVqCkEdLcORrtfzBtNjZe+WDoJQVKNbgNBmFkOtFWVrMXzNfNpcKABawnqujZ5QTXDcrkcJKSu3me9TfzbqglqIVRbMzYWsFUN7pYk6A9O+fW296tron1vYmmxqIzU6dSymk7UjmLWygspy35juOk0qW0cVTw6rWTENkw1bDPmJ4qlV+2WoMzcSBMozc9Ba4tNjD70UKmJ+spkUAMU1anWKjPnrHEUUUXN6gcUxb9vpcz5opSuoLLZ7bP3ZH1pNWbZHbmNVO18FmTIwd84yFSL0qjAEHXUCfoCfnzcavUq7ZwdV9XepVZz9p6VUnyF7z9ByXHturnsR1wyShkIiJEUCeGKrrTR6jmyIpZj3KouT8hPeQG9+KWnRp5mCq1akGZr5QAwc5rcwQmX96ajHSkkfJOybNT+R+1HaVGy1apzuACxGlkTQ/CthcaEgnrNLaOw+zpl6Tp2iEOhq9ogDLqCP9275vNvrgVJDYukP3X1H+/OeGJ33wJVsuLpMLWIKv106eYlcZV01k7cPTURyp0nd9c9pYNibRTE0KVdPdqLex6Hkw9CCPSSE597JsajU8XSRiypVDglbKO1B4V4m5ZCb3Hvcup6DJ69NU6korUuRTSm5wUn+REROR0Ejds4s06YCECpUYU6d7WDNfiPgqhmt1y2klKxtzalOjjKHaVFpqtGowzhiCztTUEAfEArDyczcI6UrGZuyPipu3SsFVyFUWFldj4km51JudZH40LgKlHEZkNMHJVuXFTs3sNF5EBsrd+hm+N+Nn/Fi6Q8Mr8/l+UhN7t6sFWwtWkMTScONMqPfTuBIBtp1ltPtpSUZp2evh5EU404xc4611tOjRK9uLjRWwGEcFjZMl2FieyJp5iLnnlvzPPmecsMgktFtFyd1cRET4fRERAOYe0faDUcZTdQCyULjvuxrKCeeg528D3ysYLG1MRTzDDUlFOnmetV7N72V1LAGmbHtHWp/wBNRc3EtPtD2PicVi3WgmcrhqdxmQWu+I/pEd33Su7M3f2ph1yijXXhKsA+zSLHmLuxYL4T1aSg6Uc1fLW7bSKctGcrptbl+f0Ru3Nrr9fRbDJTqIqLTAswQFQGynKtgUNrW5kHQrr2DcH+bdn9f0en/dE41tTdLHr2ld6DhDqzVKtB2LMdb5HJN/Kdm3C/m7A/8lPwnPGxiqcdHPP8O/4N0JNyd9i4lgiInnFQiIgHEN49tNQxGMsoYPiCHAIF0p1GzJqD7w0J8++fdCpVc0630Ogqs4VUbsy7uoqu1n7IkXz0m56fR1HxTG8G62OxVTEvRomon0mtqKlIaCo4PvMJ9jY+0xTNLssTkbmO12ap1GU8QbNcjQm9yOc9hxhKKzjf83e6xBp6F01J7LJbd5XztdK9TBFaao/b0i7WuSFdBTF+Z0LXNhzQfADP0VPzv/4bxeFrYY1qJRWrU8t3psbZ0AvkYgT9ESbHKKcdHVnv/J3w7vpX6yEREgKBK9v8bbOxpva1Mm/lYywyue0JSdm44Dn2R/Kbp9+PFcz5K1sziO2vc+X5TZ3VamQB9WaqsCA5UOBe5yE+932GoIboRm3NqbtY50uuGqsCARlUm407p4YTYVdUC1dmYh2HUUW7z/v0nuy0ZxtpWPOpVpUGpqGluzzVvAue8OKw6VUxD1lWiqOGw6uO0ZjlygKLm5AKi/JR0AsOUVKxeo7kAF2ZyByBYljbwuZa12RUHu7Hq/vUD/8AWR+I3YxzOWXBVUTuNOwGmvLSZpQhTVtLkvcz2tSeUoNeN/b44Hr7OkB2rgD3NU6d9KoJ+h5+ftwaDptXAhhrmfqp5U6njP0DPOx/3fAswzvARESIoEqntJb9CYaa1KY1/aB0+UtcqvtCoPUwqIguzVqQAuBck6DXSdaP3I8VzMVO4zmWH25UrO9H6MtVrU6aFmSyKoRQcpQ5uIMf+pbz9NobRFHhq4al2VVuzqGll5JUWpVUKEUFgpCBtLHK2hAExQ3R2nRqu/0eqLkFTTqYIi41uRVci4PI2uJja26+1MSysaFZnX+srYHKF62VHAB5dNbeAnq6NO+TjbjmR9q8o6Mr8Mv3u8Cy+xetnO0GsozPTbKosq37Q2A7hyE6hOY+xjDvTO0FcWIalp6VJ06ebi1atJdaiqg700IiJOdROde0vF9licDUAB7MNUtyJyvSNr93DOiznntF2VXxOIoJRTOwoubZlGmemPiI8JRhWlVV9WfI5V+47FM2VtGpiaa/o1Jiiu1StUNMgk2zHKaZy2OoHTNzANzrbY2uozUXw9NSEqPTtlYBsQaZVhwrlC08xAtqShtoJvbJ3b2phgLUK6vrfJU2eRY9B2jEgcrgddZHbU3S2hepXahUy2u7VK2HY35fA97WsAANLW5T04xpueuNvxZ/PSyJJ1XqSlvbWXg9nrtOr+y7+a8H5P8A4lSWuVX2YKRszCA8wH/xKktU8er9yXF8y6HdQiImDQiIgFbrabRqG7a4aloi3PDUr+8bcuLTXq032og80rt45yPuzj8Jq7QFsZRNyM9Fxw8zkena+h4eM+V/Gbz0/CsfJ7f5hO7zSe44WWkyE3na2HfWsuo0YZh42Njr3ayR3MH6Dg/d/VIeHlqL6SN3vJXDPZnU3GjkWt11Pd5yd2FRyYbDJZRlpU14BZdFA4fs901Uf+MVvZmn92T3IkIiJMUiIiAVbd8WGKF30xNfRFsozVGYAHLzsbk95MlGpDnkr+faH8O0/KaWzltWxi3awrXsnLip027tGux69QeskTT+zW88/wD3Sibd78H6cUTxt1/Cob5tx4UZm1qUxasml+0S1zl1HqdbToEpG8lMtisAmYEdojFa1vhdW05XOhI56gS7z7Xf0QW582KC+qb3+wiIkxQJXN/kzbOxgzZb0+dvEcPr7vrLHIDfeiHwGLUmw7NjfTmuo+8CdKOVSPFczE+6/E+9j7VpvSplMzJkXKQBYiw5G+s9alV21WjUPnVdD8jYffPDY20Kj0qbdjUsUW2aw6Dp7wHmJvGviDypgeZB/MfhNyWjLJLz+TlF3Wt+X7ual63/AKep/wDIP5OZivj0Wm4dai6Wu3aFf7TACbfaYnqieh1+8ieGLx1QI/aUXAsRdbNf0W9vUz4s3qXmJKyeb8jnWyMPRO1MGyMqlGfkBdrowKjW41PdOuzkuxhTqbTwIJYdm1QpdbFmyPpr3C59J1qUf9D7i4fs54L7fiIiJCWCQW9htToG5FsRR1Au2rZeHQ66/K8nZDb0074c8rrUovfuyVabXH2rA28bTdJ2mjFTus9ctwNK7acgco/FZ5lQoOldNO/OPldp7KtwP1x8jby7phlsCb1V0OpOYffmm3118HPKxW/Z9rVx5uDrSHu2a4FS99Bw6i370u8qPs+VsmKZipJrWutr2CIbNbkbk2HdY9Zbp9xTvWkMMrUoiIicDuJXNom2OoasM1Cpoi3JyvSvfQ6a6evfLHIHbVP9Jwji44KycI4uLsmtyPDwa+k6Uu958mc6vdNp6YPNazfvlfuzCRu3zloVNa68tGGYcx1s34yVen4Vj5Nb/MJFbyErhqtmqqdNGsRzHU3/AB6TtS+5HijjVtoPgfe4C2wND3dTUPCLaGpUIv8Aa7/G8scht00tg8J7tzSVjktluwzGxHMa8+vOTM4VXecnvfMogrRXBCIiYNCIiAQm0x+k4Y3tanV5C51aj4Gy6anTULrPhsSh5Mzfsk2+4H8Z7V2viQOIZaQtlW98zG4bhNhwjXTrPTsm66eQv8+Gd1ZJX2fslnm2yvb0lamFemDn1B7Nr9/gLgektuBN6dMi1iq8uXIcvCV/btIii/CxGn6tQX9FKWv6SW2BWL4egxFjkAseYtpY+ItrNVV/mmtV36/wUH9bW7kSUREmKhERAK+jha2MJbKM63I0H6ukNT/S9eVtJ9vXTvcjv4rf3bTOCuxxHvXNVtLEJwkKDmy87KNLzYaifX9nT55ZTkn5cuBHK/PmV3aLK+MwLgq4VrXa/DfTmNMxNgLkesu0pm3Xam+HbK5KsDdRdRqNXOXhUc+Yv4y5z5XX0xfHmbw7zkutQiIk5SJG7foLUwuKRr5WpVFNudipGnjJKfFRQQQRcEWI84Ts7i18itbr4mq2GwxCoVNNApz2LBRYG1uoF7SZ/ST/AEB8wf8AMJAblFmwuHKMnZhfqxZ72UlRe59P9ecsBoVj/wAS3kq/mD+MprWU2svUlpX0fz6HxkxI5FD5nT7knjjK9dab56YcWP6s2/vGbP0at/Xfwr/pNfaDVkpVMxDCx15fl+U5xza1evwbk2ovWvUou6fY1tpUma/aUqVQ0lHQEKjM1rjkQBqPe5HmOoTm3s7qYZ8XVKMHqLRKggPZULgkXZVuSbaAaZPGdJnbHfefgZwn2kIiJIUiRu8H/l6vjYfNh98kpF7cb6tRrxVEGguQMwJIFjci3K03TX1rijM+6zwfEINC7XsOHUN6i1x8hPL6SgvxlSQQM3X5gTeNMmxF7aakcX9nLp8hPGrRI1Av6W/yzqmn18Esk0yO3BpBKFZcqj65jpe5uE1a9jmPkNLc+ZtMq+6FQ5sSmVwFZW41Cm7ZwcosODhFjbU5vGWiZxF+1lc7Ydp042ERE4nYSH2z+sw2pFmY6C5923cdNdZMSIxpviKI4gAjm6rfUlAAeE2FgdfDnN0+958jFTu+XM8XxKH42Y9cpOnyvIzeB1fDVqYa5I1RgdfDQZvuMnexbW+nlqfXSR22KRFKpoSLfCoLeilCCfQyim1pK3XoRzTsyR2AP0XDCyi1JBZPdFlAsup0HTWSciN1qxfC0iQRbMtm94BWZRm+1YC/jeS8mmrSa3lsHeKYiImTQiIgFe29hvradUMQVGVlF+Jb3HLre809o7WqKaSqtheznXVrN7tm5aXtrzHK0sdfB03ILLcjQanz75lsHTIAyjQgjnzEohWioxUlexNOjNybi0rlH3j2j21AqEyu9kzm/DUObiHMgWBsOtzewF5bd3MMlLC4emjFlWmoBIsTpzI6Hwn3jNjYeqLPTBHPmw/A+fzmzhMMlJFRBZFFgLk6eZ1irVjKCjG+u59pUpRm3KxsREScoEREAq9ah2Veo6tmVyWyXOjaZ/C2h9TNevtyoKrWQ9mAMo4rkXN768zrrbS452ll/k+lmLZeIm5Nzz+c+jg6d75Re1uvKVdtDLSV8rEjoTu7NLO5Qdt5MViMKhBpIHFRmF7sgayqbaHiFyTyubXtedHkVitgYWowZqQLDkczi3XoZKzNarGaio3y2nSjTcL3tnsEREnO4iJ8VGsCe4XgFW3WzGgHDNkJqcGTUEO+YZg2vFm6yUqYcnVnt52P46zQ2FScYdHJY3QnIzU8g56Brajx5WPKewas3Jqa/s52+9Aglk03NvLrwIVZRSd+uLPo4ZP6xfUL+c+sStRKTgAsLf8ADUk+gDKJ5tRxA51h/wC3Xt/iH8J49pV1Fqb6fD739koD/FGi3qz9OaRlNLavL5IP2c1qPb4pEFUsF43qUwliGPCLMxvqSb25CdDlJ3R7RcTUVkqjMjG9dkB4WWwp01vlTiNybX4efS7TGLd6re23LwKMMrU0tgiIkxQJG7dwoq0WQtlN1KsOjAgr99pJTxr0FcWYXHmfymoy0ZJmZK6aK2Mc9KkbLmqW4Tc2OtmJ1Btbly1uJrUdtEpZ6ZY2DDmbrqXXU6tYaH7fhraqeDproFH3z4OzqNguQWHLU9Ned7yjtqbveLJuwqZZoq3s9wir9Lq5uOqykprZKYzdmBex+JvkelibrI7Zmx8Ph8/Yplz2zcTG+W9uZPeZIzlXqKpUclfxO1GDhBRfoIiJyOokBvJhcxpVA+V0Daa8SnLcaeIWT81sRhKdS2db25amdKU9CakYqR0otFc2ltV0VFRCNeM3PeMoFjz7/IiR+29q9pQcdndyChJzABy1qbi1yq2BOgJuwHTW5vg6ZFiunr01nji9k4eqCHpgg89SOoPQ94HyneFemmnZk0qFRpq6NLc3BrRweHpq5cAMSx5l2Zme/wC8Wk5NXAYOnRRadNcqLewuTa5JPMk8yZtSactKTe0qgrRSEREyaEREAREQBERAEREAREQBERAEREAREQBI/bVc08PXcC5WmxAHfY2khI3eAH6NXIFyqFgO/LxW+6apq80t6Mzyizw2ZhAlJWBcgoCFLXABF7AH5T1+sbkCB+1b8C0iNibSw5VSitcgXBdjY+V7CT6ODzBHn/rKKilGT0l5/wBZJFxasn5Gu9Bxyv8A2iPymrWZ7HMG9ezYfNjf7ptUK1Fr5b9RfWxyHK1vIzxxdVir5KbvYcs3P5/6xBu9muvFnyW5+5WdiVadLF0lUk1arMrXfNZMrta9go4gug10nQJybZ20aH8o4WlTolKrVLVCzuxAAZyBdiBqttJ1mdMdG0093uzWCf0PiIiJCWCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiJiAZiYiAZiYiAZiYiAZiYiAZiYiAZiYiAZiYiAZnxVQEEHkQQfI859Twx36up+y34GfUrs+N2RVv5PXDVDlOZDfhB4rMP8A9nptLatQUhSDMtUkK9QISyp8TqLe8dBboWJ1tr60datPwP4CZwqAqLi99fnznotJ2c82re55uk1dRyuV7CbVqrTz9o4qC7AGmWzsGv2bc7KVNr6WsD0Ek9p7xcqyK5pojBVsRmqPbjJtoFFwM1ub6Xy3+cBRUh9Orf33nhUUZcUOhoO1vFTTyn0ufnO0qVNz1auHsvLYYjOaWT19fk0txMDRfFtiajq2IcE0wqtkAFwwDkAF+K7DpYdxnS5yvdfFVDisOCxIz9Tf4HHX9pvnOpyX/oQcat29aK8FJSp5IzExEhKzMTEQDMTEQDMTEQDMTEQDMTEQDMTEQDMTEQDMREA//9k=" alt="" />
          <h4>Family 1L </h4>
          <h5> Narxi:12 000 so'm</h5>
          <h6> ID:24</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>

      <h3> Shirinliklar  </h3>

      <div className='card-container7'>



        <div className='card1'>
          <img className='rasm-block1' src=" https://media.express24.uz/r/:w/:h/upload/iblock/79c/79cc84398235e23515ecd0ff823c37b9.jpg" alt="" />
          <h4>The Lokmaco </h4>
          <h5> Narxi:25 000 so'm</h5>
          <h6> ID:25</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block' src=" https://www.tokyo.grandnikko.com/eng/restaurant/bakery-pastry/images/img_ite1.jpg" alt="" />
          <h4> By Teppanyaki</h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:26</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://assets.winni.in/product/primary/2021/11/56168.jpeg?dpr=1&w=1000" alt="" />
          <h4>Blinkof </h4>
          <h5> Narxi:15 000 so'm</h5>
          <h6> ID:27</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://hannahgrant.com/cdn/shop/products/IMG_1654-3_a4c79e37-b8bb-403b-9970-e0959267c9bf.jpg?v=1668781549&width=1445 " alt="" />
          <h4>Cook Book </h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:28</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>

      <div className='card-container8'>



        <div className='card1'>
          <img className='rasm-block1' src=" https://i.ytimg.com/vi/TukQZN2lnIU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_UdqKmJuwmBDPmp1h62jDWx1AJQ" alt="" />
          <h4>Napoleon </h4>
          <h5> Narxi:25 000 so'm</h5>
          <h6> ID:29</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://cdn.lifehacker.ru/wp-content/uploads/2021/04/Depositphotos_286747918_xl-2015_1619633095-scaled-e1619633175966-736x368.jpg" alt="" />
          <h4> Pahlava</h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:30</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://pastry-workshop.com/wp-content/uploads/2019/12/medovik-1-4_opt.jpg" alt="" />
          <h4>Medovik </h4>
          <h5> Narxi:15 000 so'm</h5>
          <h6> ID:31</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

        <div className='card1'>
          <img className='rasm-block1' src="https://i.ytimg.com/vi/tzGgLgnYnbQ/maxresdefault.jpg" alt="" />
          <h4>Fransuz Kruasani </h4>
          <h5> Narxi:18 000 so'm</h5>
          <h6> ID:32</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>



      <h3> Fast Food  </h3>


      <div className='card-container9'>



        <div className='card1'>
          <img className='rasm-block' src=" https://www.afisha.uz/uploads/media/2023/05/db5e3e5995033ae9cbf18d2da2cb8fcd_l.jpg" alt="" />
          <h4>Blacck star Burger </h4>
          <h5> Narxi:66 000 so'm</h5>
          <h6> ID:33</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://www.rbc.ua/static/img/s/i/side_view_chicken_roll_grilled_chicken_lettuce_cucumber_tomato_mayo_pita_1200x675.jpg" alt="" />
          <h4>Lavash  </h4>
          <h5> Narxi:22 000 so'm</h5>
          <h6> ID:34</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src=" https://anons.uz/media/cache/e7/3d/e73d5e8b88a23db683bdcaef93bf32ba.jpg" alt="" />
          <h4>Krusty Krab </h4>
          <h5> Narxi:90 000 so'm</h5>
          <h6> ID:35</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block' src=" https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2FdPir0Nt5mraRV8VmIvDFxgAShS8%3D%2F900x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Fe2413eb3-57a0-4768-8815-8ab89b3eead9%2Fc93f8860632d0888b6ee4b3550a8122b.jpg&w=3840&q=90" alt="" />
          <h4>Big Burger </h4>
          <h5> Narxi:24 000 so'm</h5>
          <h6> ID:36</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>

      <div className='card-container6'>



        <div className='card1'>
          <img className='rasm-block1' src="https://mcdonaldsmenu.ru/image/cache/catalog/photo/472778060-kartofel-fri-bolshoj-600x600.jpg" alt="" />
          <h4>Kartoshka Free</h4>
          <h5> Narxi:66 000 so'm</h5>
          <h6> ID:37</h6>
          <Rating className='rating' defaultValue={4} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://images.squarespace-cdn.com/content/v1/552f35bee4b0955308211538/1431947447114-PR5Q8DK6YY05BVQBPLIP/image-asset.jpeg?format=1000wg" alt="" />
          <h4>Hot Dog  (2X) </h4>
          <h5> Narxi:22 000 so'm</h5>
          <h6> ID:38</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/5/1/FNM_050112-Insert-010_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607312600.jpeg" alt="" />
          <h4>Taco </h4>
          <h5> Narxi:90 000 so'm</h5>
          <h6> ID:39</h6>
          <Rating className='rating' defaultValue={5} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>


        <div className='card1'>
          <img className='rasm-block1' src="https://www.livofy.com/health/wp-content/uploads/2021/09/Club-Sandwich-with-Super-Mayo.jpg" alt="" />
          <h4>Sandwich </h4>
          <h5> Narxi:24 000 so'm</h5>
          <h6> ID:40</h6>
          <Rating className='rating' defaultValue={3} size="small" />
          <a href='https://t.me/yandex_eats_uz' >
            <button className='btn'>  Sotuvda mavjud </button>
          </a>
        </div>

      </div>



      <div className='footer'>
        <div className='p-element' >
          <p> Tahririyat manzili: 100029, <br /> Узбекистан, г.Ташкент,<br /> ул.Бухара, 26 <br />
            Telefon: +(998 71) 236-00-55,<br />
            +(998 71) 232-27-30, <br />+(998 71) 232-27-29 <br />
            E-mail: info@yandex.news   </p>
        </div>
        <img className='f-img' src="https://static20.tgcnt.ru/posts/_0/d9/d93a10c401f220562bfd2139d620cca9.jpg" alt="" />


      </div>





    </div >
  )
}

export default Home