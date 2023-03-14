const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItem = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pName = document.getElementsByTagName("h2");

    for( i = 0; i < pName.length; i++ ){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}



