  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP Business Objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Classes and Methods](javascript:call_link\('abenabp_saver_class.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CL_ABAP_BEHAVIOR_SAVER_FAILED, RAP Saver Class, ABENABP_CL_ABAP_BEH_SAVER_FAILED, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED, RAP Saver Class

Syntax

Syntax for [unmanaged](javascript:call_link\('abenbdl_impl_type.htm'\)) scenarios. The adjust\_numbers method is only available for [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenarios. See more methods that can be implemented [here](javascript:call_link\('abenabp_cl_abap_beh_handler.htm'\)).

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)).
      ...
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
      [METHODS](javascript:call_link\('abapmethods.htm'\)) [save](javascript:call_link\('abensaver_method_save.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
      ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION.](javascript:call_link\('abapclass_implementation.htm'\))
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) adjust\_numbers. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).

Syntax for managed scenarios with [additional or unmanaged save](javascript:call_link\('abenbdl_saving.htm'\)). See more methods that can be implemented [here](javascript:call_link\('abenabp_cl_abap_beh_handler.htm'\)).

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PROTECTED SECTION](javascript:call_link\('abapprotected.htm'\)).
      ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     [METHODS](javascript:call_link\('abapmethods.htm'\)) [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
      ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION.](javascript:call_link\('abapclass_implementation.htm'\))
      ...
      [METHOD](javascript:call_link\('abapmethod.htm'\)) adjust\_numbers. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save\_modified. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

Used as base class from which a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") lsc\_bdef in an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") inherits. The RAP saver class must be defined in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an ABP.

Mandatory [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") must be implemented. Optional RAP saver methods can be implemented. The RAP saver methods are declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry"). They implicitly have [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry").

RAP saver classes are implicitly [ABSTRACT](javascript:call_link\('abapclass_options.htm'\)) and [FINAL](javascript:call_link\('abapclass_options.htm'\)) since instantiating and calling only happens through the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry"). All saver methods are called after at least one successful modification of data in the current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") following the triggering of the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"), for example, by an explicit [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement. In contrast to [RAP handler methods](javascript:call_link\('abapmethods_for_rap_behv.htm'\)), saver methods do not have data of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as import parameter (except for the [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) method). Therefore, instance data must be handled via the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") when self-implementing the saver methods.

Usually, the basic rule applies that failures must not occur in the [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry"), but must be detected in the [RAP early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry") in order for the save to be successful. The base class CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED can be used in exceptional cases in which the basic rule cannot be met.

When using CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED, unlike when using the default base class CL\_ABAP\_BEHAVIOR\_SAVER, the [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) (for [late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry") scenarios), [save](javascript:call_link\('abensaver_method_save.htm'\)) (for unmanaged RAP BOs) and [save\_modified](javascript:call_link\('abaprap_saver_meth_save_modified.htm'\)) (for managed RAP BOs that include a RAP saver class in their implementation) include the [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") failed and reported.

If errors occur in the late save phase, runtime errors due to a violation of the above basic rule can be avoided. [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") can be informed by filling the RAP response parameters in the method implementation so that they can react accordingly.

One way of retrieving the response in the RAP BO consumer is to use the [long form](javascript:call_link\('abapemlcommit_entities_long.htm'\)) of the COMMIT ENTITIES statement. The current [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") is inconsistent if an error occurs in the late save phase. All changes must be rolled back to the last consistent state using a [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)) statement if the RAP BO consumer is to continue with ABAP EML requests after the failure. Otherwise, exception CX\_SADL\_DUMP\_APPL\_MODEL\_ERROR will be raised.

Hints

-   It is recommended that the use of CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED is reserved for exceptional cases only, as there is a risk of data inconsistency when multiple RAP BOs are involved.
    -   An exceptional case can be if [BAPIs](javascript:call_link\('abenbapi_glosry.htm'\) "Glossary Entry") are included in the RAP BO's runtime and called for saving RAP BO instances in the late save phase. Such BAPIs might be designed in a way that they include the validation and saving of data in one go. However, when such a BAPI is called in the late save phase, a validation is usually too late and a RAP BO consumer cannot react on potential errors and returned error messages.
    -   Regarding late numbering scenarios in such an exceptional case: The RAP saver method [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) is responsible for converting preliminary keys and identifiers (e. g. [%pid](javascript:call_link\('abapderived_types_pid.htm'\))) to the final key values of [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). The final key values must be returned here, hence, the save (or save\_modified) method is too late in such a case. As a solution, the BAPI request that includes the saving part is to be done in the adjust\_numbers method.
-   After a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement of a RAP BO consumer that triggers the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry") and a failure occurs in the late save phase, sy-subrc is set to 8.
-   This base class from which the RAP saver class inherits must be manually implemented. [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") automatically creates the saver class using CL\_ABAP\_BEHAVIOR\_SAVER.
-   The use of CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED is restricted to redefining RAP saver methods in a behavior pool.
-   Only one RAP saver class can be implemented for a RAP BO.
-   The RAP saver method adjust\_numbers contains the RAP response parameter reported in any case. When this base class is used, the additional parameter failed is available.

Executable Example

The [Example for CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED](javascript:call_link\('abencl_abap_beh_saver_failed_abexa.htm'\)) demonstrates the base class using a managed RAP BO whose BDEF is specified with with unmanaged save.

Continue
![Example](exa.gif "Example") [Example for CL\_ABAP\_BEHAVIOR\_SAVER\_FAILED](javascript:call_link\('abencl_abap_beh_saver_failed_abexa.htm'\))