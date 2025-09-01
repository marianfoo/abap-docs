---
title: "Executable Example"
description: |
  asJSON, General Format(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_hello_json_abexa.htm)
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson_general.htm"
abapFile: "abenabap_asjson_general.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenabap", "asjson", "general"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asJSON - General Format, ABENABAP_ASJSON_GENERAL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

asJSON - General Format

The following lines show the general format of the [canonical JSON representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencanonical_json_represen_glosry.htm "Glossary Entry"). Any line breaks and indents are included for clarification purposes only.

{
  "bn1":...
  "bn2":...
   ...
  "%heap":{...}
}

The top level contains the object { }. The object components with the names bn1, bn2 ... represent the ABAP data objects specified in the addition source of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) as e1 e2 ... or in the addition result as f1 f2 ... The names of the object components bn1, bn2, ... are the names specified there in uppercase.

The values of the object components represent the content of named data object in accordance with the type-dependent mapping described in the following sections. Here, reference variables are always represented as object components whose content is objects that reference the content of referenced anonymous data objects and instances of classes in an optional object component %heap of the top object.

The same rules apply to the names of the object components bn1, bn2 ... as in [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_general.htm) and replacements can be made as defined the table specified there.

Executable Example

[asJSON, General Format](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_hello_json_abexa.htm)