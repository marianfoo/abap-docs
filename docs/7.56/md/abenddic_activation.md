  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Activating ABAP Dictionary Types

When a data type in ABAP Dictionary is activated, a [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") is created that consumers such as dictionary objects, ABAP programs, or dynpros can use to effectively access all relevant type attributes. When a data type is activated, all objects that are dependent on it must be activated again as well.

-   For dependent Dictionary objects, this usually happens immediately.
-   For dependent ABAP programs or dynpros, this happens the next time they are used.

A data type can only be activated if the dependent dictionary objects can be activated as well. However, if an incompatible change to a Dictionary type leads to an error in an ABAP program or dynpro, this does not prevent activation. This type of error is detected in the system the next time the program is executed or during an explicit syntax check. When changed dictionary types are transported to target systems, dependent ABAP programs and dynpros are activated by the transport as well. If an error occurs, the transport is reported as unsuccessful.

-   [DDIC Runtime Objects](#abenddic-activation-1-------activating-dependent-objects---@ITOC@@ABENDDIC_ACTIVATION_2)
    -   [Activating Dependent ABAP Programs and Dynpros](#abenddic-activation-3-----------activating-dependent-dictionary-objects---@ITOC@@ABENDDIC_ACTIVATION_4)
-   [Mass Activation](#abenddic-activation-5-------cyclical-dependencies---@ITOC@@ABENDDIC_ACTIVATION_6)

Hint

Each time a dictionary object is activated, a detailed activation log is created that can be evaluated if errors occur.

DDIC Runtime Objects

When a data type in ABAP Dictionary is activated, a [DDIC runtime object](javascript:call_link\('abenddic_runtime_object_glosry.htm'\) "Glossary Entry") is usually created in the [name table](javascript:call_link\('abenname_table_glosry.htm'\) "Glossary Entry") ([nametab](javascript:call_link\('abenname_tab_glosry.htm'\) "Glossary Entry")), which the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") accesses when the data type is used in an ABAP program or dynpro. The DDIC runtime object summarizes all important attributes of the entire data type. A DDIC runtime object has a time stamp for the time it was activated. If an existing type is activated, the corresponding DDIC runtime object is adapted and the time stamp is updated.

Hint

-   DDIC runtime objects are only intended for internal use, but can also be checked when analyzing failed activations.
-   For quick access, DDIC runtime objects are buffered in the shared memory of the current AS instance.
-   The DDIC runtime object of a dictionary object can be displayed and checked in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) by choosing Utilities → Runtime Object. The meaning of the individual components of a DDIC runtime object is also documented here.
-   Activations of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") also create DDIC runtime objects in the name table.

Example

The program DEMO\_GET\_NAMETAB shows a read access to the DDIC runtime objects of any data types using the special methods GET\_DDIC\_HEADER and GET\_DDIC\_OBJECT of the [RTTI](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). The names of data elements, structures, table types, DDIC database tables, DDIC database views, and CDS entities can be passed to the program, but not domains.

Activating Dependent Objects

If existing Dictionary objects that are already used by other Dictionary objects or ABAP programs and dynpros are activated, the dependent objects must be activated as well.

Activating Dependent ABAP Programs and Dynpros

ABAP programs and dynpros that are dependent on a changed data type of the ABAP Dictionary are activated in the same system the first time they are used, and in the target system after a transport of the Dictionary type once it has been activated. When a dictionary type is activated, the time stamp of its DDIC runtime object is adapted, as are the time stamp sources of all ABAP programs and dynpros that use this type, if a change relevant for a program or dynpro has been made. When a program or dynpro is used, or after it has been transported, this time stamp is compared with the current time stamp of its [load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry") and is generated again if necessary.

Activating Dependent Dictionary Objects

Dictionary objects that are dependent on a changed data type of the ABAP Dictionary are activated with it immediately:

-   First, the changed data type is activated. If the activation is successful and the data type has dependent objects, its status changes to "partially active" and it is flagged accordingly.
-   The dependent objects are then activated. If a dependent object cannot be activated, its status also changes to "partially active" and it is flagged accordingly.
-   If all dependent objects are activated successfully, the changed data type is set to status "active". Otherwise, it remains "partially active".

The status "partially active" means that a Dictionary object could not be fully activated:

-   For the changed data type, "partially active" means that it can be used without restrictions, but that there are restrictions on the dependent objects.
-   For dependent objects, "partially active" means that there are generally restrictions on their use because the previous DDIC runtime object is used, which has not yet implemented the changes of the changed data type.

If an activation results in "partially active" objects, these must be located in the activation log. The causes of the errors must be eliminated and

-   first the dependent objects and
-   then the changed data type

must be activated again, until all involved objects have the status "active". If this procedure is not completed, Dictionary objects keep the status "partially active". This actually often affects the data type that was originally changed, which is in fact fully usable.

The system program RUTMSJOB can be used to deal with "partially active" objects. It identifies "partially active" objects and proposes a cleanup if possible.

Mass Activation

In a [mass activation](javascript:call_link\('abenmass_activation_glosry.htm'\) "Glossary Entry"), a system program (RADMASG0) is used as a [mass activator](javascript:call_link\('abenmass_activator_glosry.htm'\) "Glossary Entry") to activate a number of dictionary objects. The mass activator is provided with a list of the Dictionary objects to be activated. A mass activation can be started as follows:

-   Explicit call of the mass activator. The list of Dictionary objects can be passed as follows:
    -   Direct Objects
        
        The Dictionary objects to be activated can be entered in an input mask.
        
    -   External Table
        
        A table from the structure TACOB can be specified. All Dictionary objects contained in this table are activated. The entries for objects that have been successfully activated are deleted from the table. If an object is not activated successfully, the corresponding entry remains in the table and an error text is saved in the relevant column.
        
    -   Transport Request
        
        A transport request can be specified. All Dictionary objects contained in the request are activated.
        
-   Implicit call of the mass activator after a transport request has been imported into a target system. All Dictionary objects contained in the request are activated.

For mass activations that will take a long time, [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry") can be used to execute the mass activator. In this case, the Dictionary objects to be activated can be specified in an external table with type TACOB or in the TACOB table itself.

Hint

If Dictionary objects have interdependencies or belong together, mass activation is preferable to activating them individually. The mass activator activates them in the correct order and avoids unnecessary repetitions.

Cyclical Dependencies

Activations that would produce a cycle of technical dependencies between the DDIC runtime objects are not possible. In mass activations, cyclical dependencies that arise from semantic relationships between Dictionary objects are resolved by step-by-step activation. Here, the semantic relationships are first bypassed and then reintroduced.

See also [ABAP CDS - Cyclical Dependencies](javascript:call_link\('abencds_cycle_problems.htm'\))