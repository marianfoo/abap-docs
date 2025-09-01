  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

INSERT dbtab - Short Reference

[Reference](javascript:call_link\('abapinsert_dbtab.htm'\))

Syntax

INSERT *{* *{*INTO dbtab*|*view*|*(target\_syntax)
          *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
          *\[*CONNECTION con*|*(con\_syntax)*\]*
          VALUES wa*}*
       *|* *{* dbtab*|*view*|*(target\_syntax)
           *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
           *\[*CONNECTION con*|*(con\_syntax)*\]*
           FROM wa*|**{*TABLE itab *\[*ACCEPTING DUPLICATE KEYS*\]**}**|*( SELECT subquery\_clauses ) *}* *}*.

Effect

[ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statement. Inserts rows into a database table or into a DDIC table view.

Additions

-   [INTO dbtab*|*view*|*(target\_syntax)](javascript:call_link\('abapiumd_target.htm'\))
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](javascript:call_link\('abapiumd_client.htm'\))
    Switches implicit [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to the client specified in the data source.
-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapiumd_conn.htm'\))
    Makes the change on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
-   [*{*VALUES wa*}**|**{*FROM wa*}**|**{*FROM TABLE itab*}*](javascript:call_link\('abapinsert_source.htm'\))
    Specifies the rows to be inserted as a wa work area or as rows of an itab internal table.
-   [ACCEPTING DUPLICATE KEYS](javascript:call_link\('abapinsert_source.htm'\))
    Prevents an exception if rows that already exist are to be inserted.
-   [SELECT subquery\_clauses](javascript:call_link\('abapinsert_source.htm'\))
    Specifies the inserted rows as a result set of a subquery SELECT subquery\_clauses.