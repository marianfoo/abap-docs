  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) →  [RAP Saver Methods](javascript:call_link\('abenabp_saver_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: finalize, RAP Saver Method, ABENSAVER_FINALIZE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

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
-   It is used to make any final calculations and data modifications involving all [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"). The method is the last chance to modify data in the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry").
-   It has the following implicit, predefined [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   [failed](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR FAILED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)): [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
-   If the method returns an error in the failed parameter, the save sequence is terminated and the [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) method is called to discard all changes made to the data in the current RAP LUW and to clean up the transactional buffer.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.