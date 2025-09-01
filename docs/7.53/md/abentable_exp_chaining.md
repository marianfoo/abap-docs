  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [table\_exp - Table Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) → 

table\_exp - Chainings

[Table expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) can be chained with the structure component selector \-, with other table expressions, and with the object component selector \->.

-   [Chainings with the Structure Component Selector](#@@ITOC@@ABENTABLE_EXP_CHAINING_1)

-   [Chainings with Table Expressions](#@@ITOC@@ABENTABLE_EXP_CHAINING_2)

-   [Chainings with the Object Component Selector](#@@ITOC@@ABENTABLE_EXP_CHAINING_3)

If the constructor operator VALUE or REF is specified before a chaining to [control the result](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_result.htm), only the final result is affected. Any intermediate results are always temporary field symbols and the corresponding performance notes should be read.

Note

Chainings of table expressions with functional method calls (namely specifying the internal table as a functional method call meth( ... )\[ ... \] or meth( ... )-comp\[ ... \] and accessing the internal table using a chained attribute access meth( ... )->itab\[ ... \]) are not yet possible. Table expressions cannot currently be placed on the right of a method call in [method chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_chaining_glosry.htm "Glossary Entry").

Chainings with the Structure Component Selector

A table expression can be chained as follows using the structure component selector \-:

-   If the result of a table expression itab\[ ... \] is a structure, the structure component selector can be used to read each component comp of the structure:

... itab\[ ... \]-comp ...

If comp has a suitable type, a [specified offset/length](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") [+off(len)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) can be appended, except when the chaining is used as a [memory area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_writable_exp.htm) of the statement ASSIGN or as an argument of the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_result.htm).

-   If a structure struct has a table-like component comp, it can be used as the name of the internal table of a table expression:

... struct-comp\[ ... \] ...

Both of these alternatives can be combined, enabling a structured component selector to be located directly on the left and right of a table expression.

Note

If the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm) is specified in front of a chaining whose result is a component of a structured table row, it creates a reference to this component.

Example

Reads the first column of the second row of the table-like second component of the first row of the internal table itab. The result is 4.

TYPES: BEGIN OF struct1,
         col1 TYPE i,
         col2 TYPE i,
       END OF struct1,
       tab1 TYPE TABLE OF struct1 WITH EMPTY KEY,
       BEGIN OF struct2,
         col1 TYPE i,
         col2 TYPE tab1,
       END OF struct2,
       tab2 TYPE TABLE OF struct2 WITH EMPTY KEY.
DATA(itab) =
  VALUE tab2(
    ( VALUE struct2( col1 = 1
                     col2 = VALUE tab1(
                              ( VALUE struct1( col1 = 2
                                               col2 = 3 ) )
                              ( VALUE struct1( col1 = 4
                                               col2 = 5 ) ) ) ) )
    ( VALUE struct2( col1 = 6
                     col2 = VALUE tab1(
                              ( VALUE struct1( col1 = 7
                                               col2 = 8 ) )
                              ( VALUE struct1( col1 = 9
                                               col2 = 10 ) ) ) ) ) ).
DATA(num) = itab\[ 1 \]-col2\[ 2 \]-col1.

Executable Example

[Table Expressions, Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining_abexa.htm)

Chainings with Table Expressions

If the result of a table expression itab\[ ... \] is an internal table, it can be used as the name of the internal table of a table expression:

... itab\[ ... \]\[ ... \] ...

The following can apply to an expression of this type:

-   It can itself be continued with square brackets \[ ... \], if its result is again table-like.

-   It can be combined with the information from structure component selectors above.

Example

In an internal table nested twice, reads the first row of the innermost table in the second row of the center table in the second row of the outermost table. The result is 7.

TYPES: tab1 TYPE TABLE OF i    WITH EMPTY KEY,
       tab2 TYPE TABLE OF tab1 WITH EMPTY KEY,
       tab3 TYPE TABLE OF tab2 WITH EMPTY KEY.
DATA(itab) = VALUE tab3(
               ( VALUE tab2(
                   ( VALUE tab1(
                       ( 1 )
                       ( 2 ) ) )
                   ( VALUE tab1(
                       ( 3 )
                       ( 4 ) ) ) ) )
               ( VALUE tab2(
                   ( VALUE tab1(
                       ( 5 )
                       ( 6 ) ) )
                   ( VALUE tab1(
                       ( 7 )
                       ( 8 ) ) ) ) ) ).
DATA(num) = itab\[ 2 \]\[ 2 \]\[ 1 \].

Example

Direct chaining of table expressions and chaining with the structure component selector in a single expression. Reads the structure component of the innermost nested table with the value 13.

TYPES: BEGIN OF struct1,
         col1 TYPE i,
         col2 TYPE i,
       END OF struct1,
       tab1 TYPE TABLE OF struct1 WITH EMPTY KEY,
       BEGIN OF struct2,
         col1 TYPE i,
         col2 TYPE TABLE OF tab1 WITH EMPTY KEY,
       END OF struct2,
       tab2 TYPE TABLE OF struct2 WITH EMPTY KEY.
DATA(itab) =
  VALUE tab2(
    ( VALUE struct2(
              col1 = 1
              col2 = VALUE #(
                       ( VALUE tab1(
                           ( VALUE struct1(
                                     col1 = 2
                                     col2 = 3 ) )
                           ( VALUE struct1(
                                     col1 = 4
                                     col2 = 5 ) ) ) )
                       ( VALUE tab1(
                           ( VALUE struct1(
                                     col1 = 6
                                     col2 = 7 ) )
                           ( VALUE struct1(
                                     col1 = 8
                                     col2 = 9 ) ) ) ) ) ) )
    ( VALUE struct2(
              col1 = 10
              col2 = VALUE #(
                       ( VALUE tab1(
                           ( VALUE struct1(
                                     col1 = 11
                                     col2 = 12 ) )
                           ( VALUE struct1(
                                     col1 = 13
                                     col2 = 14 ) ) ) )
                       ( VALUE tab1(
                          ( VALUE struct1(
                                    col1 = 15
                                    col2 = 16 ) )
                          ( VALUE struct1(
                                    col1 = 17
                                    col2 = 18 ) ) ) ) ) ) ) ).
DATA(num) = itab\[ 2 \]-col2\[ 1 \]\[ 2 \]-col1.

Chainings with the Object Component Selector

If the result of a table expression or one of the preceding chainings has a reference type, these chainings can be placed directly in front of the [object component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_component_select_glosry.htm "Glossary Entry") to access the components of the referenced object:

... itab\[ ... \]->comp ...

... itab\[ ... \]-comp->comp ...

... struct-comp\[ ... \]->comp ...

... itab\[ ... \]\[ ... \]->comp ...

A component addressed in this way can, depending on its design, be used in all suitable operand positions and notably in further chainings.

Notes

-   More specifically, the [dereferencing operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendereferencing_operat_glosry.htm "Glossary Entry") \->\* can be specified after table expressions.

-   An [instance method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_method_glosry.htm "Glossary Entry") call can be a [standalone call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm) or a [functional method call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_functional.htm).

Example

Dereferences a row of an internal table of data reference variables and accesses a single component.

DATA itab TYPE TABLE OF REF TO scarr WITH EMPTY KEY.
itab = VALUE #( ( NEW scarr( carrid = 'XX' carrname = 'YYYY' ) ) ).
cl\_demo\_output=>new(
  )->write\_data( itab\[ 1 \]->\*
  )->write\_data( itab\[ 1 \]->carrid
  )->write\_data( itab\[ 1 \]->carrname )->display( ).

Example

Fills an internal table of reference variables with object references and accesses attributes and methods of the objects using table expressions in front of the object component selector.

CLASS number DEFINITION.
  PUBLIC SECTION.
    DATA value TYPE i.
    METHODS:
      get RETURNING VALUE(r) TYPE i,
      constructor IMPORTING n TYPE i.
ENDCLASS.
CLASS number IMPLEMENTATION.
  METHOD get.
    r = value.
  ENDMETHOD.
  METHOD constructor.
    value = n.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  TYPES itab TYPE TABLE OF REF TO number WITH EMPTY KEY.
  DATA(itab) = VALUE itab( FOR j = 1 UNTIL j > 2
                           ( NEW number( j ) ) ).
  data(n1) = itab\[ 1 \]->value.
  data(n2) = itab\[ 2 \]->get( ).

Continue
![Example](exa.gif "Example") [Table Expressions, Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining_abexa.htm)