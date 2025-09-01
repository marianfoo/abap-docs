  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  I

INSERT dbtab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_dbtab.htm)

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

[ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Inserts rows into a database table or into a classic view.

Additions

-   [INTO dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_target.htm)
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in the data source.
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapiumd_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [*{*VALUES wa*}**|**{*FROM wa*}**|**{*FROM TABLE itab*}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm)
    Specifies the rows to be inserted as a wa work area or as rows of an itab internal table.
    
-   [ACCEPTING DUPLICATE KEYS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm)
    Prevents an exception if rows that already exist are to be inserted.
    
-   [SELECT subquery\_clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_source.htm)
    Specifies the inserted rows as a results set of a subquery SELECT subquery\_clauses.