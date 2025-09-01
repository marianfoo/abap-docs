  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  G

GET PROPERTY - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_property.htm)

Syntax

GET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Effect

Assigns the content of the attribute attr of an [automation object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenole_automation_glosry.htm "Glossary Entry") ole created using CREATE OBJECT ole to the data object dobj.

Additions

-   NO FLUSH
    Specifies that the attribute is applied on the presentation server only when the [function module](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry") FLUSH is called or the [screen layout](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_glosry.htm "Glossary Entry") is changed.
-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_of_ole_shortref.htm) in the automation queue are not written to the data objects rc.
-   EXPORTING p1 = f1 p2 = f2 ...
    Passes actual parameters f1, f2, ... to parameters p1, p2, ... of the attribute.