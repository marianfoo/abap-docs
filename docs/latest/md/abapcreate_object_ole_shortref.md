  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20OBJECT%2C%20OLE%2C%20ABAPCREATE_OBJECT_OLE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE OBJECT, OLE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_ole2.htm)

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Creates an [OLE automation object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenole_automation_glosry.htm "Glossary Entry") ole of the automation class class. Here, ole must have the type ole2\_object from the [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") OLE2 and class specifies the name of the class.

Additions   

-   NO FLUSH
    Specifies that the request to create an object is not passed to the current presentation server until the function module FLUSH is called or when the [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") changes.
-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_method_of_ole_shortref.htm) in the automation queue are not written to the data objects rc.