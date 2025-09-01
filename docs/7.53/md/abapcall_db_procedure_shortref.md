  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  C

CALL DATABASE PROCEDURE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_database_procedure.htm)

Syntax

CALL DATABASE PROCEDURE proxy*|*(prox\_name)
    *\[*CONNECTION con*|*(con\_syntax)*\]*
    *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
      *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]* *}*
  *|* *{* *\[*PARAMETER-TABLE ptab*\]* *}*.

Effect

Calls a database procedure of [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") written in [SQLScript](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm "Glossary Entry") using a database proxy proxy.

Additions

-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_database_procedure.htm)
    Executes the statement on a [secondary connection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
    
-   [EXPORTING p1 FROM a1 p2 FROM a2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_db_proc_parameters.htm)
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   [IMPORTING p1 TO a1 p2 TO a2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_db_proc_parameters.htm)
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
    
-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_db_proc_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type ABAP\_ PARMBIND\_TAB.
    

This translation does not reflect the current version of the documentation.