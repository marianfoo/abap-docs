---
title: "Byte-Like Source Fields"
description: |
  -   x(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm) -   xstring(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_xstring.htm) Example Conversion of the byte field from hexadecimal content FFFF to different target types. The ty
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_source_fields.htm"
abapFile: "abenbyte_source_fields.htm"
keywords: ["do", "if", "data", "types", "abenbyte", "source", "fields"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm) → 

Byte-Like Source Fields

-   [x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm)

-   [xstring](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_xstring.htm)

Example

Conversion of the byte field from hexadecimal content FFFF to different target types. The type-friendly formatted output is 65535, FFFF, FFFF, 01800605. The date of type d is 65535 days since 01.01.0001.

DATA hex TYPE x LENGTH 2 VALUE \`FFFF\`.
cl\_demo\_output=>display(
  |i:       { CONV i( hex ) }\\n| &&
  |string:  { CONV string( hex ) }\\n| &&
  |xstring: { CONV xstring( hex ) }\\n| &&
  |d:       { CONV d( hex ) }\\n| ).

Continue
[Source Field Type x](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_x.htm)
[Source Field Type xstring](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_xstring.htm)