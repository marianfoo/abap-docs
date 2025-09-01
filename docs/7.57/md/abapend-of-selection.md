  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements for Logical Databases](javascript:call_link\('abenldb_reporting_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: END-OF-SELECTION, ABAPEND-OF-SELECTION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

END-OF-SELECTION

[Short Reference](javascript:call_link\('abapend-of-selection_shortref.htm'\))

Obsolete Syntax

END-OF-SELECTION.

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that are linked with a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). The statement defines an event block whose event is raised as follows by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") during the [process flow](javascript:call_link\('abenreporting_process.htm'\)) of the executable program:

-   If the executable program is linked with a logical database, END-OF-SELECTION is raised if the logical database has completed its work.
-   In an executable program without a logical database, END-OF-SELECTION is raised directly after [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)) (or [START-OF-EDITING](javascript:call_link\('abapstart-of-editing.htm'\))).

Hints

-   In this event block, all data read by the logical database can be processed in summarized form.
-   In an executable program without a logical database, there is no need to implement the event block END-OF-SELECTION.

Executable Example

[Logical Database, Linked with a Program](javascript:call_link\('abenreport_abexa.htm'\))