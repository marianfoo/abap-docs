  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

local update

[Update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_glosry.htm "Glossary Entry") in the current [work process](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwork_process_glosry.htm "Glossary Entry"). It is executed in a separate [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") and not in a dedicated [update session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_session_glosry.htm "Glossary Entry"). The local update is activated either separately for each [SAP LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_luw_glosry.htm "Glossary Entry") by using the statement [SET UPDATE TASK LOCAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_update_task_local.htm), or centrally for an [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") by using the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/force\_local\_update\_task.