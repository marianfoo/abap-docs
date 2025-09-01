  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20METHOD%2C%20OLE%2C%20ABAPCALL_METHOD_OF_OLE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL METHOD, OLE - Short Reference

[Reference](javascript:call_link\('abapcall_method_ole2.htm'\))

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Calls a method meth of an [automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole created using CREATE OBJECT ole. The return code can be saved in a variable rc.

Additions   

-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to input parameters p1 p2, ...
-   NO FLUSH
    Dictates that the method call is passed to the presentation layer only when the function module FLUSH is called or the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") changes.
-   QUEUE-ONLY
    Defines that, in the case of flushes, the return values of the called methods of the automation queue are not written to the data objects rc.