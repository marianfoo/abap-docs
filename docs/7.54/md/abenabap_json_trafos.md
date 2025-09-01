  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) → 

Transformations for JSON

The [transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) that can be called from ABAP, namely [XSL transformations](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry") and [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"), can also be used for [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry").

-   To call a transformation for JSON data as a source, the following XML sources can be specified in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)):

-   A string or internal table with [JSON data](javascript:call_link\('abenjson_oview.htm'\)) in character-like or byte-like representation.

-   A [JSON Reader](javascript:call_link\('abenjson_reader_glosry.htm'\) "Glossary Entry").

A JSON reader returns data in the [JSON XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format. The JSON data specified as a string or in an internal table is also handled like XML representing JSON data [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format.

-   To call a transformation for JSON data as a target, a [JSON writer](javascript:call_link\('abenjson_writer_glosry.htm'\) "Glossary Entry") can be specified as an XML target in the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)): A JSON writer expects data in [JSON-XML](javascript:call_link\('abenjson_xml_glosry.htm'\) "Glossary Entry") format.

Any XSLT programs and ST programs can be called that can handle JSON-XML:

-   If the source is JSON data, the transformation must process JSON-XML as its input.

-   If the target is JSON data, the transformation must create JSON-XML.

Self-written transformations must be programmed accordingly. The [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") ID is handled appropriately internally.

-   [Self-Written Transformations](javascript:call_link\('abenabap_json_trafos_self.htm'\))

-   [Identity Transformation](javascript:call_link\('abenabap_json_trafo_id.htm'\))

Continue
[Self-Written Transformations for JSON](javascript:call_link\('abenabap_json_trafos_self.htm'\))
[Identity Transformation for JSON](javascript:call_link\('abenabap_json_trafo_id.htm'\))
[asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\))