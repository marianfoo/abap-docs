  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_oview.htm) →  [ABAP Programs in AS ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenorganization_of_modules.htm) → 

Programs in the Internal Session

The following figure shows the memory organization within an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"):

![Figure](abdoc_memory2.gif)

-   [Program Groups](#@@ITOC@@ABENINTERNAL_SESSION_1)

-   [Main Program Group](#@@ITOC@@ABENINTERNAL_SESSION_2)

-   [Additional Program Group](#@@ITOC@@ABENINTERNAL_SESSION_3)

-   [Main Program of a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_4)

-   [Programs Loaded into a Program Group](#@@ITOC@@ABENINTERNAL_SESSION_5)

-   [Data Objects](#@@ITOC@@ABENINTERNAL_SESSION_6)

-   [Instances of Classes](#@@ITOC@@ABENINTERNAL_SESSION_7)

-   [Interface Work Areas](#@@ITOC@@ABENINTERNAL_SESSION_8)

-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups

In an internal session it is possible to load multiple programs that can be organized in program groups. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of the internal session.

Main Program Group

When an internal session is created by [calling an ABAP program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_call.htm) using [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm) or a [transaction code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentransaction_code_glosry.htm "Glossary Entry"), the main program group is created and the called program is its main program. The full internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry"), a [module pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodul_pool_glosry.htm "Glossary Entry"), or a [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry").

Additional Program Group

Each time a new [class pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_pool_glosry.htm "Glossary Entry") or a new [function group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry") is loaded by being used externally, an additional program group is created and the class pool or the function group is the main program of the additional program group. A pool or group is usually used externally when the components it exposes are accessed,(these are the visible components of the global class or function module). However, this can also occur when local components are accessed, such as when a type is specified using [absolute type names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry"). An additional program group is persisted for as long as the internal session exists.

Main Program of a Program Group

The first program of a program group loaded is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function group). The main program of an additional program group is a class pool or a function group that, when loaded, creates the additional program group.

Programs Loaded into a Program Group

When programs that are not function groups or class pools are loaded (because they are used externally), they do not create additional program groups and are loaded into the program group of the consumer instead. This happens for example in the following cases:

-   In external calls of subroutines that are defined in executable programs, module pools or subroutine pools

-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpcall.htm), if the dynpro is not defined in a function group

-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabsolute_typename_glosry.htm "Glossary Entry")

-   In statements such as [SET PF-STATUS OF PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_pf-status_dynpro.htm), if the program of the necessary component is not a function group.

Notes

-   The [introductory program statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_init_statement_glosry.htm "Glossary Entry") is important for the assignment of a program to a program group and not the [program type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_glosry.htm "Glossary Entry"). For example, if the statement [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm) is used in a subroutine pool instead of [PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprogram.htm), when the program is loaded by an external usage it creates an additional program group.

-   The assignment of a program loaded into a program group is particularly important if procedures of this program are [called externally](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_groups.htm), since all the programs of a program group use the interface work area, the dynpros, lists, and GUI statuses of the main program (see below for more information).

Data Objects

The [data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_object_glosry.htm "Glossary Entry") of a program, with the exception of the [interface work area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for the same length of time as the internal session. After the return from a program, its data objects are preserved and are available if a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") of the program is called again.

Instances of Classes

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are consumers for, and hence references to, the object.

Note

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas

Data objects declared using [TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptables.htm) or [DATA BEGIN*|*END OF COMMON PART ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_common.htm) are [interface work areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_work_area_glosry.htm "Glossary Entry"). These are only created once per program group and are used by all programs of a program group together.

Note

The assignment of a program to a program group (which hence defines which other programs share the interface work areas), can be determined by the order in which they are used.

Dynpros, Lists, and GUI Statuses

Only the [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_screen.htm). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (the function groups) of additional program groups can also call their own dynpros.

[Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_glosry.htm "Glossary Entry") are always assigned to the current [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_pf-status_dynpro.htm) is used to access the [GUI status](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program of a program group and use its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro from its own master program. The dialog modules and list result blocks of the main program are executed instead.