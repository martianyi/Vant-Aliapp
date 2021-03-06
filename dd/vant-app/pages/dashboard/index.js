const _my = require("../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "pages/dashboard/index"
    }
});
import list from "../../config";
import createPage from "../../common/page";
createPage({
    data: {
        list,
        activeName: []
    },

    onChangeCollapse(event) {
        this.setData({
            activeNames: event.detail
        });
    },

    onClick(event) {
        const { switchTab, url } = event.currentTarget.dataset;

        if (switchTab) {
            _my.switchTab({
                url
            });
        }
    }
});
