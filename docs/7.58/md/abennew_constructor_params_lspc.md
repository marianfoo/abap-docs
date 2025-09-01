  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [NEW, Instance Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm) →  [NEW, Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20NEW%2C%20line_spec%2C%20ABENNEW_CONSTRUCTOR_PARAMS_LSPC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

NEW, line\_spec

Syntax

... line
  *|* *{*LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]**}* ...

Alternatives:

[1\. ... line](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... LINES OF jtab *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]* *\[*USING KEY keyname*\]*](#!ABAP_ALTERNATIVE_2@2@)

Effect

Specification of one or more lines to be inserted when constructing an internal table with the instance operator [NEW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_itab.htm).

Alternative 1   

... line

Effect

Specification of a line. For line, the exact same specifications can be made as in the parentheses of an expression [NEW line\_type( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_new.htm), where line\_type is the line type of the internal table and a corresponding line is constructed. The following special features apply here:

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

Values can be assigned to individual structure components outside of the inner parentheses. An assignment of this type applies to all subsequent inner parentheses until the next assignment is made to the corresponding component. Assignments outside of the inner parentheses must be followed by at least one inner parenthesis. Since a component cannot be assigned a value more than once in the [construction of a structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennew_constructor_params_struct.htm), a component that has been assigned a value outside of the inner parentheses can no longer be listed in an inner parenthesis. A component can be specified again outside the inner parentheses and any components previously specified in an inner parenthesis can also be listed outside the parenthesis.

Hints

-   The restriction that the content of tabular line types cannot be constructed directly in line is introduced for reasons of legibility (for humans and for machines) and is not a functional restriction. The expression [VALUE line\_type( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_value.htm) can be specified for line to construct the content of a tabular line, where line\_type is the tabular line type.
-   The compatibility requirement for the line type can be met by specifying [CONV line\_type( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) for the values to be inserted.
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

Specification of multiple lines. The lines are taken from the internal table jtab and inserted into the target table as a block. The same applies to jtab and the additions FROM, TO, STEP and USING KEY as to the addition [LINES OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab_linespec.htm) of the statement [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm) and the block is inserted in accordance with these rules. jtab is a [functional operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

Hints

-   Since the lines from jtab are inserted into the target table using only the table key, jtab must be compatible with the target type.
-   If there is a conflict with an existing unique table key, an uncatchable exception is always raised when inserting multiple lines from an internal table using the statement [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_itab.htm).
-   When standard tables are created, the lines of the table jtab are appended to the target table in the same way as with the statement [APPEND LINES OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapappend_linespec.htm).

Example

Construction of an internal table itab that contains the first three lines and last three lines of the previously constructed internal table alpha.

DATA:
  alpha TYPE TABLE OF string WITH EMPTY KEY,
  itab  LIKE REF TO alpha.
FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`.
alpha = VALUE #(  FOR j = 0 UNTIL j >= strlen( abcde )
                  ( substring( val = abcde
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