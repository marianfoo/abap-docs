  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

save\_modified, RAP Saver Method

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
     [METHODS](javascript:call_link\('abapmethods.htm'\)) save\_modified [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
   ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
      [METHOD](javascript:call_link\('abapmethod.htm'\)) save\_modified. ... [ENDMETHOD](javascript:call_link\('abapmethod.htm'\)).
    ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

RAP saver method that must be defined as part of a RAP saver class lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It is only relevant for managed scenarios that include an additional or unmanaged save implementation. See the BDEF prerequisites in [CDS BDL - saving options](javascript:call_link\('abenbdl_saving.htm'\)). The method is declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry").

The method saves the current state of the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"), i. e. all [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") (including instances from cross-BO relationships) from within the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry"), to the database.

Method Parameters

The method has the following implicit, predefined parameters:

-   [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   create: Includes information on instances that have been created within the LUW. It is of type [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\)).
    -   update: Includes information on instances that have been updated within the LUW. It is of type [TYPE REQUEST FOR CHANGE](javascript:call_link\('abaptype_request_for.htm'\)).
    -   delete: Includes information on instances that have been deleted within the LUW. It is of type [TYPE REQUEST FOR DELETE](javascript:call_link\('abaptype_request_for.htm'\)).
-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)) parameter: Should only contain success or information messages. It is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [ABAP EML - TYPE REQUEST FOR in a Managed RAP BO with Additional Save](javascript:call_link\('abenrap_additional_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with additional save.
-   The example [ABAP EML - TYPE REQUEST FOR in a managed RAP BO with unmanaged save](javascript:call_link\('abenrap_managed_unm_save_abexa.htm'\)) demonstrates the save\_modified method in the context of a simple managed RAP BO whose BDEF is specified with with unmanaged save.