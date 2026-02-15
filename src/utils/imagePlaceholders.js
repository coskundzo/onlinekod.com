// Utility functions for generating image placeholders
export const generatePlaceholderImage = (size = 100, bgColor = '#667eea', emoji = '👦') => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  
  const ctx = canvas.getContext('2d');
  
  // Draw circle background
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2 - 5, 0, 2 * Math.PI);
  ctx.fillStyle = bgColor;
  ctx.fill();
  
  // Draw emoji
  ctx.font = `${size * 0.6}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'white';
  ctx.fillText(emoji, size/2, size/2);
  
  return canvas.toDataURL();
};

// Predefined student placeholders
export const studentPlaceholders = {
  student1: '/images/testimonial-student1.svg',
  student2: '/images/testimonial-student2.svg',
  student3: '/images/testimonial-student3.svg',
  student4: '/images/testimonial-student4.svg',
  parent1: '/images/testimonial-parent1.svg',
  parent2: '/images/testimonial-parent2.svg',
  parent3: '/images/testimonial-parent3.svg',
  parent4: '/images/testimonial-parent4.svg'
};

// Course-specific placeholders
export const coursePlaceholders = {
  python: '/images/course-python.svg',
  minecraft: '/images/course-minecraft.svg',
  scratch: '/images/course-scratch.svg',
  roblox: '/images/course-roblox.svg',
  javascript: '/images/course-javascript.svg',
  math: '/images/course-math.svg',
  english: '/images/course-english.svg'
};