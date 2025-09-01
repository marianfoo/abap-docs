  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20adjust_numbers%2C%20RAP%20Saver%20Method%2C%20ABENSAVER_ADJUST_NUMBERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

adjust\_numbers, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) adjust\_numbers [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) adjust\_numbers.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is mandatory.
-   It is only available in [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios.
-   It is part of the [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry").
-   It has the following implicit, predefined [CHANGING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_general.htm) parameters when using CL\_ABAP\_BEHAVIOR\_SAVER as base class base\_class from which the [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") inherits:
    -   [mapped](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR MAPPED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).
    -   [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm): [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).
-   It is responsible for converting and mapping preliminary keys and identifiers (e. g. [%pid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_pid.htm) with which [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") are identified during the [RAP interaction phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_int_phase_glosry.htm "Glossary Entry")) to the final key values of [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry").
-   The [RAP response parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry") mapped must be filled in the method implementation by mapping the preliminary keys and identifiers to the final key values. It must be ensured that the key values are unique.

Hints

-   The method is part of the [RAP late save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry").
-   Usually, errors from [RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") must not appear after the [RAP early save phase](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenearly_rap_save_phase_glosry.htm "Glossary Entry"). Hence, the RAP response parameter failed is not available as a parameter. In case an application must stop the transaction, a runtime error occurs. However, there are exceptional cases in which errors cannot be avoided (see [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_cl_abap_beh_saver_failed.htm)). In these cases, CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED can be used as base class base\_class from which the [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") inherits. Then, the response parameter [failed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm) is additionally available. It is of type [TYPE RESPONSE FOR FAILED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

Executable Example

The example [Example for a RAP Saver Class (Late Numbering Scenario)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_ln_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario.