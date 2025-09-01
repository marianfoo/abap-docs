  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: check_before_save, RAP Saver Method, ABENSAVER_CHECK_BEFORE_SAVE, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

check\_before\_save, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) check\_before\_save [REDEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm) check\_before\_save.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP early save phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry").
-   It has the following implicit, predefined [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters:
    -   [failed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR FAILED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm).
    -   [reported](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm).
-   It is responsible for checking the consistency of the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") before the [RAP late save phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry"). To guarantee a successful saving for all involved [RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"), [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm) should be implemented that are called within the check\_before\_save method.
-   If the method returns an error in the failed parameter, the save sequence is terminated and the [cleanup\_finalize](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsaver_class_cleanup_finalize.htm) method is called to discard all changes made to the data in the current [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.
-   When using CL\_ABAP\_BEHAVIOR\_SAVER as base class base\_class from which the [RAP saver class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") inherits and if the check\_before\_save method does not return an error, a point of no return regarding the RAP save sequence has been reached, that is, the following RAP saver methods must guarantee a successful saving of data to the database.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_ln_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.