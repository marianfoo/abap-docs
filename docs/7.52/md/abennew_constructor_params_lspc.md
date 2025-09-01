  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [NEW - Instance Operator](javascript:call_link\('abenconstructor_expression_new.htm'\)) →  [NEW - Internal Tables](javascript:call_link\('abennew_constructor_params_itab.htm'\)) → 

NEW - line\_spec

Syntax

... line
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specifies one or more rows to be inserted when constructing an internal table with the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)).

Alternative 1

... line

Effect

Specifies a row. line can be specified in exactly the same way as in the parentheses of an expression [NEW line\_type( ... )](javascript:call_link\('abenconstructor_expression_new.htm'\)). Here, line\_type is the row type of the internal table and a corresponding row is constructed. The following special features apply here:

-   If a data object is specified for line, this object must be compatible with the row type.

-   If an expression (built-in function, functional method, calculation expression, constructor expression, or table expression) is specified for line, the result of the expression must be convertible to the row type.

-   The syntax does not permit further parentheses for constructing tabular row types to be nested directly in line.

Short Form for Structured Row Types

If the row type of the internal table is a structured type, the following short form can be used:

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

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all following inner parentheses until the next assignment is made to the component in question. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. A component cannot be assigned a value more than once in the [construction of a structure](javascript:call_link\('abennew_constructor_params_struct.htm'\)), which means that a component assigned a value outside of the inner parentheses can no longer be specified in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Notes

-   The restriction that the content of tabular row types cannot be constructed directly in line applies for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](javascript:call_link\('abenconstructor_expression_value.htm'\)) can be specified for line to construct the content of a tabular row, where line\_type is the tabular row type.

-   Specifying [CONV line\_type( ... )](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for the inserted values is also a way of meeting the compatibility requirements made by the row type.

-   The short form for structured row types enables columns of internal tables that are to be given an identical value in blocks to be filled more easily.
    

Example

Constructs an anonymous internal table with a structured row type (with a short form for the first column):

TYPES:
  BEGIN OF t\_line,
    col1 TYPE i,
    col2 TYPE i,
  END OF t\_line,
  t\_itab TYPE TABLE OF t\_line WITH EMPTY KEY.
DATA(dref) = NEW t\_itab( col1 = 1 ( col2 = 11 )
                                  ( col2 = 12 )
                                  ( col2 = 13 )
                         col1 = 2 ( col2 = 21 )
                                  ( col2 = 22 )
                                  ( col2 = 23 ) ).
cl\_demo\_output=>display( dref->\* ).

Alternative 2

... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*USING KEY keyname*\]*

Effect

Specifies multiple rows. The rows are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, and USING KEY as to the addition [LINES OF](javascript:call_link\('abapinsert_itab_linespec.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)) and the block is inserted in accordance with these rules. jtab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

Notes

-   The rows from jtab are inserted into the target table using the table key only, which means that jtab must be compatible with the target type.

-   If there is a conflict with an existing unique table key, a non-handleable exception is always raised when inserting multiple rows from an internal table using the statement [INSERT](javascript:call_link\('abapinsert_itab.htm'\)).

-   When standard tables are created, the rows of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](javascript:call_link\('abapappend_linespec.htm'\)).

Example

Constructs an internal table itab containing the first three rows and last three rows of the previously constructed table alpha.

DATA:
  alpha TYPE TABLE OF string WITH EMPTY KEY,
  itab  LIKE REF TO alpha.
alpha = VALUE #(  FOR j = 0 UNTIL j >= strlen( sy-abcde )
                  ( substring( val = sy-abcde
                               off = j
                               len = 1  ) ) ).
itab = NEW #( ( LINES OF alpha FROM 1 to 3 )
              ( \`-\` )
              ( LINES OF alpha FROM lines( alpha ) - 2
                               TO   lines( alpha ) ) ).
cl\_demo\_output=>display( itab->\* ).

This translation does not reflect the current version of the documentation.