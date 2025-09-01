  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) →  [RAP Saver Methods](javascript:call_link\('abenabp_saver_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20finalize%2C%20RAP%20Saver%20Method%2C%20ABENSAVER_FINALIZE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

finalize, RAP Saver Method

Syntax

Declaration part:

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) base\_class ...
     ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) finalize [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Implementation part:

[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\)).
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) finalize.
      ...
      [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

[RAP saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that is declared as part of a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry"). There, it is the first method to be called.
-   It is used to make any final calculations and data modifications involving all [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the current [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry").
-   In [managed](javascript:call_link\('abenbdl_impl_type.htm'\)) scenarios, [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) with ON SAVE are called during the finalize method call.
-   It has the following implicit, predefined [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   [failed](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR FAILED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
-   If the method returns an error in the failed parameter, the save sequence is terminated and the [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) method is called to discard any changes made to the data in the current RAP transaction and to clean up the transactional buffer. After that, the [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry") is not processed. Instead, you return to the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) and [Phases in a RAP transaction](javascript:call_link\('abenrap_luw_abexa.htm'\)) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.