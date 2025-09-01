  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenevent_blocks.htm) → 

Reporting Events

The following are event key words for [reporting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_glosry.htm "Glossary Entry") events:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm),

-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm),

-   [GET node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm) (obsolete, for logical databases only),

-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events are raised in a [predefined order](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started using SUBMIT. In general, every executable program is started implicitly using SUBMIT. Only starts using regular transaction codes (not reporting transactions) or external calls of their procedures do not raise SUBMITs.

When an executable program is associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is raised.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm)