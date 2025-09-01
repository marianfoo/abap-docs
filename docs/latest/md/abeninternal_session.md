  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_oview.htm) →  [ABAP Programs on the AS ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenorganization_of_modules.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Programs%20in%20the%20Internal%20Session%2C%20ABENINTERNAL_SESSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Programs in the Internal Session

The following figure shows the organization of programs within an [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of an [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") in a [user session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_session_glosry.htm "Glossary Entry") of an [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry").

![Figure](abdoc_memory2.gif)

-   [Program Groups](#@@ITOC@@ABENINTERNAL_SESSION_1)
    -   [Main Program Group](#@@ITOC@@ABENINTERNAL_SESSION_2)
    -   [Additional Program Group](#@@ITOC@@ABENINTERNAL_SESSION_3)
    -   [Main Program of a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_4)
    -   [Programs Loaded into a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_5)
    -   [Data Objects](#@@ITOC@@ABENINTERNAL_SESSION_6)
    -   [Class Instances](#@@ITOC@@ABENINTERNAL_SESSION_7)
-   [Interface Work Areas](#@@ITOC@@ABENINTERNAL_SESSION_8)
-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups   

Multiple programs organized in program groups can be loaded into an internal session. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of this internal session.

Main Program Group   

When an internal session is created by [calling an ABAP program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) using [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) or a [transaction code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransaction_code_glosry.htm "Glossary Entry"), the main program group is created and the called program is its main program. The entire internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a [module pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), or a [function pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry").

Additional Program Group   

Each time a new [class pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_pool_glosry.htm "Glossary Entry") or a new [function pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry") is loaded by external use, an additional program group is created and the class pool or the function pool is the main program of the additional program group. An external usage is usually an access to components that are exposed by class pool or function group (these are the visible components of the global class or function module), however, can also be an access to local components, such as when a type is specified using [absolute type names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). An additional program group is preserved for the entire lifetime of the internal session.

Main Program of a Program Group   

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function pool). The main program of an additional program group is a class pool or a function pool for which the additional program group is created during its loading.

Programs Loaded into a Program Group   

When programs that are not function pools or class pools are loaded by an external usage, they do not form additional program groups; instead they are loaded into the program group of the user. This happens, for example:

-   During the external call of subroutines that are defined in executable programs, module pools or subroutine pools
-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpcall.htm), if the dynpro is not defined in a function pool
-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")
-   For statements such as [SET PF-STATUS OF PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_dynpro.htm), if the program of the required component is not a function pool.

Hints

-   To assign a program to a program group, the [program-initiating statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") and not the [program type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_glosry.htm "Glossary Entry") is of importance. For example, if the statement [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction-pool.htm) is used in a subroutine pool instead of [PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprogram.htm), the program creates an additional program group when it is loaded by external usage.
-   The assignment of an additional program to its program group is particularly important if procedures of this program are [called externally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_groups.htm), since all the programs of a program group use the interface work areas, the dynpros, lists, and GUI status of the main program (see below for more information).

Data Objects   

The [data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_object_glosry.htm "Glossary Entry") of a program, except for the [interface work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for as long as the internal session exists. After returning from a program, its data objects are retained and are available when a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") of the program is called again.

Class Instances   

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for and hence references to the object.

Hint

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas   

Data objects declared using [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm) or [DATA BEGIN*|*END OF COMMON PART ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_common.htm) are [interface work areas](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). They are only created once per program group and are shared by all programs of a program group together.

Hint

The assignment of a program to a program group, and thus the definition of the other programs with which it shares the interface work area, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses   

Only the [dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_screen.htm). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function pools) of additional program groups can also call their own dynpros.

[Lists](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclassic_list_glosry.htm "Glossary Entry") are always assigned to the current [dynpro sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_pf-status_dynpro.htm) is used to access the [GUI status](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program of a program group and uses its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro of its own compilation unit. The dialog modules and list event blocks of the main program are executed.