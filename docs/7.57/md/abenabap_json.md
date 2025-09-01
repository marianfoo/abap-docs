  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP and JSON, ABENABAP_JSON, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

ABAP and JSON

This section describes how [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating JSON data using parsers and renderers created and used using the APIs of the [sXML Library](javascript:call_link\('abensxml_library_glosry.htm'\) "Glossary Entry").
-   the direct transformation of ABAP data to JSON format (serialization) and reading of data in JSON format to ABAP data objects (deserialization) using transformations that exist as programs in the repository.

The handling of [JSON data](javascript:call_link\('abenjson_oview.htm'\)) in ABAP is based on the following principles:

-   A [JSON-XML](javascript:call_link\('abenabap_json_xml.htm'\)) format maps JSON data to XML.
-   XML readers and XML writers in sXML Library support JSON-XML and can be used as [parsers and renderers](javascript:call_link\('abenabap_json_sxml.htm'\)) of JSON data.
-   Direct [transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) can be performed [between ABAP and JSON](javascript:call_link\('abenabap_json_trafos.htm'\)). Here, a canonical JSON representation of ABAP data called [asJSON](javascript:call_link\('abenabap_asjson.htm'\)) can be used for the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.

For examples, see the corresponding executable [programs in the example library](javascript:call_link\('abenabap_json_abexas.htm'\)).

Continue
[JSON - Quick Overview](javascript:call_link\('abenjson_oview.htm'\))
[JSON-XML - XML Representation of JSON](javascript:call_link\('abenabap_json_xml.htm'\))
[JSON - Parsing and Rendering](javascript:call_link\('abenabap_json_sxml.htm'\))
[JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\))
[JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\))