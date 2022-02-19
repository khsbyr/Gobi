module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#3A416F",
        saleTextColor: "#E85757",
        winterSpiceDesc: "#636363",
        shopNowButton: "#272727",
        womenText: "#414141",
        shopRed: "#B00020",
        aboutBg: "#F5F7F6",
        searchBg: "#F5F5FA",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dafoe: ["Mr Dafoe", "cursive"],
      },
      backgroundImage: {
        summerBg:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(238, 243, 255, 0.8) 100%)",
        winterSpiceBg: "linear-gradient(0deg, #F7F8FB, #F7F8FB), #FDF4ED",
      },
    },
  },
  plugins: [],
};
