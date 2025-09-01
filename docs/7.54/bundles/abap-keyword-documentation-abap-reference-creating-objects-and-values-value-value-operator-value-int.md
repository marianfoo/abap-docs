# ABAP Keyword Documentation / ABAP − Reference / Creating Objects and Values / VALUE - Value Operator / VALUE - Internal Tables

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenvalue_constructor_params_itab.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm)
- [abenvalue_constructor_params_lspc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_lspc.htm)
- [abenvalue_itab_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_abexa.htm)
- [abenvalue_itab_let_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_let_abexa.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.940Z

---

### abenvalue_constructor_params_itab.htm

> **📖 Official SAP Documentation**: [abenvalue_constructor_params_itab.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) → 

VALUE - Internal Tables

Syntax

... VALUE dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                   *\[*BASE itab*\]*
                   *\[*[FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
                    [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
                    ... *\]*
                   ( [line\_spec1](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) )
                   ( [line\_spec2](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) )
                     ... ) ...

Extras:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for a type like this, the table rows of the constructed table are created as follows:

-   Firstly, an optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified to define local auxiliary fields whose values can be used to construct the table rows.

-   An optional start value for the content can be specified for the content of the internal table after BASE (see below).

-   One more optional consecutive [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") can then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) (see below).

-   The table rows are then constructed in one or more sets of internal parentheses by specifying [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)). Each set of inner parentheses constructs one or more rows in accordance with the information in line\_spec and inserts them into the new internal table in accordance with the rules for the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)), with one difference: Any conflicts with an existing unique primary table key raise an exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY. The object is inserted in the order of the parentheses.

The constructed rows must meet the requirements of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) for inserting work areas using table keys and therefore be compatible with the row type. There is one exception to this: When constructing a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), where the rows are only appended, the value can be shorter than the row length (for row types c and x), in which case it is padded on the right with blanks or hexadecimal 0.

If the VALUE operator is used as the source of an assignment to an internal table, this table is first initialized after the evaluation of the [LET](javascript:call_link\('abaplet.htm'\)) expression (if available) or is assigned the content of itab. The [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) data is then evaluated and inserted directly in the target table.

Notes

-   In assignments of constructor expressions to an internal table, its existing rows cannot be used directly as an argument in [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)). This is because this table is deleted before line\_spec is evaluated or overwritten by the content of itab. If the entire internal table or rows from the left side are needed on the right side, however, they can be saved in local helper variables using a [LET](javascript:call_link\('abaplet.htm'\)) expression, since this expression is evaluated first.

-   The operand type for [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) in the inner parentheses is the row type of the table type specified using dtype or #, which means it is always uniquely identifiable. Constructor expressions in this place can therefore always derive the required data type using #.
    

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

TYPES: t\_itab1 TYPE TABLE OF i        WITH EMPTY KEY,
       t\_itab2 TYPE TABLE OF t\_itab1 WITH EMPTY KEY.
DATA itab1 TYPE t\_itab1.
DATA itab2 TYPE t\_itab2.
itab1 = VALUE #( ( 1 ) ( 2 ) ( 3 ) ).
itab2 = VALUE #( ( itab1 )
                 ( VALUE t\_itab1( ( 4 ) ( 5 ) ( 6 ) ) ) ).

Examples

See also the examples for the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)).

Executable Examples

-   [VALUE - Operator for Internal Tables](javascript:call_link\('abenvalue_itab_abexa.htm'\))

-   [VALUE Operator with LET for Internal Tables](javascript:call_link\('abenvalue_itab_let_abexa.htm'\))
    

Addition 1

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the lines that you want to insert. This is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The row type of itab must be convertible to the row type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual rows are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression (if identifiable).

Notes

-   If the addition BASE is not specified, the content of tables can only be reconstructed using the value operator and no new content can be added. If the same table is specified after BASE to which the constructor expression is assigned, further rows can be inserted in this table.

-   If the target table is specified as itab after BASE in an assignment to an existing internal table, no assignment takes place before [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) is evaluated, and the target table just keeps its value instead.
    

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

Uses BASE to append rows to an internal table in a loop. After the output, it possible to see how the same function can be applied using an iteration expression with [FOR](javascript:call_link\('abenfor_conditional.htm'\)).

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

If one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") are specified consecutively using [FOR](javascript:call_link\('abenfor.htm'\)), this means that the rows constructed in [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)) for every iteration of the last FOR expression are inserted into the target table. When constructing table rows in [line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\)), the visible local work areas and field symbols of the iteration expressions can be used to construct table rows.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the new table rows are created in freely defined iteration steps.

-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the rows of existing internal tables are evaluated. These are known as [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"), since in this case new table rows can be constructed from the rows of existing internal tables.

Notes

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also known as "list comprehension".

-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be implemented more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).

-   Conditional iterations and table comprehensions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

-   For tasks that can be solved using both table comprehensions and [special assignments](javascript:call_link\('abencorresponding.htm'\)) for components (in particular the component operator [CORRESPONDING](javascript:call_link\('abenconstructor_expr_corresponding.htm'\))), it is best to use assignments (see the [executable example](javascript:call_link\('abencorresponding_vs_for_abexa.htm'\))).

-   If the VALUE operator is used, it should be noted that assignments to internal tables are also initialized (or given the content of itab after BASE) even in the case of table comprehensions after the evaluation of a [LET](javascript:call_link\('abaplet.htm'\)) expressions. The target table is then used directly. The original table can therefore not be used directly in the FOR expressions (unless it is assigned to a helper variable after LET).

Example

Constructs a temporary internal table with an elementary row type and fills it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
cl\_demo\_output=>display(
  VALUE t\_itab( FOR i = 1 UNTIL i > 10
                ( ipow( base = i exp = 2 ) ) ) ).

Executable Examples

-   [Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))

Continue
[VALUE - line\_spec](javascript:call_link\('abenvalue_constructor_params_lspc.htm'\))
![Example](exa.gif "Example") [VALUE - Operator for Internal Tables](javascript:call_link\('abenvalue_itab_abexa.htm'\))
![Example](exa.gif "Example") [VALUE - Operator with LET for Internal Tables](javascript:call_link\('abenvalue_itab_let_abexa.htm'\))



**📖 Source**: [abenvalue_constructor_params_itab.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_itab.htm)

### abenvalue_constructor_params_lspc.htm

> **📖 Official SAP Documentation**: [abenvalue_constructor_params_lspc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_lspc.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE - Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

VALUE - line\_spec

Syntax

... line
  *|* *{*LINES OF itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifies one or more rows to be inserted when constructing an internal table with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).

Note

If rows from the target table or the entire target table are used in line\_spec in an assignment of a constructor expression using the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) to an internal table, these rows are deleted or overwritten by a start value before both variants of line\_spec are evaluated. The target table must therefore be saved in an auxiliary variable first. A [LET](javascript:call_link\('abaplet.htm'\)) expression can be used to do this.

Alternative 1

... line

Effect

Specifies a row. line can be specified in exactly the same way as in the parentheses of an expression [NEW line\_type( ... )](javascript:call_link\('abenconstructor_expression_new.htm'\)). Here, line\_type is the row type of the internal table and a corresponding row is constructed. The following special features apply here:

-   If a data object is specified for line, this object must be compatible with the row type.

-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for line, the result of the expression must be convertible to the row type.

-   The syntax does not permit further parentheses for constructing tabular row types to be nested directly in line.

Short Form for Structured Row Types

If the row type of the internal table is a structured type, the following short form can be used:

VALUE dtype*|*#( *\[*let\_exp*\]*
               *\[*BASE itab*\]*
               col1 = dobj11 ... ( col2 = dobj12 col3 = dobj13 ... )
                                 ( col2 = dobj22 col3 = dobj23 ... )
                                 ...
               col1 = dobj31 col2 = dobj32 ... ( col3 = dobj33 ... )
                                               ( col3 = dobj43 ... )
               ... ).

This has the same semantics as the following:

VALUE dtype*|*#( *\[*let\_exp*\]*
               *\[*BASE itab*\]*
               ( col1 = dobj11 ... col2 = dobj12 col3 = dobj13 ... )
               ( col1 = dobj11 ... col2 = dobj22 col3 = dobj23 ... )
               ...
               ( col1 = dobj31 col2 = dobj32 ... col3 = dobj33 ... )
               ( col1 = dobj31 col2 = dobj32 ... col3 = dobj43 ... )
               ... ).

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all following inner parentheses until the next assignment is made to the component in question. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. A component cannot be assigned a value more than once in the [construction of a structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)), which means that a component assigned a value outside of the inner parentheses can no longer be specified in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Notes

-   The restriction that the content of tabular row types cannot be constructed directly in line applies for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be specified for line to construct the content of a tabular row, where line\_type is the tabular row type.

-   Specifying [CONV line\_type( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for the inserted values is also a way of meeting the compatibility requirements made by the row type.

-   The short form for structured row types enables columns of internal tables that are to be given an identical value in blocks to be filled more easily.

-   As in VALUE, the table rows are constructed in accordance with the rules for the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)), since new table rows are created here too and the restriction for VALUE dictating that no values of elementary data objects can be constructed cannot be applied.
    

Example

Constructs a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and fills it with four rows while using the short form for structured row types.

DATA itab TYPE RANGE OF i.
itab = VALUE #( sign = 'I'  option = 'BT' ( low = 1  high = 10 )
                                          ( low = 21 high = 30 )
                                          ( low = 41 high = 50 )
                            option = 'GE' ( low = 61 )  ).

Alternative 2

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

Specifies multiple rows. The rows are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, and USING KEY as to the addition [LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and the block is inserted in accordance with these rules. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Notes

-   The rows from jtab are inserted into the target table using the table key only, which means that jtab must be compatible with the target type.

-   If there is a conflict with an existing unique table key, a non-handleable exception is always raised when inserting multiple rows from an internal table using the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)).

-   When standard tables are created, the rows of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](javascript:call_link\('abapappend_linespec.htm'\)).
    

Example

Constructs an internal table with an elementary row type. jtab is filled with three rows and itab with six rows. The first row inserted in itab is initial and the last three rows are taken from the table jtab filled previously.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(jtab) = VALUE t\_itab( ( 10 ) ( 20 ) ( 30 ) ).
DATA(itab) = VALUE t\_itab( ( ) ( 1 ) ( 2 ) ( LINES OF jtab ) ).
cl\_demo\_output=>display( itab ).



**📖 Source**: [abenvalue_constructor_params_lspc.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_lspc.htm)

### abenvalue_itab_abexa.htm

> **📖 Official SAP Documentation**: [abenvalue_itab_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE - Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

VALUE - Operator for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables.

Source Code

REPORT demo\_value\_constructor\_itab.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
    DATA(itab) = VALUE itab( ( 1 ) ( 2 ) ( 3 ) ).
    DATA(itab1) = itab.
    itab1 = VALUE #(  BASE itab1
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab1 ).
    DATA(itab2) = itab.
    itab2 = VALUE #( ( LINES OF itab2 )
                      ( 4 )
                      ( 5 ) ).
    cl\_demo\_output=>write( itab2 ).
    DATA(itab3) = itab.
    itab3 = VALUE #( BASE itab3
                     ( LINES OF itab3 )
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab3 ).
    DATA(itab4) = itab.
    itab4 = VALUE #( LET x = itab4 IN
                     ( LINES OF x )
                     ( 4 )
                     ( 5 ) ).
    cl\_demo\_output=>write( itab4 ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The example shows various effects when using the left side of an assignment in specified rows of the operator VALUE in the construction of internal tables.

-   In the construction of itab1, the left side is used after BASE. Here, the original three rows are passed as a start value before the specified rows are evaluated. Two single rows are then appended to this start value.

-   In the construction of itab2, the left side is initialized before the specified rows are evaluated. This is why no rows are inserted by LINES OF itab2 and the table contains only two single rows.

-   In the construction of itab3, the left side is given its original three rows as a start row using BASE. These rows are then appended again using LINES OF, before the two single rows are appended.

-   In the construction of itab4, the left side is saved in the helper variable x before it is initialized. It is then used in LINES OF. The result is the same as when the left side is used after BASE.



**📖 Source**: [abenvalue_itab_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_abexa.htm)

### abenvalue_itab_let_abexa.htm

> **📖 Official SAP Documentation**: [abenvalue_itab_let_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_let_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenvalue_itab_let_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_itab_let_abexa.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE - Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

VALUE - Operator with LET for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables with a [LET expression](javascript:call_link\('abaplet.htm'\)).

Source Code

REPORT demo\_value\_constr\_itab\_let.
CLASS date DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS get RETURNING VALUE(d) TYPE d.
ENDCLASS.
CLASS date IMPLEMENTATION.
  METHOD get.
    d = sy-datlo.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES t\_date\_tab TYPE TABLE OF string  WITH EMPTY KEY.
    cl\_demo\_output=>display(
      VALUE t\_date\_tab(
        LET d = date=>get( ) IN
        ( |{ CONV d( d - 1 ) DATE = ENVIRONMENT }| )
        ( |{         d       DATE = ENVIRONMENT }| )
        ( |{ CONV d( d + 1 ) DATE = ENVIRONMENT }| ) ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Constructs an internal table with an elementary row type with type string and fills it with three rows. The result is a table that is given the previous day, today, and the next day (all formatted for the current language environment). Today's date is produced using a method. To make sure that the method is called only once, the return value is assigned to a local helper field in a [LET expression](javascript:call_link\('abaplet.htm'\)).
