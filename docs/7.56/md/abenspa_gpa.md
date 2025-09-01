  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

SPA/GPA Parameters in the User Memory

The [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") is a user-specific [memory area](javascript:call_link\('abenmemory_organization.htm'\)) of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"), which can be accessed by all [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") of a user session simultaneously. ABAP programs have access to SPA/GPA parameters stored in the user memory (also referred to as SET/GET parameters).

-   [Properties of SPA/GPA parameters](#abenspa-gpa-1-------spa-gpa-parameters-and-abap-programs---@ITOC@@ABENSPA_GPA_2)
-   [Managing SPA/GPA Parameters](#abenspa-gpa-3-------spa-gpa-parameters-and-dynpro-fields---@ITOC@@ABENSPA_GPA_4)

Properties of SPA/GPA parameters

Each SPA/GPA parameter is identified by an ID of up to 20 characters. SPA/GPA parameters can either be created explicitly using the statement [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)), or implicitly in a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event and are available to any programs and any sessions for the whole duration of a user session after they have been saved in the user memory. SPA/GPA parameters are usually evaluated by the ABAP runtime framework. In ABAP programs, they can be read using the statement [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)).

Example

An example of a program that uses SPA/GPA parameters is the user maintenance (transaction SU01). In this transaction, user-specific parameters can be entered on the Parameters tab page, which are then set when the user logs on to [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") and are evaluated by other programs.

SPA/GPA Parameters and ABAP Programs

The statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)) of a program do not directly access the SPA/GPA parameters of the user memory.

-   As soon as an ABAP program is rolled in to the memory, all SPA/GPA parameters of the user memory are copied to the [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry") of the program. The statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)) of a program work with the local SPA/GPA parameters of the session memory.
-   As soon as a program is rolled out of the memory, all local SPA/GPA parameters are copied to the cross-session user memory, where they replace all SPA/GPA parameters. Any SPA/GPA parameters that do not exist in the session memory also do not exist in the user memory afterwards. A roll out is performed, for example:
    -   When exiting a program.
    -   When calling a new program using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), or [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).
    -   During any work process change A work process is changed in the same situations that cause implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).
    -   In the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)).

Hint

The fact that ABAP programs do not access the user memory directly but all SPA/GPA parameters like a file have to be imported or exported implicitly at given times, has consequences for programs that run in parallel sessions of the same user:

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)), a program in a parallel ABAP session can only be started after the rolling program has been rolled out if it needs to access the modified parameter.
-   If a program sets a SPA/GPA parameter using [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) while another program in a parallel ABAP session is active, and the latter has been running longer than the setting program, these changes are overwritten when the program that has been running longer is rolled out.

Premature rollouts can be forced by statements such as [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), but the fact that the state of the user memory is always determined by the program that was last rolled out creates a serious obstacle for cross-session use of SPA/GPA parameters in parallel programs. This type of programming is therefore not recommended.

Managing SPA/GPA Parameters

The names of SPA/GPA parameters are managed in the database table TPARA. In the [Object Navigator](javascript:call_link\('abenobject_navigator_glosry.htm'\) "Glossary Entry") of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), the names of SPA/GPA parameters are created in uppercase letters in the database table TPARA and are linked to packages. The database table TPARA acts as a reservation table for SPA/GPA parameters. If SPA/GPA parameters are used in a program, the name of the parameter must be contained in the PARAMID column in the database table TPARA. SPA/GPA parameters from other applications should not be unintentionally overwritten.

Hint

If a name exists in the database table TPARA, this does not automatically mean that the corresponding parameter also exists in the user memory. SPA/GPA parameters are created only during the execution of ABAP programs.

SPA/GPA Parameters and Dynpro Fields

When defining input fields, [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") can be linked to SPA/GPA parameters by entering the name of an SPA/GPA parameter from the database table TPARA as the property PARAMETER ID. If the corresponding property GET PARAMETER is set, no other value is assigned to the input field, and the dynpro is not processed in a [batch input session](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry"), the input field is filled with the value of the SPA/GPA parameter when the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent. If the corresponding property SET PARAMETER is set, the content of the input field is assigned to the SPA/GPA parameter at the PAI event. If the parameter does not yet exist in the user memory, it is created implicitly in the PAI event. In the case of [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), the addition MEMORY ID links the statements [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options_value.htm'\)).

Hints

-   A data transport between a dynpro field and an SPA/GPA parameter in the user memory only takes place if a global data object with the same name as the dynpro field is declared in the associated ABAP program.
-   If the PAI event is raised using a function of type "E", no values are assigned to the SPA/GPA parameters linked to the dynpro and no parameters are created in the user memory.
-   The restriction that input fields are not filled with the value of SPA/GPA parameters during [batch input sessions](javascript:call_link\('abenbatch_input_session_glosry.htm'\) "Glossary Entry") is not valid for [batch input tables](javascript:call_link\('abenbatch_input_table_glosry.htm'\) "Glossary Entry") used with [CALL TRANSACTION](javascript:call_link\('abapcall_transaction_using.htm'\)). Then, dynpro fields to which no value is assigned in the batch input table, are supplied from their SPA/GPA parameters.

Continue
[SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\))
[GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\))