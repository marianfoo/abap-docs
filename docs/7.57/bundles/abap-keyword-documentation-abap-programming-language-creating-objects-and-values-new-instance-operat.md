# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / NEW, Instance Operator / NEW, Internal Tables

Included pages: 2


### abennew_constructor_params_itab.htm

---
title: "NEW, Internal Tables"
description: |
  Syntax ... NEW dtype#( let_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm) BASE itab FOR for_exp1(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) FOR for_exp2(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-U
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_itab.htm"
abapFile: "abennew_constructor_params_itab.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "internal-table", "field-symbol", "abennew", "constructor", "params", "itab"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: NEW, Internal Tables, ABENNEW_CONSTRUCTOR_PARAMS_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

NEW, Internal Tables

Syntax

... NEW dtype*|*#( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm)*\]*
                 *\[*BASE itab*\]*
                 *\[*[FOR for\_exp1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm)
                  [FOR for\_exp2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm)
                  ... *\]*
                 ( [line\_spec1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm) )
                 ( [line\_spec2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm) )
                   ... ) ...

Additions:

[1\. ... BASE itab](#!ABAP_ADDITION_1@1@)
[2\. ... FOR for\_exp](#!ABAP_ADDITION_2@2@)

Effect

If dtype is a tabular data type or # stands for such a type, the table lines of the constructed table are created as follows:

-   The first option is to list a LET expression [let\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm) to define local helper fields whose values can be used to construct the table lines.
-   An optional start value for the content can then be specified for the content of the internal table after BASE (see below).
-   One or more optional consecutive [iteration expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expression_glosry.htm "Glossary Entry") can then be specified using [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) (see below).
-   The table lines are then constructed in one or more sets of internal parentheses by specifying [line\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm). Each set of inner parentheses constructs one or more lines in accordance with the information in line\_spec and inserts them into the new internal table according to the rules for the statement [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) ... [INTO TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_position.htm). The object is inserted in the order of the parentheses.

The constructed lines must meet the requirements of the statement [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) for inserting work areas using table keys and therefore be compatible with the line type, with one exception: when constructing a [standard table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_table_glosry.htm "Glossary Entry") where the lines are only appended anyway, the value can be shorter than the line length for line types c and x and then padded on the right with blanks or hexadecimal 0.

Hints

-   When a constructor expression is assigned to a reference variable using NEW, the original reference is available in the entire expression in the target variable. The target variable is not overwritten until the expression is completed. In the case of the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_constructor_params_itab.htm), however, the target variable can only be assigned to a helper variable using LET and is then no longer available.
-   The operand type for [line\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm) in the inner parentheses is the line type of the table type specified using dtype or # and is always uniquely identifiable. Constructor expressions at this position can therefore always derive the required data type using #.

Example

Construction of an anonymous internal table with a structured line type with substructures and tabular components.

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

See also the examples for the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_constructor_params_itab.htm).

Addition 1   

... BASE itab

Effect

An addition, BASE, followed by an internal table, itab, can be specified in front of the specification of lines to be inserted. itab is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The line type of itab must be convertible to the line type of the return value. If BASE is specified, the content of itab is assigned to the return value before the individual lines are inserted. If the character # is specified for the type of the return value and the type cannot be determined from the operand position of the constructor expression, the type of itab is used for this expression if it is known.

Example

Construction of three anonymous internal tables with an elementary line type. The first table is filled with three lines, whereby the second inserted line is initial. The second and third tables are filled with the lines of the first table and three further lines. Using BASE and [LINES OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm) has the same effect here.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
FINAL(dref1) = NEW t\_itab( ( 1 ) (  ) ( 3 ) ).
FINAL(dref2) = NEW t\_itab( BASE dref1->\*
                          (   ) ( 5 ) (  ) ).
FINAL(dref3) = NEW t\_itab( ( LINES OF dref1->\* )
                          (   ) ( 5 ) (  ) ).
cl\_demo\_output=>write(   dref1->\* ).
cl\_demo\_output=>write(   dref2->\* ).
cl\_demo\_output=>display( dref3->\* ).

Addition 2   

... FOR for\_exp

Effect

If one or more [iteration expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeniteration_expression_glosry.htm "Glossary Entry") are specified consecutively using [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm), the lines constructed in [line\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm) for each iteration of the last FOR expression are inserted into the target table. When constructing table lines in [line\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm), the visible local work areas and field symbols of the iteration expressions can be used to construct table lines.

-   If [conditional iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) are used, the new table lines are created in freely definable iteration steps.
-   If [table iterations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_itab.htm) are used, the lines of existing internal tables are evaluated. In this case, these are known as [table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry"), since new table lines are constructed from the lines of existing internal tables.

Hints

-   The term "table comprehension" is derived from similar concepts used in many other languages, where it is also referred to as "list comprehension".
-   [Table filtering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_filtering_glosry.htm "Glossary Entry") can be achieved more efficiently using the [filter operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfilter_operator_glosry.htm "Glossary Entry") [FILTER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_filter.htm).
-   Conditional iterations and table comprehensions are also possible with [FOR expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_for.htm) for [mesh paths](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmesh_path_glosry.htm "Glossary Entry").

Example

Construction of an anonymous internal table with an elementary line type and filling it with square numbers using an iteration expression.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
FINAL(dref) = NEW t\_itab( FOR i = 1 UNTIL i > 10
                         ( ipow( base = i exp = 2 ) ) ).
cl\_demo\_output=>display( dref->\* ).

Executable Examples

[Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehensions_abexas.htm)

Continue
[NEW, line\_spec](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm)


### abennew_constructor_params_lspc.htm

---
title: "Syntax"
description: |
  ... line  LINES OF jtab FROM idx1 TO idx2 STEP n USING KEY keyname ... Alternatives: 1. ... line(#!ABAP_ALTERNATIVE_1@1@) 2. ... LINES OF jtab FROM idx1 TO idx2 STEP n USING KEY keyname(#!ABAP_ALTERNATIVE_2@2@) Effect Spe
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_lspc.htm"
abapFile: "abennew_constructor_params_lspc.htm"
keywords: ["insert", "do", "if", "try", "catch", "method", "data", "types", "internal-table", "abennew", "constructor", "params", "lspc"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) →  [NEW, Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_itab.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: NEW, line_spec, ABENNEW_CONSTRUCTOR_PARAMS_LSPC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

NEW, line\_spec

Syntax

... line
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specification of one or more lines to be inserted when constructing an internal table with the instance operator [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_itab.htm).

Alternative 1   

... line

Effect

Specification of a line. For line, the exact same specifications can be made as in the parentheses of an expression [NEW line\_type( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm), where line\_type is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

-   If a data object is specified for line, this object must be compatible with the line type.
-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for line, the result of the expression must be convertible to the line type.
-   The syntax does not allow further parentheses for constructing tabular line types to be nested directly in line.

Short Form for Structured Line Types   

If the line type of the internal table is a structured type, the following short form can be used:

NEW dtype*|*#( *\[*let\_exp*\]*
             *\[*BASE itab*\]*
             col1 = dobj11 ... ( col2 = dobj12 col3 = dobj13 ... )
                               ( col2 = dobj22 col3 = dobj23 ... )
                               ...
             col1 = dobj31 col2 = dobj32 ... ( col3 = dobj33 ... )
                                             ( col3 = dobj43 ... )
             ... ).

This has the same semantics as the following form:

NEW dtype*|*#( *\[*let\_exp*\]*
             *\[*BASE itab*\]*
             ( col1 = dobj11 ... col2 = dobj12 col3 = dobj13 ... )
             ( col1 = dobj11 ... col2 = dobj22 col3 = dobj23 ... )
             ...
             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj33 ... )
             ( col1 = dobj31 col2 = dobj32 ... col3 = dobj43 ... )
             ... ).

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennew_constructor_params_struct.htm), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Hints

-   The restriction that the content of tabular line types cannot be constructed directly in line is introduced for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) can be specified for line to construct the content of a tabular line, where line\_type is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [CONV line\_type( ... )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm) for the values to be inserted.
-   The short form for structured line types enables columns of internal tables that are to contain an identical value in blocks to be filled more easily.

Example

Construction of an anonymous internal table with a structured line type with a short form for the first column:

TYPES:
  BEGIN OF t\_line,
    col1 TYPE i,
    col2 TYPE i,
  END OF t\_line,
  t\_itab TYPE TABLE OF t\_line WITH EMPTY KEY.
FINAL(dref) = NEW t\_itab( col1 = 1 ( col2 = 11 )
                                  ( col2 = 12 )
                                  ( col2 = 13 )
                         col1 = 2 ( col2 = 21 )
                                  ( col2 = 22 )
                                  ( col2 = 23 ) ).
cl\_demo\_output=>display( dref->\* ).

Alternative 2   

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*

Effect

Specification of multiple lines. The lines are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, STEP and USING KEY as to the addition [LINES OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab_linespec.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm) and the block is inserted in accordance with these rules. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Hints

-   Since the lines from jtab are inserted into the target table using only the table key, jtab must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm).
-   When standard tables are created, the lines of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapappend_linespec.htm).

Example

Construction of an internal table itab that contains the first three lines and last three lines of the previously constructed internal table alpha.

DATA:
  alpha TYPE TABLE OF string WITH EMPTY KEY,
  itab  LIKE REF TO alpha.
alpha = VALUE #(  FOR j = 0 UNTIL j >= strlen( sy-abcde )
                  ( substring( val = sy-abcde
                               off = j
                               len = 1  ) ) ).
itab = NEW #( ( LINES OF alpha FROM 1 TO 3 )
              ( \`-\` )
              ( LINES OF alpha FROM lines( alpha ) - 2
                               TO   lines( alpha ) ) ).
cl\_demo\_output=>display( itab->\* ).

Example

Construction of an internal table itab that contains lines of the previously constructed internal table jtab. The additions FROM and STEP define the step size for processing the table jtab: First, every second line starting at the third line is read, second, every third line starting at the second line is read.

TYPES: t\_itab TYPE TABLE OF i WITH EMPTY KEY.
FINAL(jtab) = VALUE t\_itab( FOR i = 1 UNTIL i > 10 ( i ) ).
FINAL(itab) = NEW t\_itab( ( LINES OF jtab FROM 3 STEP 2 )
                         ( LINES OF jtab FROM 2 STEP 3 ) ).
