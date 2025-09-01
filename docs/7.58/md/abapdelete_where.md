---
title: "DELETE dbtab, cond"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab_shortref.htm) Syntax ... WHERE sql_cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm) db_hints(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/ab
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_where.htm"
abapFile: "abapdelete_where.htm"
keywords: ["select", "delete", "do", "while", "if", "try", "data", "types", "abapdelete", "where"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Write Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm) →  [DELETE dbtab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20dbtab%2C%20cond%2C%20ABAPDELETE_WHERE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE dbtab, cond

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab_shortref.htm)

Syntax

... *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasql_cond.htm)*\]*
    *\[*[db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry")*\]*
    *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]* ...

Additions:

[1\. ... WHERE sql\_cond](#!ABAP_ADDITION_1@1@)
[2\. ... db\_hints](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*](#!ABAP_ADDITION_3@3@)

Effect

In the variant DELETE FROM target of the statement [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), these additions determine the rows to be deleted.

Addition 1   

... WHERE sql\_cond

Effect

The addition WHERE determines which rows in a DDIC database table or view are deleted. Those rows are deleted for which the logical expression [sql\_cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_stmt_logexp.htm) is true. The logical expression sql\_cond is subject to the restriction that no subqueries can be evaluated on the DDIC database table to be changed. If there is no database row that satisfies the WHERE condition, no rows are deleted and sy-subrc is set to 4. If no WHERE condition is specified, all rows are deleted or as many rows as specified by the addition UP TO. [Implicit ABAP SQL client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_client_handling.htm) applies. In a client-specific target, only rows in the current client are deleted by default. The [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") of a client-dependent target cannot be specified in the WHERE condition. The addition [USING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapiumd_client.htm) can be used to switch implicit client handling to different clients.

Hints

-   If DDIC database tables or DDIC views are accessed using generic [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry"), the buffered area must be specified completely in the WHERE condition. If not, buffering is bypassed.
-   If DDIC database tables or DDIC views are accessed using single record buffering, the equality conditions joined using AND in the WHERE condition must be specified for all key fields of the primary key. If not, buffering is bypassed.
-   Instead of USING, the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapud_client_obsolete.htm) can also be used outside [strict mode from ABAP release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_754.htm). It disables implicit client handling and the client column can be used in the WHERE condition as an operand.

Example

In the following example, all today's flights of an airline in which no seats are occupied are deleted from the DDIC database table SFLIGHT. See also the example for [dtab-source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_source.htm).

DATA carrid TYPE sflight-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
DELETE FROM sflight
WHERE carrid = @carrid AND
      fldate = @( cl\_demo\_date\_time=>get\_user\_date( ) ) AND
      NOT seatsocc > 0.

Addition 2   

... db\_hints

Effect

In the variant DELETE FROM TARGET, [db\_hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_db_hints.htm) can be used to specify [database hints](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_hint_glosry.htm "Glossary Entry").

Addition 3   

... *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*

Effect

The addition ORDER BY is used to sort the rows defined by the WHERE condition. The addition OFFSET is used to delete only rows from the counter o. The addition UP TO restricts the number of rows to delete to n.

The addition OFFSET can only be specified together with ORDER BY. The addition ORDER BY cannot be specified without OFFSET or UP TO. If the addition UP TO is specified without ORDER BY, it is not possible to define which of the possible rows are deleted.

n and o expect [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm), [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_expressions.htm), or [literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_literals.htm) with the type i, which can represent all non-negative numbers of the value range of i except its maximum value +2,147,483,647. If 0 is specified for n, this maximum value is used. If 0 is specified for o, the addition OFFSET is ignored. Only the types b, s, i, or int8 can be specified. If n or o is specified as a literal or constant, the value 0 is not allowed.

The addition ORDER BY has the same [syntax and semantics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaporderby_clause.htm) as in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement, with the difference that it is not possible to sort explicitly by the [client column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_column_glosry.htm "Glossary Entry") in the DELETE statement. The SELECT\-specific restrictions, on the other hand, are ignored.

The additions OFFSET and UP TO cannot be used when accessing [DDIC projection views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_proj_view_glosry.htm "Glossary Entry").

Hints

-   The addition UP TO can be used to prevent errors when deleting tables with a large number of entries. Errors of this type can occur, for example, if the internal transaction manager has run out of memory. Exceptions can be raised on the database here if UP TO is not used and not followed by a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry"). These resource bottlenecks can be prevented by distributing the delete action to multiple DELETE statements and hence deleting the corresponding log entries.
-   If the addition ORDER BY is specified but does not sort uniquely, it is not defined which rows are deleted.
-   A DELETE statement with the additions OFFSET and UP TO is executed on the database as a single operation, if possible. In databases not supported by the additions OFFSET and ORDER BY, the statements SELECT and DELETE are separated internally. If [database table logging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm) is enabled, these statements are always separated. This is generally slower than executing a single database operation.
-   When the additions OFFSET or UP TO are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_751.htm), which handles the statement more strictly than the regular syntax check.

Example

Deletion of entries from a DDIC database table filled using [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm) in multiple iterations.

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
ENDWHILE.
cl\_demo\_output=>display( ).