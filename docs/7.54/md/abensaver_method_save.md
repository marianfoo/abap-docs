  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Saver Class](javascript:call_link\('abenrpm_saver_class.htm'\)) → 

Method SAVE

The method save of the local [saver class](javascript:call_link\('abenrpm_saver_class.htm'\)) is the fourth method of the saver sequence of the behavior implementation of a business object. It is called to save all data of the business object instance from the transactional buffer to the database.

The method save does not have any output parameters and does not return any failed keys or messages.

The implementation of the method save is mandatory.

Once the data is saved to the database, the transactional buffer is deleted. This is because the same ABAP session is potentially used for more than one [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") and any remaining changes in the transactional buffer can cause inconsistencies.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

In the method save, the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_SAVE is called.

CLASS lcl\_travel\_saver DEFINITION
    INHERITING FROM cl\_abap\_behavior\_saver.
  PROTECTED SECTION.
    METHODS save REDEFINITION.
ENDCLASS.

CLASS lcl\_travel\_saver IMPLEMENTATION.
  METHOD save.
    CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_SAVE'.
  ENDMETHOD.
ENDCLASS.

FUNCTION /dmo/flight\_travel\_save.
  /dmo/cl\_flight\_legacy=>get\_instance( )->save( ).
ENDFUNCTION.