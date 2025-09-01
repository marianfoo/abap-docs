  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) →  [RAP Saver Methods](javascript:call_link\('abenabp_saver_methods.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: cleanup, RAP Saver Method, ABENSAVER_METHOD_CLEANUP, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

cleanup, RAP Saver Method

Syntax

Declaration part:

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\)) [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) base\_class ...
     ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) cleanup [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Implementation part:

[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\)).
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup.
      ...
      [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

[RAP saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that is declared as part of a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is responsible for clearing the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and is only called after the RAP saver methods [save](javascript:call_link\('abensaver_method_save.htm'\)) or [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) have been processed.
-   It is the final method of the RAP save sequence to be called in case of a successful saving of instances to the database.
-   Apart from using the method in unmanaged scenarios, it can also be used in managed scenarios that include an [additional](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") or [unmanaged save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") implementation with the notation ... and cleanup in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (see the BDEF prerequisites in [CDS BDL - saving options](javascript:call_link\('abenbdl_saving.htm'\))).
-   It does not have any [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) or [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters.
-   It is part of the [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry").

Hint

A rollback request using [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)) triggers the calling of the cleanup method.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.