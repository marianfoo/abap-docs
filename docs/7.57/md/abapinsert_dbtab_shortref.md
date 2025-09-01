  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  I

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INSERT dbtab, ABAPINSERT_DBTAB_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

INSERT dbtab - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_dbtab.htm)

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

[ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. Inserts rows into a database table or into a DDIC table view.

Additions   

-   [INTO dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   [*{*VALUES wa*}**|**{*FROM wa*}**|**{*FROM TABLE itab*}*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_source.htm)
    Specifies the rows to be inserted as a wa work area or as rows of an itab internal table.
-   [ACCEPTING DUPLICATE KEYS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_source.htm)
    Prevents an exception if rows that already exist are to be inserted.
-   [SELECT subquery\_clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_source.htm)
    Specifies the inserted rows as a result set of a subquery SELECT subquery\_clauses.