  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) → 

Self-Written Transformations for JSON

Self-written XSLT programs and simple transformations enable the following transformations:

-   Serialization of ABAP data objects to JSON

-   An [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) accesses the [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the connected ABAP data, created internally. Its task is to transform asXML to JSON-XML.

-   A [simple transformation](javascript:call_link\('abenabap_st.htm'\)) accesses the connected ABAP data directly. Its task is to create a valid JSON-XML representation.

-   Deserialization from JSON to ABAP data objects:

-   The task of a an [XSL transformation](javascript:call_link\('abenabap_xslt.htm'\)) is to transform JSON-XML to an [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") representation of the connected ABAP data objects.

-   The task of a [simple transformation](javascript:call_link\('abenabap_st.htm'\)) is to process JSON-XML and write the data to the connected ABAP data objects.

-   XSL transformations between JSON and XML or between JSON and JSON.

-   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

Executable Example

[Simple Transformation for Internal Tables](javascript:call_link\('abenabap_st_json_table_abexa.htm'\))