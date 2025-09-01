  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EXEC SQL, ABAPEXEC_SQL_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

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