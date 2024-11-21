export function createPayment(orderSerialId) {
    wx.navigateTo({
        url: `/pages/payment?id=${orderSerialId}`
    });
}
