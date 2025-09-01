  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL DATABASE PROCEDURE, ABAPCALL_DB_PROCEDURE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL DATABASE PROCEDURE - Short Reference

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
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type abap\_parmbind\_tab.