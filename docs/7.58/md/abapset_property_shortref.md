  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20PROPERTY%2C%20OLE%2C%20ABAPSET_PROPERTY_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET PROPERTY, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_property.htm)

Syntax

SET PROPERTY OF ole prop = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the data object dobj to the property prop of an [automation object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole.

Addition  

-   NO FLUSH
    Dictates that the property is not passed until the [function module](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry") FLUSH is called, or until a change of [screen layout](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_glosry.htm "Glossary Entry") is passed to the presentation layer.
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the property.