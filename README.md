# Auto Device Switcher for Figma

![Figma Plugin](https://img.shields.io/badge/Figma-Plugin-ff7262?style=flat-square&logo=figma&logoColor=white)

## 🎯 Overview

**STOP manually changing device types in prototype settings every time you select a different width size frame in Figma!** 

This plugin automatically detects the best device that fits the frame you're viewing in prototype mode and switches it for you, saving you time and streamlining your design workflow.

## ✨ Features

- 🔄 **Automatic Device Detection** - Intelligently detects the optimal device type based on your frame width
- ⚡ **Seamless Switching** - Automatically updates prototype settings without manual intervention
- 🎨 **Better Workflow** - Focus on designing, not on switching settings
- 📱 **Multi-Device Support** - Works with various device presets in Figma

## 🚀 Installation

1. Open Figma
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for "Auto Device Switcher"
4. Click **Install**

*Or install directly from the [Figma Community](#)* (add your plugin link when published)

## 📖 How to Use

1. Open your Figma file with multiple frames of different sizes
2. Enter **Prototype mode**
3. Run the plugin: **Plugins** → **Auto Device Switcher**
4. Navigate between frames - the plugin will automatically detect and switch to the appropriate device!

## 🛠️ Development

Want to contribute or run this plugin locally?

### Prerequisites
- Node.js (v14 or higher)
- Figma Desktop App

### Setup

```bash
# Clone the repository
git clone https://github.com/valeeff/FigmaPlugin_Auto_device_switcher.git

# Navigate to the project directory
cd FigmaPlugin_Auto_device_switcher

# Install dependencies
npm install

# Build the plugin
npm run build
```

### Running Locally

1. In Figma, go to **Plugins** → **Development** → **Import plugin from manifest**
2. Select the `manifest.json` file from this project
3. Run the plugin from **Plugins** → **Development** → **Auto Device Switcher**

## 📝 How It Works

The plugin monitors frame selection in prototype mode and:
1. Detects the width of the currently selected frame
2. Matches it against standard device dimensions
3. Automatically applies the best-fitting device preset
4. Updates the prototype view instantly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues & Feedback

Found a bug or have a feature request? Please open an issue on [GitHub Issues](https://github.com/valeeff/FigmaPlugin_Auto_device_switcher/issues).

## 👤 Author

**valeeff**

- GitHub: [@valeeff](https://github.com/valeeff)

## ⭐ Show Your Support

If this plugin helps your workflow, please give it a star! ⭐

---

*Made with ❤️ for the Figma community*