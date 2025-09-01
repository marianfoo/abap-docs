  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements for Logical Databases](javascript:call_link\('abenldb_reporting_statements.htm'\)) → 

CHECK SELECT-OPTIONS

[Quick Reference](javascript:call_link\('abapcheck_shortref.htm'\))

Obsolete Syntax

CHECK SELECT-OPTIONS.

Effect

This form of the statement [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) for exiting processing blocks is only intended for use in executable programs that are associated using a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), and then only in the event blocks for the [reporting events](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") [GET](javascript:call_link\('abapget-.htm'\)). It must not be used in methods.

The statement checks whether the content of the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") that was filled for the current GET event by the logical database meets the conditions in all [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") that are associated with the current node of the logical database. The name of the node is copied statically from the next highest GET statement in the program. The following restrictions apply:

-   The statement CHECK SELECT-OPTIONS can only be used when the type of the current node of the logical database is a database table.
    
-   If the node is to be used for dynamic selections, the statement evaluates only those selection criteria that have been declared with the NO DATABASE SELECTION addition of the [SELECT-OPTIONS](javascript:call_link\('abapselect-options_ldb.htm'\)) statement.
    

If the conditions in one of the selection tables are not met, and the statement is not specified within a loop, the GET event block is exited and the runtime environment behaves as with the other variant of [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) used for exiting processing blocks. If the statement is listed within a loop, then only the current loop pass is exited.

Notes

-   For performance reasons, the CHECK statement should only be used to check data selections during GET events if the selections provided by the logical database are not sufficient.
    
-   The statement CHECK SELECT-OPTIONS should not be used within a loop since it otherwise only exits the current loop pass.
    
-   If logical databases are no longer used, this variant of the statement CHECK is also no longer necessary.
    

Example

Exiting a GET event block if the content of the components seatsmax and seatsocc of the interface work area sflight do not meet the conditions in the selection tables s\_max or s\_occ. Before the program can run, it must be associated with the logical database F1S.

NODES sflight.
SELECT-OPTIONS: s\_max FOR sflight-seatsmax,
                s\_occ FOR sflight-seatsocc.
GET sflight.
  cl\_demo\_output=>write( |{ sflight-carrid } {
                            sflight-connid }| ).
  CHECK SELECT-OPTIONS.
  cl\_demo\_output=>write( |{ sflight-seatsmax } {
                            sflight-seatsocc }| ).
END-OF-SELECTION.
  cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Incorrect OPTION in the SELECT-OPTIONS table or the RANGES table
    Runtime error: CHECK\_SELOPT\_ILLEGAL\_OPTION
    
-   Cause: Incorrect SIGN in the SELECT-OPTIONS table or the RANGES table
    Runtime error: CHECK\_SELOPT\_ILLEGAL\_SIGN
    
-   Cause: Nonexistent memory area accessed
    Runtime error: CHECK\_ADDR\_NOT\_ALLOC