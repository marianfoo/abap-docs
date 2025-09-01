  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Event Blocks](javascript:call_link\('abenevent_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reporting%20Events%2C%20ABENABAP_PROCESSING_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Reporting Events

The following are event key words for [reporting](javascript:call_link\('abenreporting_glosry.htm'\) "Glossary Entry") events:

-   [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)),
-   [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)),
-   [GET node](javascript:call_link\('abapget-.htm'\)) (obsolete, for logical databases only),
-   [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](javascript:call_link\('abenreporting_process.htm'\)) and only in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), the assigned subroutine is [executed](javascript:call_link\('abenldb_usage_executable.htm'\)) in the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](javascript:call_link\('abapinitialization.htm'\))
[START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\))