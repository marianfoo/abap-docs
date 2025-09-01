  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) → 

Parameters in the User Memory

-   [SPA/GPA Parameters](#@@ITOC@@ABENMEMORY_1)

-   [SPA/GPA Parameters and ABAP Programs](#@@ITOC@@ABENMEMORY_2)

-   [Managing SPA/GPA Parameters](#@@ITOC@@ABENMEMORY_3)

-   [SPA/GPA Parameters and Dynpro Fields](#@@ITOC@@ABENMEMORY_4)

SPA/GPA Parameters

The [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry") is a user-specific [memory area](javascript:call_link\('abenmemory_organization.htm'\)) of the current [application server](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"), which is accessed by all [ABAP sessions](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") of a user session at once. ABAP programs have access to SPA/GPA parameters stored in the user memory (also called SET/GET parameters).

Each SPA/GPA parameter is identified by an ID of up to 20 characters. SPA/GPA parameters can either be created explicitly using the statement [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)), or implicitly in a [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event. Once they have been saved in the user memory, they are available to any programs and any sessions throughout the whole duration of a user session. SPA/GPA parameters are usually evaluated by the ABAP runtime environment. In ABAP programs, the parameters can be read using the statement [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)).

Example

One example of a program that uses SPA/GPA parameters is user maintenance (transaction SU01). In this transaction, user-specific parameters can be entered on the Parameters tab page, which are then set when the user logs on to an [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") and are evaluated by other programs.

SPA/GPA Parameters and ABAP Programs

The statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)) of a program do not directly access the SPA/GPA parameters of the user memory.

-   Instead, as soon as an ABAP program is rolled in to the memory, all SPA/GPA parameters in the user memory are copied to the [program memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry") of the program. The statements [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) and [GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\)) of a program work with the local SPA/GPA parameters of the program memory.

-   As soon as a program is rolled out of the memory, all local SPA/GPA parameters are copied to the cross-session SAP memory, where they replace all SPA/GPA parameters. Any SPA/GPA parameters that do not exist in the program memory do not exist in the user memory afterwards. A roll out is performed for various reasons, such as the following:

-   When exiting a program.

-   When calling a new program using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)), or [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).

-   Each time a work process is changed. A work process is changed in the same situations that cause implicit [database commits](javascript:call_link\('abendb_commit.htm'\)).

-   In the statement [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)).

Note

ABAP programs cannot access the user memory directly. Instead, all SPA/GPA parameters have to be imported or exported implicitly at given times, just like a file. This has consequences for programs run in parallel sessions of the same user:

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)), a program in a parallel ABAP session cannot be started until the setter program has been rolled out if it needs to access the modified parameter.

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\)) while another program in a parallel ABAP session is active, and the latter has been running longer than the setting program, these changes are overwritten when the program that has been running longer is rolled out.

Premature rollouts can be forced by statements such as [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\)), but the fact that the state of the user memory is always determined by the program that was last rolled out creates a serious obstacle for cross-session use of SPA/GPA parameters in programs that are running in parallel. This type of programming is therefore not recommended.

Managing SPA/GPA Parameters

The names of SPA/GPA parameters are edited in the database table TPARA. In [Object Navigator](javascript:call_link\('abenobject_navigator_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"), the names of SPA/GPA parameters are created (in uppercase) in the database table TPARA and are associated with packages. The database table TPARA acts as a reservation table for SPA/GPA parameters. If SPA/GPA parameters are used in a program, the name of the parameter must be contained in the PARAMID column in the database table TPARA. Care must be taken to not overwrite SPA/GPA parameters from other applications.

Note

If a name exists in the database table TPARA, this does not automatically mean that the corresponding parameter also exists in the user memory. SPA/GPA parameters are created only during the execution of ABAP programs.

SPA/GPA Parameters and Dynpro Fields

When defining input fields, [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") can be associated with SPA/GPA parameters by entering the name of an SPA/GPA parameter from the database table TPARA as an attribute PARAMETER ID. If the corresponding parameter GET PARAMETER is set and no other value is assigned to the input field, the input field is filled with the value of the SPA/GPA parameter when the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent. If the corresponding attribute SET PARAMETER is set, the content of the input field is assigned to the SPA/GPA parameter at the PAI event. If the parameter does not yet exist in the user memory, it is created implicitly in the PAI event. In [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), this association can be created using the addition MEMORY ID of the statements [PARAMETERS](javascript:call_link\('abapparameters_value.htm'\)) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options_value.htm'\)).

Notes

-   A data transport between a dynpro field and an SPA/GPA parameter in the user memory only takes place if a global data object with the same name as the dynpro field is declared in the corresponding ABAP program.

-   If the PAI event is raised using a function of type "E", no values are assigned to the SPA/GPA parameters associated with the dynpro and no parameters are created in the user memory.

Continue
[SET PARAMETER](javascript:call_link\('abapset_parameter.htm'\))
[GET PARAMETER](javascript:call_link\('abapget_parameter.htm'\))