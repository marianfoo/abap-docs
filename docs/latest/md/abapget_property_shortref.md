  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20PROPERTY%2C%20ABAPGET_PROPERTY_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET PROPERTY - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_property.htm)

Syntax

GET PROPERTY OF ole prop = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the property prop of an [automation object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole to the data object dobj.

Additions   

-   NO FLUSH
    Specifies that the property is applied on the presentation server only when the [function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") FLUSH is called or the [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") is changed.
-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_of_ole_shortref.htm) in the automation queue are not written to the data objects rc.
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the property.