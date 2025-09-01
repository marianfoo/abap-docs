  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

assertion

Assertion in an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). An assertion is defined by an [ASSERT](javascript:call_link\('abapassert.htm'\)) statement as a conditional [checkpoint](javascript:call_link\('abencheckpoint_glosry.htm'\) "Glossary Entry"). Assertions are either always active or can be [activated](javascript:call_link\('abenactivatable_checkpoint_glosry.htm'\) "Glossary Entry") by assigning them to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry"). When the program reaches an active assertion, it evaluates the corresponding condition. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](javascript:call_link\('abenabap_debugger_glosry.htm'\) "Glossary Entry"), or creates a log entry. If the assertion is assigned to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry"), the program behavior is controlled by the corresponding activation settings, and otherwise, the program terminates.