  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SPA/GPA Parameters in the User Memory, ABENSPA_GPA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

SPA/GPA Parameters in the User Memory

The [user memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_memory_glosry.htm "Glossary Entry") is a user-specific [memory area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_organization.htm) of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"), which can be accessed by all [ABAP sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") of a user session simultaneously. ABAP programs have access to SPA/GPA parameters stored in the user memory (also referred to as SET/GET parameters).

-   [Properties of SPA/GPA Parameters](#@@ITOC@@ABENSPA_GPA_1)
-   [SPA/GPA Parameters and ABAP Programs](#@@ITOC@@ABENSPA_GPA_2)
-   [Managing SPA/GPA Parameters](#@@ITOC@@ABENSPA_GPA_3)
-   [SPA/GPA Parameters and Dynpro Fields](#@@ITOC@@ABENSPA_GPA_4)

Properties of SPA/GPA Parameters   

Each SPA/GPA parameter is identified by an ID of up to 20 characters. SPA/GPA parameters can either be created explicitly using the statement [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm), or implicitly in a [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") event and are available to any programs and any sessions for the whole duration of a user session after they have been saved in the user memory. SPA/GPA parameters are usually evaluated by the ABAP runtime framework. In ABAP programs, they can be read using the statement [GET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm).

Example

An example of a program that uses SPA/GPA parameters is the user maintenance (transaction SU01). In this transaction, user-specific parameters can be entered on the Parameters tab page, which are then set when the user logs on to [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry") and are evaluated by other programs.

SPA/GPA Parameters and ABAP Programs   

The statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm) of a program do not directly access the SPA/GPA parameters of the user memory.

-   As soon as an ABAP program is rolled in to the memory, all SPA/GPA parameters of the user memory are copied to the [session memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroll_area_glosry.htm "Glossary Entry") of the program. The statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm) of a program work with the local SPA/GPA parameters of the session memory.
-   As soon as a program is rolled out of the memory, all local SPA/GPA parameters are copied to the cross-session user memory, where they replace all SPA/GPA parameters. Any SPA/GPA parameters that do not exist in the session memory also do not exist in the user memory afterwards. A roll out is performed, for example:
    -   When exiting a program.
    -   When calling a new program using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm), [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction.htm), or [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_transaction.htm).
    -   During any work process change A work process is changed in the same situations that cause implicit [database commits](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm).
    -   In the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm).

Hint

The fact that ABAP programs do not access the user memory directly but all SPA/GPA parameters are imported or exported implicitly only at certain times, has consequences for programs that run in parallel in different ABAP sessions of the same user:

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm), a program in a parallel ABAP session can only be started after the rolling program has been rolled out if it needs to access the modified parameter.
-   If a program sets a SPA/GPA parameter using [SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm) while another program in a parallel ABAP session is active, and the latter has been running longer than the setting program, these changes are overwritten when the program that has been running longer is rolled out.

Premature rollouts can be forced by statements such as [WAIT UP TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm), but the fact that the state of the user memory is always determined by the program that was last rolled out creates a serious obstacle for cross-session use of SPA/GPA parameters in parallel programs. This type of programming is therefore not recommended.

Managing SPA/GPA Parameters   

The names of SPA/GPA parameters are managed in the database table TPARA. In the [Object Navigator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobject_navigator_glosry.htm "Glossary Entry") of the [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), the names of SPA/GPA parameters are created in uppercase letters in the database table TPARA and are linked to packages. The database table TPARA acts as a reservation table for SPA/GPA parameters. If SPA/GPA parameters are used in a program, the name of the parameter must be contained in the PARAMID column in the database table TPARA. SPA/GPA parameters from other applications should not be unintentionally overwritten.

Hint

If a name exists in the database table TPARA, this does not automatically mean that the corresponding parameter also exists in the user memory. SPA/GPA parameters are created only during the execution of ABAP programs.

SPA/GPA Parameters and Dynpro Fields   

When defining input fields, [dynpro fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_field_glosry.htm "Glossary Entry") can be linked to SPA/GPA parameters by entering the name of an SPA/GPA parameter from the database table TPARA as the property PARAMETER ID. If the corresponding property GET PARAMETER is set, no other value is assigned to the input field, and the dynpro is not processed in a [batch input session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_session_glosry.htm "Glossary Entry"), the input field is filled with the value of the SPA/GPA parameter when the [screen layout](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen_glosry.htm "Glossary Entry") is sent. If the corresponding property SET PARAMETER is set, the content of the input field is assigned to the SPA/GPA parameter at the PAI event. If the parameter does not yet exist in the user memory, it is created implicitly in the PAI event. In the case of [selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"), the addition MEMORY ID links the statements [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_value.htm) and [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options_value.htm).

Hints

-   A data transport between a dynpro field and an SPA/GPA parameter in the user memory only takes place if a global data object with the same name as the dynpro field is declared in the associated ABAP program.
-   If the PAI event is raised using a function of type "E", no values are assigned to the SPA/GPA parameters linked to the dynpro and no parameters are created in the user memory.
-   The restriction that input fields are not filled with the value of SPA/GPA parameters during [batch input sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") is not valid for [batch input tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_input_table_glosry.htm "Glossary Entry") used with [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transaction_using.htm). Then, dynpro fields to which no value is assigned in the batch input table, are supplied from their SPA/GPA parameters.

Continue
[SET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_parameter.htm)
[GET PARAMETER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_parameter.htm)