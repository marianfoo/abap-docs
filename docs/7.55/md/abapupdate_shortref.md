  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  U

UPDATE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate.htm)

Syntax

UPDATE dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       *{* *{* SET *{*col1 = f*}**|**{*col1 = col1 + f*}**|**{*col1 = col1 - f*}**|**{*(expr\_syntax1)*}*,
               *{*col2 = f*}**|**{*col2 = col2 + f*}**|**{*col2 = col2 - f*}**|**{*(expr\_syntax2)*}*,
                ...
               *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cond_shortref.htm)*\]* *}*
       *|* *{* FROM wa*|**{*TABLE itab*}* *}*
                *\[*INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind
                           *|* (indicator\_syntax)*\]* *}*.

Effect

[ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Changes lines in a database table or in a DDIC table view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
    

-   [USING CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    

-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
    

-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    

-   [SET ... col = f ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm)
    Assigns the content of f to the column col.
    

-   [SET ... col = col + f ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm)
    Adds the content of f to the column col.
    

-   [SET ... col = col - f ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_expression.htm)
    Subtracts the content of f from the column col.
    

-   [SET ... (expr\_syntax) ...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm)
    Changed specified dynamically in expr\_syntax.
    

-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm)
    Specifies the lines to be changed using a condition sql\_cond.
    

-   [*{*FROM wa*}**|**{*FROM TABLE itab*}*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_source.htm)
    Overwrites rows with a work area wa or with the lines of an internal table itab.
    

-   [INDICATORS *\[*NOT*\]* SET STRUCTURE set\_ind](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapupdate_set_indicator.htm)
    Allows individual fields to be selected for updating instead of updating all fields of a line.