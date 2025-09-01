  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) → 

ABAP Behavior Pools (ABP)

\* Work in progress \*

[ABAP Behavior Pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry")

In the case of the [implementation type](javascript:call_link\('abenbdl_implementation.htm'\)) unmanaged, the application must implement all significant components of the [REST](javascript:call_link\('abenrestful_abap_programming.htm'\)) contract itself All required operations ([CREATE](javascript:call_link\('abenbdl_standard_operations.htm'\)), [UPDATE](javascript:call_link\('abenbdl_standard_operations.htm'\)), and [DELETE](javascript:call_link\('abenbdl_standard_operations.htm'\)) plus any application-specific [actions](javascript:call_link\('abenbdl_action.htm'\))) must be defined in the associated [behavior definition](javascript:call_link\('abencds_behavior_definitions.htm'\)) before being implemented in ABAP.

The [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), a special global ABAP class, is used to implement the transactional behavior of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). Behavior pools refer to behavior definitions. The actual implementation is based on ABAP and is divided into two phases:

-   an interaction phase (implemented using one or more local [handler classes](javascript:call_link\('abenabp_handler_class.htm'\)))
    In this interaction phase, the application performs writes and reads that need to be evaluated and whose effects (if without errors) need to be saved to a transactional buffer.

-   a save phase (implemented using a local [saver class](javascript:call_link\('abenabp_saver_class.htm'\)))
    The save phase consists of a sequence of calls to synchronize the involved business objects. The method [save](javascript:call_link\('abensaver_method_save.htm'\)) is the last call in this sequence, in which changes can and must be written to the database.

The basis class for the handler and saver class is class CL\_ABAP\_BEHV. It defines [data types](javascript:call_link\('abencomponents_derived_types.htm'\)) to be used in the behavior implementation (for example, %CID and %PID). The following classes are derived from the basis class:

-   CL\_ABAP\_BEHAVIOR\_HANDLER
    The basis class for the handler class. It offers the implementation of methods for handling messages.

-   CL\_ABAP\_BEHAVIOR\_SAVER
    The basis class for the saver class. It specifies the signature of all transactional methods that are used to implement the saver sequence.

Continue
[ABP - Global class](javascript:call_link\('abenabp_global_class.htm'\))
[ABP - Handler Class](javascript:call_link\('abenabp_handler_class.htm'\))
[ABP - Saver Class](javascript:call_link\('abenabp_saver_class.htm'\))