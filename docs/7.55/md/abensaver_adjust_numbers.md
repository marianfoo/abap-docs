  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [ABP - Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

Method ADJUST\_NUMBERS

\* Work in progress \*

The method adjust\_numbers of the local [saver class](javascript:call_link\('abenabp_saver_class.htm'\)) is the third method of the saver sequence of the behavior implementation of a business object. If the second method of the saver sequence [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) does not return an error, the point has been reached after which a successful save is guaranteed for all involved business objects. After this point, the method adjust\_numbers is called. This method implements the [late numbering](javascript:call_link\('abenlate_numbering_glosry.htm'\) "Glossary Entry") that is specified in the behavior definition of the business object.

The implementation of the method adjust\_numbers assigns the final keys for the content IDs ([%CID](javascript:call_link\('abencomponents_derived_types.htm'\))). The output of the method is a table that links the [%PID](javascript:call_link\('abencomponents_derived_types.htm'\)) with the respective final IDs. These final IDs are provided using the [output parameter](javascript:call_link\('abenrpm_export_parameters.htm'\)) mapped so that temporary IDs can be exchanged.

The structure of the parameter mapped of the method adjust\_numbers is different from the structure of the parameter mapped of the method FOR MODIFY .... FOR CREATE. The following two structures exist for the parameter mapped of the method adjust\_numbers:

-   %TMP
    Contains the temporary keys that are specified in the output parameter mapped of the operation FOR MODIFY ... FOR CREATE.

-   ID
    Contains the final keys.

The method adjust\_numbers does not return any failed keys or messages because the exchange of temporary IDs happens after the point at which a successful save is guaranteed for all involved business objects.

Tip

Ideally, the late numbering is implemented separately from the save. In many legacy applications, however, the final numbers are determined during the save. In this case, we recommend implementing the save logic in the method adjust\_numbers and leaving the method save empty.