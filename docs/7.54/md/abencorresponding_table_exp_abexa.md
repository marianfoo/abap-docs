  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding.htm) →  [Assigning Components: Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencorresponding_abexas.htm) → 

Component Operator for Table Expression

This example demonstrates the [component operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expr_corresponding.htm) for a table expression.

Source Code

REPORT demo\_corresponding\_table\_exp.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      itab TYPE HASHED TABLE OF spfli WITH UNIQUE KEY carrid connid,
      BEGIN OF struct,
        carrid   TYPE spfli-carrid,
        connid   TYPE spfli-connid,
        cityfrom TYPE spfli-cityfrom,
        cityto   TYPE spfli-cityto,
      END OF struct,
      carrid TYPE spfli-carrid VALUE 'LH',
      connid TYPE spfli-connid VALUE '0400'.
    CLASS-METHODS
      input.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    input( ).
    TRY.
        struct =
          CORRESPONDING #( itab\[ carrid = carrid connid = connid \] ).
        cl\_demo\_output=>display( struct ).
      CATCH cx\_sy\_itab\_line\_not\_found.
        cl\_demo\_output=>display( 'Nothing found' ).
    ENDTRY.  ENDMETHOD.
  METHOD class\_constructor.
    SELECT \*
           FROM spfli
           INTO TABLE @itab.
  ENDMETHOD.
  METHOD input.
    cl\_demo\_input=>add\_field( CHANGING field = carrid ).
    cl\_demo\_input=>add\_field( CHANGING field = connid ).
    cl\_demo\_input=>request( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows a [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expressions.htm) that reads a row of an internal table (as the parameter of a constructor expression) with the component operator CORRESPONDING. After the assignment is complete, the components of the target structure struct contain the values of the corresponding column of the row read by the table expression.