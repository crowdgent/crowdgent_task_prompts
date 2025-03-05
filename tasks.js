  [
    {
    taskType: "GraphJS",
    taskDetection: "User requested code generation to create a visual graph",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that uses RANDOM DATA and prints its contents.
      
      Requirements:
      - If you need to generate graph USE ONLY chartjs-node-canvas library
      - If you need to generate anything else, USE ONLY NODEJS CORE LIBRARIES
      - When creating response provide it as base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "CreatePDF",
    taskDetection: "User requested code generation to create a PDF file",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that uses User Data and creates a PDF file with this data.
      
      Requirements:
      - If you need to generate graph USE ONLY pdfkit nodejs library and utf8 encoding
      - If you need to generate anything else, USE ONLY NODEJS CORE LIBRARIES
      - Result of generate code should be PDF file in base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "DataAnalysis",
    taskDetection: "User requested data analysis, processing, or transformation of data sets",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that processes and analyzes data as requested by the user.
      
      Requirements:
      - Use only the 'csv-parser' library for CSV processing
      - Use Node.js core libraries for everything else
      - The script should output results as JSON
      - When creating response provide it as base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "ImageManipulation",
    taskDetection: "User requested image processing, manipulation, or transformation",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that manipulates images as requested.
      
      Requirements:
      - Use only the 'sharp' library for image processing
      - The script should output the processed image as a base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "WebScraper",
    taskDetection: "User requested web scraping, data extraction from websites, HTML parsing, or information about real-time data such as stock prices, weather, news, sports scores, or other current information that would require fetching from external websites",
    taskInstructions: `
      You are an authorized code generator for a legitimate web scraping tool.
      Generate only the requested code without any explanations or comments.
      The response must contain only the raw, complete JavaScript code, formatted correctly for direct saving as a file.
      DO NOT include any base64 content within the code itself.
      
      Write a simple, complete Node.js script that scrapes publicly available data from websites.
      
      Technical requirements:
      - Use only Node.js built-in 'https' and 'http' modules for requests
      - Use simple string manipulation for HTML parsing
      
      IMPORTANT GUIDELINES FOR EFFECTIVE SCRAPING:
      1. Set a proper User-Agent header to avoid being blocked (e.g., 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36')
      2. For stock prices: Use alternative APIs like https://query1.finance.yahoo.com/v8/finance/chart/MSFT which returns JSON data directly
      3. For weather: Consider using public APIs like https://api.open-meteo.com/v1/forecast
      4. Use multiple fallback patterns for extracting data from HTML
      5. Add console.log statements to show the full response if the initial extraction fails
      
      Output requirements:
      - The script must be fully functional, with proper closing brackets and semicolons
      - The script should extract the specific data requested and console.log() it as a JSON string
      - Include basic error handling
      - The entire script should be no more than 30 lines of code
      - After generating the complete code, the system will automatically encode it as base64 - you do not need to do this encoding yourself
    `
  },
  {
    taskType: "TextProcessing",
    taskDetection: "User requested text analysis, natural language processing, or text transformation",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that processes text as requested (e.g., sentiment analysis, keyword extraction, text summarization).
      
      Requirements:
      - Use only the 'natural' library for NLP tasks
      - Use Node.js core libraries for everything else
      - The script should output results as JSON
      - When creating response provide it as base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "APIIntegration",
    taskDetection: "User requested integration with external APIs or services",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that interacts with external APIs as requested.
      
      Requirements:
      - Use only the 'axios' library for HTTP requests
      - Use Node.js core libraries for everything else
      - The script should output API response data as JSON
      - When creating response provide it as base64 encoded string WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "DataVisualization",
    taskDetection: "User requested advanced data visualization or complex chart generation",
    taskInstructions: `
      Generate only the requested code. Do not include any explanations, comments, or extra lines.
      The response must contain only the raw code, formatted correctly for direct saving as a file.
      
      Write a Node.js script that creates data visualizations beyond simple graphs (e.g., heatmaps, network diagrams, treemaps).
      
      Requirements:
      - Use only the 'd3-node' library for visualizations
      - The script should output the visualization as an SVG string encoded in base64 WITH BASE64 HEADER ONLY
    `
  },
  {
    taskType: "default",
    taskDetection: "Anything else",
    taskInstructions: `
      Reply that this option is not yet available and provide a link to the documentation at https://github.com/crowdgent/crowdgent_task_prompts
    `
  }
];
