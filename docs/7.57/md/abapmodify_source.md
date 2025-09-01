  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Write Access](javascript:call_link\('abenabap_sql_writing.htm'\)) →  [MODIFY dbtab](javascript:call_link\('abapmodify_dbtab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY dbtab, source, ABAPMODIFY_SOURCE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

MODIFY dbtab, source

[Short Reference](javascript:call_link\('abapmodify_dbtab_shortref.htm'\))

Syntax

...  @wa*|*@( expr )
  *|* *{* TABLE @itab*|*@( expr ) *}*
    ( SELECT [subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) ...

Alternatives:

[1\. ... @wa*|*@( expr )](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... TABLE @itab*|*@( expr )](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ( SELECT subquery\_clauses *\[*UNION*|*INTERSECT*|*EXCEPT ...*\]* ) ...](#!ABAP_ALTERNATIVE_3@3@)

Effect

A non-table-like data object wa can be specified after FROM in the statement [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and an internal table or a parenthesized [subquery](javascript:call_link\('abenabap_sql_host_variables.htm'\)) can be specified after TABLE. The work area and the internal table can be specified as a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)). On one hand, the content of the data objects or the result set of the subquery determines whether the rows are inserted or changed, and on the other hand, which values are inserted or used for changes.

Hint

Host variables without the escape character @ are [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Alternative 1   

... @wa*|*@( expr )

Effect

When a non-table-like work area that meets the [requirements](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) for use in ABAP SQL statements is specified as a host variable [@wa](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), a row is searched in the DDIC database table or view that has the same content in the [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") as the corresponding initial part of the work area.

-   If a row like this is found, this row is overwritten in accordance with the same rules as for the statement [UPDATE](javascript:call_link\('abapupdate_source.htm'\)).
-   If a row like this is not found, a new row is inserted according to the same rules as for the statement [INSERT](javascript:call_link\('abapinsert_source.htm'\)).

If the change would produce a duplicate entry in a unique secondary index, it is not executed and sy-subrc is set to 4.

[Implicit ABAP SQL client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) applies, in which a [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry") specified in wa is ignored. The current client is used by default. The addition [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to an explicitly specified client. The addition [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\)) can be used to switch to the client specified in wa.

[Views](javascript:call_link\('abenview_glosry.htm'\) "Glossary Entry") whose fields are all key fields should not be written to using MODIFY FROM. For [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), this produces a syntax check warning and for [DDIC projection views](javascript:call_link\('abenddic_proj_view_glosry.htm'\) "Glossary Entry") a syntax error or runtime error.

Hints

-   The wa work area should always be declared with reference to the DDIC database table or the [DDIC view](javascript:call_link\('abenddic_view_glosry.htm'\) "Glossary Entry") in the ABAP Dictionary. For the derivation of [LOB handle structures](javascript:call_link\('abenlob_handle_structure_glosry.htm'\) "Glossary Entry"), there are special [additions](javascript:call_link\('abaptypes_lob_handle.htm'\)) of the statements TYPES and *\[*CLASS-*\]*DATA.
-   Exceptions due to invalid values can also be raised in compatible work areas. For example, components of the types d and t can contain invalid dates and times that are not accepted by columns of the types DATN and TIMN.
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") is specified as a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) for the work area wa, for which the data type is inferred using the # character, a structure consisting of all the database table columns is created as the type.
-   If the DDIC database table or DDIC view is specified statically, a [short form](javascript:call_link\('abapmodify_obsolete.htm'\)) can be specified outside of classes. This means that the work area specified using FROM wa can be omitted if a [table work area](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry") dbtab for the respective DDIC database table or the DDIC view is declared using the statement TABLES. The system then implicitly adds the addition FROM dbtab to the MODIFY statement.

Example

Creation or changing of a [message](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") in the DDIC database table T100. If there is no message with the number 100 in the MYMSGCLASS message class in English, it will be created. Otherwise, only the text is changed.

FINAL(message\_wa) = VALUE t100(
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
  msgnr = '100'
  text  = 'Some new message ...'  ) ).

Alternative 2   

... TABLE @itab*|*@( expr )

Effect

When an internal table is specified as a host variable [@itab](javascript:call_link\('abenabap_sql_host_variables.htm'\)) or host expression [@( expr )](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), its rows are evaluated to overwrite existing rows or to insert new rows. The row type of the internal table must meet the [prerequisites](javascript:call_link\('abenabap_sql_wa.htm'\)) for use in ABAP SQL statements.

This behavior is platform-dependent and follows one of the following patterns depending on the database system:

-   UPDATE followed by INSERT:
    
    -   First, the same function as for [UPDATE FROM TABLE](javascript:call_link\('abapupdate_source.htm'\)) is executed for all rows of the internal table.
    -   Next, the same function as for [INSERT FROM TABLE](javascript:call_link\('abapinsert_source.htm'\)) is executed for all rows. Here, any rows that have the same [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") or unique [secondary index](javascript:call_link\('abensecondary_index_glosry.htm'\) "Glossary Entry") are ignored.
    
    The processing of the rows in the internal table can also be split into blocks depending on the database system.
    
-   Row by row MODIFY
    
    In a loop, each row in the internal table is processed in accordance with the rule above for MODIFY ... FROM wa. Here, the database system specifies whether processing continues in cases where a row could not be inserted due to a unique secondary index.
    

These two platform-dependent processing methods can produce different results in cases where the DDIC database table has unique secondary indexes (see [executable example](javascript:call_link\('abenbulk_modify_abexa.htm'\))).

If the change to a row in the internal table would produce a duplicate entry in a unique secondary index, the corresponding row is not inserted and sy-subrc is set to 4. If the internal table is empty, no rows are processed. However, sy-subrc is still set to 0. The system field sy-dbcnt is set to the number of rows that are actually processed.

Hints

-   To prevent platform-dependent behavior, MODIFY ... FROM itab should only be applied to DDIC database tables without unique secondary indexes. If not, the required behavior must be programmed explicitly using UPDATE and INSERT or using LOOP AT itab and MODIFY.
-   If a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") as a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) is specified as an internal table itab, for which the data type is inferred using the # character, a structured standard table whose row type consists of all the database table columns with an empty table key is created as the type.
-   When an internal table is specified, [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") can be used as a source, but no [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry") can be created.

Example

Creation or changing of multiple rows in DDIC database table DEMO\_UPDATE. This DDIC database table does not have a unique secondary index and the result is therefore not platform-dependent.

TYPES itab TYPE TABLE OF demo\_update WITH EMPTY KEY.
FINAL(itab) = VALUE itab(
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

Alternative 3   

... ( SELECT subquery\_clauses *\[*UNION*|*INTERSECT*|*EXCEPT ...*\]* ) ...

Effect

If a parenthesized [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") is specified, the rows in the result set defined by [subquery\_clauses](javascript:call_link\('abapinsert_from_select.htm'\)) are evaluated to overwrite the existing rows or to insert new rows. The language elements [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), and [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple subqueries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply to specifying clauses.

When used with a subquery, the statement MODIFY is platform-dependent, as above when an internal table is specified, and follows one of the two following database-dependent patterns:

-   UPDATE followed by INSERT
-   Row by row MODIFY

With respect to the following actions,

-   client handling,
-   inserting or modifying the data in the DDIC database table or view, and
-   handling of null values,

the same rules and notes apply as when using a subquery as a [data source](javascript:call_link\('abapinsert_source.htm'\)) of the statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)). In particular, a subquery cannot be used if [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is enabled for the table to be modified.

If the result set of the subquery is empty, no rows are processed and sy-subrc is set to 4.

A subquery in the statement MODIFY is not supported by all databases. This means a syntax check warning from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") can occur that can be hidden using the pragma ##db\_feature\_mode\[modify\_from\_select\]. If this is detected at runtime on a database that does not support the pragma, a catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.

Hints

-   The constant MODIFY\_FROM\_SELECT of the class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can be used to query whether the current database supports subqueries in the statement MODIFY.
-   When a subquery is used in the statement MODIFY, the syntax check is performed in [strict mode](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)) from Release 7.53, which handles the statement more strictly than the regular syntax check.

Example

A subquery of the statement MODIFY reads all rows in the database table demo\_join3 and uses the result set to modify the database table demo\_join1. Two rows of the result set overwrite existing rows in demo\_join1 and a row is inserted. Only if logging is disabled for DDIC database table DEMO\_JOIN1, a subquery can be used. Otherwise, the data must be inserted into an internal table that serves as a source for the modification.

DELETE FROM demo\_join1.
INSERT demo\_join1
  FROM TABLE @( VALUE #( ( a = 'a1' b = 'b1' c = 'c1' d = 'd1' )
                         ( a = 'a2' b = 'b2' c = 'c2' d = 'd2' ) ) ).
DELETE FROM demo\_join3.
INSERT demo\_join3
  FROM TABLE @( VALUE #( ( i = 'a1' j = 'j1' k = 'k1' l = 'l1' )
                         ( i = 'a2' j = 'j2' k = 'k2' l = 'l2' )
                         ( i = 'i3' j = 'j3' k = 'k3' l = 'l3' ) ) ).
IF cl\_dbi\_utilities=>is\_logging\_on( 'DEMO\_JOIN1' ) IS INITIAL.
  MODIFY demo\_join1 FROM ( SELECT i, j, k, l FROM demo\_join3 )
         ##logging\_versus\_from\_select\[demo\_join1\].
ELSE.
  SELECT i, j, k, l FROM demo\_join3
    INTO TABLE @FINAL(buffer).
  MODIFY demo\_join1 FROM TABLE @buffer.
ENDIF.
SELECT \*
       FROM demo\_join1
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).