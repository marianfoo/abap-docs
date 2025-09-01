  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_trafos.htm) → 

Identity Transformation for JSON

The predefined [identity transformation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_id.htm) ID is executed internally so that all requirements for [JSON transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_trafos.htm) are met. The following combinations are possible:

-   [JSON writer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_writer_glosry.htm "Glossary Entry") as XML target

-   ABAP data objects as source
    The ABAP data is serialized directly to its canonical JSON format [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasjson_glosry.htm "Glossary Entry"). In this concept, the ABAP data is serialized first to its XML format [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_glosry.htm "Glossary Entry"). This is then transformed to an [asJSON-XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasjson_xml_glosry.htm "Glossary Entry") representation and passed to the writer.

-   XML data as XML source
    The XML source must be in JSON-XML format and is passed to the writer directly.

-   JSON data or JSON reader as XML source
    The JSON-XML data is passed to the writer directly.

-   JSON data or [JSON reader](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_reader_glosry.htm "Glossary Entry") as XML source

-   ABAP data objects as target
    The JSON data must be in an [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasjson_glosry.htm "Glossary Entry") format that matches the ABAP data objects. The JSON data is deserialized directly to the ABAP data objects. In this concept, an asJSON-XML representation of the asJSON data is edited that is first transformed to asXML and then deserialized to the ABAP data objects.

-   XML data as XML target
    The JSON-XML data is passed to the XML target directly.

-   JSON writer as XML target
    The JSON-XML data is passed to the writer directly.

When XML data is specified as an XML source or XML target, this covers all data that can be specified behind XML in CALL TRANSFORMATION, except for JSON data and JSON readers and writers.

Notes

-   If the identity transformation ID is used to serialize ABAP data to JSON and deserialize JSON data to ABAP, [asJSON, the canonical JSON representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson.htm) of ABAP data, is applied.

-   Copies of the XSL transformation ID made from the repository to other XSLT programs are not handled like ID internally and cannot be used like ID for JSON data.

Executable Examples

-   See [Identity Transformation with JSON Writer as Target](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_trafo_id_abexa.htm) for the various ways of specifying JSON data as an XML source.

-   See the [asJSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson.htm) examples.