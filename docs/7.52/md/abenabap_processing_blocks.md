  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

Reporting Events

Event key words for [reporting](javascript:call_link\('abenreporting_glosry.htm'\) "Glossary Entry") events include:

-   [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)),

-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)),

-   [GET node](javascript:call_link\('abapget-.htm'\)) (obsolete, for logical databases only),

-   [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)) (obsolete, for logical databases only).

Reporting events occur in a [predefined sequence](javascript:call_link\('abenreporting_process.htm'\)) and only in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") started using SUBMIT. In general, every executable program is implicitly started using SUBMIT. Only when a regular transaction code (not a reporting transaction) is used for the start (or external calls of their procedures), is a SUBMIT not triggered.

When an executable program is associated with a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the assigned subroutine is [executed](javascript:call_link\('abenldb_usage_executable.htm'\)) in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") before a reporting event is triggered.

Continue
[INITIALIZATION](javascript:call_link\('abapinitialization.htm'\))
[START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))