  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) → 

RAP Saver Class

Syntax

Syntax for [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) scenarios. The adjust\_numbers method is only available for [late  numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
     *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) [finalize](javascript:call_link\('abensaver_finalize.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [save](javascript:call_link\('abensaver_method_save.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) finalize. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) check\_before\_save. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
      [METHOD](javascript:call_link\('abapmethod.htm'\)) adjust\_numbers. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup\_finalize. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Syntax for managed scenarios with [additional or unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)):

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
     [METHODS](javascript:call_link\('abapmethods.htm'\)) [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
    *\[* [METHODS](javascript:call_link\('abapmethods.htm'\)) cleanup [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save\_modified. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).*\]*
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

A saver class can be defined in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It includes the definitions and implementations of RAP saver methods.

A saver class lsc\_bdef inherits from class CL\_ABAP\_BEHAVIOR\_SAVER. The RAP saver methods are declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry"). They implicitly have [response parameters](javascript:call_link\('abaptype_response_for.htm'\)) as outlined in the table further down.

Saver classes are implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)) since instantiating and calling only happens through the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry"). All saver methods are called after at least one successful modification of data in the current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") using a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement. In contrast to [RAP handler methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)), saver methods do not have data of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as import parameter. Therefore, instance data must be handled via the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") when self-implementing the saver methods.

The following predefined methods are part of the saver class. They are called in this sequence. The following table also shows if they are mandatory and which response parameters the methods offer:

Method

Mandatory

failed

mapped

reported

[finalize](javascript:call_link\('abensaver_finalize.htm'\))

\-

X

X

X

[check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\))

\-

X

X

X

[adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\))

X (Note: Only available and mandatory in [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios.)

\-

X

X

[save](javascript:call_link\('abensaver_method_save.htm'\))

X

\-

\-

X

[save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\))

X (Note: Only available and mandatory in managed scenarios that include an [additional or unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)).)

\-

\-

X

[cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\))

\-

\-

\-

\-

[cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\))

\-

\-

\-

\-

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Hint

The use of CL\_ABAP\_BEHAVIOR\_SAVER is restricted to redefining RAP saver methods in a behavior pool.

Executable Examples

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario to also include the adjust\_numbers saver method.
-   The example [Example for save\_modified in a managed RAP BO with additional save](javascript:call_link\('abensave_modified_add_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [Example for save\_modified in a managed RAP BO with unmanaged save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.

Continue
[adjust\_numbers, RAP Saver Method](javascript:call_link\('abensaver_adjust_numbers.htm'\))
[check\_before\_save, RAP Saver Method](javascript:call_link\('abensaver_check_before_save.htm'\))
[cleanup, RAP Saver Method](javascript:call_link\('abensaver_method_cleanup.htm'\))
[cleanup\_finalize, RAP Saver Method](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\))
[finalize, RAP Saver Method](javascript:call_link\('abensaver_finalize.htm'\))
[save, RAP Saver Method](javascript:call_link\('abensaver_method_save.htm'\))
[save\_modified, RAP Saver Method](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\))
[Examples for RAP Saver Methods](javascript:call_link\('abenrap_saver_methods_abexas.htm'\))