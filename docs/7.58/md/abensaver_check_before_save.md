  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20check_before_save%2C%20RAP%20Saver%20Method%2C%20ABENSAVER_CHECK_BEFORE_SAVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

check\_before\_save, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) check\_before\_save [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) check\_before\_save.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry").
-   It has the following implicit, predefined [CHANGING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) parameters:
    -   [failed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR FAILED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).
    -   [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).
-   It checks the consistency of the [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") before the [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry") to ensure a successful save for all involved [RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").
-   In [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) scenarios, [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm) are called during the check\_before\_save method call.
-   If the method returns an error in the failed parameter, the save sequence is terminated and the [cleanup\_finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsaver_class_cleanup_finalize.htm) method is called to discard any changes made to the data in the current [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.
-   If CL\_ABAP\_BEHAVIOR\_SAVER is used as the base class base\_class from which the [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") inherits, and if the check\_before\_save method does not return an error, the RAP save sequence has reached a point of no return, that is, the following RAP saver methods must ensure that the data is successfully saved to the database.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap)
-   [Invalid Statements and Operations in Transactional Contexts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinvalid_stmts_in_tx.htm)

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_ln_abexa.htm) and [Phases in a RAP Transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_abexa.htm) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.