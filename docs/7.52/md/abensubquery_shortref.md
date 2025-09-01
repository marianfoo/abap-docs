  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

subquery - Quick reference

Syntax

... ( SELECT *{* ...
               FROM ... *}*
           *|* *{* FROM ...
               FIELDS ... *}*
             *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]*
             *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]* ) ...

Effect

Parenthesized SELECT statement that can be used in conditions [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm) of [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements, in common table expressions of the statement [WITH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwith_shortref.htm), or as a data source of an [INSERT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab_shortref.htm) for a subquery.

Additions

-   As in the statement [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm).
    
-   The additions SINGLE, ORDER BY, and INTO cannot be used.
    
-   Further additions may also be excluded, depending on how they are used.