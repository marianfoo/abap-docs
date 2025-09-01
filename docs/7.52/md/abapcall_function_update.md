  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

CALL FUNCTION - IN UPDATE TASK

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax

CALL FUNCTION update\_function IN UPDATE TASK
                              *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
                              *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*.

Extras:

[1\. ... EXPORTING p1 = a1 p2 = a2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... TABLES t1 = itab1 t2 = itab2 ...](#!ABAP_ADDITION_2@2@)

Effect

This statement registers the update function module specified in update\_function. update\_function must be a character-like field, which contains the name of an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") in uppercase letters during execution of the statement. If specified, the same applies to update\_function as to [general function module calls](javascript:call_link\('abapcall_function_general.htm'\)).

An update function module is a [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") for which the property update module is flagged in [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"). The registration of an update function module is an essential part of the [update task](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry").

The function module is not executed immediately, but is scheduled for execution in a special work process (update work process) or, if [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") are enabled, in the current work process. To do this, the name of the function module and the actual parameters passed are saved to the database tables VBMOD and VBDATA, which are managed by VBHDR. If the statement is executed during the update task, the addition IN UPDATE TASK is ignored.

If the statement [SET UPDATE TASK LOCAL](javascript:call_link\('abapset_update_task_local.htm'\)) is executed before registration of an update function module in the current [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), registration takes place in the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry") rather than on the database, and for the current work process.

The actual execution is triggered by the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)). The formal parameters of the function module receive the values of the actual parameters from the database table VBLOG. A function module that is registered more than once is also executed more than once with the associated parameter values. If the statement COMMIT WORK is not executed when the current program is executed after the registration of a function module, the function module is not executed and the associated entries are deleted from the corresponding database tables when the program ends. The statement [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) deletes all previous registrations for the current SAP LUW.

System Fields

The sy-subrc is undefined after executing the CALL FUNCTION ...IN UPDATE TASK statement.

Notes

-   No [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") and no [database rollbacks](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry") can occur and the update control cannot be modified during the processing of an update function module triggered using COMMIT WORK is being processed. Any statements that would produce this situation are [forbidden statements in updates](javascript:call_link\('abendb_commit_during_update.htm'\)) and always produce runtime errors.
    
-   If a runtime error occurs during the [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), the update work process executes a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"), logs this in the corresponding database tables, and notifies the user whose entries created the entries by SAPMail. After the cause of the error has been resolved, the canceled entries can be updated again.
    
-   When handling the registration entries in the database tables, note that they are subject to the regular administration rules for a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry"). For example, the database LUW is ended by a [database rollback](javascript:call_link\('abendatabase_rollback_glosry.htm'\) "Glossary Entry"), all registration entries of the current database LUW are deleted.
    
-   When registering an update function module using CALL FUNCTION ...IN UPDATE TASK, the relevant data is exported internally to a data cluster using [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) and is imported again when executing the function module with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)). If an errors occurs in the export, for example because too much data is exported, the exceptions raised in [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) are documented. If the data types of the exported actual parameters do not match the typing of the formal parameters of the function module, the exceptions documented in [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)) can be raised.
    

Addition 1

... EXPORTING p1 = a1 p2 = a2 ...

Addition 2

... TABLES t1 = itab1 t2 = itab2 ...

Effect

The additions EXPORTING and TABLES have the same syntax and meaning as in the [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\)) of the general function module call, except that for EXPORTING, no [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") or data objects that contain reference variables can be specified as actual parameters.

When passing internal tables with non-unique [table keys](javascript:call_link\('abenitab_key.htm'\)), the order of the duplicate rows in relation to these keys is not retained.

Note

The additions IMPORTING, CHANGING and EXCEPTIONS of the general function module call may be specified, but they are ignored during the execution. The additions for dynamic parameter passing are not allowed.

Example

Registers the update function module DEMO\_UPDATE\_INSERT for execution when the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) is executed (and passes an internal table).

    DATA(values) = VALUE demo\_update\_tab(
      ( id = 'X' col1 = 100 col2 = 200 col3 = 300 col4 = 400 )
      ( id = 'Y' col1 = 110 col2 = 210 col3 = 310 col4 = 410 )
      ( id = 'Z' col1 = 120 col2 = 220 col3 = 320 col4 = 420 ) ).
    CALL FUNCTION 'DEMO\_UPDATE\_INSERT' IN UPDATE TASK
      EXPORTING
        values = values.

Executable Example

[SAP-LUW, UPDATE TASK](javascript:call_link\('abensap_luw_update_task_abexa.htm'\))