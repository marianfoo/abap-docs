  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE, Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

VALUE, line\_spec

Syntax

... line
  *|* *{*LINES OF itab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specification of one or more lines to be inserted when constructing an internal table with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)).

Hint

If lines from the target table or the entire target table are used in line\_spec in an assignment of a constructor expression using the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) to an internal table, these lines are deleted or overwritten with a start value before both variants of line\_spec are evaluated. The target table must therefore be saved in an auxiliary variable first, for which a [LET](javascript:call_link\('abaplet.htm'\)) expression can be used.

Alternative 1   

... line

Effect

Specification of a line. For line, the exact same specifications can be made as in the parentheses of an expression [NEW line\_type( ... )](javascript:call_link\('abenconstructor_expression_new.htm'\)), where line\_type is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

-   If a data object is specified for line, this object must be compatible with the line type.
-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for line, the result of the expression must be convertible to the line type.
-   The syntax does not allow further parentheses for constructing tabular line types to be nested directly in line.

Short Form for Structured Line Types

If the line type of the internal table is a structured type, the following short form can be used:

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

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Hints

-   The restriction that the content of tabular line types cannot be constructed directly in line applies for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be specified for line to construct the content of a tabular line, where line\_type is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [CONV line\_type( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for the values to be inserted.
-   The short form for structured line types enables columns of internal tables that are to contain an identical value in blocks to be filled more easily.
-   In VALUE, the table lines are constructed in accordance with the rules for the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)), since new table lines are created here and the restriction for VALUE dictating that no values of elementary data objects can be constructed cannot be applied.

Example

Construction of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") and filling it with four lines while using the short form for structured line types.

DATA itab TYPE RANGE OF i.
itab = VALUE #( sign = 'I'  option = 'BT' ( low = 1  high = 10 )
                                          ( low = 21 high = 30 )
                                          ( low = 41 high = 50 )
                            option = 'GE' ( low = 61 )  ).

Alternative 2   

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

Specification of multiple lines. The lines are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, and USING KEY as to the addition [LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and the block is inserted in accordance with these rules. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Hints

-   Since the lines from jtab are inserted into the target table using only the table key, jtab must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)).
-   When standard tables are created, the lines of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](javascript:call_link\('abapappend_linespec.htm'\)).

Example

Construction of an internal table with an elementary line type. jtab is filled with three lines and itab with six lines. The first line inserted in itab is initial and the last three lines are taken from the table jtab filled previously.

TYPES t\_itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(jtab) = VALUE t\_itab( ( 10 ) ( 20 ) ( 30 ) ).
DATA(itab) = VALUE t\_itab( ( ) ( 1 ) ( 2 ) ( LINES OF jtab ) ).
cl\_demo\_output=>display( itab ).