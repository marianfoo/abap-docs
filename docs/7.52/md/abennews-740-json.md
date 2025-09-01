  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP02](javascript:call_link\('abennews-740_sp02.htm'\)) → 

JSON Interface in Release 7.40, SP02

From Release 7.40 SP02, ABAP supports the handling of JSON data and the transformation of ABAP data to JSON and back. For more information, see [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)).

This enhancement has also been ported to releases 7.02 and 7.31.

[1\. JSON-XML](#!ABAP_MODIFICATION_1@1@)

[2\. asJSON](#!ABAP_MODIFICATION_2@2@)

[3\. JSON and CALL TRANSFORMATION](#!ABAP_MODIFICATION_3@3@)

[3\. JSON and escape](#!ABAP_MODIFICATION_3@4@)

Modification 1

JSON-XML

[JSON-XML](javascript:call_link\('abenabap_json_xml.htm'\)) is a special XML format that enables JSON data to be described using an XML representation. A new [format](javascript:call_link\('abenabap_sxml_lib_formats.htm'\)), IF\_SXML=>CO\_XT\_JSON, has been added to [sXML Library](javascript:call_link\('abensxml_library_glosry.htm'\) "Glossary Entry"), which enables JSON data to be edited using JSON-XML.

Modification 2

asJSON

The canonical JSON representation [asJSON](javascript:call_link\('abenabap_asjson.htm'\)) defines a mapping between ABAP types and JSON. This is used in serializations and deserializations using the [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID.

Modification 3

JSON and CALL TRANSFORMATION

JSON data can be specified in various forms as an XML source in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) and a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") can be specified s target. The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID supports JSON by using [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry"). For more information, see [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)).

Modification 3

JSON and escape

The escape symbol function [escape](javascript:call_link\('abenescape_functions.htm'\)) supports the new format E\_JSON\_STRING for replacing special characters in JSON.