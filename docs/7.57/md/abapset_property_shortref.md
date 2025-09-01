  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET PROPERTY, OLE, ABAPSET_PROPERTY_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

SET PROPERTY, OLE - Short Reference

[Reference](javascript:call_link\('abapset_property.htm'\))

Syntax

SET PROPERTY OF ole prop = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the data object dobj to the property prop of an [automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole created using CREATE OBJECT ole.

Addition  

-   NO FLUSH
    Dictates that the property is not passed until the [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") FLUSH is called, or until a change of [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is passed to the presentation layer.
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the property.