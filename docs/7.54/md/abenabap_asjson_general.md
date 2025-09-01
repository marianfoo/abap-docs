  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - General Format

The following lines show the general format of the [canonical JSON representation](javascript:call_link\('abencanonical_json_represen_glosry.htm'\) "Glossary Entry"). Any line breaks and indents are included for ease or reading only.

{
  "bn1":...
  "bn2":...
   ...
  "%heap":{...}
}

The top level contains the object { }. The object components with the names bn1, bn2 ... represent the ABAP data objects specified in the addition source of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) as e1 e2 ... or in the addition result as f1 f2 ... The names of the object components bn1, bn2, ... are the names specified there in uppercase.

The values of the object components represent the content of named data object in accordance with the type-dependent mapping described in the following sections. Here, reference variables are always represented as object components whose content is objects that reference the content of referenced anonymous data objects and instances of classes in an optional object component %heap of the top object.

The same rules apply to the names of the object components bn1, bn2 ... as in [asXML](javascript:call_link\('abenabap_xslt_asxml_general.htm'\)) and replacements can be made as defined the table specified there.

Executable Example

[asJSON, General Format](javascript:call_link\('abenabap_hello_json_abexa.htm'\))