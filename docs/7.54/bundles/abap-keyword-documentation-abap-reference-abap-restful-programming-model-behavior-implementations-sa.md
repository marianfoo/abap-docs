# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Behavior Implementations / Saver Class

Included pages: 6


### abenrpm_saver_class.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) → 

Saver Class

Syntax

CLASS lcl\_saver\_name DEFINITION
      INHERITING FROM cl\_abap\_behavior\_saver
        *\[*ABSTRACT*\]* *\[*FINAL*\]*.
  PROTECTED SECTION.
    METHODS finalize          REDEFINITION.
    METHODS check\_before\_save REDEFINITION.
    METHODS adjust\_numbers    REDEFINITION.
    METHODS save              REDEFINITION.
    METHODS cleanup           REDEFINITION.
ENDCLASS.
CLASS lcl\_saver\_name IMPLEMENTATION.
  METHOD finalize.
    ...
  ENDMETHOD.
  METHOD check\_before\_save.
    ...
  ENDMETHOD.
  METHOD adjust\_numbers.
    ...
  ENDMETHOD.
  METHOD save.
    ...
  ENDMETHOD.
  METHOD cleanup.
    ...
  ENDMETHOD.
ENDCLASS.

Effect

Within the [behavior pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), a local saver class is defined to implement the save phase of the [business object behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_glosry.htm "Glossary Entry"). The save phase consists of a sequence of calls used to synchronize the business objects in question. Only the final call in this sequence is the actual save method, in which changes can and must be written to the database.

The saver class lcl\_saver is defined implicitly as ABSTRACT and FINAL and derived from the class CL\_ABAP\_BEHAVIOR\_SAVER. There are no special rules for the name of the saver class.

The transactional methods [finalize](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_finalize.htm), [check\_before\_save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_check_before_save.htm), [adjust\_numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_save.htm), and [cleanup](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_cleanup.htm) can be implemented in a saver class:

-   finalize
    Finalizes any changes to data before it can be saved to the database.

-   check\_before\_save
    Checks the consistency of the application buffer.

-   adjust\_numbers
    Implements [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlate_numbering_glosry.htm "Glossary Entry").

-   save
    Saves the data from the transactional buffer to the database.

-   cleanup
    Discards all data changes and cleans up the transactional buffer.

The methods that correspond to the saver protocol (finalize, check\_before\_save, adjust\_numbers, save, and cleanup) are all defined already in the basis class CL\_ABAP\_BEHAVIOR\_SAVER and do not have individual signatures. The derived concrete saver class must implement these methods using REDEFINITION. In the redefinition, the types of the parameters defined in the basis class (failed, mapped, and reported are replaced by concrete [derived types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm). In the basis class, these parameters are defined generically as [CHANGING parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchanging_type_data.htm).

The implementation of the methods finalize, check\_before\_save, and cleanup is not mandatory. The only mandatory redefinition is the method save. If the behavior definition specifies late numbering, the method adjust\_numbers must also be implemented. The structure [mapped](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenchanging_type_data.htm) is filled here.

Unlike in the [interaction phase](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_handler_class.htm), no instance phase is passed in the saver phase. The saver itself must know where the data is to which it needs to apply the method finalize (by cooperating with the handler or the underlying legacy functions), namely in the transactional buffer administered by the application.

The saver sequence finalize, check\_before\_save, adjust\_numbers, save, and cleanup is called in this order for every business object, after at least one successful change is made in the current [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") using the business object provider. A successful saver sequence is as follows:

-   The saver sequence starts with the method finalize, which finalizes the calculations and data changes before data can be saved to the database.

-   If the method finalize does not report any errors, the follow-on method check\_before\_save is called.

-   If the method check\_before\_save does not return an error, the point has been reached from which a successful save is guaranteed for all business objects in question. After this point, the method adjust\_numbers is called to respect late numbering.

-   Finally, the method save is called to save all data of the business object instance from the transactional buffer to the database.

-   At the end, the method cleanup is called to delete the transaction buffer.

If the method finalize or check\_before\_save reports an error, the method cleanup is called to discard all changes made to the data in the current LUW and to clean up the transactional buffer.

The methods finalize and check\_before\_save can still fail, but this is not possible in the following methods. This means that, from the method adjust\_numbers, the parameters failed and reported no longer exist.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_travel\_saver DEFINITION
      INHERITING FROM cl\_abap\_behavior\_saver.
  PROTECTED SECTION.
    METHODS finalize          REDEFINITION.
    METHODS check\_before\_save REDEFINITION.
    METHODS save              REDEFINITION.
    METHODS cleanup           REDEFINITION.
ENDCLASS.

CLASS lcl\_saver IMPLEMENTATION.
  METHOD finalize.
    ...
  ENDMETHOD.
  METHOD check\_before\_save.
    ...
  ENDMETHOD.
  METHOD adjust\_numbers.
    ...
  ENDMETHOD.
  METHOD save.
    ...
  ENDMETHOD.
  METHOD cleanup.
    ...
  ENDMETHOD.
ENDCLASS.

Continue
[Method FINALIZE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_finalize.htm)
[Method CHECK\_BEFORE\_SAVE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_check_before_save.htm)
[Method ADJUST\_NUMBERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_adjust_numbers.htm)
[Method SAVE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_save.htm)
[CLEANUP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_cleanup.htm)


### abensaver_finalize.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Saver Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) → 

Method FINALIZE

The method finalize of the local [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) is the first method of the saver sequence of the behavior implementation of a business object. The method is used to make any final calculations and data modifications before the method [save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_save.htm) saves data in the database.

The method finalize can return failed keys and messages. For this pupose, there are the [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm) failed and reported.

If the finalize method returns an error in the output parameter failed, the saver sequence is terminated. The cleanup method is called to discard all changes made to the data in the current [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.

If the finalize method does not report an error, the subsequent method [check\_before\_save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_check_before_save.htm) is called.

Remarks

-   The parameter mapped is part of the signature of the method finalize. It is not, however, used.

-   The implementation of the method finalize is not mandatory.


### abensaver_check_before_save.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Saver Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) → 

Method CHECK\_BEFORE\_SAVE

The method check\_before\_save of the local [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) is the second method of the saver sequence of the behavior implementation of a business object. The method check\_before\_save is used to check the application buffer for consistency before the method [save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_save.htm) saves data in the database.

The method check\_before\_save can return failed keys and messages. For this pupose, there are the [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm) failed and reported.

If the check\_before\_save method returns an error in the output parameter failed, the saver sequence is terminated. The [cleanup](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_method_cleanup.htm) method is called to discard all changes made to the data in the current [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.

If the method check\_before\_save does not return an error, the point has been reached after which a successful save is guaranteed for all involved business objects. The subsequent method [adjust\_numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_adjust_numbers.htm) is called.

Remarks

-   The parameter mapped is part of the signature of the method check\_before\_save. It is not, however, used.

-   The implementation of the method check\_before\_save is not mandatory.


### abensaver_adjust_numbers.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Saver Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) → 

Method ADJUST\_NUMBERS

The method adjust\_numbers of the local [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) is the third method of the saver sequence of the behavior implementation of a business object. If the second method of the saver sequence [check\_before\_save](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_check_before_save.htm) does not return an error, the point has been reached after which a successful save is guaranteed for all involved business objects. After this point, the method adjust\_numbers is called. This method implements the [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlate_numbering_glosry.htm "Glossary Entry") that is specified in the behavior definition of the business object.

The implementation of the method adjust\_numbers assigns the final keys for the content IDs ([%CID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm)). The output of the method is a table that links the [%PID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) with the respective final IDs. These final IDs are provided using the [output parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm) mapped so that temporary IDs can be exchanged.

The structure of the parameter mapped of the method adjust\_numbers is different from the structure of the parameter mapped of the method FOR MODIFY .... FOR CREATE. The following two structures exist for the parameter mapped of the method adjust\_numbers:

-   %TMP
    Contains the temporary keys that are specified in the output parameter mapped of the operation FOR MODIFY ... FOR CREATE.

-   ID
    Contains the final keys.

The method adjust\_numbers does not return any failed keys or messages because the exchange of temporary IDs happens after the point at which a successful save is guaranteed for all involved business objects.

Tip

Ideally, the late numbering is implemented separately from the save. In many legacy applications, however, the final numbers are determined during the save. In this case, we recommend implementing the save logic in the method adjust\_numbers and leaving the method save empty.


### abensaver_method_save.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) →  [Saver Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) → 

Method SAVE

The method save of the local [saver class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_saver_class.htm) is the fourth method of the saver sequence of the behavior implementation of a business object. It is called to save all data of the business object instance from the transactional buffer to the database.

The method save does not have any output parameters and does not return any failed keys or messages.

The implementation of the method save is mandatory.

Once the data is saved to the database, the transactional buffer is deleted. This is because the same ABAP session is potentially used for more than one [LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenluw_glosry.htm "Glossary Entry") and any remaining changes in the transactional buffer can cause inconsistencies.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

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


### abensaver_method_cleanup.htm

  

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
