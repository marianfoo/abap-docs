---
title: "Component Operator, Comparison with FOR Expression"
description: |
  This example compares the component operator(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm) with table comprehensions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm 'Glossary Entry'), Source Code R
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_vs_for_abexa.htm"
abapFile: "abencorresponding_vs_for_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abencorresponding", "for", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding.htm) →  [Assigning Components, Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencorresponding_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Component Operator, Comparison with FOR Expression, ABENCORRESPONDING_VS_FOR_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Component Operator, Comparison with FOR Expression

This example compares the [component operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expr_corresponding.htm) with [table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry"),

Source Code   

REPORT demo\_corresponding\_vs\_for.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        carrier     TYPE spfli-carrid,
        connection  TYPE spfli-connid,
        departure   TYPE spfli-cityfrom,
        destination TYPE spfli-cityto,
      END OF struct.
    CLASS-DATA:
      itab    TYPE HASHED TABLE OF spfli
              WITH UNIQUE KEY carrid connid,
      result1 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      result2 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      result3 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      in      TYPE REF TO if\_demo\_input,
      out     TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(iterations) = 10.
    in->request( CHANGING field = iterations ).
    IF iterations < 1 OR iterations > 1000.
      out->display( 'Enter a number between 1 and 1000' ).
      RETURN.
    ENDIF.
    DO iterations TIMES.
      DATA t1 TYPE i.
      GET RUN TIME FIELD FINAL(t11).
      result1 = CORRESPONDING #(
                 itab MAPPING carrier     = carrid
                              connection  = connid
                              departure   = cityfrom
                              destination = cityto ).
      GET RUN TIME FIELD FINAL(t12).
      t1 += t12 - t11.
      DATA t2 TYPE i.
      GET RUN TIME FIELD FINAL(t21).
      result2 = VALUE #( FOR wa IN itab ( carrier     = wa-carrid
                                          connection  = wa-connid
                                          departure   = wa-cityfrom
                                          destination = wa-cityto ) ).
      GET RUN TIME FIELD FINAL(t22).
      t2 += t22 - t21.
      DATA t3 TYPE i.
      GET RUN TIME FIELD FINAL(t31).
      result3 = VALUE #( FOR wa IN itab (
                           CORRESPONDING #(
                             wa MAPPING carrier     = carrid
                                        connection  = connid
                                        departure   = cityfrom
                                        destination = cityto ) ) ).
      GET RUN TIME FIELD FINAL(t32).
      t3 += t32 - t31.
    ENDDO.
    IF result1 = result2 AND result1 = result3.
      out->write(
       |CORRESPONDING:     {
         CONV decfloat16( t1 / iterations )
              WIDTH = 10 ALIGN = RIGHT } Microseconds\\n| &&
       |FOR:               {
         CONV decfloat16( t2 / iterations )
              WIDTH = 10 ALIGN = RIGHT } Microseconds\\n| &&
       |FOR CORRESPONDING: {
         CONV decfloat16( t3 / iterations )
              WIDTH = 10 ALIGN = RIGHT } Microseconds\\n|
      )->line(
      )->display( result1 ).
    ELSE.
      out->display( \`What?\` ).
    ENDIF.  ENDMETHOD.
  METHOD class\_constructor.
    in  = cl\_demo\_input=>new( ).
    out = cl\_demo\_output=>new( ).
    SELECT \*
           FROM spfli
           INTO TABLE @itab.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The columns of an internal table can be assigned to columns with different names in a different table in three different ways:

-   Constructor expression with component operator CORRESPONDING and mapping rule
-   Explicit assignment of the individual components behind a FOR expression of a table comprehension.
-   FOR expression with evaluation of a constructor expression with component operator for each line.

Each method provides the same results. The component operator is quicker than the table comprehension when there are more than approximately 10 iterations. Using the component operator for each line is always the slowest solution.