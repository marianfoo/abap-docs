  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [FIND](javascript:call_link\('abapfind.htm'\)) → 

FIND, section\_of

[Short Reference](javascript:call_link\('abapfind_shortref.htm'\))

Syntax

... SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF ...

Effect

This addition restricts the search of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)) in dobj to the section from the [offset](javascript:call_link\('abenoffset_glosry.htm'\) "Glossary Entry") specified in off with the length specified in len. Without the addition SECTION, the entire data object is searched. With SECTION, at least one of the additions OFFSET or LENGTH must be specified. If an offset is specified without specifying the length, the data object dobj is searched from the offset off to its end. If a length is specified but no offset, the offset 0 is used implicitly.

off and len are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with the operand type i. Apart from one exception, the values of off and len must be greater than or equal to 0 and the section specified by off and len must be within the length of dobj. As an exception, the value of len can also be \-1 and this value has the same effect as omitting the addition LENGTH.

Hint

The specification \-1 for len works in the same way as not using the addition LENGTH by passing a value to the statement.

Example

The FIND statement searches from offset 12 and finds the "html" substring at offset 20.

FIND 'html' IN SECTION OFFSET 12
            OF \`<html><body>This is html</body></html>\`
            MATCH OFFSET DATA(moff).
cl\_demo\_output=>display( moff ).