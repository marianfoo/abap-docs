  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

EXEC SQL - Short Reference

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