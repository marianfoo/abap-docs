  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) → 

ABP - Saver Class

\* Work in progress \*

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

Within the [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), a local saver class is defined to implement the save phase of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry"). The save phase consists of a sequence of calls used to synchronize the business objects in question. Only the final call in this sequence is the actual save method, in which changes can and must be written to the database.

The saver class lcl\_saver is defined implicitly as ABSTRACT and FINAL and derived from the class CL\_ABAP\_BEHAVIOR\_SAVER. There are no special rules for the name of the saver class.

The transactional methods [finalize](javascript:call_link\('abensaver_finalize.htm'\)), [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)), [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)), [save](javascript:call_link\('abensaver_method_save.htm'\)), and [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) can be implemented in a saver class:

-   finalize
    Finalizes any changes to data before it can be saved to the database.

-   check\_before\_save
    Checks the consistency of the application buffer.

-   adjust\_numbers
    Implements [late numbering](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry").

-   save
    Saves the data from the transactional buffer to the database.

-   cleanup
    Discards all data changes and cleans up the transactional buffer.

The methods that correspond to the saver protocol (finalize, check\_before\_save, adjust\_numbers, save, and cleanup) are all defined already in the basis class CL\_ABAP\_BEHAVIOR\_SAVER and do not have individual signatures. The derived concrete saver class must implement these methods using REDEFINITION. In the redefinition, the types of the parameters defined in the basis class (failed, mapped, and reported are replaced by concrete [derived types](javascript:call_link\('abenrpm_derived_types.htm'\)). In the basis class, these parameters are defined generically as [CHANGING parameters](javascript:call_link\('abenchanging_type_data.htm'\)).

The implementation of the methods finalize, check\_before\_save, and cleanup is not mandatory. The only mandatory redefinition is the method save. If the behavior definition specifies late numbering, the method adjust\_numbers must also be implemented. The structure [mapped](javascript:call_link\('abenchanging_type_data.htm'\)) is filled here.

Unlike in the [interaction phase](javascript:call_link\('abenabp_handler_class.htm'\)), no instance phase is passed in the saver phase. The saver itself must know where the data is to which it needs to apply the method finalize (by cooperating with the handler or the underlying legacy functions), namely in the transactional buffer administered by the application.

The saver sequence finalize, check\_before\_save, adjust\_numbers, save, and cleanup is called in this order for every business object, after at least one successful change is made in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") using the business object provider. A successful saver sequence is as follows:

-   The saver sequence starts with the method finalize, which finalizes the calculations and data changes before data can be saved to the database.

-   If the method finalize does not report any errors, the follow-on method check\_before\_save is called.

-   If the method check\_before\_save does not return an error, the point has been reached from which a successful save is guaranteed for all business objects in question. After this point, the method adjust\_numbers is called to respect late numbering.

-   Finally, the method save is called to save all data of the business object instance from the transactional buffer to the database.

-   At the end, the method cleanup is called to delete the transaction buffer.

If the method finalize or check\_before\_save reports an error, the method cleanup is called to discard all changes made to the data in the current LUW and to clean up the transactional buffer.

The methods finalize and check\_before\_save can still fail, but this is not possible in the following methods. This means that, from the method adjust\_numbers, the parameters failed and reported no longer exist.

Example

In the following example, the data from a function module is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in CDS BDL - Example.

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
[Method FINALIZE](javascript:call_link\('abensaver_finalize.htm'\))
[Method CHECK\_BEFORE\_SAVE](javascript:call_link\('abensaver_check_before_save.htm'\))
[Method ADJUST\_NUMBERS](javascript:call_link\('abensaver_adjust_numbers.htm'\))
[Method SAVE](javascript:call_link\('abensaver_method_save.htm'\))
[CLEANUP method](javascript:call_link\('abensaver_method_cleanup.htm'\))