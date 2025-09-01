  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements for Logical Databases](javascript:call_link\('abenldb_reporting_statements.htm'\)) → 

END-OF-SELECTION

[Quick Reference](javascript:call_link\('abapend-of-selection_shortref.htm'\))

Obsolete Syntax

END-OF-SELECTION.

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that are associated with a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"). The statement defines an event block whose event is raised as follows by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during the [process flow](javascript:call_link\('abenreporting_process.htm'\)) of the executable program:

-   If the executable program is associated with a logical database, END-OF-SELECTION is raised (if the logical database has fully completed its work).
    
-   In an executable program without a logical database, END-OF-SELECTION is triggered directly after [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)) (or [START-OF-EDITING](javascript:call_link\('abapstart-of-editing.htm'\))).
    

Notes

-   In this event block, all data read by the logical database can be processed in summary form.
    
-   In an executable program without a logical database, there is no need to implement the event block END-OF-SELECTION.
    

Executable Example

[Logical Database, Associated with a Program](javascript:call_link\('abenreport_abexa.htm'\))