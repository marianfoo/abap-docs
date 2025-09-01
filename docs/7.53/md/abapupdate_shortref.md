---
title: "UPDATE - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm) Syntax UPDATE dbtabview(target_syntax) USING CLIENT clnt  CLIENT SPECIFIED CONNECTION con(con_syntax)   SET col1 = fcol1 = col1 + fcol1 = col1 - f
version: "7.53"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_shortref.htm"
abapFile: "abapupdate_shortref.htm"
keywords: ["insert", "update", "do", "if", "try", "class", "data", "internal-table", "abapupdate", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  U

UPDATE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm)

Syntax

UPDATE dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       *{* *{* SET *{*col1 = f*}**|**{*col1 = col1 + f*}**|**{*col1 = col1 - f*}**|**{*(expr\_syntax1)*}*,
               *{*col2 = f*}**|**{*col2 = col2 + f*}**|**{*col2 = col2 - f*}**|**{*(expr\_syntax2)*}*,
                ...
               *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm)*\]* *}*
       *|* *{* FROM wa*|**{*TABLE itab*}* *}* *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Changes rows in a database table or in a classic view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_target.htm)
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_target.htm)
    Switches automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_target.htm)
    Deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_update_modify_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [SET ... col = f ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm)
    Assigns the content of f to the column col.
    
-   [SET ... col = col + f ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm)
    Adds the content of f to the column col.
    
-   [SET ... col = col - f ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm)
    Subtracts the content of f from the column col.
    
-   [SET ... (expr\_syntax) ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_source.htm)
    Changed specified dynamically in expr\_syntax.
    
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_source.htm)
    Specifies the rows to be changed using a condition sql\_cond.
    
-   [*{*FROM wa*}**|**{*FROM TABLE itab*}*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_source.htm)
    Overwrites rows with a work area wa or with the rows of an internal table itab.