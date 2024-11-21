export function addressSelect(callBackFunName, title, defaultAddress) {
  wx.navigateTo({
    url: `/pages/address-select-map?title=${title}&lat=${defaultAddress.lat}&lng=${defaultAddress.lng}&callback=${callBackFunName}`
  });
}
