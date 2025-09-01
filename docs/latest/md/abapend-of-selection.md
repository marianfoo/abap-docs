  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_reporting_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20END-OF-SELECTION%2C%20ABAPEND-OF-SELECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

END-OF-SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapend-of-selection_shortref.htm)

Obsolete Syntax

END-OF-SELECTION.

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are linked with a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). The statement defines an event block whose event is raised as follows by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [process flow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm) of the executable program:

-   If the executable program is linked with a logical database, END-OF-SELECTION is raised if the logical database has completed its work.
-   In an executable program without a logical database, END-OF-SELECTION is raised directly after [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstart-of-selection.htm) (or [START-OF-EDITING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstart-of-editing.htm)).

Hints

-   In this event block, all data read by the logical database can be processed in summarized form.
-   In an executable program without a logical database, there is no need to implement the event block END-OF-SELECTION.

Executable Example

[Logical Database, Linked with a Program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreport_abexa.htm)