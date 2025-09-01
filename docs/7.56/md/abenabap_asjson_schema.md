  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - Mapping Additional XML Schema Data Types

In [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry"), apart from the XML schema data types needed to map elementary ABAP types, additional XML schema data types are supported by special [domains](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) called XSD....

asJSON, which is based on asXML, also supports these domains, apart from XSDQNAME. In serializations and deserializations from or to ABAP data objects typed with these domains, the same applies as to [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)). Here, values from the domain XSDBOOLEAN are represented as real [Boolean JSON values](javascript:call_link\('abenjson_oview.htm'\)) in asJSON.

Hint

By specifying [format](javascript:call_link\('abenst_option_format.htm'\)) in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST statement [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), formats of this type can also be applied to ABAP data objects that are not typed with a domain of this type. In JSON, furthermore, the option attribute also makes it possible to convert ABAP data fields and time stamps to UNIX time stamps (ticks) in the JSON format for OData.

Executable Example

[asJSON for Additional XML Schema Data Types](javascript:call_link\('abenabap_json_asjson_xsd_abexa.htm'\))