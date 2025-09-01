  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  M

MODIFY dbtab - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm)

Syntax

MODIFY dbtab*|*view*|*(target\_syntax)
       *\[*USING CLIENT clnt*\]* *|* *\[*CLIENT SPECIFIED*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
       FROM *{* wa*|**{*TABLE itab*}* *}*.

Effect

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. Inserts rows into or deletes them from a database table or a classic view.

Additions

-   [dbtab*|*view*|*(target\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm)
    Specifies the database table and/or view statically or dynamically.
    
-   [USING CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm)
    Switches automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the client specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_target.htm)
    Deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_update_modify_conn.htm)
    Makes the change on a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [FROM *{* wa*|**{*TABLE itab*}* *}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_source.htm)
    Specifies the rows to be inserted as a wa work area or as rows of an itab internal table.