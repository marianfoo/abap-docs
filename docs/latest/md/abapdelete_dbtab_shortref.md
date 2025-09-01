---
title: "DELETE dbtab - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) Syntax DELETE   FROM dbtabview(target_syntax) USING CLIENT clnt  CLIENT SPECIFIED CONNECTION con(con_syntax) WHERE sql_cond(https://help.sap.com/doc/ab
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab_shortref.htm"
abapFile: "abapdelete_dbtab_shortref.htm"
keywords: ["delete", "do", "if", "try", "data", "internal-table", "abapdelete", "dbtab", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20dbtab%2C%20ABAPDELETE_DBTAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm)

Syntax

DELETE *{* *{* FROM dbtab*|*view*|*(target\_syntax)
           *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
           *\[*CONNECTION con*|*(con\_syntax)*\]*
           *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)*\]* *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]* *}*
       *|* *{* dbtab*|*view*|*(target\_syntax) *\[*CLIENT SPECIFIED*\]*
                                      *\[*CONNECTION con*|*(con\_syntax)*\]* *}*
           FROM wa*|**{*TABLE itab*}* *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Deletes rows from a database table or a DDIC table view.

Additions   

-   [FROM dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in wa or itab.
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_where.htm)
    Uses a sql\_cond condition to specify the rows that are to be deleted.
-   [*\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_where.htm)
    Specifies an offset and the maximum number of rows to delete. ORDER BY can be used (or must be used) to define an order.
-   [FROM *{* wa*|**{*TABLE itab*}* *}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_source.htm)
    Specifies the rows that are to be deleted by matching them with the key values of a work area wa or the rows of an internal table itab.