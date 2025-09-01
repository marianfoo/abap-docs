  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_ABAP_BEHAVIOR_SAVER, RAP Saver Class, ABENABP_CL_ABAP_BEH_SAVER, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_ABAP\_BEHAVIOR\_SAVER, RAP Saver Class

Syntax

Syntax for [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) scenarios. The adjust\_numbers method is only available for [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)).
     *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) [finalize](javascript:call_link\('abensaver_finalize.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [save](javascript:call_link\('abensaver_method_save.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) [map\_messages](javascript:call_link\('abensaver_map_messages.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION.](javascript:call_link\('abapclass_implementation.htm'\))
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) finalize. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) check\_before\_save. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
      [METHOD](javascript:call_link\('abapmethod.htm'\)) adjust\_numbers. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) map\_messages. ... [ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).*\]*
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup\_finalize. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Syntax for managed scenarios with [additional or unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)). The adjust\_numbers method is only available for [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)).
     [METHODS](javascript:call_link\('abapmethods.htm'\)) [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     [METHODS](javascript:call_link\('abapmethods.htm'\)) [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
    *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) cleanup [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION.](javascript:call_link\('abapclass_implementation.htm'\))
      [METHOD](javascript:call_link\('abapmethod.htm'\)) adjust\_numbers. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save\_modified. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

Used as base class from which a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") inherits. The RAP saver class must be defined in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an ABP.

Mandatory [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") must be implemented. Optional RAP saver methods can be implemented. The RAP saver methods are declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry"). They implicitly have [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry").

RAP saver classes are implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)) since instantiating and calling only happens through the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry"). All saver methods are called after at least one successful modification of data in the current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") following the triggering of the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"), for example, by an explicit [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement. In contrast to [RAP handler methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)), saver methods do not have data of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as import parameter (except for the [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) method). Therefore, instance data must be handled via the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") when self-implementing the saver methods.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Hints

-   The use of CL\_ABAP\_BEHAVIOR\_SAVER is restricted to redefining RAP saver methods in a behavior pool.
-   Only one RAP saver class can be implemented for a RAP BO.

Executable Examples

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario to also include the adjust\_numbers saver method.
-   The example [Example for save\_modified in a managed RAP BO with additional save](javascript:call_link\('abensave_modified_add_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [Example for save\_modified in a managed RAP BO with unmanaged save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.