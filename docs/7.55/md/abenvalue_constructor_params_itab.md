  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_value.htm) → 

VALUE, Internal Tables

Syntax

... VALUE dtype*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm)*\]*
                   *\[*BASE itab*\]*
                   *\[*[FOR for\_exp1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor.htm)
                    [FOR for\_exp2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor.htm)
                    ... *\]*
                   ( [line\_spec1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) )
                   ( [line\_spec2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) )
                     ... ) ...

Additions:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for such a type, the table lines of the constructed table are created as follows:

-   The first option is to list a LET expression [let\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm) to define local helper fields whose values can be used to construct the table lines.

-   An optional start value for the content can then be specified for the content of the internal table after BASE (see below).

-   One or more optional consecutive [iteration expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeniteration_expression_glosry.htm "Glossary Entry") can then be specified using [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor.htm) (see below).

-   The table lines are then constructed in one or more sets of internal parentheses by specifying [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm). Each set of inner parentheses constructs one or more lines in accordance with the information in line\_spec and inserts them into the created internal table in accordance with the rules for the statement [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm) ... [INTO TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab_position.htm), with one difference: Any conflicts with an existing unique primary table key raise an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY. The object is inserted in the order of the parentheses.

The constructed lines must meet the requirements of the statement [INSERT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") where the lines are only appended anyway, the value can be shorter than the line length for line types c and x and then padded on the right with blanks or hexadecimal 0.

If the VALUE operator is used as the source of an assignment to an internal table, it is first initialized after the evaluation of a possible [LET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm) expression or is assigned the content of itab. Then, [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) data is then evaluated and inserted directly into the target table.

Hints

-   In assignments of constructor expressions to an internal table, its existing lines cannot be used directly as an argument in [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm). This is because this table is deleted before line\_spec is evaluated or overwritten by the content of itab. If the entire internal table or lines from the left side are needed on the right side, however, they can be saved in local helper variables using a [LET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm) expression, since this expression is evaluated first.

-   The operand type for [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) in the inner parentheses is the line type of the table type specified using dtype or #, which means it is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using #.
    

Example

Construction of an internal table with a structured line type and filling it with two lines. The structures are filled with values component by component.

TYPES: BEGIN OF t\_struct,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_struct,
       t\_itab TYPE TABLE OF t\_struct WITH EMPTY KEY.
DATA itab TYPE t\_itab.
itab = VALUE #( ( col1 = 1 col2 = 2 )
                ( col1 = 3 col2 = 4 ) ).

Example

Construction of an internal table with a tabular line type and filling it with two lines. The first line is assigned a table that is already filled. The second line is constructed using VALUE.

TYPES: t\_itab1 TYPE TABLE OF i       WITH EMPTY KEY,
       t\_itab2 TYPE TABLE OF t\_itab1 WITH EMPTY KEY.
DATA itab1 TYPE t\_itab1.
DATA itab2 TYPE t\_itab2.
itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
itab2 = VALUE #( ( itab1 )
                 ( VALUE t\_itab1( ( 4 ) ( 5 ) ( 6 ) ) ) ).

Examples

See also the examples for the instance operator [NEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennew_constructor_params_itab.htm).

Executable Examples

-   [VALUE - Operator for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_itab_abexa.htm)

-   [VALUE Operator with LET for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_itab_let_abexa.htm)
    

Addition 1

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the specification of lines to be inserted, which is a [functional operand position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The line type of itab must be convertible to the line type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual lines are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression if it is known.

Hints

-   Without the addition BASE, the content of tables can only be reconstructed using the value operator, but not extended. If the same table is specified after BASE to which the constructor expression is assigned, further lines can be inserted in this table.

-   If the target table is specified as itab after BASE in an assignment to an existing internal table, there is no assignment before [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) is evaluated, but the target table simply keeps its value instead.
    

Example

Use of BASE. The table type of base1 or base2 is transferred in the construction of tab1 and tab2. This is not possible in the construction of tab3 since the line type of base2 is not structured and hence does not match the specification of individual components in the following parentheses. The type itab2 is specified explicitly for tab3. This is possible since the line type of base2 can be converted into this line type. Since sorted tables are constructed, the lines in the results are also sorted.

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

Use of BASE to append lines to existing lines in an internal table.

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

Use of BASE to append lines to an internal table in a loop. After the output, it is shown how the same function can be applied using an iteration expression with [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_conditional.htm).

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

The specification of one or more consecutive [iteration expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeniteration_expression_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor.htm), this means that the lines constructed in [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm) for each iteration of the last FOR expression are inserted into the target table. When constructing table lines in [line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm), the visible local work areas and field symbols of the iteration expressions can be used to construct the table lines.

-   If [conditional iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_conditional.htm) are used, the new table lines are created in freely definable iteration steps.

-   If [table iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry"), since new table lines are constructed from the lines of existing internal tables.

Hints

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also referred to as "list comprehension".

-   [Table filtering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_filtering_glosry.htm "Glossary Entry") can be achieved more efficiently using the [filter operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_filter.htm).

-   Conditional iterations and table comprehensions are also possible with [FOR expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_for.htm) for [mesh paths](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmesh_path_glosry.htm "Glossary Entry").

-   For tasks that can be solved using both table comprehensions and [special assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) for components, in particular the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expr_corresponding.htm), it is best to use assignments (see the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding_vs_for_abexa.htm)).

-   If the VALUE operator is used, it should be noted that assignments to internal tables are also initialized or assigned the content of itab after BASE even in the case of table comprehensions after the evaluation of a [LET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaplet.htm) expressions and the target table is then used directly. The original table can therefore not be used directly in the FOR expressions, unless it is assigned to a helper variable after LET.

Example

Construction of a temporary internal table with an elementary line type and filling it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
cl\_demo\_output=>display(
  VALUE t\_itab( FOR i = 1 UNTIL i > 10
                ( ipow( base = i exp = 2 ) ) ) ).

Executable Examples

-   [Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehensions_abexas.htm)

Continue
[VALUE, line\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_lspc.htm)
![Example](exa.gif "Example") [VALUE, Operator for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_itab_abexa.htm)
![Example](exa.gif "Example") [VALUE, Operator with LET for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_itab_let_abexa.htm)