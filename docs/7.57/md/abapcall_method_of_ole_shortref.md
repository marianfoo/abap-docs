  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL METHOD, OLE, ABAPCALL_METHOD_OF_OLE_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

CALL METHOD, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_ole2.htm)

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Calls a method meth of an [automation object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole. The return code can be saved in a variable rc.

Additions   

-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to input parameters p1 p2, ...
-   NO FLUSH
    Dictates that the method call is passed to the presentation layer only when the function module FLUSH is called or the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
-   QUEUE-ONLY
    Defines that, in the case of flushes, the return values of the called methods of the automation queue are not written to the data objects rc.