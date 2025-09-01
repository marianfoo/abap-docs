  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

finalize, RAP Saver Method

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
      ...
     *\[*[METHODS](javascript:call_link\('abapmethods.htm'\)) finalize [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).*\]*
      ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
     ...
     *\[*[METHOD](javascript:call_link\('abapmethod.htm'\)) finalize.
     ...
     [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))*\]*
     ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

Optional RAP saver method that can be defined as part of a RAP saver class lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It is declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry").

Once the save sequence gets triggered, the method is called after at least one successful modification of data in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry").

It is the first method of the save sequence to be called and used to make any final calculations and data modifications involving all BOs in the current LUW. The method is the last chance to modify data on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") using ABAP EML MODIFY requests.

Method Parameters

The method has the following implicit, predefined parameters:

-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameters:
    -   [failed](javascript:call_link\('abaptype_response_for.htm'\)) parameter: Returns failed keys. It is of type [TYPE RESPONSE FOR FAILED LATE](javascript:call_link\('abaptype_response_for.htm'\)).
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)) parameter: Returns success, information or error messages. It is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).

If the method returns an error in the failed parameter, the save sequence is terminated and the [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) method is called to discard all changes made to the data in the current LUW and to clean up the transactional buffer. If the finalize method does not report an error, the method [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) is called next.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.