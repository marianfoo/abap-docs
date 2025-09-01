  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) → 

ABAP and JSON

This section explains how [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_glosry.htm "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating JSON data using parsers and renderers created and used using the APIs found in [sXML Library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensxml_library_glosry.htm "Glossary Entry").

-   the direct transformation of ABAP data to JSON format (known as serialization) and reads of data in JSON format to ABAP data objects (known as deserialization) using transformations located as programs in the repository.

The handling of [JSON data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in ABAP is based on the following principles:

-   A [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm) format maps JSON data to XML.

-   XML readers and XML writers in sXML Library support JSON-XML and can be used as [parsers and renderers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_sxml.htm) of JSON data.

-   Direct [transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) can be made [between ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm). Here, a canonical JSON representation of ABAP data called [asJSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) can be used for the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID.

For examples, see the appropriate executable [programs in the example library](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_abexas.htm).

Continue
[JSON - Quick Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm)
[JSON-XML - XML Representation of JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_xml.htm)
[Parsing and Rendering JSON Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_sxml.htm)
[Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm)
[JSON, Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_abexas.htm)