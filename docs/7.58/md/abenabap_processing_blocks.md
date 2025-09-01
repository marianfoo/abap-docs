  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenevent_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reporting%20Events%2C%20ABENABAP_PROCESSING_BLOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinitialization.htm),
-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-selection.htm),
-   [GET node](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm) (obsolete, for logical databases only),
-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events occur in a [predefined order](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started with SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts with regular transaction codes (no reporting transactions) or external calls of their procedures are not connected to a SUBMIT statement.

When an executable program is connected to a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-selection.htm)