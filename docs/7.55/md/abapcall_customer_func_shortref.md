  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

CALL CUSTOMER-FUNCTION - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_customer-function.htm)

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

Obsolete: Binds the [function module exit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_exit_glosry.htm "Glossary Entry") specified in func.

Additions

-   See [CALL FUNCTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_shortref.htm)