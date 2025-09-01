  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20CUSTOMER-FUNCTION%2C%20ABAPCALL_CUSTOMER_FUNC_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL CUSTOMER-FUNCTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_customer-function.htm)

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

Obsolete: Binds the [function module exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_exit_glosry.htm "Glossary Entry") specified in func.

Additions   

-   See [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_shortref.htm)