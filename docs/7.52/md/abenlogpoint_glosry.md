  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

logpoint

Logpoint in an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). A logpoint is defined statically as an unconditional [checkpoint](javascript:call_link\('abencheckpoint_glosry.htm'\) "Glossary Entry") using the statement [LOG-POINT](javascript:call_link\('abaplog-point.htm'\)) or dynamically in [transaction](javascript:call_link\('abentransaction_glosry.htm'\) "Glossary Entry") SDLP or in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). When an active logpoint is reached, a log entry is created. A static logpoint must be assigned to a [checkpoint group](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") when it is defined. This group controls its [activation](javascript:call_link\('abenactivatable_checkpoint_glosry.htm'\) "Glossary Entry").