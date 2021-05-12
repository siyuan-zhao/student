(function () {
    //实现所有图表
    var pie = {
        init() {
            this.getData();
        },
        getData() {
            $.ajax({
                url: 'http://api.duyiedu.com/api/student/findAll?appkey=zhaosiyuan_1611924439526',
                success: function (data) {
                    console.log(data);
                }
            })
        },
        areaChart() {

        },
        sexChart() {

        }
    }

    pie.init();
})