  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

subquery - Short Reference

Syntax

... ( SELECT *{* ...
               FROM ... *}*
           *|* *{* FROM ...
               FIELDS ... *}*
             *\[*WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)*\]*
             *\[*GROUP BY ...*\]* *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)*\]* ) ...

Effect

Parenthesized SELECT statement that can be used in conditions [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm) of [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements, in common table expressions of the statement [WITH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwith_shortref.htm), or as a data source of an [INSERT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab_shortref.htm) for a subquery.

Additions

-   As in the statement [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_shortref.htm).
-   The additions SINGLE, ORDER BY, and INTO cannot be used.
-   Further additions may also be excluded, depending on how they are used.