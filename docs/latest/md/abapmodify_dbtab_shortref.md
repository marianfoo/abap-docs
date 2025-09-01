---
title: "MODIFY dbtab - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm) Syntax MODIFY dbtabview(target_syntax) USING CLIENT clnt  CLIENT SPECIFIED CONNECTION con(con_syntax) FROM  waTABLE itab( SELECT subquery_clauses )
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab_shortref.htm"
abapFile: "abapmodify_dbtab_shortref.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "data", "internal-table", "abapmodify", "dbtab", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  M

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20dbtab%2C%20ABAPMODIFY_DBTAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm)

Syntax

MODIFY dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Inserts rows into or deletes them from a database table or a DDIC table view.

Additions   

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   [FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_source.htm)
    Specifies the rows to be inserted as a wa work area, as rows of an internal table itab, or as the result set of a subquery.