  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

memory snapshot

Contains information about all [data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_object_glosry.htm "Glossary Entry") and [instances](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_glosry.htm "Glossary Entry") in an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") along with their memory consumption. A memory snapshot is created in [ABAP Debugger](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_debugger_glosry.htm "Glossary Entry") by the static method WRITE\_MEMORY\_CONSUMPTION\_FILE of the [system class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_class_glosry.htm "Glossary Entry") CL\_ABAP\_MEMORY\_UTILITIES, or by entering "/hmusa" in the [command field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommand_field_glosry.htm "Glossary Entry") of the [standard toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"). Another option is to choose System > Utilities → Memory Analysis → Create Memory Snapshot. The evaluation is performed by [Memory Inspector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_inspector_glosry.htm "Glossary Entry").