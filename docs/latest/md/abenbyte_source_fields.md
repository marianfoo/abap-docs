---
title: "Byte-Like Source Fields"
description: |
  -   x(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_x.htm) -   xstring(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_xstring.htm) Example Conversion of the byte field from hexadecimal content FFFF to different target typ
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_source_fields.htm"
abapFile: "abenbyte_source_fields.htm"
keywords: ["do", "if", "data", "types", "abenbyte", "source", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Byte-Like%20Source%20Fields%2C%20ABENBYTE_SOURCE_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Byte-Like Source Fields

-   [x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_x.htm)
-   [xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_xstring.htm)

Example

Conversion of the byte field from hexadecimal content FFFF to different target types. The type-compliant formatted output is 65535, FFFF, FFFF, 01800605. The date of type d is 65535 days since 01.01.0001.

DATA hex TYPE x LENGTH 2 VALUE \`FFFF\`.
cl\_demo\_output=>display(
  |i:       { CONV i( hex ) }\\n| &&
  |string:  { CONV string( hex ) }\\n| &&
  |xstring: { CONV xstring( hex ) }\\n| &&
  |d:       { CONV d( hex ) }\\n| ).

Continue
[Source Field Type x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_x.htm)
[Source Field Type xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_xstring.htm)