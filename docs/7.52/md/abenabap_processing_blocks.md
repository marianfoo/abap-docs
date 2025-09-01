  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_modularization.htm) →  [Event Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenevent_blocks.htm) → 

Reporting Events

Event key words for [reporting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreporting_glosry.htm "Glossary Entry") events include:

-   [INITIALIZATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinitialization.htm),

-   [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm),

-   [GET node](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) (obsolete, for logical databases only),

-   [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapend-of-selection.htm) (obsolete, for logical databases only).

Reporting events occur in a [predefined sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreporting_process.htm) and only in [executable programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") started using SUBMIT. In general, every executable program is implicitly started using SUBMIT. Only when a regular transaction code (not a reporting transaction) is used for the start (or external calls of their procedures), is a SUBMIT not triggered.

When an executable program is associated with a [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), the assigned subroutine is [executed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_usage_executable.htm) in the [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_program_glosry.htm "Glossary Entry") before a reporting event is triggered.

Continue
[INITIALIZATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinitialization.htm)
[START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm)