  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for ABAP Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20Binding%20in%20ABAP%20Release%207.40%2C%20SP02%2C%20ABENNEWS-740-JSON%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

JSON Binding in ABAP Release 7.40, SP02

From ABAP release 7.40 SP02, ABAP supports the handling of JSON data and the transformation of ABAP data to JSON and back. For more information, see [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)).

This enhancement has also been ported to releases 7.02 and 7.31.

[1\. JSON-XML](#!ABAP_MODIFICATION_1@1@)
[2\. asJSON](#!ABAP_MODIFICATION_2@2@)
[3\. JSON and CALL TRANSFORMATION](#!ABAP_MODIFICATION_3@3@)
[4\. JSON and escape](#!ABAP_MODIFICATION_4@4@)

Modification 1   

JSON-XML

[JSON-XML](javascript:call_link\('abenabap_json_xml.htm'\)) is a special XML format that enables JSON data to be described using an XML representation. A new [format](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)), IF\_SXML=>CO\_XT\_JSON, has been added to the [sXML](javascript:call_link\('abensxml_library_glosry.htm'\) "Glossary Entry") Library, which enables JSON data to be processed using JSON-XML.

Modification 2   

asJSON

The canonical JSON representation asJSON defines a mapping between ABAP types and JSON. This is used in serializations and deserializations using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.

Modification 3   

JSON and CALL TRANSFORMATION

JSON data can be specified in various forms as an XML source in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) and a [JSON](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") writer can be specified as target. The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID supports JSON by using [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry"). More information is available in [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)).

Modification 4   

JSON and escape

The escape function [escape](javascript:call_link\('abenescape_functions.htm'\)) supports the new format E\_JSON\_STRING for replacing special characters in JSON.