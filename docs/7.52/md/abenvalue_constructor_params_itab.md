  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [VALUE - Value Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) → 

VALUE - Internal Tables

Syntax

... VALUE dtype*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]*
                   *\[*BASE itab*\]*
                   *\[*[FOR for\_exp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm)
                    [FOR for\_exp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm)
                    ... *\]*
                   ( [line\_spec1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) )
                   ( [line\_spec2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) )
                     ... ) ...

Extras:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for a type like this, the table rows of the constructed table are created as follows:

-   Firstly, an optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) can be specified to define local auxiliary fields whose values can be used to construct the table rows.

-   An optional start value for the content can be specified for the content of the internal table after BASE (see below).

-   One more optional consecutive [iteration expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expression_glosry.htm "Glossary Entry") can then be specified using [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm) (see below).

-   The table rows are then constructed in one or more sets of internal parentheses by specifying [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm). Each set of inner parentheses constructs one or more rows in accordance with the information in line\_spec and inserts them into the new internal table in accordance with the rules for the statement [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) ... [INTO TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab_position.htm). The rows are inserted in the order of the parentheses.

The constructed rows must meet the requirements of the statement [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) for inserting work areas using table keys and therefore be compatible with the row type. There is one exception to this: When constructing a [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry"), where the rows are only appended, the value can be shorter than the row length (for row types c and x), in which case it is padded on the right with blanks or hexadecimal 0.

If the VALUE operator is used as the source of an assignment to an internal table, this table is first initialized after the evaluation of the [LET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) expression (if available) or is assigned the content of itab. The [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) data is then evaluated and inserted directly in the target table.

Notes

-   In assignments of constructor expressions to an internal table, its existing rows cannot be used directly as an argument in [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm). This is because this table is deleted before line\_spec is evaluated or overwritten by the content of itab. If the entire internal table or rows from the left side are needed on the right side, however, they can be saved in local helper variables using a [LET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) expression, since this expression is evaluated first.

-   The operand type for [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) in the inner parentheses is the row type of the table type specified using dtype or #, which means it is always uniquely identifiable. Constructor expressions in this place can therefore always derive the required data type using #.
    

Example

Constructs an internal table with a structured row type and fills it with two rows. The structures are filled with values component by component.

TYPES: BEGIN OF t\_struct,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_struct,
       t\_itab TYPE TABLE OF t\_struct WITH EMPTY KEY.
DATA itab TYPE t\_itab.
itab = VALUE #( ( col1 = 1 col2 = 2 )
                ( col1 = 3 col2 = 4 ) ).

Example

Constructs an internal table with a tabular row type and fills it with two rows. The first row is assigned a table that is already filled. The second row is constructed using VALUE.

TYPES: t\_itab1 TYPE TABLE OF i       WITH EMPTY KEY,
       t\_itab2 TYPE TABLE OF t\_itab1 WITH EMPTY KEY.
DATA itab1 TYPE t\_itab1.
DATA itab2 TYPE t\_itab2.
itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
itab2 = VALUE #( ( itab1 )
                 ( VALUE t\_itab1( ( 4 ) ( 5 ) ( 6 ) ) ) ).

Examples

See also the examples for the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm).

Executable Examples

-   [VALUE Operator for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_itab_abexa.htm)

-   [VALUE Operator with LET for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_itab_let_abexa.htm)
    

Addition 1

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the lines that you want to insert. This is a [functional operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The row type of itab must be convertible to the row type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual rows are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression (if identifiable).

Notes

-   If the addition BASE is not specified, the content of tables can only be reconstructed using the value operator and no new content can be added. If the same table is specified after BASE to which the constructor expression is assigned, further rows can be inserted in this table.

-   If the target table is specified as itab after BASE in an assignment to an existing internal table, no assignment takes place before [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) is evaluated, and the target table just keeps its value instead.
    

Example

Uses BASE. The table type of base1 or base2 is applied in the construction of tab1 and tab2. This is not possible in the construction of tab3 since the row type of base2 is not structured and hence not suitable for specifying individual components in the parentheses that follow. The type itab2 is specified explicitly for tab3. This is possible since the row type of base2 can be converted into this row type. Sorted tables are constructed, which means that the rows in the results are also sorted.

TYPES:
  itab1 TYPE SORTED TABLE OF string WITH UNIQUE KEY table\_line,
  BEGIN OF struct,
    col1 TYPE c LENGTH 2,
    col2 TYPE c LENGTH 2,
    col3 TYPE c LENGTH 2,
  END OF struct,
  itab2 TYPE SORTED TABLE OF struct WITH UNIQUE KEY col1 col2 col3.
DATA(base1) = VALUE itab1(
                ( \`x1y1z1\` )
                ( \`x2y2z2\` )
                ( \`x3y3z3\` ) ).
DATA(base2) = VALUE itab2(
                ( col1 = 'x1' col2 = 'y1' col3 = 'z1' )
                ( col1 = 'x2' col2 = 'y2' col3 = 'z2' )
                ( col1 = 'x3' col2 = 'y3' col3 = 'z3' ) ).
DATA(tab1) = VALUE #( BASE base1
               ( \`A1B1B1\` )
               ( \`A2B2B2\` ) ).
DATA(tab2)  = VALUE #(
                BASE base2
                ( col1 = 'A1' col2 = 'B1' col3 = 'C1' )
                ( col1 = 'A2' col2 = 'B2' col3 = 'C2' ) ).
DATA(tab3) = VALUE itab2( BASE base1
               ( col1 = 'A1' col2 = 'B1' col3 = 'C1' )
               ( col1 = 'A2' col2 = 'B2' col3 = 'C2' ) ).
cl\_demo\_output=>write(   tab1  ).
cl\_demo\_output=>write(   tab2 ).
cl\_demo\_output=>display( tab3 ).

Example

Uses BASE to append rows to existing rows in an internal table.

TYPES itab TYPE TABLE OF string WITH EMPTY KEY.
DATA(itab) =
  VALUE itab(
    ( \`a\` ) ( \`b\` ) ( \`c\` ) ).
...
itab =
  VALUE #(
    BASE itab
    ( \`d\` ) ( \`e\` ) ( \`f\` ) ).
cl\_demo\_output=>display( itab ).

Example

Uses BASE to append rows to an internal table in a loop. After the output, it possible to see how the same function can be applied using an iteration expression with [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm).

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DO 10 TIMES.
  itab = VALUE #( BASE itab ( ipow( base = sy-index exp = 2 ) ) ).
ENDDO.
cl\_demo\_output=>display( itab ).
DATA jtab LIKE itab.
jtab = VALUE #( FOR j = 1 UNTIL j > 10
                ( ipow( base = j exp = 2 ) ) ).
ASSERT jtab = itab.

Addition 2

... FOR for\_exp

Effect

If one or more [iteration expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expression_glosry.htm "Glossary Entry") are specified consecutively using [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm), this means that the rows constructed in [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm) for every iteration of the last FOR expression are inserted into the target table. When constructing table rows in [line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm), the visible local work areas and field symbols of the iteration expressions can also be used.

-   If [conditional iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm) are used, the new table rows created in freely defined iteration steps.

-   If [table iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm) are used, the rows of existing internal tables are evaluated. This is known as [table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry"), since new table rows can be constructed from the rows of existing internal tables.

Notes

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also known as "list comprehension".

-   [Table filtering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_filtering_glosry.htm "Glossary Entry") can be implemented more efficiently using the [filter operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_filter.htm).

-   Conditional iterations and table comprehensions are also possible with [FOR expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_for.htm) for [mesh paths](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmesh_path_glosry.htm "Glossary Entry").

-   For tasks that can be solved using both table comprehensions and [special assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding.htm) for components (in particular the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expr_corresponding.htm)), it is best to use assignments (see the [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencorresponding_vs_for_abexa.htm)).

-   If the VALUE operator is used, it should be noted that assignments to internal tables are also initialized (or given the content of itab after BASE) even in the case of table comprehensions after the evaluation of a [LET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) expressions. The target table is then used directly. The original table can therefore not be used directly in the FOR expressions (unless it is assigned to a helper variable after LET).

Example

Constructs a temporary internal table with an elementary row type and fills it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
cl\_demo\_output=>display(
  VALUE t\_itab( FOR i = 1 UNTIL i > 10
                ( ipow( base = i exp = 2 ) ) ) ).

Executable Examples

-   [Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehensions_abexas.htm)

Continue
[VALUE - line\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_lspc.htm)
![Example](exa.gif "Example") [VALUE - Operator for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_itab_abexa.htm)
![Example](exa.gif "Example") [VALUE - Operator with LET for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_itab_let_abexa.htm)