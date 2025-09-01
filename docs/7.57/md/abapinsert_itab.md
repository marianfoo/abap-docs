  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT itab, ABAPINSERT_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

INSERT itab

[Short Reference](javascript:call_link\('abapinsert_itab_shortref.htm'\))

Syntax

INSERT [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) INTO [itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\)) *\[*[result](javascript:call_link\('abapinsert_itab_result.htm'\))*\]*.

Effect

This statement adds one or more lines [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) at a position [itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\)) in an internal table. The position can be specified using the primary table key or a table index. [result](javascript:call_link\('abapinsert_itab_result.htm'\)) can be used when appending a single line to set a reference to the appended line in the form of a field symbol or a data reference.

When the line is inserted, all existing unique table keys are checked. These can be a unique [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and multiple unique [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The system handles any duplicates of the different keys according to the following hierarchy:

1.  If attempting to insert a single line using a primary key would produce duplicates with respect to the unique primary key, no line is inserted and sy-subrc is set to 4.
2.  If attempting to insert a single line using the key or the index would result in duplicates with respect to a unique secondary key, a catchable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
3.  If attempting to insert a single line using an index or multiple lines as a block would result in duplicates with respect to a unique primary or secondary key, a runtime error occurs.

System Fields

sy-subrc

Meaning

0

One or more lines were inserted.

4

No line was inserted because either a line with the same unique key already existed when inserting single lines using the primary key or the specified index was greater than the current number of lines plus 1 when inserting the lines using the table index.

The system field sy-tabix is not set.

Hints

-   The administration of an unique secondary table key is updated immediately ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")) and the administration of a non-unique secondary table key is updated at the next explicit use of the secondary table key ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time (see the [executable example](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))).
-   The [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can also be used to [construct](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) the content of internal tables.
-   A special variant [INSERT mesh\_path](javascript:call_link\('abenmesh_insert.htm'\)) can be used to insert lines into the last node of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").

Example

Insertion of single lines into a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") int\_tab using the table index and insertion of references to these lines in a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") ref\_tab using the table key. The output in the [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) loops produces the numbers 10 to 1 for int\_tab and the numbers 1 to 10 for ref\_tab.

TYPES intref type REF TO i.
DATA: int\_tab TYPE STANDARD TABLE OF i,
      ref\_tab TYPE HASHED TABLE OF intref
              WITH UNIQUE KEY table\_line.
DO 10 TIMES.
  INSERT sy-index
         INTO int\_tab INDEX 1
         REFERENCE INTO DATA(dref).
  INSERT dref
         INTO TABLE ref\_tab.
ENDDO.
cl\_demo\_output=>begin\_section( \`Integer Table\` ).
LOOP AT int\_tab INTO FINAL(int).
  cl\_demo\_output=>write( |{ int }| ).
ENDLOOP.
cl\_demo\_output=>next\_section( \`Reference Table\` ).
LOOP AT ref\_tab INTO dref.
  cl\_demo\_output=>write( |{ dref->\* }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_ITAB\_DUPLICATE\_KEY

-   Cause: Duplicate key values in unique secondary key
    Runtime error: ITAB\_DUPLICATE\_KEY

Uncatchable Exceptions

-   Cause: When inserting a set of lines, entries with an identical key were produced (the target table is defined by UNIQUE).
    Runtime error: ITAB\_DUPLICATE\_KEY
-   Cause: Sort order violated when using an INSERT with index in a sorted table.
    Runtime error: ITAB\_ILLEGAL\_SORT\_ORDER
-   Cause: Invalid index value (<= 0) when FROM, TO, or INDEX specified
    Runtime error: TABLE\_INVALID\_INDEX

Continue
[INSERT, line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\))
[INSERT, itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\))
[INSERT, result](javascript:call_link\('abapinsert_itab_result.htm'\))
![Example](exa.gif "Example") [itab - Insert Lines](javascript:call_link\('abeninsert_lines_abexa.htm'\))