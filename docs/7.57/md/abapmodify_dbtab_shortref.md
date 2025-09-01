  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY dbtab, ABAPMODIFY_DBTAB_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

MODIFY dbtab - Short Reference

[Reference](javascript:call_link\('abapmodify_dbtab.htm'\))

Syntax

MODIFY dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*.

Effect

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Inserts rows into or deletes them from a database table or a DDIC table view.

Additions   

-   [dbtab*|*view*|*(target\_syntax)](javascript:call_link\('abapiumd_target.htm'\))
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in the data source.
-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapiumd_conn.htm'\))
    Makes the change on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
-   [FROM *{* wa*|**{*TABLE itab*}**|*( SELECT subquery\_clauses ) *}*](javascript:call_link\('abapmodify_source.htm'\))
    Specifies the rows to be inserted as a wa work area, as rows of an internal table itab, or as the result set of a subquery.