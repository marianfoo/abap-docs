  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

cleanup, RAP Saver Method

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
      ...
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) cleanup [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
      ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
      ...
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) cleanup.
      ...
      [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))*\]*
      ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

RAP saver method that is, as part of a RAP saver class (lsc\_bdef), available in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It is declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry"). It does not have any [IMPORTING](javascript:call_link\('abapmethods_general.htm'\)) or [CHANGING](javascript:call_link\('abapmethods_general.htm'\)), for example, [response parameters](javascript:call_link\('abaptype_response_for.htm'\)).

The method clears the transactional buffer and is only called after the save method has been processed.

It is the final method of the save sequence to be called in case of a successful saving of instances to the database table.

The cleanup method can also be defined in ABPs of managed scenarios that include [additional](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") or an [unmanaged save](javascript:call_link\('abenrap_add_save_glosry.htm'\) "Glossary Entry") implementation with the notation ... and cleanup in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (see the BDEF prerequisites in [CDS BDL - saving options](javascript:call_link\('abenbdl_saving.htm'\))).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.