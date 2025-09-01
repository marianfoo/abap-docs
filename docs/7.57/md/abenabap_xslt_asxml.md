  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Canonical XML Representation \(asXML\), ABENABAP_XSLT_ASXML, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Canonical XML Representation (asXML)

The canonical [XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxml_glosry.htm "Glossary Entry") representation asXML is the format of XML data that results from a serialization of ABAP data using [XSLT programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") as an intermediate format, or that is required for a deserialization using XSLT. This format is also known as ABAP Serialization XML.

The canonical XML representation supports all ABAP data types. The elementary ABAP data types are mapped to a set of XML schema data types. Conversely, special domains are available for further XML schema data types.

The asXML format is significant in the following cases:

-   The mapping of elementary ABAP data types to XML schema data types and vice versa.
-   In the case of self-written [XSL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") transformations of ABAP data to an XML format, the asXML format of the serialization result must be known.
-   External XML data whose content is to be deserialized into ABAP data must be transformed to asXML format.
-   The asXML mapping of elementary ABAP data types to XML schema data types and vice versa is also used in [Simple Transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensimple_transformation_glosry.htm "Glossary Entry")

Description of the asXML format:

-   [General asXML Format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_general.htm)
-   [Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_named.htm)
-   [Mapping Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_schema.htm)
-   [Mapping of XML Fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_fragment.htm)

Hint

The asXML format of serialized ABAP data or objects can be created and examined using the predefined [identity transformation ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_id.htm). This transformation is not, however, symmetrical with respect to text strings that contain only blanks. A symmetrical transformation that creates the asXML format of ABAP data (excluding reference variables) can be created using the [ST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) statement [tt:copy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_copy.htm) (see the [executable example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_id_vs_st_abexa.htm)).

Continue
[asXML - General Format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_general.htm)
[asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_named.htm)
[asXML - Mapping Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_schema.htm)
[asXML - Mapping of XML Fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_fragment.htm)
[asXML - Examples of Mappings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_abexas.htm)