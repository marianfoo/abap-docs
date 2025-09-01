  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ABAP and JSON

This section explains how [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating JSON data using parsers and renderers created and used using the APIs found in [sXML Library](javascript:call_link\('abensxml_library_glosry.htm'\) "Glossary Entry").

-   the direct transformation of ABAP data to JSON format (known as serialization) and reads of data in JSON format to ABAP data objects (known as deserialization) using transformations located as programs in the repository.

The handling of [JSON data](javascript:call_link\('abenjson_oview.htm'\)) in ABAP is based on the following principles:

-   A [JSON-XML](javascript:call_link\('abenabap_json_xml.htm'\)) format maps JSON data to XML.

-   XML readers and XML writers in sXML Library support JSON-XML and can be used as [parsers and renderers](javascript:call_link\('abenabap_json_sxml.htm'\)) of JSON data.

-   Direct [transformations can be made between ABAP and JSON](javascript:call_link\('abenabap_json_trafos.htm'\)). Here, a canonical JSON representation of ABAP data called [asJSON](javascript:call_link\('abenabap_asjson.htm'\)) can be used for the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.

For examples, see the appropriate executable [programs in the example library](javascript:call_link\('abenabap_json_abexas.htm'\)).

Continue
[JSON - Short Overview](javascript:call_link\('abenjson_oview.htm'\))
[JSON-XML - XML Representation of JSON](javascript:call_link\('abenabap_json_xml.htm'\))
[Parsing and Rendering JSON Data](javascript:call_link\('abenabap_json_sxml.htm'\))
[Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\))
[JSON, Examples](javascript:call_link\('abenabap_json_abexas.htm'\))