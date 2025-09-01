---
title: "Conversion Between Flat Structures and Single Fields"
description: |
  The following rules apply when converting a flat(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm 'Glossary Entry') structure to a single field and vice versa: -   If a structure is character-like only, it is handled in the conversion like a data object of the type c
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_flat-elementary.htm"
abapFile: "abenconversion_flat-elementary.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenconversion", "flat", "elementary"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm) →  [Conversion Rules for Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_struc.htm) → 

Conversion Between Flat Structures and Single Fields

The following rules apply when converting a [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry") structure to a single field and vice versa:

-   If a structure is character-like only, it is handled in the conversion like a data object of the type c (casting). The single field can have any elementary data type except an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry").

-   If the structure is not character-like only, the single field must have the type c and the structure must begin with a character-like [fragment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_fragment_view.htm) that is at least as long as the single field. The assignment takes place only between this fragment and the single field. The character-like fragment of the structure is handled like a data object of the type c (casting) in the assignment. If the structure is the target field, the remaining character-like fragments are filled with blanks and all other components with the type-dependent [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_glosry.htm "Glossary Entry").

No conversion rule is defined for any other cases, and assignments are not possible.

Note

If a syntax error occurs due to an invalid assignment between flat structures and single fields, the fragment view of the corresponding structure can be displayed when displaying the syntax error in ABAP Editor by choosing the pushbutton with the information icon.

Example

Conversion of the character-like system field sy-abcde to a flat structure of character-like components. After this, each component contains a letter.

TYPES:
  BEGIN OF characters,
    a TYPE c LENGTH 1,
    b TYPE c LENGTH 1,
    c TYPE c LENGTH 1,
    d TYPE c LENGTH 1,
    e TYPE c LENGTH 1,
    f TYPE c LENGTH 1,
    g TYPE c LENGTH 1,
    h TYPE c LENGTH 1,
    i TYPE c LENGTH 1,
    j TYPE c LENGTH 1,
    k TYPE c LENGTH 1,
    l TYPE c LENGTH 1,
    m TYPE c LENGTH 1,
    n TYPE c LENGTH 1,
    o TYPE c LENGTH 1,
    p TYPE c LENGTH 1,
    q TYPE c LENGTH 1,
    r TYPE c LENGTH 1,
    s TYPE c LENGTH 1,
    t TYPE c LENGTH 1,
    u TYPE c LENGTH 1,
    v TYPE c LENGTH 1,
    w TYPE c LENGTH 1,
    x TYPE c LENGTH 1,
    y TYPE c LENGTH 1,
    z TYPE c LENGTH 1,
  END OF characters.
cl\_demo\_output=>display( CONV characters( sy-abcde ) ).