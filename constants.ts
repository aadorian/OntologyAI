export const ONTOLOGY_XML = `<?xml version="1.0"?>
<rdf:RDF xmlns="http://www.semanticweb.org/grounded_research_ontology#"
     xml:base="http://www.semanticweb.org/grounded_research_ontology"
     xmlns:owl="http://www.w3.org/2002/07/owl#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:xml="http://www.w3.org/XML/1998/namespace"
     xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
    <owl:Ontology rdf:about="http://www.semanticweb.org/grounded_research_ontology"/>
    
    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Object Properties
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasObjective">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchProject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchObjective"/>
        <rdfs:label>hasObjective</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasTheoreticalFramework">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchProject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#TheoreticalFramework"/>
        <rdfs:label>hasTheoreticalFramework</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasResearcher">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchProject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Researcher"/>
        <rdfs:label>hasResearcher</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#selects">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Researcher"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#FieldOfStudy"/>
        <rdfs:label>selects</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#appliesMethod">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Researcher"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Method"/>
        <rdfs:label>appliesMethod</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#poses">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchObjective"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchQuestion"/>
        <rdfs:label>poses</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasSubjectObjectApplication">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#FieldOfStudy"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#SubjectObject"/>
        <rdfs:label>hasSubjectObjectApplication</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#isReformulated">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchQuestion"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:label>isReformulated</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#refersTo">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Bibliography"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:label>refersTo</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasSubjectObjects">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#SubjectObject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:label>hasSubjectObjects</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#isInterpreted">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation"/>
        <rdfs:label>isInterpreted</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#isApplied">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#SubjectObject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#MethodOverSubjectObject"/>
        <rdfs:label>isApplied</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#toReformulation">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchQuestion"/>
        <rdfs:label>toReformulation</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#giveResponseTo">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report"/>
        <rdfs:label>giveResponseTo</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasRelatedWork">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report"/>
        <rdfs:label>hasRelatedWork</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasMethodology">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report"/>
        <rdfs:label>hasMethodology</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasCodes">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>hasCodes</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#isReported">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#GroundedTheory"/>
        <rdfs:label>isReported</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasElaboratedTheory">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#GroundedTheory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>hasElaboratedTheory</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasRelativeAnalyticCategory">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>hasRelativeAnalyticCategory</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasElaboratedAnalyticCategory">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:label>hasElaboratedAnalyticCategory</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasRelatedDescriptiveCategory">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:label>hasRelatedDescriptiveCategory</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasElaboratedDescriptiveCategory">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>hasElaboratedDescriptiveCategory</rdfs:label>
    </owl:ObjectProperty>
    
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/grounded_research_ontology#hasRelatedCode">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>hasRelatedCode</rdfs:label>
    </owl:ObjectProperty>
    
    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Classes
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->
    
    <!-- Project Formulation Phase -->
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#ResearchProject">
        <rdfs:label>Research Project</rdfs:label>
        <rdfs:comment>Central concept representing a research project in the formulation phase</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#ResearchObjective">
        <rdfs:label>Research Objective</rdfs:label>
        <rdfs:comment>Objective of the research project</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#TheoreticalFramework">
        <rdfs:label>Theoretical Framework</rdfs:label>
        <rdfs:comment>Theoretical framework used in the research project</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Researcher">
        <rdfs:label>Researcher</rdfs:label>
        <rdfs:comment>Person conducting the research</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#FieldOfStudy">
        <rdfs:label>Field Of Study</rdfs:label>
        <rdfs:comment>Field or domain of study selected by the researcher</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Method">
        <rdfs:label>Method</rdfs:label>
        <rdfs:comment>Theoretical Sampling (Guiding Principle): A process which allows the researcher to collect, code, and analyze the data and then decide what data to collect next.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Interview">
        <rdfs:subClassOf rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Method"/>
        <rdfs:label>Interview</rdfs:label>
        <rdfs:comment>Interview as a specific research method</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#ResearchQuestion">
        <rdfs:label>Research Question</rdfs:label>
        <rdfs:comment>Research question posed by the research objective</rdfs:comment>
    </owl:Class>
    
    <!-- Data Collection Phase -->
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Bibliography">
        <rdfs:label>Bibliography</rdfs:label>
        <rdfs:comment>Bibliography that refers to records</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#SubjectObject">
        <rdfs:label>Subject | Object</rdfs:label>
        <rdfs:comment>Subject or object of study in data collection</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Record">
        <rdfs:label>Record</rdfs:label>
        <rdfs:comment>Base class for all types of records collected during research</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#InterviewTranscript">
        <rdfs:subClassOf rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:label>Interview Transcript</rdfs:label>
        <rdfs:comment>Transcript of an interview as a type of record</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#FieldNotes">
        <rdfs:subClassOf rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:label>Field Notes</rdfs:label>
        <rdfs:comment>Field notes as a type of record</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#EnrichedDocument">
        <rdfs:subClassOf rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record"/>
        <rdfs:label>Enriched Document</rdfs:label>
        <rdfs:comment>Enriched document as a type of record</rdfs:comment>
    </owl:Class>
    
    <!-- Consensus Phase -->
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Reflexivity">
        <rdfs:label>Reflexivity</rdfs:label>
        <rdfs:comment>Reflexive process in the consensus phase</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#MethodOverSubjectObject">
        <rdfs:label>Method Over Subject | Object</rdfs:label>
        <rdfs:comment>Method applied over subject or object</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Interpretation">
        <rdfs:label>Interpretation</rdfs:label>
        <rdfs:comment>Memoing: The ongoing process of writing theoretical notes throughout the GT process. Memos capture the conceptual links between categories as the researcher notes down their reflections on different categories.</rdfs:comment>
    </owl:Class>
    
    <!-- Finding Phase -->
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Report">
        <rdfs:label>Report</rdfs:label>
        <rdfs:comment>Write-up: The final step in GT is writing up the theory, which follows the theoretical outline generated as a result of sorting and theoretical coding.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#GroundedTheory">
        <rdfs:label>Grounded Theory</rdfs:label>
        <rdfs:comment>Theoretical Sampling (Best Process Match): A process which allows the researcher to collect, code, and analyze the data and then decide what data to collect next.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory">
        <rdfs:label>Analytic Category</rdfs:label>
        <rdfs:comment>Category: The next level of abstraction produced as a result of applying constant comparison on concepts.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory">
        <rdfs:label>Descriptive Category</rdfs:label>
        <rdfs:comment>Category: The next level of abstraction produced as a result of applying constant comparison on concepts.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#Code">
        <rdfs:label>Code</rdfs:label>
        <rdfs:comment>A phrase that summarizes the main points in 2 or 3 words.</rdfs:comment>
    </owl:Class>
    
    <owl:Class rdf:about="http://www.semanticweb.org/grounded_research_ontology#CoreCategory">
        <rdfs:subClassOf rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>Core Category</rdfs:label>
        <rdfs:comment>Several categories emerge as a result of data analysis and the one that is able to account for most variations in the data and relates meaningfully and easily with other categories is called the Core Category (Glaser 1978).</rdfs:comment>
    </owl:Class>
    
    <!-- 
    ///////////////////////////////////////////////////////////////////////////////////////
    //
    // Individuals - Complete Research Project Example
    //
    ///////////////////////////////////////////////////////////////////////////////////////
     -->
    
    <!-- Project Formulation Phase Individuals -->
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Project_QualitativeEducationStudy">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchProject"/>
        <rdfs:label>Qualitative Education Study</rdfs:label>
        <hasObjective rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Objective_UnderstandStudentMotivation"/>
        <hasTheoreticalFramework rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Framework_GroundedTheory"/>
        <hasResearcher rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Researcher_DrSmith"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Objective_UnderstandStudentMotivation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchObjective"/>
        <rdfs:label>Understand Student Motivation</rdfs:label>
        <poses rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Question_WhatFactorsMotivate"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Framework_GroundedTheory">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#TheoreticalFramework"/>
        <rdfs:label>Grounded Theory Framework</rdfs:label>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Researcher_DrSmith">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Researcher"/>
        <rdfs:label>Dr. Smith</rdfs:label>
        <selects rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Field_HigherEducation"/>
        <appliesMethod rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Method_SemiStructuredInterview"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Field_HigherEducation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#FieldOfStudy"/>
        <rdfs:label>Higher Education</rdfs:label>
        <hasSubjectObjectApplication rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Subject_UniversityStudents"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Method_SemiStructuredInterview">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interview"/>
        <rdfs:label>Semi-Structured Interview</rdfs:label>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Question_WhatFactorsMotivate">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#ResearchQuestion"/>
        <rdfs:label>What factors motivate university students to engage in their studies?</rdfs:label>
        <isReformulated rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity_InitialAnalysis"/>
    </owl:NamedIndividual>
    
    <!-- Data Collection Phase Individuals -->
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Bibliography_LiteratureReview">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Bibliography"/>
        <rdfs:label>Literature Review Bibliography</rdfs:label>
        <refersTo rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record_PublishedStudy1"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Subject_UniversityStudents">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#SubjectObject"/>
        <rdfs:label>University Students</rdfs:label>
        <hasSubjectObjects rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record_Interview1"/>
        <hasSubjectObjects rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record_Interview2"/>
        <hasSubjectObjects rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Record_FieldNotes1"/>
        <isApplied rdf:resource="http://www.semanticweb.org/grounded_research_ontology#MethodApplication_InterviewProtocol"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Record_Interview1">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#InterviewTranscript"/>
        <rdfs:label>Interview Transcript 1 - Student A</rdfs:label>
        <isInterpreted rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation_InitialCoding"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Record_Interview2">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#InterviewTranscript"/>
        <rdfs:label>Interview Transcript 2 - Student B</rdfs:label>
        <isInterpreted rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation_InitialCoding"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Record_FieldNotes1">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#FieldNotes"/>
        <rdfs:label>Field Notes - Observation Session 1</rdfs:label>
        <isInterpreted rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation_InitialCoding"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Record_PublishedStudy1">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#EnrichedDocument"/>
        <rdfs:label>Published Study on Student Engagement</rdfs:label>
    </owl:NamedIndividual>
    
    <!-- Consensus Phase Individuals -->
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Reflexivity_InitialAnalysis">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Reflexivity"/>
        <rdfs:label>Initial Analysis Reflexivity</rdfs:label>
        <toReformulation rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Question_WhatFactorsMotivate"/>
        <giveResponseTo rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report_FinalResearchReport"/>
        <hasRelatedWork rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report_FinalResearchReport"/>
        <hasMethodology rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report_FinalResearchReport"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#MethodApplication_InterviewProtocol">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#MethodOverSubjectObject"/>
        <rdfs:label>Interview Protocol Application</rdfs:label>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Interpretation_InitialCoding">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Interpretation"/>
        <rdfs:label>Initial Coding Interpretation</rdfs:label>
        <hasCodes rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_IntrinsicMotivation"/>
        <hasCodes rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_ExtrinsicMotivation"/>
        <hasCodes rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_PeerInfluence"/>
        <hasCodes rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_TeacherSupport"/>
    </owl:NamedIndividual>
    
    <!-- Finding Phase Individuals -->
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Report_FinalResearchReport">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Report"/>
        <rdfs:label>Final Research Report</rdfs:label>
        <isReported rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Theory_StudentMotivationModel"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Theory_StudentMotivationModel">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#GroundedTheory"/>
        <rdfs:label>Student Motivation Model</rdfs:label>
        <hasElaboratedTheory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_MotivationFactors"/>
        <hasElaboratedTheory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_ContextualFactors"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_MotivationFactors">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>Motivation Factors</rdfs:label>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_ContextualFactors"/>
        <hasElaboratedAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_InternalMotivation"/>
        <hasElaboratedAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_ExternalMotivation"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_ContextualFactors">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>Contextual Factors</rdfs:label>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_MotivationFactors"/>
        <hasElaboratedAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_SocialEnvironment"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_BehavioralPatterns">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory"/>
        <rdfs:label>Behavioral Patterns</rdfs:label>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_MotivationFactors"/>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_ContextualFactors"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#CoreCategory_MotivationDynamics">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#CoreCategory"/>
        <rdfs:label>Motivation Dynamics</rdfs:label>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_MotivationFactors"/>
        <hasRelativeAnalyticCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#AnalyticCategory_ContextualFactors"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_InternalMotivation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:label>Internal Motivation</rdfs:label>
        <hasRelatedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_ExternalMotivation"/>
        <hasElaboratedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_IntrinsicMotivation"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_ExternalMotivation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:label>External Motivation</rdfs:label>
        <hasRelatedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_InternalMotivation"/>
        <hasElaboratedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_ExtrinsicMotivation"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory_SocialEnvironment">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#DescriptiveCategory"/>
        <rdfs:label>Social Environment</rdfs:label>
        <hasElaboratedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_PeerInfluence"/>
        <hasElaboratedDescriptiveCategory rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_TeacherSupport"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Code_IntrinsicMotivation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>Intrinsic Motivation</rdfs:label>
        <hasRelatedCode rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_ExtrinsicMotivation"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Code_ExtrinsicMotivation">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>Extrinsic Motivation</rdfs:label>
        <hasRelatedCode rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_IntrinsicMotivation"/>
        <hasRelatedCode rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_PeerInfluence"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Code_PeerInfluence">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>Peer Influence</rdfs:label>
        <hasRelatedCode rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_TeacherSupport"/>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/grounded_research_ontology#Code_TeacherSupport">
        <rdf:type rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code"/>
        <rdfs:label>Teacher Support</rdfs:label>
        <hasRelatedCode rdf:resource="http://www.semanticweb.org/grounded_research_ontology#Code_PeerInfluence"/>
    </owl:NamedIndividual>
    
</rdf:RDF>`;