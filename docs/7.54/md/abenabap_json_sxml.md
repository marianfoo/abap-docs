  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) → 

Parsing and Rendering JSON Data

The processing of [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) data in ABAP is integrated into [sXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_library_glosry.htm "Glossary Entry") Library. Here, JSON is supported as a separate [format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_formats.htm), with [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_glosry.htm "Glossary Entry") used as an intermediate step.

-   [Parsing JSON Data](#@@ITOC@@ABENABAP_JSON_SXML_1)

-   [Rendering of JSON Data](#@@ITOC@@ABENABAP_JSON_SXML_2)

Parsing JSON Data

The method CREATE can be used to pass both XML data and [JSON data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) to each [XML reader](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_parse.htm) in sXML Library (except for XOP readers) that is based on the appropriate [classes and interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_reader.htm). The reader recognizes the JSON format and becomes a JSON reader. A JSON reader handles JSON data as if it were passed XML data that contains the [JSON-XML representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm) of the JSON data.

When parsed, invalid JSON data raises an exception of the class CX\_SXML\_PARSE\_ERROR, which must be caught in each parser step.

Notes

-   A JSON reader can, like every XML reader, be used as the source of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm), which permits direct serialization of JSON data to ABAP data objects.

-   When JSON data is parsed, escape characters \\ in front of [special characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in character-like values are removed automatically.

-   By default, the [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm) representation is created internally, where the object components of the JSON data are not nested in an element <member>. To create the longer variant with <member> elements, the method SET\_OPTION of the interface IF\_SXML\_READER can be used to set the option IF\_SXML\_READER=>CO\_OPT\_SEP\_MEMBER.

Executable Example

[JSON, Parse](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_oo_reader_abexa.htm)

Rendering of JSON Data

The method CREATE can be used to create each [XML writer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_render.htm) in sXML Library (except for XOP writers) that is based on the appropriate [classes and interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_writer.htm) as a JSON writer. Here, the associated constant of the interface IF\_SXML must be passed to the input parameter TYPE.

cl\_sxml\_...\_writer=>create( type = if\_sxml=>co\_xt\_json ).

A JSON writer of this type can, like any sXML writer, be provided with XML data using [token-based](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_render_token.htm) and [object-oriented rendering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sxml_lib_render_oo.htm) methods. This XML data must be a valid [JSON-XML representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm) of [JSON data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm). The object components of JSON data can be written to a writer in either JSON-XML notation, with or without <member> element.

The writer transforms the JSON-XML representation entered to JSON format and provides the result as specified by the writer type.

Invalid JSON data is not created and raises an exception of the class CX\_SXML\_STATE\_ERROR, which must be caught in each writer step.

Notes

-   When JSON data is rendered, [special characters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in character-like values are prefixed automatically with the escape character \\.

-   A JSON writer can, like every XML writer, be used as the target of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm), which permits direct serialization of ABAP data objects to JSON data.

Executable Example

[JSON, Render](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_token_writer_abexa.htm)