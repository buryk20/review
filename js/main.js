window.onload = function () {

    var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    informationOrder.forEach((el) => {
        el.onclick = function (e) {
            // let target = e.target;
            // console.log(target);
            const wrapper = el.closest(".order-row");
            const list = wrapper.querySelector('.orders-drop-down-list');
            console.log(wrapper);
            console.log(list);
            if (list.hasAttribute("style")) {
                el.style.transform = 'rotate(0deg)';
                list.removeAttribute("style");
            }

            else {
                el.style.transform = 'rotate(180deg)';
                list.style.maxHeight = "1000px";
            }
        }
    });
}