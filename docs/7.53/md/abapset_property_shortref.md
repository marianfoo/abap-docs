  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET PROPERTY - OLE - Quick reference

[Reference](javascript:call_link\('abapset_property.htm'\))

Syntax

SET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the data object dobj to the attribute attr of an [automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole created using CREATE OBJECT ole.

Addition

-   NO FLUSH
    Dictates that the attribute is not passed until the [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") FLUSH is called, or until a change of [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is passed to the presentation layer.
    
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the attribute.
    

This translation does not reflect the current version of the documentation.