  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) →  [RAP Saver Methods](javascript:call_link\('abenabp_saver_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20save_modified%2C%20RAP%20Saver%20Method%2C%20ABAPRAP_SAVER_METH_SAVE_MODIFIED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

save\_modified, RAP Saver Method

Syntax

Declaration part:

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) base\_class ...
     ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) save\_modified [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Implementation part:

[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\)).
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save\_modified.
      ...
      [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

[RAP saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that is declared as part of a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is mandatory.
-   It is only available for managed scenarios that include an additional or unmanaged save implementation. In this case, the RAP saver method [save](javascript:call_link\('abensaver_method_save.htm'\)) cannot be used. See the BDEF prerequisites in [RAP BDL - Saving Options](javascript:call_link\('abenbdl_saving.htm'\)).
-   It is responsible for saving the current state of the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"), i.e. all [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") (including instances from cross-BO relationships) from within the current [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), to the database. However, the method is only called if each of the previous RAP saver methods has been processed successfully without any failures.
-   It has the following implicit, predefined [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   create: Includes information on instances that have been created within the current RAP transaction. It is of type [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\)).
    -   update: Includes information on instances that have been updated within the current RAP transaction. It is of type [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\)).
    -   delete: Includes information on instances that have been deleted within the current RAP transaction. It is of type [TYPE REQUEST FOR DELETE](javascript:call_link\('abaptype_request_for.htm'\)).
-   It has the following implicit, predefined [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters when using CL\_ABAP\_BEHAVIOR\_SAVER as base class base\_class from which the [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") inherits:
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).

Hints

-   After persisting data to the database, it is recommended that the transactional buffer is cleared (using the RAP saver method [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) if it is available and can be user-implemented) because the same ABAP session might be used for more than one RAP transaction and any remaining changes in the transactional buffer could lead to inconsistencies.
-   The method is part of the [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry").
-   Usually, errors from [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") must not appear after the [RAP early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry"). Hence, the RAP response parameter failed is not available as a parameter. In case an application must stop the transaction, a runtime error occurs. However, there are exceptional cases in which errors cannot be avoided (see [here](javascript:call_link\('abenabp_cl_abap_beh_saver_failed.htm'\))). In these cases, CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED can be used as base class base\_class from which the [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") inherits. Then, the response parameter [failed](javascript:call_link\('abaptype_response_for.htm'\)) is additionally available. It is of type [TYPE RESPONSE FOR FAILED LATE](javascript:call_link\('abaptype_response_for.htm'\)).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

Executable Example

-   The example [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](javascript:call_link\('abenrap_additional_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Unmanaged Save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.