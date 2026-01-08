let dressColors = [
            "#e75d7c",
            "#b16cef",
            "#53cca4",
            "#efc84d",
            "#628ef0",
            "#883e7f",
            "#ed048b"
        ];

        let dress = document.getElementById("dress");

        function changeDressColor() {
            let random = Math.floor(Math.random() * dressColors.length);
            dress.style.backgroundColor = dressColors[random];
        }