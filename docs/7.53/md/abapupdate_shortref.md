  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  U

UPDATE - Quick reference

[Reference](javascript:call_link\('abapupdate.htm'\))

Syntax

UPDATE dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       *{* *{* SET *{*col1 = f*}**|**{*col1 = col1 + f*}**|**{*col1 = col1 - f*}**|**{*(expr\_syntax1)*}*,
               *{*col2 = f*}**|**{*col2 = col2 + f*}**|**{*col2 = col2 - f*}**|**{*(expr\_syntax2)*}*,
                ...
               *\[*WHERE [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]* *}*
       *|* *{* FROM wa*|**{*TABLE itab*}* *}* *}*.

Effect

[ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Changes rows in a database table or in a classic view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](javascript:call_link\('abapupdate_target.htm'\))
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](javascript:call_link\('abapupdate_target.htm'\))
    Switches automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](javascript:call_link\('abapupdate_target.htm'\))
    Deactivates automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapinsert_update_modify_conn.htm'\))
    Makes the change on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
    
-   [SET ... col = f ...](javascript:call_link\('abapupdate_set_expression.htm'\))
    Assigns the content of f to the column col.
    
-   [SET ... col = col + f ...](javascript:call_link\('abapupdate_set_expression.htm'\))
    Adds the content of f to the column col.
    
-   [SET ... col = col - f ...](javascript:call_link\('abapupdate_set_expression.htm'\))
    Subtracts the content of f from the column col.
    
-   [SET ... (expr\_syntax) ...](javascript:call_link\('abapupdate_source.htm'\))
    Changed specified dynamically in expr\_syntax.
    
-   [WHERE sql\_cond](javascript:call_link\('abapupdate_source.htm'\))
    Specifies the rows to be changed using a condition sql\_cond.
    
-   [*{*FROM wa*}**|**{*FROM TABLE itab*}*](javascript:call_link\('abapupdate_source.htm'\))
    Overwrites rows with a work area wa or with the rows of an internal table itab.