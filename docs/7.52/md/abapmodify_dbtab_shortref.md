  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

MODIFY dbtab - Quick reference

[Reference](javascript:call_link\('abapmodify_dbtab.htm'\))

Syntax

MODIFY dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       FROM *{* wa*|**{*TABLE itab*}* *}*.

Effect

[Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statement. Inserts rows into or deletes them from a database table or a classic view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](javascript:call_link\('abapmodify_target.htm'\))
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](javascript:call_link\('abapmodify_target.htm'\))
    Switches automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](javascript:call_link\('abapmodify_target.htm'\))
    Deactivates automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapinsert_update_modify_conn.htm'\))
    Makes the change on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
    
-   [FROM *{* wa*|**{*TABLE itab*}* *}*](javascript:call_link\('abapmodify_source.htm'\))
    Specifies the rows to be inserted as a wa work area or as rows of an itab internal table.