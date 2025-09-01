  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) → 

RAP Saver Class

Syntax

Syntax for [unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_impl_type.htm) scenarios. The adjust\_numbers method is only available for [late  numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios.

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
     *\[* [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_finalize.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [check\_before\_save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
      [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).
      [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_save.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).
     *\[* [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [cleanup\_finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsaver_class_cleanup_finalize.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) finalize. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).*\]*
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) check\_before\_save. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).*\]*
      [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) adjust\_numbers. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).
      [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) save. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) cleanup. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).*\]*
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) cleanup\_finalize. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Syntax for managed scenarios with [additional or unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm):

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
     [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) [save\_modified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).
    *\[* [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) cleanup [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
      [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) save\_modified. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) cleanup. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Effect

A saver class can be defined in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). It includes the definitions and implementations of RAP saver methods.

A saver class lsc\_bdef inherits from class CL\_ABAP\_BEHAVIOR\_SAVER. The RAP saver methods are declared by redefining predefined methods of the [superclass](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensuperclass_glosry.htm "Glossary Entry"). They implicitly have [response parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) as outlined in the table further down.

Saver classes are implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) since instantiating and calling only happens through the [RAP runtime engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry"). All saver methods are called after at least one successful modification of data in the current [RAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_luw_glosry.htm "Glossary Entry") using a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit_entities.htm) statement. In contrast to [RAP handler methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm), saver methods do not have data of [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") as import parameter. Therefore, instance data must be handled via the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") when self-implementing the saver methods.

The following predefined methods are part of the saver class. They are called in this sequence. The following table also shows if they are mandatory and which response parameters the methods offer:

Method

Mandatory

failed

mapped

reported

[finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_finalize.htm)

\-

X

X

X

[check\_before\_save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm)

\-

X

X

X

[adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm)

X (Note: Only available and mandatory in [late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) scenarios.)

\-

X

X

[save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_save.htm)

X

\-

\-

X

[save\_modified](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm)

X (Note: Only available and mandatory in managed scenarios that include an [additional or unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm).)

\-

\-

X

[cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm)

\-

\-

\-

\-

[cleanup\_finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsaver_class_cleanup_finalize.htm)

\-

\-

\-

\-

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Hint

The use of CL\_ABAP\_BEHAVIOR\_SAVER is restricted to redefining RAP saver methods in a behavior pool.

Executable Examples

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class_abexa.htm) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_ln_abexa.htm) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario to also include the adjust\_numbers saver method.
-   The example [Example for save\_modified in a managed RAP BO with additional save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensave_modified_add_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [Example for save\_modified in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_managed_unm_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.

Continue
[adjust\_numbers, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm)
[check\_before\_save, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm)
[cleanup, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm)
[cleanup\_finalize, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsaver_class_cleanup_finalize.htm)
[finalize, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_finalize.htm)
[save, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_save.htm)
[save\_modified, RAP Saver Method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprap_saver_meth_save_modified.htm)
[Examples for RAP Saver Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_saver_methods_abexas.htm)