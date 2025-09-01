  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Comparison Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) → 

rel\_exp - Comparison of Structures

It is possible to compare structures with structures and to compare structures with elementary fields:

-   [Compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatibility.htm) structures are compared on a component-by-component basis and any nested structures are resolved recursively. Two structures are equal if the content of their components matches. If two structures are not equal, the first unequal component pair determines the result of the comparison.

-   It is possible to compare incompatible structures and structures with elementary fields provided that the structures concerned are [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry").

-   Comparisons between two flat structures require that their [fragment views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") match for the length of the shorter structure. Before the comparison, the shorter structure is padded to the length of the longer structure. Here, all character-like components are padded with blanks and all other components with their type-dependent [initial value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_glosry.htm "Glossary Entry"). The comparison is then performed on a section-by-section basis according to the fragment view.

-   Comparisons between a flat structure and an elementary field are subject to the following rules:
    If the flat structure is character-like, it is handled in the comparison like an elementary field with the type c.
    If the flat structure is not just character-like, the elementary field must have the type c and the first fragment of the [structure fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must be character-like and at least as long as the elementary field. If the elementary field is shorter than the structure, it is expanded to the length of the structure before the comparison is started and then handled implicitly like a structure. The character-like parts of the extension are padded with blanks and all other components are padded with their type-dependent initial value.

Example

The following comparison is true because the structure is handled like a field of type c with length 8.

TYPES:
  BEGIN OF struc,
    year  TYPE c LENGTH 4,
    month TYPE c LENGTH 2,
    day   TYPE c LENGTH 2,
  END OF struc.
DATA(date) = sy-datlo.
DATA(struc) = VALUE struc( year  = date(4)
                           month = date+4(2)
                           day   = date+6(2) ).
ASSERT date = struc.