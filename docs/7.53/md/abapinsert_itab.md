  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) → 

INSERT itab

[Quick Reference](javascript:call_link\('abapinsert_itab_shortref.htm'\))

Syntax

INSERT [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) INTO [itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\)) *\[*[result](javascript:call_link\('abapinsert_itab_result.htm'\))*\]*.

Effect

This statement adds one or more rows [line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\)) to a position [itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\)) in an internal table. The position can be specified using the primary table key or a table index. Use [result](javascript:call_link\('abapinsert_itab_result.htm'\)) when appending a single row to set a reference to the appended row in the form of a field symbol or a data reference.

When the row is in inserted, all existing unique table keys are checked. These can be a [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and multiple unique [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The system handles any duplicates of the various key according to the following hierarchy:

1.  If attempting to insert a single row using a primary key would produce duplicates with respect to the unique primary key, no row is inserted and sy-subrc is set to 4.
    
2.  If attempting to insert a single row using the key or the index would result in duplicates with respect to a unique secondary key, a handleable exception of the class CX\_SY\_ITAB\_DUPLICATE\_KEY is raised.
    
3.  If the attempt to insert a single row (using an index) or multiple rows (as a block) would result in duplicates (in terms of a unique primary or secondary key), a runtime error occurs.
    

System Fields

sy-subrc

Meaning

0 (means:

One or more rows werer inserted.

4

No row was inserted because either a row of the same unique key already existed when inserting single rows using the primary key or the specified index was greater than the current number of rows plus one when inserting the rows using the table index.

The system field sy-tabix is not set.

Notes

-   The administration of an unique secondary table key is updated immediately ([direct update](javascript:call_link\('abendirect_update_glosry.htm'\) "Glossary Entry")) and the administration of a non-unique secondary table key is updated at the next explicit use of the secondary table key ([lazy update](javascript:call_link\('abenlazy_update_glosry.htm'\) "Glossary Entry")). Runtime costs for creating or updating a non-unique secondary table key are not incurred therefore until it is used for the first time (see the [executable example](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))).
    
-   The [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) can also be used to [construct](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) the content of internal tables.
    
-   A special variant [INSERT mesh\_path](javascript:call_link\('abenmesh_insert.htm'\)) can be used to insert rows into the last node of a [mesh path](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
    

Example

Inserts single rows in a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") int\_tab using the table index and inserts references to these rows in a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") ref\_tab using the table key. The output in the [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)) loops produces the numbers 10 to 1 for int\_tab and the numbers 1 to 10 for ref\_tab.

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
LOOP AT int\_tab INTO DATA(int).
  cl\_demo\_output=>write( |{ int }| ).
ENDLOOP.
cl\_demo\_output=>next\_section( \`Reference Table\` ).
LOOP AT ref\_tab INTO dref.
  cl\_demo\_output=>write( |{ dref->\* }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_ITAB\_DUPLICATE\_KEY

-   Cause: Duplicate key values in unique secondary key
    Runtime error: ITAB\_DUPLICATE\_KEY
    

Non-Handleable Exceptions

-   Cause: When inserting a set of rows, entries with an identical key were produced (the target table is defined by UNIQUE).
    Runtime error: ITAB\_DUPLICATE\_KEY
    
-   Cause: Sort order violated when using an INSERT with index in a sorted table.
    Runtime error: ITAB\_ILLEGAL\_SORT\_ORDER
    
-   Cause: Invalid index value (<= 0) when FROM, TO, or INDEX specified
    Runtime error: TABLE\_INVALID\_INDEX
    

Continue
[INSERT - line\_spec](javascript:call_link\('abapinsert_itab_linespec.htm'\))
[INSERT - itab\_position](javascript:call_link\('abapinsert_itab_position.htm'\))
[INSERT - result](javascript:call_link\('abapinsert_itab_result.htm'\))
![Example](exa.gif "Example") [Internal Tables, Inserting Rows](javascript:call_link\('abeninsert_lines_abexa.htm'\))