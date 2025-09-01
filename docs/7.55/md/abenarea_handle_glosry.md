  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

area handle

Instance of an [area class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_class_glosry.htm "Glossary Entry"). An area handle allows an ABAP program access to an [area instance version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_memory_glosry.htm "Glossary Entry") and to the [shared objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_objects_glosry.htm "Glossary Entry") stored there. An area handle is created by the static methods of its area class and is bound to an area instance version. Each bound area handle sets an [area lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_lock_glosry.htm "Glossary Entry") on the affected area instance version.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_instance_handle.htm)