  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW - Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) → 

NEW - Internal Tables

Syntax

... NEW dtype*|*#( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
                 *\[*BASE itab*\]*
                 *\[*[FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
                  [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
                  ... *\]*
                 ( [line\_spec1](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                 ( [line\_spec2](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) )
                   ... ) ...

Extras:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for a type like this, the table rows of the constructed table are created as follows:

-   Firstly, an optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified to define local auxiliary fields whose values can be used to construct the table rows.

-   An optional start value for the content can be specified for the content of the internal table after BASE (see below).

-   One more optional consecutive [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") can then be specified using [FOR](javascript:call_link\('abenfor.htm'\)) (see below).

-   The table rows are then constructed in one or more sets of internal parentheses by specifying [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)). Each set of inner parentheses constructs one or more rows in accordance with the information in line\_spec and inserts them into the new internal table in accordance with the rules for the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) ... [INTO TABLE](javascript:call_link\('abapinsert_itab_position.htm'\)). The object is inserted in the order of the parentheses.

The constructed rows must meet the requirements of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) for inserting work areas using table keys and therefore be compatible with the row type. There is one exception to this: When constructing a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), where the rows are only appended, the value can be shorter than the row length (for row types c and x), in which case it is padded on the right with blanks or hexadecimal 0.

Notes

-   When a constructor expression is assigned to a reference variable using NEW, the original reference is made available in the entire expression in the target variable. The target variable is not overwritten until the expression is closed. In the case of the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.

-   The operand type for [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) in the inner parentheses is the row type of the table type specified using dtype or #, which means it is always uniquely identifiable. Constructor expressions in this place can therefore always derive the required data type using #.
    

Example

Constructs an anonymous internal table with a structured row type with substructures and tabular components.

TYPES: BEGIN OF t\_struct1,
         col1 TYPE i,
         col2 TYPE i,
       END OF t\_struct1,
       BEGIN OF t\_struct2,
         col1 TYPE i,
         col2 TYPE t\_struct1,
         col3 TYPE TABLE OF t\_struct1 WITH EMPTY KEY,
       END OF t\_struct2,
       t\_itab TYPE TABLE OF t\_struct2 WITH EMPTY KEY.
DATA dref TYPE REF TO data.
dref = NEW t\_itab( ( col1 = 1
                     col2-col1 = 1
                     col2-col2 = 2
                     col3 = VALUE #( ( col1 = 1 col2 = 2 )
                                     ( col1 = 3 col2 = 4 ) ) )
                   ( col1 = 2
                     col2-col1 = 2
                     col2-col2 = 4
                     col3 = VALUE #( ( col1 = 2 col2 = 4 )
                                     ( col1 = 6 col2 = 8 ) ) ) ).

Examples

See also the examples for the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).

Addition 1

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the lines that you want to insert. This is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The row type of itab must be convertible to the row type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual rows are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression (if identifiable).

Example

Constructs three anonymous internal tables with an elementary row type. The first table is filled with three rows. The second row is initial. The second and third tables are filled with the rows of the first table and three further rows. Using BASE and [LINES OF](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) here has the same effect.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref1) = NEW t\_itab( ( 1 ) (  ) ( 3 ) ).
DATA(dref2) = NEW t\_itab( BASE dref1->\*
                          (   ) ( 5 ) (  ) ).
DATA(dref3) = NEW t\_itab( ( LINES OF dref1->\* )
                          (   ) ( 5 ) (  ) ).
cl\_demo\_output=>write(   dref1->\* ).
cl\_demo\_output=>write(   dref2->\* ).
cl\_demo\_output=>display( dref3->\* ).

Addition 2

... FOR for\_exp

Effect

If one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") are specified consecutively using [FOR](javascript:call_link\('abenfor.htm'\)), this means that the rows constructed in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)) for every iteration of the last FOR expression are inserted into the target table. When constructing table rows in [line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\)), the visible local work areas and field symbols of the iteration expressions can be used to construct table rows.

-   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the new table rows are created in freely defined iteration steps.

-   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the rows of existing internal tables are evaluated. These are known as [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"), since in this case new table rows can be constructed from the rows of existing internal tables.

Notes

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also known as "list comprehension".

-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be implemented more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).

-   Conditional iterations and table comprehensions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
    

Example

Constructs an anonymous internal table with an elementary row type and fills it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(dref) = NEW t\_itab( FOR i = 1 UNTIL i > 10
                         ( ipow( base = i exp = 2 ) ) ).
cl\_demo\_output=>display( dref->\* ).

Executable Examples

[Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))

Continue
[NEW - line\_spec](javascript:call_link\('abennew_constructor_params_lspc.htm'\))