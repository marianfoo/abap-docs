  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  D

DELETE dbtab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm)

Syntax

DELETE *{* *{* FROM dbtab*|*view*|*(target\_syntax)
           *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
           *\[*CONNECTION con*|*(con\_syntax)*\]*
           *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]* *\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]* *}*
       *|* *{* dbtab*|*view*|*(target\_syntax) *\[*CLIENT SPECIFIED*\]*
                                      *\[*CONNECTION con*|*(con\_syntax)*\]* *}*
           FROM wa*|**{*TABLE itab*}* *}*.

Effect

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Deletes rows from a database table or a classic view.

Additions

-   [FROM dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_target.htm)
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_target.htm)
    Switches automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_target.htm)
    Deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_where.htm)
    Uses a sql\_cond condition to specify the rows that are to be deleted.
    
-   [*\[*ORDER BY ... *\[*OFFSET o*\]**\]* *\[*UP TO n ROWS*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_where.htm)
    Specifies an offset and the maximum number of rows to delete. ORDER BY can be used (or must be used) to define an order.
    
-   [FROM *{* wa*|**{*TABLE itab*}* *}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_source.htm)
    Specifies the rows that are to be deleted by matching them with the key values of a work area wa or the rows of an internal table itab.