---
title: "Character-Like Source Fields"
description: |
  -   c(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) -   n(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_n.htm) -   string(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_strin
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm"
abapFile: "abencharacter_source_fields.htm"
keywords: ["do", "if", "data", "types", "abencharacter", "source", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Character-Like%20Source%20Fields%2C%20ABENCHARACTER_SOURCE_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Character-Like Source Fields

-   [c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)
-   [n](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_n.htm)
-   [string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_string.htm)

The following special formats must be respected in conversions of character-like data objects to numeric data objects:

-   [Representation of Numeric Values in Character-Like Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_value.htm)
-   [Representation of Time Stamps in Character-Like Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abents_value.htm)

Example

Conversion of the text string 053000 to different target types. The type-compliant formatted output is 53000, 0000053000, 053000, 053000.

DATA str TYPE string VALUE \`053000\`.
TYPES n10 TYPE n LENGTH 10.
cl\_demo\_output=>display(
  |i:           { CONV i( str ) }\\n| &&
  |n LENGTH 10: { CONV n10( str ) }\\n| &&
  |xstring:     { CONV xstring( str ) }\\n| &&
  |t:           { CONV t( str ) }\\n| ).

Continue
[Source Field Type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm)
[Source Field Type n](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_n.htm)
[Source Field Type string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_string.htm)
[Representation of Numeric Values in Character-Like Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_value.htm)
[Representation of Time Stamps in Character-Like Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abents_value.htm)