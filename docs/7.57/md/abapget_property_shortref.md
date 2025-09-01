  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET PROPERTY, ABAPGET_PROPERTY_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

GET PROPERTY - Short Reference

[Reference](javascript:call_link\('abapget_property.htm'\))

Syntax

GET PROPERTY OF ole prop = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the property prop of an [automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole created using CREATE OBJECT ole to the data object dobj.

Additions   

-   NO FLUSH
    Specifies that the property is applied on the presentation server only when the [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") FLUSH is called or the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is changed.
-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](javascript:call_link\('abapcall_method_of_ole_shortref.htm'\)) in the automation queue are not written to the data objects rc.
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the property.