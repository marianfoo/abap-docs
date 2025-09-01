  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: program group, ABENPROGRAM_GROUP_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

program group

Organizational unit of programs in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"). There is always one [main program group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_group_glosry.htm "Glossary Entry") and multiple [additional program groups](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry"). Each program group has a [main program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmain_program_glosry.htm "Glossary Entry"). An additional program pool is always created when [function pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_pool_glosry.htm "Glossary Entry") and [class pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_pool_glosry.htm "Glossary Entry") are loaded. If, however, using a program that is not a function pool or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm), [NODES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnodes.htm), and [COMMON PART](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_common.htm). Within a program group, [CALL SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_screen.htm) can call the [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program only.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session.htm)