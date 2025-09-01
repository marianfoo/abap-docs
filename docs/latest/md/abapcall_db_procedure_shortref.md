---
title: "CALL DATABASE PROCEDURE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm) Syntax CALL DATABASE PROCEDURE proxy(prox_name) CONNECTION con(con_syntax)  EXPORTING  p1 = a1 p2 = a2 ... IMPORTING  p1 = a1 p2 = a2 ...    PA
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_db_procedure_shortref.htm"
abapFile: "abapcall_db_procedure_shortref.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapcall", "procedure", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20DATABASE%20PROCEDURE%2C%20ABAPCALL_DB_PROCEDURE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL DATABASE PROCEDURE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm)

Syntax

CALL DATABASE PROCEDURE proxy*|*(prox\_name)
    *\[*CONNECTION con*|*(con\_syntax)*\]*
    *{* *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
      *\[*IMPORTING  p1 = a1 p2 = a2 ...*\]* *}*
  *|* *{* *\[*PARAMETER-TABLE ptab*\]* *}*.

Effect

Calls a database procedure of [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") written in [SQLScript](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_script_glosry.htm "Glossary Entry") using a database proxy proxy.

Additions   

-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_database_procedure.htm)
    Executes the statement on a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").
-   [EXPORTING p1 FROM a1 p2 FROM a2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_db_proc_parameters.htm)
    Passes actual parameters a1, a2, ... to input parameters p1, p2, ...
-   [IMPORTING p1 TO a1 p2 TO a2 ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_db_proc_parameters.htm)
    Inherits output parameters p1, p2, ... in actual parameters a1, a2, ...
-   [PARAMETER-TABLE ptab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_db_proc_parameter_tables.htm)
    Assigns dynamic actual parameters to formal parameters using an internal table ptab of type abap\_parmbind\_tab.