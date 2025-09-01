  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

EXEC SQL - Quick reference

[Reference](javascript:call_link\('abapexec.htm'\))

Syntax

EXEC SQL *\[*PERFORMING subr*\]*.
  ...
ENDEXEC.

Effect

Defines an area in which [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statements can be specified for database accesses.

Addition

-   [PERFORMING subr](javascript:call_link\('abapexec_implicit.htm'\))
    Obsolete: Implicit cursor processing if a SELECT statement is specified. Here, the subroutine subr is called for each row read.