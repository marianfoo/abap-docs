  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\)) →  [DELETE dbtab](javascript:call_link\('abapdelete_dbtab.htm'\)) → 

DELETE dbtab - cond

[Quick Reference](javascript:call_link\('abapdelete_dbtab_shortref.htm'\))

Syntax

... *\[*WHERE [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\))*\]*
    *\[*[db\_hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry")*\]*
    *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]* ...

Extras:

[1\. ... WHERE sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... db\_hints](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*](#!ABAP_ADDITION_3@3@)

Effect

In the variant DELETE FROM target of the statement [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), these additions delete the rows in question.

Addition 1

... WHERE sql\_cond

Effect

The addition WHERE determines which rows in a database table or view are deleted. Those rows are deleted for which the logical expression [sql\_cond](javascript:call_link\('abenwhere_logexp.htm'\)) is true. The logical expression sql\_cond is subject to the restriction that no subqueries can be evaluated on the modified database table. If there is no database row that satisfies the WHERE condition, no rows are deleted and sy-subrc is set to 4. If no WHERE condition is specified, all rows are deleted or as many rows as specified by the addition UP TO.

The [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") of a client-specific target can only be used as an operand in the WHERE condition if automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") is switched off using the addition [CLIENT SPECIFIED](javascript:call_link\('abapdelete_target.htm'\)). This is checked in full in the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05.

Notes

-   If the data source is accessed using generic [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"), the buffered area must be specified in full in the WHERE condition. If not, buffering is bypassed.
    
-   If the data sources are accessed using single record buffering, the conditions joined using AND in the WHERE condition must be specified for all key fields of the primary key. If not, buffering is bypassed.
    

Example

In the following example, all today's flights of an airline in which no seats are occupied are deleted from the database table SFLIGHT (see also, example for [dtab-source](javascript:call_link\('abapdelete_source.htm'\))).

DATA carrid TYPE sflight-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DELETE FROM sflight
WHERE carrid = @carrid AND
       fldate = @sy-datum AND
       NOT seatsocc > 0.

Addition 2

... db\_hints

Effect

In the variant DELETE FROM TARGET, [db\_hints](javascript:call_link\('abenosql_db_hints.htm'\)) can be used to specify [database hints](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry").

Addition 3

... *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*

Effect

The addition ORDER BY ... is used to sort the rows defined by the WHERE condition. The addition OFFSET is used to delete only rows from the counter o. The addition UP TO restricts the number of rows to delete to n.

The addition OFFSET can only be specified together with ORDER BY .... The addition ORDER BY ... cannot be specified without OFFSET or UP TO. If the addition UP TO is specified without ORDER BY ..., it is not possible to define which of the rows in question are deleted.

n and o expect [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)), [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)), or literals with the type i that can represent all non-negative numbers of the value range of i except its maximum value +2,147,483,647. If 0 is specified for n, this maximum value is used. If 0 is specified for o, the addition OFFSET is ignored. Only the types b, s, i, or int8 can be specified. If n or o is specified as a literal or constant, the value 0 is not allowed. A host variable must be prefixed by the escape character @.

The addition ORDER BY ... has the same [syntax and semantics](javascript:call_link\('abaporderby_clause.htm'\)) as in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement, but with the difference that it is not possible to sort explicitly by the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry") in the DELETE statement. The SELECT\-specific restrictions, on the other hand, are ignored.

The additions OFFSET and UP TO cannot be used when accessing [pooled tables](javascript:call_link\('abenpooled_table_glosry.htm'\) "Glossary Entry")/ [cluster tables](javascript:call_link\('abencluster_table_glosry.htm'\) "Glossary Entry") or on [projection views](javascript:call_link\('abenprojection_view_glosry.htm'\) "Glossary Entry").

Notes

-   The addition UP TO can be used to prevent errors when deleting tables with a very large number of entries. Errors of this type can occur, for example, if the internal transaction manager has run out of memory. Exceptions can be raised on the database here if UP TO is not used and not followed by a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"). These resource bottlenecks can be prevented by distributing the delete action to multiple DELETE statements and hence deleting the log entries in question.
    
-   If the addition ORDER BY ... is specified but not sorted uniquely, it is not possible to define which rows are deleted.
    
-   A DELETE statement with the additions OFFSET and UP TO is executed on the database as a single operation (if possible). In databases not supported by the additions OFFSET and ORDER BY, the statements SELECT and DELETE are separated internally. If [database table logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is enabled, these statements are always separated. This is generally slower than executing a single database operation.
    
-   When the additions OFFSET or UP TO is used, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_751.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Deletes a database table filled using [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) in multiple iterations.

TYPES bigtab TYPE TABLE OF demo\_big\_table WITH EMPTY KEY.
MODIFY demo\_big\_table FROM TABLE
  @( VALUE bigtab( FOR i = 1 UNTIL i > 1111111
     ( id = i value = |{ i }| ) ) ).
DATA subrc TYPE sy-subrc.
DATA dbcnt TYPE sy-dbcnt.
WHILE subrc = 0.
  DELETE FROM demo\_big\_table UP TO 100000 ROWS.
  subrc = sy-subrc.
  dbcnt = sy-dbcnt.
  cl\_demo\_output=>write( |sy-subrc: { subrc
                       }, sy-dbcnt: { dbcnt } | ).
  COMMIT CONNECTION default.
ENDWHILE.
cl\_demo\_output=>display( ).