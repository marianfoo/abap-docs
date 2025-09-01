# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / Parameters in the User Memory

Included pages: 3


### abenmemory.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) → 

Parameters in the User Memory

-   [SPA/GPA Parameters](#@@ITOC@@ABENMEMORY_1)

-   [SPA/GPA Parameters and ABAP Programs](#@@ITOC@@ABENMEMORY_2)

-   [Managing SPA/GPA Parameters](#@@ITOC@@ABENMEMORY_3)

-   [SPA/GPA Parameters and Dynpro Fields](#@@ITOC@@ABENMEMORY_4)

SPA/GPA Parameters

The [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry") is a user-specific [memory area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_organization.htm) of the current [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"), which is accessed by all [ABAP sessions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") of a user session at once. ABAP programs have access to SPA/GPA parameters stored in the user memory (also called SET/GET parameters).

Each SPA/GPA parameter is identified by an ID of up to 20 characters. SPA/GPA parameters can either be created explicitly using the statement [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm), or implicitly in a [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") event. Once they have been saved in the user memory, they are available to any programs and any sessions throughout the whole duration of a user session. SPA/GPA parameters are usually evaluated by the ABAP runtime environment. In ABAP programs, the parameters can be read using the statement [GET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter.htm).

Example

One example of a program that uses SPA/GPA parameters is user maintenance (transaction SU01). In this transaction, user-specific parameters can be entered on the Parameters tab page, which are then set when the user logs on to an [AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_nw_abap_glosry.htm "Glossary Entry") and are evaluated by other programs.

SPA/GPA Parameters and ABAP Programs

The statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter.htm) of a program do not directly access the SPA/GPA parameters of the user memory.

-   Instead, as soon as an ABAP program is rolled in to the memory, all SPA/GPA parameters in the user memory are copied to the [program memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroll_area_glosry.htm "Glossary Entry") of the program. The statements [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm) and [GET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter.htm) of a program work with the local SPA/GPA parameters of the program memory.

-   As soon as a program is rolled out of the memory, all local SPA/GPA parameters are copied to the cross-session SAP memory, where they replace all SPA/GPA parameters. Any SPA/GPA parameters that do not exist in the program memory do not exist in the user memory afterwards. A roll out is performed for various reasons, such as the following:

-   When exiting a program.

-   When calling a new program using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm), [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transaction.htm), or [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapleave_to_transaction.htm).

-   Each time a work process is changed. A work process is changed in the same situations that cause implicit [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_commit.htm).

-   In the statement [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm).

Note

ABAP programs cannot access the user memory directly. Instead, all SPA/GPA parameters have to be imported or exported implicitly at given times, just like a file. This has consequences for programs run in parallel sessions of the same user:

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm), a program in a parallel ABAP session cannot be started until the setter program has been rolled out if it needs to access the modified parameter.

-   If a program sets a SPA/GPA parameter using [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm) while another program in a parallel ABAP session is active, and the latter has been running longer than the setting program, these changes are overwritten when the program that has been running longer is rolled out.

Premature rollouts can be forced by statements such as [WAIT UP TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm), but the fact that the state of the user memory is always determined by the program that was last rolled out creates a serious obstacle for cross-session use of SPA/GPA parameters in programs that are running in parallel. This type of programming is therefore not recommended.

Managing SPA/GPA Parameters

The names of SPA/GPA parameters are edited in the database table TPARA. In [Object Navigator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobject_navigator_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), the names of SPA/GPA parameters are created (in uppercase) in the database table TPARA and are associated with packages. The database table TPARA acts as a reservation table for SPA/GPA parameters. If SPA/GPA parameters are used in a program, the name of the parameter must be contained in the PARAMID column in the database table TPARA. Care must be taken to not overwrite SPA/GPA parameters from other applications.

Note

If a name exists in the database table TPARA, this does not automatically mean that the corresponding parameter also exists in the user memory. SPA/GPA parameters are created only during the execution of ABAP programs.

SPA/GPA Parameters and Dynpro Fields

When defining input fields, [dynpro fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") can be associated with SPA/GPA parameters by entering the name of an SPA/GPA parameter from the database table TPARA as an attribute PARAMETER ID. If the corresponding parameter GET PARAMETER is set and no other value is assigned to the input field, the input field is filled with the value of the SPA/GPA parameter when the [screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_glosry.htm "Glossary Entry") is sent. If the corresponding attribute SET PARAMETER is set, the content of the input field is assigned to the SPA/GPA parameter at the PAI event. If the parameter does not yet exist in the user memory, it is created implicitly in the PAI event. In [selection screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry"), this association can be created using the addition MEMORY ID of the statements [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_value.htm) and [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect-options_value.htm).

Notes

-   A data transport between a dynpro field and an SPA/GPA parameter in the user memory only takes place if a global data object with the same name as the dynpro field is declared in the corresponding ABAP program.

-   If the PAI event is raised using a function of type "E", no values are assigned to the SPA/GPA parameters associated with the dynpro and no parameters are created in the user memory.

Continue
[SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm)
[GET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter.htm)


### abapset_parameter.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Parameters in the User Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory.htm) → 

SET PARAMETER

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter_shortref.htm)

Syntax

SET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the [SPA/GPA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") parameter specified in pid [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry") to the content of the data object dobj. The ID pid must be a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like field that contains no more than 20 characters and does not consist solely of blanks. pid is case-sensitive. dobj expects a flat character-like field whose binary content is passed in an unconverted format.

The statement GET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [program memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroll_area_glosry.htm "Glossary Entry"), which is loaded when rolled in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory.htm)). If the SPA/GPA parameter specified for the current user in pid does not yet exist in the [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry"), it is created. If the SPA/GPA parameter has already been created for the current user, its value is overwritten.

In a program, SPA/GPA parameters can only be created or assigned values if a name exists for them in the table TPARA. If it is known statically that an ID pid is not in the database table TPARA, the extended program check reports an error.

Notes

-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
    
-   The statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, which means that they are only suitable for passing data within a single [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") and not for passing data between two main sessions in parallel. This is because programs that run in parallel can change the state of the parameters unpredictably.
    

Example

If the user selects a flight displayed in the basic list, the SPA/GPA parameters CAR and CON are set to the ID of the airline and the number of the connection at the event ATLINE-SELECTION. The names of both parameters are defined in the table TPARA for this purpose. In the initial [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of the transaction DEMO\_TRANSACTION, two input fields are associated with these SPA/GPA parameters and are displayed with the selected values as [start values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstart_value_glosry.htm "Glossary Entry").

DATA: carrier     TYPE spfli-carrid,
      connection  TYPE spfli-connid.
START-OF-SELECTION.
  SELECT carrid, connid
         FROM spfli
         INTO (@carrier, @connection).
    WRITE: / carrier HOTSPOT, connection HOTSPOT.
    HIDE:  carrier, connection.
  ENDSELECT.
AT LINE-SELECTION.
  SET PARAMETER ID: 'CAR' FIELD carrier,
                    'CON' FIELD connection.
  CALL TRANSACTION 'DEMO\_TRANSACTION'.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause:: Key only contains blank characters
    Runtime error: SET\_PARAMETER\_ID\_SPACE
    
-   Cause: Key is longer than 20 characters
    Runtime error: SET\_PARAMETER\_ID\_TOO\_LONG
    
-   Cause: Value is longer than 255 characters
    Runtime error: SET\_PARAMETER\_VALUE\_TOO\_LONG
    
-   Cause: Memory limit of the user memory was reached
    Runtime error: SET\_PARAMETER\_MEMORY\_OVERFLOW


### abapget_parameter.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Parameters in the User Memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory.htm) → 

GET PARAMETER

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_parameter_shortref.htm)

Syntax

GET PARAMETER ID pid FIELD dobj.

Effect

This statement sets the content of the data object dobj to the content of the [SPA/GPA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") parameter specified in pid in the [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry"). The ID pid must be a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like field that contains no more than 20 characters and does not consist solely of blanks. The field is case-sensitive. The binary content of the SPA/GPA parameter is passed to dobj without being converted. The following can be specified for dobj:

-   An existing flat character-like variable.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm), where a variable of type XUVALUE is declared.
    

The statement GET PARAMETER does not access the user memory directly. Instead, it accesses a local mapping of the SPA/GPA parameter in the [program memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroll_area_glosry.htm "Glossary Entry"), which is loaded when rolled in and saved in the user memory when rolled out (see [SPA/GPA Parameters and ABAP Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory.htm)). If the SPA/GPA parameter specified in pid does not yet exist in the [user memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_memory_glosry.htm "Glossary Entry") for the current user, the data object dobj is initialized and sy-subrc is set to 4.

A program can only read those SPA/GPA parameters for which there is a name in the table TPARA. If it is known statically that an ID pid is not in the database table TPARA, the extended program check reports an error.

System Fields

sy-subrc

Meaning

0

The SPA/GPA parameter specified in pid exists for the current user in the user memory and its value was passed to the target field.

4

The SPA/GPA parameter specified in pid does not exist for the current user in the user memory.

Notes

-   An SPA/GPA parameter that is readable using GET PARAMETER can either have been created previously in the user memory using the statement [SET PARAMETER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_parameter.htm) or created automatically in the [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") event of a [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") or [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry").
    
-   An SPA/GPA parameter specified in pid must be entered in uppercase to match a name in the database table TPARA.
    
-   The statements SET PARAMETER and GET PARAMETER do not work directly with the SPA/GPA parameters of the user memory, which means that they are only suitable for passing data within a single [ABAP session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_session_glosry.htm "Glossary Entry") and not for passing data between two main sessions in parallel. This is because programs that run in parallel can change the state of the parameters unpredictably.
    

Example

In this example, the current value of the SPA/GPA parameter RID is read from the user memory to the data object prog. In the dynpros in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"), this parameter is associated with the input fields for a program name. When an ABAP Workbench tool in which an ABAP program is processed, is first called, the parameter is created in the event PAI and assigned the name of the program specified there. If, in the same user session, no dynpro is processed that sets the parameter RID and no corresponding SET PARAMETER statement was executed beforehand, RID is not found in the user memory.

DATA: para TYPE tpara-paramid VALUE 'RID',
      prog TYPE sy-repid.
GET PARAMETER ID para FIELD prog.
IF sy-subrc <> 0.
  MESSAGE 'Parameter not found' TYPE 'I'.
ENDIF.
