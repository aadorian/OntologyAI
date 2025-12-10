# Ontology Graph Viewer & AI SPARQL Assistant

A modern, interactive web application for visualizing RDF/OWL ontologies and querying them using natural language or SPARQL, powered by the Google Gemini API.

## 📸 Snapshot of Functionalities

*   **Interactive Force-Directed Graph**: Visualize classes, individuals, and relationships dynamically using D3.js. Nodes are color-coded by type (Class vs. Individual).
*   **AI-Powered SPARQL Chat**: Ask questions in plain English. The integrated Gemini AI interprets your ontology, generates valid SPARQL queries, and provides natural language answers based on the graph data.
*   **Query Playground**: Includes a set of pre-defined, relevant questions specific to the loaded ontology (e.g., "Find the Core Category", "List Researcher Methods") to demonstrate capabilities.
*   **Detail Sidebar**: Click any node to inspect specific data properties, full URIs, raw XML snippets, and navigate incoming/outgoing relationships.
*   **Dynamic Data Loading**: Upload your own `.rdf`, `.xml`, or `.owl` files directly in the browser to visualize custom datasets.
*   **Grounded Research Ontology**: Comes pre-loaded with a comprehensive Grounded Theory research ontology example.

## 🚀 How to Run

### Prerequisites
*   Node.js (v18 or higher recommended)
*   A Google Gemini API Key (Get one at [Google AI Studio](https://aistudio.google.com/))

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ontology-graph-viewer.git
    cd ontology-graph-viewer
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Create a `.env` file in the root directory (or configure your environment variables provider) and add your API key. This is required for the Chat Interface to function.
    ```env
    API_KEY=your_google_gemini_api_key_here
    ```

4.  **Start the Application**:
    ```bash
    npm start
    # Or if using Vite:
    npm run dev
    ```

5.  **Open in Browser**:
    Navigate to `http://localhost:3000` (or the port shown in your terminal).

## 🤝 Guidelines for Collaboration

We welcome contributions! To ensure a smooth collaboration process, please follow these guidelines:

### Development Workflow
1.  **Fork** the repository.
2.  **Create a Branch** for your feature or fix (`git checkout -b feature/NewFeature`).
3.  **Commit** your changes with clear, descriptive messages.
4.  **Push** to the branch (`git push origin feature/NewFeature`).
5.  **Open a Pull Request**.

### Coding Standards
*   **TypeScript**: Maintain strict typing. Define interfaces in `types.ts` for any new data structures.
*   **Styling**: Use **Tailwind CSS** for all styling. Avoid creating new CSS files or inline styles unless necessary for dynamic D3 properties.
*   **D3.js**: When modifying `ForceGraph.tsx`, ensure D3 logic stays contained within `useEffect` hooks to play nicely with React's render cycle.
*   **GenAI**: Follow `@google/genai` SDK patterns. Do not hardcode API keys.

### Key Files Structure
*   `App.tsx`: Main layout and state management.
*   `components/ForceGraph.tsx`: D3 visualization logic.
*   `components/ChatInterface.tsx`: Chat UI and Gemini API integration.
*   `utils/parser.ts`: Logic to parse RDF/XML strings into graph nodes and links.
*   `constants.ts`: Contains the default Grounded Research Ontology data.

---
Built with React, D3.js, and Google Gemini.