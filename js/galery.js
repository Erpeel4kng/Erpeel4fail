//mendapatkan semua elemen yang diperlukan
const gallery = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //melewati total panjang img ke variabel totalImg
        let newIndex = i; //meneruskan nilai i ke variabel newIndex
        let clickedImgIndex; //membuat variabel baru
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //meneruskan indeks gambar yang diklik ke variabel yang dibuat (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //meneruskan indeks img saat ini ke variabel Img saat ini dengan menambahkan +1
                let imageURL = gallery[newIndex].querySelector("img").src; //membuat pengguna mengklik url img
                previewImg.src = imageURL; //melewati url gambar yang diklik pengguna di pratinjau Img src
            }
            preview(); //memanggil fungsi di atas
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //jika nilai indeks sama dengan 0 maka sembunyikan prevBtn 
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //jika nilai indeks lebih besar dan sama dengan panjang galeri sebesar -1 maka sembunyikan nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //indeks penurunan
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //indeks kenaikan
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //menugaskan indeks img yang pertama kali diklik pengguna ke indeks baru
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
    }
}
