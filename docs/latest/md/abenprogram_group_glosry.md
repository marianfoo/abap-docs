  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20program%20group%2C%20ABENPROGRAM_GROUP_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

program group

Organizational unit of programs in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). There is always one [main program group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmain_program_group_glosry.htm "Glossary Entry") and multiple [additional program groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry"). Each program group has a [main program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmain_program_glosry.htm "Glossary Entry"). An additional program pool is always created when [function pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry") and [class pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_pool_glosry.htm "Glossary Entry") are loaded. If, however, using a program that is not a function pool or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm), [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm), and [COMMON PART](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_common.htm). Within a program group, [CALL SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_screen.htm) can call the [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program only.

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session.htm)