define(function () {

    timer = null;

    return {

        proStart : function (id) {

            pro = document.getElementById(id);

            timer = setInterval(function () {

                if (pro.style.left < 100 + '%') {
                    //console.log(pro.style.left);
                    pro.style.left += 10 + '%'

                } else {

                    clearInterval(timer);

                }

            }, 30);

        }

    }

});