  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Saver Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) → 

CLEANUP method

The cleanup method is called when an error has occurred during the execution of the methods [finalize](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_finalize.htm) and [check\_before\_save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_check_before_save.htm). During the cleanup process, all calculations and data modifications are discarded and the transactional buffer is deleted.

The cleanup method is also called at the end of a successful saver sequence to delete the transactional buffer. Since the same ABAP session is likely to be used for more than one [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry"), remaining changes in the transactional buffer can lead to inconsistencies.

The cleanup method does not have any parameters and does not return errors or messages.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

In the method cleanup, the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_SAVE is called.

CLASS lcl\_travel\_saver DEFINITION
    INHERITING FROM cl\_abap\_behavior\_saver.
  PROTECTED SECTION.
    METHODS cleanup REDEFINITION.
ENDCLASS.

CLASS lcl\_travel\_saver IMPLEMENTATION.
  METHOD cleanup.
    CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_INITIALIZE'.
  ENDMETHOD.
ENDCLASS.

FUNCTION flight\_travel\_initialize.
  /dmo/cl\_flight\_legacy=>get\_instance( )->initialize( ).
ENDFUNCTION.