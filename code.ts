// List of device presets with their widths (px) and Figma device names
const devicePresets = [
  // Width: 162 - 208 (Watches)
  { name: "Apple Watch 40mm", width: 162, height: 197 },
  { name: "Apple Watch 38mm", width: 136, height: 170 },
  { name: "Apple Watch 42mm", width: 156, height: 195 },
  { name: "Apple Watch 41mm", width: 176, height: 215 },
  { name: "Apple Watch 44mm", width: 184, height: 224 },
  { name: "Apple Watch 45mm", width: 198, height: 242 },
  { name: "Apple Watch Series 10 42mm", width: 187, height: 223 },
  { name: "Apple Watch Series 10 46mm", width: 208, height: 248 },

  // Width: 320 - 360 (Small Phones)
  { name: "iPhone SE", width: 320, height: 568 },
  { name: "Android Small", width: 360, height: 640 },
  // { name: "Android Large", width: 360, height: 800 }, // Same width as Android Small

  // Width: 375 (Popular iPhones)
  { name: "iPhone 13 mini", width: 375, height: 812 },
  // { name: "iPhone 11 Pro", width: 375, height: 812 }, // Same width as iPhone 13 mini
  // { name: "iPhone 8", width: 375, height: 667 }, // Same width as iPhone 13 mini
  // { name: "iPhone X", width: 375, height: 812 }, // Same width as iPhone 13 mini

  // Width: 390 - 402 (Mid Phones)
  { name: "iPhone 16", width: 393, height: 852 },
  { name: "iPhone 16 Pro", width: 402, height: 874 },
  // { name: "iPhone 15 Pro", width: 393, height: 852 }, // Same width as iPhone 16
  // { name: "iPhone 15", width: 393, height: 852 }, // Same width as iPhone 16
  // { name: "iPhone 14 Pro", width: 393, height: 852 }, // Same width as iPhone 16
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPhone 13 Pro", width: 390, height: 844 },
  // { name: "iPhone 13", width: 390, height: 844 }, // Same width as iPhone 14

  // Width: 411 - 414 (Large Phones)
  { name: "Google Pixel 2", width: 411, height: 731 },
  // { name: "Google Pixel 2 XL", width: 411, height: 823 }, // Same width as Google Pixel 2
  { name: "iPhone 11", width: 414, height: 896 },
  { name: "iPhone 11 Pro Max", width: 414, height: 896 },
  // { name: "iPhone 8 Plus", width: 414, height: 736 }, // Same width as iPhone 11 Pro Max

  // Width: 412 - 430 (Plus / Max Phones)
  { name: "Android Compact", width: 412, height: 917 },
  { name: "iPhone 16 Plus", width: 430, height: 932 },
  // { name: "iPhone 15 Pro Max", width: 430, height: 932 }, // Same width as iPhone 16 Plus
  // { name: "iPhone 15 Plus", width: 430, height: 932 }, // Same width as iPhone 16 Plus
  { name: "iPhone 14 Plus", width: 428, height: 926 },
  { name: "iPhone 13 Pro Max", width: 428, height: 926 },

  // Width: 512 (Classic)
  { name: "Macintosh 128k", width: 512, height: 342 },

  // Width: 700 - 768 (Tablets)
  { name: "Android Medium", width: 700, height: 840 },
  { name: "iPad mini 8.3", width: 744, height: 1133 },
  { name: "iPad mini", width: 768, height: 1024 },
  // { name: "iPad 9.7\"", width: 768, height: 1024 }, // Same width as iPad mini

  // Width: 834 - 1024 (Large Tablets)
  { name: "iPad Pro 11\"", width: 834, height: 1194 },
  { name: "iPad Pro 12.9\"", width: 1024, height: 1366 },

  // Width: 1280 - 1728 (Laptops & TV)
  { name: "MacBook Air", width: 1280, height: 832 },
  // { name: "Android Expanded", width: 1280, height: 800 }, // Same width as MacBook Air
  // { name: "TV", width: 1280, height: 720 }, // Same width as MacBook Air
  { name: "Surface Pro 8", width: 1440, height: 960 },
  { name: "Surface Pro 4", width: 1368, height: 912 },
  { name: "MacBook Pro 14\"", width: 1512, height: 982 },
  { name: "MacBook Pro 16\"", width: 1728, height: 1117 },

  // Add more here as needed
];
// This sets the prototype device for a selected frame in Figma.

// Function to find nearest device preset by width
function findNearestDevice(width: number) {
  let nearest = devicePresets[0];
  let minDiff = Math.abs(width - nearest.width);
  for (const device of devicePresets) {
    const diff = Math.abs(width - device.width);
    if (diff < minDiff) {
      nearest = device;
      minDiff = diff;
    }
  }
  return nearest;
}

let lastSelectionIds:Array<any> = [];

function preselectDevice() {
  const currentSelection = figma.currentPage.selection;
  const currentIds = currentSelection.map(node => node.id).join(',');

  if (currentIds !== lastSelectionIds.join(',')) {
    lastSelectionIds = currentSelection.map(node => node.id);
    // Selection changed - handle update here
    if (currentSelection.length > 0 && currentSelection[0].type === "FRAME") {
      const frame = currentSelection[0];
      // Access frame properties here
      //figma.ui.postMessage({ type: 'selection-changed', width: frame.width, height: frame.height });
      figma.notify(`Selected frame size: width: ${frame.width}, height: ${frame.height}`);


      const deviceToSet = findNearestDevice(frame.width);
      // Set the prototype device
      //frame.prototypeDevice = deviceToSet.name;

      // Notify UI with result
      figma.ui.postMessage({ 
        type: 'device-set', 
        deviceName: deviceToSet.name, 
        frameWidth: deviceToSet.width 
      });
    } else {
      figma.notify(`No frame selected`);
    }
  }
}


setInterval(() => {preselectDevice()}, 2000);





/*
// Show the UI with fixed size
figma.showUI(__html__, { width: 300, height: 150 });


// When UI sends a message
figma.ui.onmessage = msg => {
  if (msg.type === 'update-device') {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.notify("Please select a frame.");
      return;
    }
    const frame = selection[0];
    if (frame.type !== "FRAME") {
      figma.notify("Selected layer is not a frame.");
      return;
    }

    const frameWidth = frame.width;
    let deviceToSet;

    // Check if exact match exists
    const exactMatch = devicePresets.find(d => d.width === frameWidth);
    if (exactMatch) {
      deviceToSet = exactMatch;
    } else {
      deviceToSet = findNearestDevice(frameWidth);
    }

    // Set the prototype device
    frame.prototypeDevice = deviceToSet.name;

    // Notify UI with result
    figma.ui.postMessage({ 
      type: 'device-set', 
      deviceName: deviceToSet.name, 
      frameWidth: frameWidth 
    });
  }
};
*/