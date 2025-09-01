---
title: "Syntax"
description: |
  Syntax for unmanaged(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) scenarios. The adjust_numbers method is only available for late numbering(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios. CLASS(https://help
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_cl_abap_beh_saver.htm"
abapFile: "abenabp_cl_abap_beh_saver.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenabp", "abap", "beh", "saver"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BEHAVIOR_SAVER%2C%20RAP%20Saver%20Class%2C%20ABENABP_CL_ABAP_BEH_SAVER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

CL\_ABAP\_BEHAVIOR\_SAVER, RAP Saver Class

Syntax

Syntax for [unmanaged](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) scenarios. The adjust\_numbers method is only available for [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios.

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]*.
  [PROTECTED SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprotected.htm).
     *\[* [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_finalize.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [check\_before\_save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_check_before_save.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
      [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
      [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_method_save.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
     *\[* [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [map\_messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_map_messages.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [cleanup](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_method_cleanup.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [cleanup\_finalize](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsaver_class_cleanup_finalize.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm)
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) finalize. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).*\]*
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) check\_before\_save. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).*\]*
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) adjust\_numbers. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) save. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) map\_messages. ... [ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).*\]*
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) cleanup. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).*\]*
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) cleanup\_finalize. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Syntax for managed scenarios with [additional or unmanaged save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm). The adjust\_numbers method is only available for [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) scenarios.

[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm)*\]*.
  [PROTECTED SECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapprotected.htm).
     [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [adjust\_numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensaver_adjust_numbers.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
     [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) [save\_modified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_saver_meth_save_modified.htm) [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).
    *\[* [METHODS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods.htm) cleanup [REDEFINITION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_redefinition.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION.](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm)
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) adjust\_numbers. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).
      [METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) save\_modified. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm) cleanup. ... [ENDMETHOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethod.htm).*\]*
[ENDCLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_implementation.htm).

Effect

Used as base class from which a [RAP saver class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") inherits. The RAP saver class must be defined in the [CCIMP include](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenccimp_glosry.htm "Glossary Entry") of an ABP.

Mandatory [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") must be implemented. Optional RAP saver methods can be implemented. The RAP saver methods are declared by redefining predefined methods of the [superclass](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensuperclass_glosry.htm "Glossary Entry"). They implicitly have [RAP response parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_response_param_glosry.htm "Glossary Entry").

RAP saver classes are implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_options.htm) since instantiating and calling only happens through the [RAP runtime engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry"). All saver methods are called after at least one successful modification of data in the current [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry") following the triggering of the [RAP save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"), for example, by an explicit [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) statement. In contrast to [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_for_rap_behv.htm), saver methods do not have data of [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") as import parameter (except for the [save\_modified](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_saver_meth_save_modified.htm) method). Therefore, instance data must be handled via the [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") when self-implementing the saver methods.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap).

Hints

-   The use of CL\_ABAP\_BEHAVIOR\_SAVER is restricted to redefining RAP saver methods in a behavior pool.
-   Only one RAP saver class can be implemented for a RAP BO.

Executable Examples

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_class_abexa.htm) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_ln_abexa.htm) demonstrates RAP saver methods within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario to also include the adjust\_numbers saver method.
-   The example [Example for save\_modified in a managed RAP BO with additional save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensave_modified_add_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [Example for save\_modified in a managed RAP BO with unmanaged save](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_managed_unm_save_abexa.htm) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.