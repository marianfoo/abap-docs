  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Data and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenextern_obsolete.htm) →  [Obsolete XML Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_obsolete.htm) → 

CALL TRANSFORMATION - OBJECTS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_shortref.htm)

Obsolete Syntax

... OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*(otab) ...

Effect

This addition of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm) can be used to pass object references e1 e2 ... to an XSL transformation as external objects o1 o2 ... to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table otab with the type ABAP\_TRANS\_OBJBIND\_TAB from the [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") ABAP.

Note

The addition OBJECTS is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm).