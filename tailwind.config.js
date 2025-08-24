export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom29: "29px", // ✅ Fix for your error
      },
      fontFamily: {
        brand: ["ArcaMajora", "sans-serif"], // ✅ Custom font family
      },
    },
  },
  plugins: [],
};