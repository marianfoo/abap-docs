---
title: "UPDATE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) Syntax UPDATE dbtabview(target_syntax) USING CLIENT clnt  CLIENT SPECIFIED CONNECTION con(con_syntax)   SET col1 = fcol1 = col1 + fcol1 = col1
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_shortref.htm"
abapFile: "abapupdate_shortref.htm"
keywords: ["select", "update", "do", "if", "try", "data", "internal-table", "abapupdate", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  U

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UPDATE%2C%20ABAPUPDATE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UPDATE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm)

Syntax

UPDATE dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       *{* *{* SET *{*col1 = f*}**|**{*col1 = col1 + f*}**|**{*col1 = col1 - f*}**|**{*(expr\_syntax1)*}*,
               *{*col2 = f*}**|**{*col2 = col2 + f*}**|**{*col2 = col2 - f*}**|**{*(expr\_syntax2)*}*,
                ...
               *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cond_shortref.htm)*\]* *}*
       *|* *{* FROM wa*|**{*TABLE itab*}* *}*
                *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind
                           *|* (indicator\_syntax)*\]* *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Changes lines in a database table or in a DDIC table view.

Additions   

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   [SET ... col = f ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_expression.htm)
    Assigns the content of f to the column col.
-   [SET ... col = col + f ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_expression.htm)
    Adds the content of f to the column col.
-   [SET ... col = col - f ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_expression.htm)
    Subtracts the content of f from the column col.
-   [SET ... (expr\_syntax) ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_source.htm)
    Changed specified dynamically in expr\_syntax.
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_source.htm)
    Specifies the lines to be changed using a condition sql\_cond.
-   [*{*FROM wa*}**|**{*FROM TABLE itab*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_source.htm)
    Overwrites rows with a work area wa or with the lines of an internal table itab.
-   [INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate_set_indicator.htm)
    Allows individual fields to be selected for updating instead of updating all fields of a line.