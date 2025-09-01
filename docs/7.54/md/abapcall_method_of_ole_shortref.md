  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CALL METHOD - OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_ole2.htm)

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Calls a method meth of an [automation object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole. The the return code can be saved in a variable rc.

Additions

-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to input parameters p1 p2, ...
    
-   NO FLUSH
    Dictates that the method call is passed to the presentation layer only when the function module FLUSH is called or the [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
    
-   QUEUE-ONLY
    Dictates that, in the case of flushes, the return codes of the called methods of the automation queue are not written to the data objects rc.