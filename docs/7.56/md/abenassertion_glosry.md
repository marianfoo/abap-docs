  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

assertion

Assertion in an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). An assertion is defined as a conditional [checkpoint](javascript:call_link\('abencheckpoint_glosry.htm'\) "Glossary Entry") using the [ASSERT](javascript:call_link\('abapassert.htm'\)) statement. Assertions are either always active or can be [activated](javascript:call_link\('abenactivatable_checkpoint_glosry.htm'\) "Glossary Entry") by assigning them to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry"). When an active assertion is reached, the corresponding condition is evaluated. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](javascript:call_link\('abenabap_debugger_glosry.htm'\) "Glossary Entry"), or creates a log entry. If a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") is assigned, the program behavior is controlled by the corresponding activation settings. Otherwise, the program is terminated.