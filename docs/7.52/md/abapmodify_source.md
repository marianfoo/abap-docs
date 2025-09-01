  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [MODIFY dbtab](javascript:call_link\('abapmodify_dbtab.htm'\)) → 

MODIFY dbtab - source

[Quick Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Syntax

... @wa*|**{*TABLE @itab*}* ...

Alternatives:

[1\. ...  @wa](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab](#!ABAP_ALTERNATIVE_2@2@)

Effect

A non-table-like data object wa or an internal table itab can be specified as a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) after FROM in the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)). On the one hand the content of the data objects determines whether the row(s) are inserted or changed, and on the other hand, which values are inserted or used for changes. The escape character @ should precede the work area name or the internal table name (as should be the case with every [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\))).

Note

Host variables without the escape character @ are [obsolete](javascript:call_link\('abenopen_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Alternative 1

...  @wa

Effect

When a non-table-like work area wa that meets the [requirements](javascript:call_link\('abenopen_sql_wa.htm'\)) for use in Open SQL statements is specified as a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), a row is found in the database table that has the same content in the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") as the corresponding initial part of the work area.

-   If a row like this is found, this row is overwritten in accordance with the same rules as for the statement [UPDATE](javascript:call_link\('abapupdate_source.htm'\)).
    
-   If a row like this is not found, a new row is inserted according to the same rules as for the statement [INSERT](javascript:call_link\('abapinsert_source.htm'\)).
    

If the change would produce a duplicate entry in a unique secondary index, it is not executed and sy-subrc is set to 4.

By default, an automatic client handling is performed, which means that any [client identifier](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") specified in wa is ignored and the current client is used instead. The content of wa is not affected. Automatic client handling can be switched off using the addition [CLIENT SPECIFIED](javascript:call_link\('abapmodify_target.htm'\)).

Notes

-   The wa work area should always be declared with reference to the database table or the [view](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") in ABAP Dictionary. For the derivation of [LOB handle structures](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry"), there are special [additions](javascript:call_link\('abaptypes_lob_handle.htm'\)) of the statements TYPES and *\[*CLASS-*\]*DATA.
    
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") is specified as a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) for the work area wa, for which the data type is inferred using the # character, a structure consisting of all the database table columns is created as the type.
    
-   If the database table or view is specified statically, a [short form](javascript:call_link\('abapmodify_obsolete.htm'\)) can be specified outside of classes. This means that the work area specified using FROM wa can be omitted. The prerequisite is that a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab for the respective database table or the view is declared using the statement TABLES. The system enhances the MODIFY statement implicitly with the addition FROM dbtab.
    

Example

Create or change a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in database table T100. If there is no message with the number 100 in the MYMSGCLASS message class in English, it will be created. Otherwise only the text is changed.

DATA(message\_wa) = VALUE t100(
  sprsl = 'EN'
  arbgb = 'MYMSGCLASS'
  msgnr = '100'
  text =  'Some new message ...' ).
MODIFY t100 FROM @message\_wa.

Example

The same example as before, but with a host expression.

MODIFY t100 FROM @( VALUE #(
  sprsl = 'EN'
  arbgb = 'MYMSGCLASS'
  msgnr =  '100'
  text =  'Some new message ...'  ) ).

Alternative 2

... TABLE @itab

Effect

When an internal table itab is specified as a [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) or [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), its rows are evaluated to overwrite existing rows or to insert new rows. The row type of the internal table must meet the [prerequisites](javascript:call_link\('abenopen_sql_wa.htm'\)) for use in Open SQL statements.

This behavior is platform-dependent and uses one of the following patterns (depending on the database system):

-   UPDATE followed by INSERT (UPSERT):
    

-   First, the same function as for [UPDATE FROM TABLE](javascript:call_link\('abapupdate_source.htm'\)) is executed for all rows of the internal table.

-   Next, the same function as for [INSERT FROM TABLE](javascript:call_link\('abapinsert_source.htm'\)) is executed for all rows. Here, any rows that have the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") are ignored.

Depending on the database system, the processing of the rows in the internal table can also be split into blocks here.

-   Row by row MODIFY
    

In a loop, each row in the internal table is edited in accordance with the rule above for MODIFY ... FROM wa. Here, the database system specifies whether processing continues in cases where a row cannot be inserted due to a unique secondary index.

These two platform-dependent processing methods can produce different results in cases where the database table has unique secondary indexes (see [executable example](javascript:call_link\('abenbulk_modify_abexa.htm'\))).

If the change to a row in the internal table would produce a duplicate entry in a unique secondary index, the corresponding row is not inserted and sy-subrc is set to 4. If the internal table is empty, no rows are processed. However sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are actually processed.

Notes

-   To prevent platform-dependent behavior, MODIFY ... FROM itab should only be applied to database tables without unique secondary indexes. If not, the required behavior must be programmed explicitly using UPDATE and INSERT or using LOOP AT itab and MODIFY.
    
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") as a [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table (whose row type consists of all the database table columns) with an empty table key is created as the type.
    
-   When an internal table is specified, [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") can be used as a source, but no [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry") can be created.
    

Example

Create or change multiple rows in database table DEMO\_UPDATE. This database table does not have a unique secondary index and the result is therefore not platform-specific.

TYPES itab TYPE TABLE OF demo\_update WITH EMPTY KEY.
DATA(itab) = VALUE itab(
  ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
  ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
  ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ).
MODIFY demo\_update FROM TABLE @itab.

Example

The same example as before, but with a host expression.

MODIFY demo\_update FROM TABLE @(
  VALUE #( ( id = 'X' col1 =  1 col2 =  2 col3 =  3 col4 =  4 )
           ( id = 'Y' col1 = 11 col2 = 12 col3 = 13 col4 = 14 )
           ( id = 'Z' col1 = 21 col2 = 22 col3 = 23 col4 = 24 ) ) ).

Executable Example

[MODIFY FROM TABLE](javascript:call_link\('abenbulk_modify_abexa.htm'\))