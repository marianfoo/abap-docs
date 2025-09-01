  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) → 

READ TABLE itab

[Short Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

READ TABLE itab *{* [table\_key](javascript:call_link\('abapread_table_key.htm'\))
                *|* [free\_key](javascript:call_link\('abapread_table_free.htm'\))
                *|* [index](javascript:call_link\('abapread_table_index.htm'\)) *}* [result](javascript:call_link\('abapread_table_outdesc.htm'\)).

Effect

This statement reads a line from the internal table itab. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The line must be specified by specifying values for either [table\_key](javascript:call_link\('abapread_table_key.htm'\)) for a table key, using a free condition [free\_key](javascript:call_link\('abapread_table_free.htm'\)), or by specifying an index [index](javascript:call_link\('abapread_table_index.htm'\)). The latter is possible only for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and when using a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The output response [result](javascript:call_link\('abapread_table_outdesc.htm'\)) determines how and to where the line contents are read.

If the line to be read is not specified uniquely, the first suitable line is read. In index tables, this line has the lowest line number of all suitable lines with respect to the table index used.

If the internal table is specified as the return value or result of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the value only exists when the statement is executed. Afterwards, it is no longer possible to access the internal table.

System Fields

The statement READ TABLE sets the values for the system fields sy-subrc and sy-tabix.

sy-subrc

Meaning

0

Line is found. sy-tabix is set to the line number of the entry in the primary or secondary table index used. If a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") is used, it is set to 0.

2

Like sy-subrc equals 0. Distinguishes cases that use the addition COMPARING in result.

4

Line was not found. If the entry was determined using a binary search, sy-tabix is set to the line number of the entry in the primary or secondary table index in front of which it would be inserted using INSERT ... INDEX ..., to preserve the sort order. This is the case if, when [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") are used, the addition [table\_key](javascript:call_link\('abapread_table_key.htm'\)) or [free\_key](javascript:call_link\('abapread_table_free.htm'\)) was specified in addition to the complete table key or if the addition BINARY SEARCH was specified explicitly. Otherwise, sy-tabix is undefined (-1).

8

Line was not found. The entry was found using a binary search and the end of the table was reached. sy-tabix is set to the number of lines + 1.

The system fields sy-tfill and sy-tleng are also filled.

Hints

-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. A syntax check warning occurs if there is a suitable [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), but it is not used. This warning should be removed by using the key. However, in exceptional cases, it can also be bypassed using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").

-   As an alternative to the statement READ TABLE, [table expressions](javascript:call_link\('abentable_expressions.htm'\)) can be used to allow reads to be performed on individual table lines at operand positions.

-   Internal tables can also be specified as a [data source](javascript:call_link\('abapselect_itab.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") in ABAP SQL.

-   If multiple lines of an internal table are to be read, the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) generally has better performance than using the statement READ TABLE in a loop.
    

Example

Reading of individual table lines from a standard table in a WHILE loop. The table lines are read in reverse order with respect to the sorted secondary key sort\_key. A CHECK statement exits the loop if the specified condition is not met. This construct replaces the missing option of performing [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) statements in reverse order. See also the corresponding [executable example](javascript:call_link\('abeninverse_itab_for_abexa.htm'\)) with a FOR expression.

DATA itab TYPE STANDARD TABLE OF i
          WITH EMPTY KEY
          WITH NON-UNIQUE SORTED KEY sort\_key COMPONENTS table\_line.
itab = VALUE #( ( 2 ) ( 5 ) ( 1 ) ( 3 ) ( 4 ) ).
DATA(output) = \`\`.
DATA(idx) = lines( itab ).
WHILE idx > 0.
  READ TABLE itab INDEX idx USING KEY sort\_key
             ASSIGNING FIELD-SYMBOL(<fs>).
  idx -= 1.
  CHECK <fs> > 2.
  output = output && <fs> && \` \`.
ENDWHILE.
cl\_demo\_output=>display( output ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: When reading a table with READ ... WITH *\[*TABLE*\]* KEY, overlapping or duplicate keys were used.
    Runtime error: DYN\_KEY\_DUPLICATE

-   Cause: When reading a table of the type SORTED, the specified key fields must be an initial part of the table key when BINARY SEARCH is specified.
    Runtime error: ITAB\_ILLEGAL\_BINARY\_SEARCH

-   Cause: Missing key specification.
    Runtime error: ITAB\_KEY\_COMPONENT\_MISSING

-   Cause: Invalid key specified when accessing a key table.
    Runtime error: ITAB\_KEY\_ILLEGAL\_COMPONENT

-   Cause: Invalid implicit key specification.
    Runtime error: READ\_ITAB\_UC\_KEY\_ERROR

-   Cause: Invalid incompatible work area specification.
    Runtime error: OBJECTS\_WA\_NOT\_COMPATIBLE

-   Cause: [Memory area violated](javascript:call_link\('abentables_parameters_restrictions.htm'\)) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION
    

Continue
[READ TABLE, table\_key](javascript:call_link\('abapread_table_key.htm'\))
[READ TABLE, free\_key](javascript:call_link\('abapread_table_free.htm'\))
[READ TABLE, index](javascript:call_link\('abapread_table_index.htm'\))
[READ TABLE, result](javascript:call_link\('abapread_table_outdesc.htm'\))
![Example](exa.gif "Example") [itab - Key Accesses](javascript:call_link\('abenread_itab_using_key_abexa.htm'\))