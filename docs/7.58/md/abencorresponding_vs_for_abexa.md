  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [Assigning Components, Examples](javascript:call_link\('abencorresponding_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Component%20Operator%2C%20Comparison%20with%20FOR%20Expression%2C%20ABENCORRESPONDING_VS_FOR_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

Component Operator, Comparison with FOR Expression

This example compares the [component operator](javascript:call_link\('abenconstructor_expr_corresponding.htm'\)) with [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"),

Source Code   

\* Public class definition
CLASS cl\_demo\_crrspndng\_vs\_for DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
  PRIVATE SECTION.
    TYPES:
      BEGIN OF struct,
        carrier     TYPE spfli-carrid,
        connection  TYPE spfli-connid,
        departure   TYPE spfli-cityfrom,
        destination TYPE spfli-cityto,
      END OF struct.
    DATA:
      itab    TYPE HASHED TABLE OF spfli
              WITH UNIQUE KEY carrid connid,
      result1 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      result2 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      result3 TYPE HASHED TABLE OF struct
              WITH UNIQUE KEY carrier connection,
      in      TYPE REF TO if\_demo\_input.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_crrspndng\_vs\_for IMPLEMENTATION.
  METHOD main.
    DATA(iterations) = 10.
    in->request( CHANGING field = iterations ).
    IF iterations < 1 OR iterations > 1000.
      out->write( 'Enter a number between 1 and 1000' ).
      RETURN.
    ENDIF.
    FINAL(timer) = cl\_abap\_runtime=>create\_hr\_timer( ).
    DO iterations TIMES.
      DATA t1 TYPE i.
      FINAL(t11) = timer->get\_runtime( ).
      result1 = CORRESPONDING #(
                 itab MAPPING carrier     = carrid
                              connection  = connid
                              departure   = cityfrom
                              destination = cityto ).
      FINAL(t12) = timer->get\_runtime( ).
      t1 += t12 - t11.
      DATA t2 TYPE i.
      FINAL(t21) = timer->get\_runtime( ).
      result2 = VALUE #( FOR wa IN itab ( carrier     = wa-carrid
                                          connection  = wa-connid
                                          departure   = wa-cityfrom
                                          destination = wa-cityto ) ).
      FINAL(t22) = timer->get\_runtime( ).
      t2 += t22 - t21.
      DATA t3 TYPE i.
      FINAL(t31) = timer->get\_runtime( ).
      result3 = VALUE #( FOR wa IN itab (
                           CORRESPONDING #(
                             wa MAPPING carrier     = carrid
                                        connection  = connid
                                        departure   = cityfrom
                                        destination = cityto ) ) ).
      FINAL(t32) = timer->get\_runtime( ).
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
      )->write( result1 ).
    ELSE.
      out->write( \`What?\` ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    in  = cl\_demo\_input=>new( ).
    SELECT \*
           FROM spfli
           INTO TABLE @itab.
  ENDMETHOD.
ENDCLASS.

Description   

The columns of an internal table can be assigned to columns with different names in a different table in three different ways:

-   Constructor expression with component operator CORRESPONDING and mapping rule
-   Explicit assignment of the individual components behind a FOR expression of a table comprehension.
-   FOR expression with evaluation of a constructor expression with component operator for each line.

Each method provides the same results. The component operator is quicker than the table comprehension when there are more than approximately 10 iterations. Using the component operator for each line is always the slowest solution.