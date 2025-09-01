  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextern_obsolete.htm) →  [Obsolete XML Binding](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xml_obsolete.htm) → 

CALL TRANSFORMATION, OBJECTS

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation_shortref.htm)

Obsolete Syntax

... OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*(otab) ...

Effect

This addition of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm) can be used to pass object references e1 e2 ... to an XSL transformation as external objects o1 o2 ... to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table otab with the type abap\_trans\_objbind\_tab from the [type pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry") ABAP.

Hint

The addition OBJECTS is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transformation.htm).