  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  C

CREATE OBJECT - OLE - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_ole2.htm)

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Creates an [OLE automation object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenole_automation_glosry.htm "Glossary Entry") ole of the automation class class. Here, ole must have the type ole2\_object from the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") OLE2 and class specifies the name of the class.

Additions

-   NO FLUSH
    Specifies that the request to create an object is not passed to the current presentation server until the function module FLUSH is called or when the [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
    
-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_of_ole_shortref.htm) in the automation queue are not written to the data objects rc.