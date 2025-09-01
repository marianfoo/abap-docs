---
title: "JSON - Transformation of XML Data"
description: |
  Transforms XML data to JSON. Source Code REPORT demo_xml_to_json. cl_demo_xml_to_json=>main( ). Description This example demonstrates the transformation of XML data to JSON. This is achieved in CL_DEMO_XML_TO_JSON via token-based parsing of the XML data using methods of the sXML library
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_to_json_abexa.htm"
abapFile: "abenabap_xml_to_json_abexa.htm"
keywords: ["do", "if", "try", "method", "data", "abenabap", "xml", "json", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Transformation%20of%20XML%20Data%2C%20ABENABAP_XML_TO_JSON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

JSON - Transformation of XML Data

Transforms XML data to JSON.

Source Code   

REPORT demo\_xml\_to\_json.
cl\_demo\_xml\_to\_json=>main( ).

Description   

This example demonstrates the transformation of XML data to JSON. This is achieved in CL\_DEMO\_XML\_TO\_JSON via token-based parsing of the XML data using methods of the [sXML library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sxml_lib.htm) and then token-based rendering of this data to [JSON-XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_xml_glosry.htm "Glossary Entry"). A [JSON writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_writer_glosry.htm "Glossary Entry") is filled directly. If an [XML writer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenxml_writer_glosry.htm "Glossary Entry") had been specified instead (shown as a comment in the source code), the result would be JSON-XML.