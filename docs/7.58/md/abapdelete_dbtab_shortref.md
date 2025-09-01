  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20dbtab%2C%20ABAPDELETE_DBTAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE dbtab - Short Reference

[Reference](javascript:call_link\('abapdelete_dbtab.htm'\))

Syntax

DELETE *{* *{* FROM dbtab*|*view*|*(target\_syntax)
           *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
           *\[*CONNECTION con*|*(con\_syntax)*\]*
           *\[*WHERE [sql\_cond](javascript:call_link\('abensql_cond_shortref.htm'\))*\]* *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]* *}*
       *|* *{* dbtab*|*view*|*(target\_syntax) *\[*CLIENT SPECIFIED*\]*
                                      *\[*CONNECTION con*|*(con\_syntax)*\]* *}*
           FROM wa*|**{*TABLE itab*}* *}*.

Effect

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Deletes rows from a database table or a DDIC table view.

Additions   

-   [FROM dbtab*|*view*|*(target\_syntax)](javascript:call_link\('abapiumd_target.htm'\))
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in wa or itab.
-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapiumd_conn.htm'\))
    Makes the change on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
-   [WHERE sql\_cond](javascript:call_link\('abapdelete_where.htm'\))
    Uses a sql\_cond condition to specify the rows that are to be deleted.
-   [*\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*](javascript:call_link\('abapdelete_where.htm'\))
    Specifies an offset and the maximum number of rows to delete. ORDER BY can be used (or must be used) to define an order.
-   [FROM *{* wa*|**{*TABLE itab*}* *}*](javascript:call_link\('abapdelete_source.htm'\))
    Specifies the rows that are to be deleted by matching them with the key values of a work area wa or the rows of an internal table itab.