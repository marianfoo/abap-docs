  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20XML%20-%20Transformations%2C%20ABENABAP_XML_TRAFOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

XML - Transformations

The AS ABAP kernel contains processors for the following transformations:

-   [XSL Transformations](javascript:call_link\('abenabap_xslt.htm'\))
-   [Simple Transformations](javascript:call_link\('abenabap_st.htm'\))

Appropriate transformation programs can be created in the ABAP repository and called using the following statement:

-   [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\))

The possible transformations fulfill the following purposes:

-   XSL transformations transform XML to XML.
-   Simple transformations serialize ABAP data to XML and deserialize XML data to ABAP.

To also access ABAP data using XSL transformations, the asXML format can be used as an intermediate format, which defines a mapping between ABAP data and XML:

-   [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\))

The source and target of these transformations can be ABAP data objects, XML data in strings, or internal tables or objects from [class libraries for XML](javascript:call_link\('abenabap_xml_libs.htm'\)).

Example

The transaction STDEMO demonstrates various transformations from ABAP data to [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") and [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry").

Continue
[XSL Transformations](javascript:call_link\('abenabap_xslt.htm'\))
[Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\))
[Canonical XML Representation (asXML)](javascript:call_link\('abenabap_xslt_asxml.htm'\))
[CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\))