---
title: "Component Operator, Handling Duplicates"
description: |
  This example demonstrates the component operator(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_corresponding.htm) with the addition DISCARDING DUPLICATES(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_dupl.htm). Source Code R
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_duplicates_abexa.htm"
abapFile: "abencorresponding_duplicates_abexa.htm"
keywords: ["select", "insert", "loop", "do", "method", "class", "data", "types", "abencorresponding", "duplicates", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm) →  [Assigning Components: Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_abexas.htm) → 

Component Operator, Handling Duplicates

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_corresponding.htm) with the addition [DISCARDING DUPLICATES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_dupl.htm).

Source Code

REPORT demo\_corresponding\_duplicates.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        a1 TYPE i,
        a2 TYPE i,
      END OF line,
      ntab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY,
      ntab2 TYPE SORTED   TABLE OF  line WITH UNIQUE KEY a1,
      BEGIN OF line1,
        x1 TYPE i,
        x2 TYPE ntab1,
      END OF line1,
      BEGIN OF line2,
        y1 TYPE i,
        y2 TYPE ntab2,
      END OF line2,
      itab1 TYPE STANDARD TABLE OF line1 WITH EMPTY KEY,
      itab2 TYPE SORTED   TABLE OF line2 WITH UNIQUE KEY y1.
    DATA(itab1) =
      VALUE itab1( ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 )
                                          ( a1 = 3 a2 = 4 ) ) )
                   ( x1 = 2 x2 = VALUE #( ( a1 = 1 a2 = 2 )
                                          ( a1 = 1 a2 = 4 ) ) )
                   ( x1 = 1 x2 = VALUE #( ( a1 = 1 a2 = 2 )
                                          ( a1 = 3 a2 = 4 ) ) ) ).
    DATA(itab2) =
      CORRESPONDING itab2( itab1 DISCARDING DUPLICATES
                           MAPPING y1 = x1
                                   y2 = x2 DISCARDING DUPLICATES ).
    DATA(out) = cl\_demo\_output=>new( ).
    LOOP AT itab2 INTO DATA(wa).
      out->write( wa-y1
        )->write( wa-y2
        )->line( ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The addition DISCARDING DUPLICATES is used twice to ignore duplicate rows:

-   DISCARDING DUPLICATES after itab1 prevents an exception when inserting the third row of itab1 in itab2.

-   In the mapping rule, DISCARDING DUPLICATES prevents the exception when the second row of the tabular component x2 is inserted when inserting the second row of itab1 in itab2.