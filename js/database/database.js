define(['sql', 'sqlTool'], function () {

    db = new DB('test');

    myDate = new Date();

    return {

        submit : function (title, label, outLabel, viewLabel, method) {

            outLabel.value += myDate.toLocaleString();

            if (method === 'view' || method === 'delete') {

                label.value = myDate.toLocaleString() + "\n";

            }

            if (title.value === 'Input the title here...') {

                alert("AK-12: （/TДT)/ 等等！你还没输入标题呢！");

            }else {

                console.log(title.value);

                if (label.value === 'Input your words here...') {

                    alert("AK-12: (╯°口°)╯(┴—┴ 你还没输入文字呢！");

                }else {
                    console.log(label.value);
                    //alert("AK-12:抱歉!数据库功能正在完善中~");

                    switch (method) {

                        case 'alter' :
                            this.alterTheTextWithTitle(title, label);
                            outLabel.value +=" (By_AK12) 修改为：";
                            break;

                        case 'new' :
                            this.addChat(title, label);
                            outLabel.value +=" (By_AK12) 新增内容：";
                            break;

                        case 'delete' :
                            this.deleteTheTextWithTitle(title);
                            outLabel.value +=" (By_AK12) 删除内容：" + title.value;
                            break;

                        case 'view' :
                            this.findChatWithTitle(title, label);
                            outLabel.value +=" (By_AK12) 浏览内容：";
                            break;

                    }

                    outLabel.value += "\n";

                    this.findChatWithTitle(title, outLabel);

                    this.showAllTables(viewLabel);

                }

            }

        },

        addChat : function (title,label) {

            db.query("CREATE TABLE " + title.value + " (text char(50) not null)");

            db.insert(title.value, {text: label.value} );

        },

        findChatWithTitle : function (title, label) {

            db.fetchAll('select * from ' + title.value,

                function (ret) {

                    console.log(ret);

                    label.value += ret[0].text + "\n";

                }

            )

        },

        showAllTables : function (label) {

            var mes = "";

            db.showTables("%",

                function(ret){

                    console.log(ret);

                    for (var i = 1; i < ret.length ; i++) {

                        mes += ret[i].name + "\n";

                        label.value = mes;

                    }

                }

            )

        },

        alterTheTextWithTitle : function (title, label) {

            db.update(title.value, {text: label.value}, [1], function(ret){console.log(ret);});

        },

        deleteTheTextWithTitle : function (title) {

            db.query('drop table ' + title.value);

        }

    }


});