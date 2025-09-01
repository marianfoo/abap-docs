  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - Self-Written Transformations, ABENABAP_JSON_TRAFOS_SELF, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - Self-Written Transformations

Self-written XSLT programs and Simple Transformations enable the following transformations:

-   Serialization of ABAP data objects to JSON
    -   An [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) accesses the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the connected ABAP data, created internally. It must transform asXML to JSON-XML.
    -   A [Simple Transformation](javascript:call_link\('abenabap_st.htm'\)) accesses the connected ABAP data directly. It must create a valid JSON-XML representation.
-   Deserialization from JSON to ABAP data objects:
    -   An [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) must transform JSON-XML to an [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the bound ABAP data objects.
    -   A [Simple Transformation](javascript:call_link\('abenabap_st.htm'\)) must process JSON-XML and write the data to the bound ABAP data objects.
-   XSL transformations between JSON and XML or between JSON and JSON.
    -   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

Executable Example

[Simple Transformation for Internal Tables](javascript:call_link\('abenabap_st_json_table_abexa.htm'\))