  

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