  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Overview](javascript:call_link\('abenabap_oview.htm'\)) →  [ABAP Programs on the AS ABAP](javascript:call_link\('abenorganization_of_modules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Programs in the Internal Session, ABENINTERNAL_SESSION, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Programs in the Internal Session

The following figure shows the organization of programs within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of an [ABAP session](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry") in a [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") of an [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry").

![Figure](abdoc_memory2.gif)

-   [Program Groups](#abeninternal-session-1-----------main-program-group---@ITOC@@ABENINTERNAL_SESSION_2)
    -   [Additional Program Group](#abeninternal-session-3-----------main-program-of-a-program-group---@ITOC@@ABENINTERNAL_SESSION_4)
    -   [Programs Loaded into a Program Group](#abeninternal-session-5-----------data-objects---@ITOC@@ABENINTERNAL_SESSION_6)
    -   [Class Instances](#abeninternal-session-7-------interface-work-areas---@ITOC@@ABENINTERNAL_SESSION_8)
-   [Dynpros, Lists, and GUI Statuses](#@@ITOC@@ABENINTERNAL_SESSION_9)

Program Groups   

Multiple programs organized in program groups can be loaded into an internal session. Once an internal session is exited, it is closed. It is then no longer possible to access data and objects of this internal session.

Main Program Group   

When an internal session is created by [calling an ABAP program](javascript:call_link\('abenabap_program_call.htm'\)) using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) or a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry"), the main program group is created and the called program is its main program. The entire internal session exists for as long as the main program of the main program group is being executed. This can be an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"), or a [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry").

Additional Program Group   

Each time a new [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") or a new [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") is loaded by external use, an additional program group is created and the class pool or the function pool is the main program of the additional program group. An external usage is usually an access to components that are exposed by class pool or function group (these are the visible components of the global class or function module), however, can also be an access to local components, such as when a type is specified using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). An additional program group is preserved for the entire lifetime of the internal session.

Main Program of a Program Group   

The first program loaded of a program group is the main program of this group. The main program of a main program group is the first program loaded into the internal session by a program call (this program is an executable program, module pool, or function pool). The main program of an additional program group is a class pool or a function pool for which the additional program group is created during its loading.

Programs Loaded into a Program Group   

When programs that are not function pools or class pools are loaded by an external usage, they do not form additional program groups; instead they are loaded into the program group of the user. This happens, for example:

-   During the external call of subroutines that are defined in executable programs, module pools or subroutine pools
-   When using the dynpro statement [CALL SUBSCREEN sub\_area INCLUDING prog](javascript:call_link\('dynpcall.htm'\)), if the dynpro is not defined in a function pool
-   In dynamic access to a local data type or object type of an executable program, module pool, or a subroutine using [absolute type names](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry")
-   For statements such as [SET PF-STATUS OF PROGRAM](javascript:call_link\('abapset_pf-status_dynpro.htm'\)), if the program of the required component is not a function pool.

Hints

-   To assign a program to a program group, the [program-initiating statement](javascript:call_link\('abenprogram_init_statement_glosry.htm'\) "Glossary Entry") and not the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") is of importance. For example, if the statement [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\)) is used in a subroutine pool instead of [PROGRAM](javascript:call_link\('abapprogram.htm'\)), the program creates an additional program group when it is loaded by external usage.
-   The assignment of an additional program to its program group is particularly important if procedures of this program are [called externally](javascript:call_link\('abenprogram_groups.htm'\)), since all the programs of a program group use the interface work areas, the dynpros, lists, and GUI status of the main program (see below for more information).

Data Objects   

The [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") of a program, except for the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"), belong exclusively to their program and are only visible there. A loaded program exists for as long as the internal session exists. After returning from a program, its data objects are retained and are available when a [procedure](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") of the program is called again.

Class Instances   

Objects as instances of classes can be used by all programs (and objects) of an internal session. An object exists for as long as there are users for and hence references to the object.

Hint

This means that references to objects of the internal session can be passed to externally called procedures.

Interface Work Areas   

Data objects declared using [TABLES](javascript:call_link\('abaptables.htm'\)) or [DATA BEGIN*|*END OF COMMON PART ...](javascript:call_link\('abapdata_common.htm'\)) are [interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry"). They are only created once per program group and are shared by all programs of a program group together.

Hint

The assignment of a program to a program group, and thus the definition of the other programs with which it shares the interface work area, can depend on the usage sequence.

Dynpros, Lists, and GUI Statuses   

Only the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the main program of a program group can be called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)). After an internal session is loaded, these are the dynpros of the main program of the main program group. The main programs (function pools) of additional program groups can also call their own dynpros.

[Lists](javascript:call_link\('abenclassic_list_glosry.htm'\) "Glossary Entry") are always assigned to the current [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") and therefore also to the main program of the program group.

By default, [SET PF-STATUS](javascript:call_link\('abapset_pf-status_dynpro.htm'\)) is used to access the [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") of the main program of a program group and uses its data objects for dynamic texts.

All programs of a program group work with the dynpros, lists, and GUI status of the main program by default. A statement CALL SCREEN in an externally called subroutine, for example, never calls a dynpro of its own compilation unit. The dialog modules and list event blocks of the main program are executed.