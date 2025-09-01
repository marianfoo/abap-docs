  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

program group

Organizational unit of programs in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). There is always one [main program group](javascript:call_link\('abenmain_program_group_glosry.htm'\) "Glossary Entry") and multiple [additional program groups](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry"). Each program group has a [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry"). An additional program pool is always created when [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") and [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") are loaded. If, however, using a program that is not a function pool or class pool causes the program to be loaded, it is loaded into the program group of the consumer. All programs of a program group share the [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") declared using [TABLES](javascript:call_link\('abaptables.htm'\)), [NODES](javascript:call_link\('abapnodes.htm'\)), and [COMMON PART](javascript:call_link\('abapdata_common.htm'\)). Within a program group, [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) can call the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the main program only.

[→ More about](javascript:call_link\('abeninternal_session.htm'\))