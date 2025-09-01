  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [table\_exp - Table Expressions](javascript:call_link\('abentable_expressions.htm'\)) →  [table\_exp - default](javascript:call_link\('abentable_exp_optional_default.htm'\)) → 

Table Expressions, Default Value

This example demonstrates default values for table expressions.

Source Code

REPORT demo\_tab\_exp\_default.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF line,
        id    TYPE i,
        value TYPE string,
      END OF line,
      itab TYPE SORTED TABLE OF line WITH UNIQUE KEY id.
    DATA(def) = VALUE line( id = 0 value = \`not found\` ).
    DATA(itab) = VALUE itab( ( id = 3 value = \`CCC\` )
                             ( id = 4 value = \`DDD\` )
                             ( id = 5 value = \`EEE\` ) ).
    DATA(result1) = VALUE #( itab\[ id = 1 \] DEFAULT def ).
    cl\_demo\_output=>write( result1 ).
    DATA(result2) = VALUE #( itab\[ id = 1 \]-value DEFAULT def-value ).
    cl\_demo\_output=>write\_data( result2 ).
    DATA(result3) = VALUE #( itab\[ id = 1 \] DEFAULT VALUE #(
                             itab\[ id = 2 \] DEFAULT VALUE #(
                             itab\[ id = 3 \] OPTIONAL ) ) ).
    cl\_demo\_output=>write\_data( result3 ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The result result1 of the first table expression has the row type of the internal table itab. The specified row is not found, which means that the structure def specified after DEFAULT is returned instead.

The result result2 of the second table expression is produced from a chaining with the structure component selector and is a component with the type string. Here, only the corresponding component of the structure def is specified as the default value.

The result result3 of the third table expression again has the row type of the internal table itab. Further table expressions with default values are specified as the default value. In the case shown here, the table expression in the second default value finds a row and returns it. If no searches are successful, an initial rows is returned due to the closing OPTIONAL.