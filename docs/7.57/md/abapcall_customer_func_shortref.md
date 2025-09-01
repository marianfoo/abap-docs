  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL CUSTOMER-FUNCTION, ABAPCALL_CUSTOMER_FUNC_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CALL CUSTOMER-FUNCTION - Short Reference

[Reference](javascript:call_link\('abapcall_customer-function.htm'\))

Syntax

CALL CUSTOMER-FUNCTION func
                       *\[*EXPORTING  p1 = a1 p2 = a2 ...*\]*
                       *\[*IMPORTING p1 = a1 p2 = a2 ...*\]*
                       *\[*CHANGING   p1 = a1 p2 = a2 ...*\]*
                       *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*
                       *\[*EXCEPTIONS *\[*exc1 = n1 exc2 = n2 ...*\]*
                                   *\[*error\_message = n\_error*\]*
                                   *\[*OTHERS = n\_others*\]**\]*.

Effect

Obsolete: Binds the [function module exit](javascript:call_link\('abenfunction_module_exit_glosry.htm'\) "Glossary Entry") specified in func.

Additions   

-   See [CALL FUNCTION](javascript:call_link\('abapcall_function_shortref.htm'\))