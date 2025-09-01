  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP02](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-740_sp02.htm) → 

JSON Binding in Release 7.40, SP02

From Release 7.40 SP02, ABAP supports the handling of JSON data and the transformation of ABAP data to JSON and back. For more information, see [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm).

This enhancement has also been ported to releases 7.02 and 7.31.

[1\. JSON-XML](#!ABAP_MODIFICATION_1@1@)

[2\. asJSON](#!ABAP_MODIFICATION_2@2@)

[3\. JSON and CALL TRANSFORMATION](#!ABAP_MODIFICATION_3@3@)

[3\. JSON and escape](#!ABAP_MODIFICATION_3@4@)

Modification 1

JSON-XML

[JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm) is a special XML format that enables JSON data to be described using an XML representation. A new [format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_formats.htm), IF\_SXML=>CO\_XT\_JSON, has been added to the [sXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_library_glosry.htm "Glossary Entry") Library, which enables JSON data to be edited using JSON-XML.

Modification 2

asJSON

The canonical JSON representation asJSON defines a mapping between ABAP types and JSON. This is used in serializations and deserializations using the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID.

Modification 3

JSON and CALL TRANSFORMATION

JSON data can be specified in various forms as an XML source in the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm) and a [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm "Glossary Entry") writer can be specified s target. The [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID supports JSON by using [asJSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasjson_glosry.htm "Glossary Entry"). More information is available in [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm).

Modification 3

JSON and escape

The escape function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) supports the new format E\_JSON\_STRING for replacing special characters in JSON.