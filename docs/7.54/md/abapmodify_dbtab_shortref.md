---
title: "MODIFY dbtab - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm) Syntax MODIFY dbtabview(target_syntax) USING CLIENT clnt  CLIENT SPECIFIED CONNECTION con(con_syntax) FROM  waTABLE itab( SELECT subquery_clauses ) .
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab_shortref.htm"
abapFile: "abapmodify_dbtab_shortref.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "internal-table", "abapmodify", "dbtab", "shortref"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  M

MODIFY dbtab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab.htm)

Syntax

MODIFY dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Inserts rows into or deletes them from a database table or a classic view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_source.htm)
    Specifies the rows to be inserted as a wa work area, as rows of an internal table itab, or as the results set of a subquery.