  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXEC%20SQL%2C%20ABAPEXEC_SQL_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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