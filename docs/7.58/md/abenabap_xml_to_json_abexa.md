  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Examples](javascript:call_link\('abenabap_json_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Transformation%20of%20XML%20Data%2C%20ABENABAP_XML_TO_JSON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

JSON - Transformation of XML Data

Transforms XML data to JSON.

Source Code   

REPORT demo\_xml\_to\_json.
cl\_demo\_xml\_to\_json=>main( ).

Description   

This example demonstrates the transformation of XML data to JSON. This is achieved in CL\_DEMO\_XML\_TO\_JSON via token-based parsing of the XML data using methods of the [sXML library](javascript:call_link\('abenabap_sxml_lib.htm'\)) and then token-based rendering of this data to [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry"). A [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") is filled directly. If an [XML writer](javascript:call_link\('abenxml_writer_glosry.htm'\) "Glossary Entry") had been specified instead (shown as a comment in the source code), the result would be JSON-XML.