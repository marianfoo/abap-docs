  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: OPEN CURSOR, ABAPOPEN_CURSOR, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
 for improvement:)

OPEN CURSOR

[Short Reference](javascript:call_link\('abapopen_cursor_shortref.htm'\))

Syntax

OPEN CURSOR *\[*WITH HOLD*\]* @dbcur*|*@DATA(dbcur) FOR
  *\[*[WITH](javascript:call_link\('abapwith.htm'\))
    +cte1 AS ( SELECT [subquery\_clauses](javascript:call_link\('abapwith_subquery.htm'\)) )*\[*,
    +cte2 AS ( SELECT [subquery\_clauses](javascript:call_link\('abapwith_subquery.htm'\)) )
    ...*\]**\]*
  SELECT [mainquery\_clauses](javascript:call_link\('abapopen_cursor_mainquery.htm'\))
  *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]*
  *\[*[UP TO ...*\]* *\[*OFFSET ...*\]*](javascript:call_link\('abapselect_up_to_offset.htm'\))
  *\[*[abap\_options](javascript:call_link\('abapselect_additions.htm'\))*\]*.

Addition:

[... WITH HOLD](#!ABAP_ONE_ADD@1@)

Effect

The [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement OPEN CURSOR opens a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") for the result set of the [main query](javascript:call_link\('abenmainquery_glosry.htm'\) "Glossary Entry") defined after FOR and links a cursor variable dbcur with this database cursor. The result set of the main query can be read with the statement [FETCH](javascript:call_link\('abapfetch.htm'\)).

The main query is specified after FOR as follows:

-   The main query is specified using the language element SELECT, and its clauses and additions [mainquery\_clauses](javascript:call_link\('abapopen_cursor_mainquery.htm'\)) define the result set.
-   The language element [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)) can be used to combine the result sets of multiple queries. In this case, special rules [query\_clauses](javascript:call_link\('abapunion_clause.htm'\)) apply when specifying clauses.
-   Finally, the optional additions [UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)), and [abap\_options](javascript:call_link\('abapselect_additions.htm'\)) can be specified.
-   Optional [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") can be defined in the main query using the language element WITH. When defining and using common table expressions, the same applies as when using WITH to introduce a [standalone statement](javascript:call_link\('abapwith.htm'\)).

The following can be specified for the cursor:

-   A [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) dbcur declared with the special predefined data type [cursor](javascript:call_link\('abenbuilt_in_types_complete.htm'\)). A database cursor dbcur that has already been opened cannot be opened again.
-   An [inline declaration](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry") of a corresponding [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)) dbcur. Only the [declaration operator](javascript:call_link\('abendeclaration_operator_glosry.htm'\) "Glossary Entry") [DATA](javascript:call_link\('abendata_inline.htm'\)) is possible and must be prefixed with the escape character @. The declaration operator [FINAL](javascript:call_link\('abenfinal_inline.htm'\)) is not possible here.

A row of the result set is always assigned to an opened database cursor as a cursor position. After the statement OPEN CURSOR, the database cursor is positioned in front of the first row of the result set.

In a program, a maximum of 17 database cursors can be open simultaneously across the [ABAP SQL interface](javascript:call_link\('abenabap_sql_interface_glosry.htm'\) "Glossary Entry"). If an attempt is made to open more than 17 database cursors, the runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR occurs. An open database cursor can be closed using the statement [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)). In addition, any open database cursors are closed by [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") or [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") if these occur after the first use of the cursor in a [FETCH](javascript:call_link\('abapfetch.htm'\)) statement.

If a cursor variable dbcur of an open database cursor is assigned to another cursor variable or passed as a parameter, the latter is linked with the same database cursor at the same position. A cursor variable of an open database cursor can also be passed to externally called [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") to access the database cursor from there.

Hints

-   It is not recommended that cursor variables are assigned to each other and they should be set only using the statements OPEN CURSOR and CLOSE CURSOR.
-   If [write accesses](javascript:call_link\('abenabap_sql_writing.htm'\)) are made on a DDIC database table for which a database cursor is open, the result set is database-dependent and undefined. This kind of parallel access should therefore be avoided.
-   As well as explicit ABAP SQL reads using OPEN CURSOR and [SELECT](javascript:call_link\('abapselect.htm'\)) loops, the ABAP SQL interface also opens database cursors implicitly, such as when loading [buffered](javascript:call_link\('abensap_puffering.htm'\)) tables. The runtime error DBSQL\_TOO\_MANY\_OPEN\_CURSOR can be avoided by not using explicit reads to exploit the maximum number of open database cursors.
-   If a CDS view is defined as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) for a DDIC database table or DDIC database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the SELECT statement of OPEN CURSOR, the statement [FETCH](javascript:call_link\('abapfetch.htm'\)) accesses the CDS view and not the DDIC database table or the DDIC database view.
-   Host variables without the escape character @ are [obsolete](javascript:call_link\('abenabap_sql_hostvar_obsolete.htm'\)). The escape character @ must be specified in the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP05. The use of an inline declaration for dbcur activates the strict mode with [release 7.51](javascript:call_link\('abenabap_sql_strictmode_751.htm'\)) and higher. If a statement OPEN CURSOR is checked in accordance with the rules for the [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)) from Release 7.50, each statement [FETCH](javascript:call_link\('abapfetch.htm'\)) that accesses the database cursor is also checked in strict mode. Conversely, the strict syntax check mode from [Release 7.54](javascript:call_link\('abenabap_sql_strictmode_754.htm'\)) also applies the strict mode for the associated statement OPEN CURSOR in the statement FETCH. A violation of the rules specified by FETCH in OPEN CURSOR raises an exception of the class CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.

Example

Opens two cursors for the DDIC database table SPFLI. For more information on how to use this function, see the example for [FETCH](javascript:call_link\('abapfetch.htm'\)).

OPEN CURSOR @DATA(dbcur1) FOR
  SELECT carrid, COUNT(\*) AS count
         FROM spfli
         GROUP BY carrid
         ORDER BY carrid.
OPEN CURSOR @DATA(dbcur2) FOR
  SELECT \*
         FROM spfli
         ORDER BY carrid.

Addition   

... WITH HOLD

Effect

If the addition WITH HOLD is specified, the database cursor is not closed in a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") executed using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry").

The addition WITH HOLD can be used only in reads performed on the standard database. It cannot be specified together with the addition [CONNECTION](javascript:call_link\('abapselect_additions.htm'\)).

Hints

-   A Native SQL database commit closes the database cursor only after the cursor is used in a [FETCH](javascript:call_link\('abapfetch.htm'\)) statement. A Native SQL database commit between the statement OPEN CURSOR and the first FETCH statement does not close the cursor.
-   The addition WITH HOLD is ignored by the following:
    
    -   Implicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry")
    -   Commits made by the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))
    -   Any rollbacks
    
    These always close the database cursor.
    
-   A Native SQL database commit can be made explicitly using the statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)).

Example

The addition WITH HOLD prevents the database cursor from being closed using an explicit database commit with the statement [COMMIT CONNECTION](javascript:call_link\('abapcommit_rollback_connection.htm'\)) and hence prevents an exception from being raised in the second [FETCH](javascript:call_link\('abapfetch.htm'\)) statement. An exception is, however, raised after the statement COMMIT WORK.

DATA wa TYPE scarr.
OPEN CURSOR WITH HOLD @DATA(dbcur) FOR
  SELECT \*
         FROM scarr.
FETCH NEXT CURSOR @dbcur INTO @wa.
COMMIT CONNECTION default.
FETCH NEXT CURSOR @dbcur INTO @wa.
CLOSE CURSOR @dbcur.
TRY.
    OPEN CURSOR WITH HOLD @dbcur FOR
      SELECT \*
             FROM scarr.
    COMMIT WORK.
    FETCH NEXT CURSOR @dbcur INTO @wa.
    CLOSE CURSOR @dbcur.
  CATCH cx\_sy\_open\_sql\_db.
    ...
ENDTRY.

Continue
[OPEN CURSOR, mainquery\_clauses](javascript:call_link\('abapopen_cursor_mainquery.htm'\))
[FETCH](javascript:call_link\('abapfetch.htm'\))
[CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\))
![Example](exa.gif "Example") [OPEN CURSOR, Read Data Using Cursor](javascript:call_link\('abenopen_cursor_abexa.htm'\))