export const ONTOLOGY_XML = `<?xml version="1.0"?>
<rdf:RDF xmlns="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#"
     xml:base="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52"
     xmlns:owl="http://www.w3.org/2002/07/owl#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:xml="http://www.w3.org/XML/1998/namespace"
     xmlns:xsd="http://www.w3.org/2001/XMLSchema#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns:untitled-ontology-27="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#">
    <owl:Ontology rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52"/>

    <!-- Object Properties -->
    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Aplica_una_o_varias">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#MethodologicalStrategy"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Technique"/>
        <rdfs:label>appliesTechnique</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#De_interpretacion">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_informacion"/>
        <rdfs:label>fromInterpretation</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Define">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#MethodologicalStrategy"/>
        <rdfs:label>definesStrategy</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Es_de_entrevista">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_pregunta"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Question"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <rdfs:label>fromInterview</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Es_generado_por">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Genera"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
        <rdfs:label>isGeneratedBy</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Es_parte_del_marco_teorico">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliography"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TheoreticalFramework"/>
        <rdfs:label>isBibliographyOf</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Es_participante">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <rdfs:label>hasResearcher</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Es_participante_de">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Participant"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Subject"/>
        <rdfs:label>isdParticipantOf</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Genera">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
        <rdfs:label>generates</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Impacta">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TheoreticalFramework"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
        <rdfs:label>impacts</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Inf_insumo_para_producir">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Information"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Report"/>
        <rdfs:label>contributesTo</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Met_insumo_para_producir">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadata"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Report"/>
        <rdfs:label>isMetadataReport</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadato">
        <rdfs:domain>
            <owl:Class>
                <owl:unionOf rdf:parseType="Collection">
                    <rdf:Description rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
                    <rdf:Description rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
                </owl:unionOf>
            </owl:Class>
        </rdfs:domain>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadata"/>
        <rdfs:label>hasMetadata</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Pertenece_a">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <rdfs:label>belongsTo</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_esquema_de_clasificacion_descriptivo">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#AnalyticCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
        <rdfs:label>correspondsToDescriptiveCategory</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_informacion">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Information"/>
        <rdfs:label>generatesInformation</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_sujeto_u_objeto">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#SubjectOrObject"/>
        <rdfs:label>toSubjectObject</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_tecnica">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_tecnica_subre_sujeto_u_objeto"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Technique"/>
        <rdfs:label>isApplicationTechnique</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_a_tecnica_subre_sujeto_u_objeto">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Technique"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
        <rdfs:label>hasSubjectObjectApplication</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Relacionado_al_registro">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Se_interpreta"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
        <rdfs:label>isInterpretationOf</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Responde_a_entrevista">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_respuestas"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <rdfs:label>answersToInterview</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Responde_a_pregunta">
        <owl:inverseOf rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TIene_respuesta"/>
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Question"/>
        <rdfs:label>answersToQuestion</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Se_aplica_en">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Technique"/>
        <rdfs:range>
            <owl:Class>
                <owl:unionOf rdf:parseType="Collection">
                    <rdf:Description rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
                    <rdf:Description rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#SubjectOrObject"/>
                </owl:unionOf>
            </owl:Class>
        </rdfs:range>
        <rdfs:label>isAppliedIn</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Se_interpreta">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
        <rdfs:label>isInterpreted</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Soportado_en">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Support"/>
        <rdfs:label>supportedBy</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TIene_respuesta">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Question"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <rdfs:label>hasAnswer</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_esquema_de_clasificacion_analitica">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Information"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#AnalyticCategory"/>
        <rdfs:label>hasAnalyticCategory</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_esquema_de_clasificacion_descriptiva">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
        <rdfs:label>hasDescriptiveCategory</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_marco_teorico">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TheoreticalFramework"/>
        <rdfs:label>hasTheoreticalFrm</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_objetivo">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Objective"/>
        <rdfs:label>hasObjective</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_pregunta">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Question"/>
        <rdfs:label>hasQuestion</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Tiene_respuestas">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <rdfs:label>hasInterviewAnswer</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#categoria_superior">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
        <rdfs:label>hasHigherCategory</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Cumple_con_/_Alcanza">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Report"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Objective"/>
        <rdfs:label>meetsObjective</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Se_reformula">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Reformulation"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#ProjectFormulation"/>
        <rdfs:label>isReformulated</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Tiene_bibliografia">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliography"/>
        <rdfs:label>hasBibliography</rdfs:label>
    </owl:ObjectProperty>

    <owl:ObjectProperty rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#toReformulation">
        <rdfs:domain rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Finding"/>
        <rdfs:range rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Reformulation"/>
    </owl:ObjectProperty>

    <!-- Classes -->
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#AnalyticCategory"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliography"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DataCollection"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DescriptiveCategory"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#DocumentAnalysis"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#EnrichedDocument"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#FieldNote"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Finding"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Information"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interpretation"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadata"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#MethodologicalStrategy"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Object"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Objective"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Observation"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Participant"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#ProjectFormulation"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Question"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Record"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Report"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Subject"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#SubjectOrObject"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Support"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Technique"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TechniqueOverSubjectOrObject"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Text"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TheoreticalFramework"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Video"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Audio"/>
    <owl:Class rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Reformulation"/>

    <!-- Individuals -->
    <!-- (Including all data individuals provided in the prompt) -->
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InvestigacionEstrategiaEstudio">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Project"/>
        <untitled-ontology-27:Define rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#EstrategiaMetodologica1"/>
        <untitled-ontology-27:Es_participante rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador1"/>
        <untitled-ontology-27:Es_participante rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador2"/>
        <untitled-ontology-27:Es_participante rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador3"/>
        <untitled-ontology-27:Es_participante rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador4"/>
        <untitled-ontology-27:Tiene_marco_teorico rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#MarcoTeorico1"/>
        <untitled-ontology-27:Tiene_objetivo rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#objetivo1"/>
        <untitled-ontology-27:Tiene_objetivo rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#objetivo2"/>
        <untitled-ontology-27:Tiene_objetivo rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#objetivo3"/>
        <Tiene_bibliografia rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliografia1"/>
        <Tiene_bibliografia rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#Bibliografia2"/>
        <untitled-ontology-27:Nombre>Study and reading practices of communication students</untitled-ontology-27:Nombre>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador1">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <untitled-ontology-27:Nombre>Soledad Morales</untitled-ontology-27:Nombre>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador2">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <untitled-ontology-27:Nombre>Magela Cabrera</untitled-ontology-27:Nombre>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador3">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <untitled-ontology-27:Nombre>Rosalía Winocur</untitled-ontology-27:Nombre>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Investigador4">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Researcher"/>
        <untitled-ontology-27:Nombre>Camila Rojas</untitled-ontology-27:Nombre>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#entrevista1">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <untitled-ontology-27:Tiene_pregunta rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#pregunta1"/>
        <untitled-ontology-27:Tiene_pregunta rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#pregunta2"/>
        <untitled-ontology-27:Objetivo>To reconstruct the perception that students have about their condition of being young.</untitled-ontology-27:Objetivo>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#entrevista2">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Interview"/>
        <untitled-ontology-27:Objetivo>To explore the study and reading habits of students.</untitled-ontology-27:Objetivo>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#dato1">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <untitled-ontology-27:Valor>What defines me as a young person are a series of interests and forms of consumption...</untitled-ontology-27:Valor>
    </owl:NamedIndividual>
    
    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#dato31">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#InterviewAnswer"/>
        <untitled-ontology-27:Metadato rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#mujer"/>
        <untitled-ontology-27:Valor>When I was a teenager, I didn’t think I represented what it meant to be young...</untitled-ontology-27:Valor>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#mujer">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadata"/>
        <untitled-ontology-27:Valor>female</untitled-ontology-27:Valor>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#varón">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Metadata"/>
        <untitled-ontology-27:Valor>male</untitled-ontology-27:Valor>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliografia1">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#Bibliography"/>
        <untitled-ontology-27:Autor>Beccaria</untitled-ontology-27:Autor>
        <untitled-ontology-27:Titulo>El vínculo pedagógico en la educación superior...</untitled-ontology-27:Titulo>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="http://www.semanticweb.org/emilio/ontologies/2024/7/untitled-ontology-52#MarcoTeorico1">
        <rdf:type rdf:resource="http://www.semanticweb.org/emilio/ontologies/2024/5/untitled-ontology-27#TheoreticalFramework"/>
        <untitled-ontology-27:Valor>TRANSDISCIPLINARITY: it is a research practice based on the articulation of multiple disciplines...</untitled-ontology-27:Valor>
    </owl:NamedIndividual>

    <!-- Adding remaining nodes as placeholders for graph consistency if needed, though parser handles it -->
</rdf:RDF>`;