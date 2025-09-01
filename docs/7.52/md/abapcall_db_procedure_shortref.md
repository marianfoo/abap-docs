  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CALL DATABASE PROCEDURE - Quick reference

[Reference](javascript:call_link\('abapcall_database_procedure.htm'\))

Syntax

CALL DATABASE PROCEDURE proxy*|*(prox\_name)
    *\[*CONNECTION con*|*(con\_syntax)*\]*
    *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
      *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]* *}*
  *|* *{* *\[*PARAMETER-TABLE ptab*\]* *}*.

Effect

Calls a database procedure of [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") written in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") using a database proxy proxy.

Additions

-   [CONNECTION con*|*(con\_syntax)](javascript:call_link\('abapcall_database_procedure.htm'\))
    Executes the statement on a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry").
    
-   [EXPORTING p1 FROM a1 p2 FROM a2 ...](javascript:call_link\('abapcall_db_proc_parameters.htm'\))
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
    
-   [IMPORTING p1 TO a1 p2 TO a2 ...](javascript:call_link\('abapcall_db_proc_parameters.htm'\))
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
    
-   [PARAMETER-TABLE ptab](javascript:call_link\('abapcall_db_proc_parameter_tables.htm'\))
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type ABAP\_ PARMBIND\_TAB.