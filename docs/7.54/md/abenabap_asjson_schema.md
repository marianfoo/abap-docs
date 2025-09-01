  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) → 

asJSON - Mapping Additional XML Schema Data Types

In [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry"), apart from the XML schema data types needed to map elementary ABAP types, additional XML schema data types are supported by special [domains](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_schema.htm) called XSD....

asJSON, which is based on asXML, also supports these domains (with the exception of XSDQNAME). In serializations and deserializations from or to ABAP data objects typed with these domains, the same applies as to [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_schema.htm). Here, values from the domain XSDBOOLEAN are represented as real [Boolean JSON values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in asJSON.

Note

By specifying [format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option_format.htm) in the attribute [option](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option.htm) of the ST command [tt:value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm), formats of this type can also be applied to ABAP data objects that are not typed with a domain of this type. In JSON, furthermore, the option attribute also makes it possible to convert ABAP data fields and time stamps to UNIX time stamps (or ticks) in the JSON format for OData.

Executable Example

[asJSON for Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_xsd_abexa.htm)