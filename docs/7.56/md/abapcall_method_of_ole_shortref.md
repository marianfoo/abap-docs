  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  C

CALL METHOD, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_ole2.htm)

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Calls a method meth of an [automation object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole. The return code can be saved in a variable rc.

Additions

-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to input parameters p1 p2, ...
-   NO FLUSH
    Dictates that the method call is passed to the presentation layer only when the function module FLUSH is called or the [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
-   QUEUE-ONLY
    Defines that, in the case of flushes, the return values of the called methods of the automation queue are not written to the data objects rc.