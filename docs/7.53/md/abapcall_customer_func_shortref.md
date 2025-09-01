  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CALL CUSTOMER-FUNCTION - Quick reference

[Reference](javascript:call_link\('abapcall_customer-function.htm'\))

Syntax

CALL CUSTOMER-FUNCTION func
                       *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                       *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                       *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
                       *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*
                       *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                                   *\[*error\_message = n\_error*\]*
                                   *\[*OTHERS = n\_others*\]**\]*  .

Effect

Obsolete: Binds the [function module exit](javascript:call_link\('abenfunction_module_exit_glosry.htm'\) "Glossary Entry") specified in func.

Additions

-   See [CALL FUNCTION](javascript:call_link\('abapcall_function_shortref.htm'\))