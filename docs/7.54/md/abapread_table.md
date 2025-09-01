  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) → 

READ TABLE itab

[Quick Reference](javascript:call_link\('abapread_table_itab_shortref.htm'\))

Syntax

READ TABLE itab *{* [table\_key](javascript:call_link\('abapread_table_key.htm'\))
                *|* [free\_key](javascript:call_link\('abapread_table_free.htm'\))
                *|* [index](javascript:call_link\('abapread_table_index.htm'\)) *}* [result](javascript:call_link\('abapread_table_outdesc.htm'\)).

Effect

This statement reads a row from the internal table itab. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The row must be specified by naming values for either [table\_key](javascript:call_link\('abapread_table_key.htm'\)) for a table key, a free condition [free\_key](javascript:call_link\('abapread_table_free.htm'\)), or an index [index](javascript:call_link\('abapread_table_index.htm'\)). The latter is possible only for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") and when using a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The output response [result](javascript:call_link\('abapread_table_outdesc.htm'\)) determines how and to where the row contents are read.

If the row to be read is not specified uniquely, the first suitable row is read. In the case of index tables, this row has the lowest row number of all suitable rows in the table index used.

If the internal table is specified as the return value or result of a [functional method](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), or a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), the value is only available when the statement is executed. Afterwards, it is no longer possible to access the internal table.

System Fields

The statement READ TABLE sets the values for the system fields sy-subrc and sy-tabix.

sy-subrc

Meaning

0

Row is found. sy-tabix is set to the row number of the entry in the primary or secondary table index used. If a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") is used, it is set to 0.

2

Like sy-subrc equals 0. Distinguishes cases that use the addition COMPARING in result.

4

The row was not found. If the entry was determined using a binary search, sy-tabix is set to the table index of the entry before which it would be inserted using INSERT ... INDEX ..., to preserve the sort order. This is the case if, when [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") are used, the addition [table\_key](javascript:call_link\('abapread_table_key.htm'\)) or [free\_key](javascript:call_link\('abapread_table_free.htm'\)) was specified alongside the full table key or if the addition BINARY SEARCH was specified explicitly. Otherwise, sy-tabix is undefined (-1).

8

The row was not found. The entry was found using a binary search and the end of the table was reached. sy-tabix is set to the number of rows + 1.

The system fields sy-tfill and sy-tleng are also filled.

Notes

-   There is no implicit selection of a suitable key or index. The used table key or table index is always specified uniquely. The syntax check issues a warning if there is a suitable [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") but this table key is not used. This warning should be removed through using the key. However, in exceptional cases, it can be bypassed using a [pragma](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
    
-   As an alternative to the statement READ TABLE, [table expressions](javascript:call_link\('abentable_expressions.htm'\)) can be used to allow reads to be performed on individual table rows at operand positions.
    
-   Internal tables can also be specified as a [data source](javascript:call_link\('abapselect_itab.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") in ABAP SQL.
    
-   If multiple rows of an internal table are to be read, the statement [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) generally displays better performance than using the statement READ TABLE in a loop.
    

Example

Reads individual table rows from a standard table in a WHILE loop. The table rows are read in reverse order with respect to the sorted secondary key sort\_key. A CHECK statement exits the loop if the specified condition is not met. This construct provides the missing option of performing [LOOP](javascript:call_link\('abaploop_at_itab.htm'\))s in reverse order. See also the corresponding [executable example](javascript:call_link\('abeninverse_itab_for_abexa.htm'\)) with a FOR expression.

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

Non-Handleable Exceptions

-   Cause: When reading a table with READ ... WITH *\[*TABLE*\]* KEY, overlapping or duplicate keys were specified.
    Runtime error: DYN\_KEY\_DUPLICATE
    
-   Cause: When reading a table of the type SORTED, the specified key fields have to be an initial part of the table key when BINARY SEARCH is specified.
    Runtime error: ITAB\_ILLEGAL\_BINARY\_SEARCH
    
-   Cause: No key specified.
    Runtime error: ITAB\_KEY\_COMPONENT\_MISSING
    
-   Cause: Invalid key specified when accessing a key table.
    Runtime error: ITAB\_KEY\_ILLEGAL\_COMPONENT
    
-   Cause: Key specified implicitly (invalid)
    Runtime error: READ\_ITAB\_UC\_KEY\_ERROR
    
-   Cause: Invalid incompatible work area specified.
    Runtime error: OBJECTS\_WA\_NOT\_COMPATIBLE
    
-   Cause: [Memory area violated](javascript:call_link\('abentables_parameters_restrictions.htm'\)) when TABLES parameter accessed
    Runtime error: ITAB\_STRUC\_ACCESS\_VIOLATION
    

Continue
[READ TABLE - table\_key](javascript:call_link\('abapread_table_key.htm'\))
[READ TABLE - free\_key](javascript:call_link\('abapread_table_free.htm'\))
[READ TABLE - index](javascript:call_link\('abapread_table_index.htm'\))
[READ TABLE - result](javascript:call_link\('abapread_table_outdesc.htm'\))
![Example](exa.gif "Example") [Internal Tables, Key Accesses](javascript:call_link\('abenread_itab_using_key_abexa.htm'\))