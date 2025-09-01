  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Providing RAP business objects](javascript:call_link\('abenabap_provide_rap_bos.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [RAP Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

save, RAP Saver Method

Syntax

[CLASS](javascript:call_link\('abapclass_definition.htm'\)) lsc\_bdef [DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
  [INHERITING FROM](javascript:call_link\('abapclass_options.htm'\)) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](javascript:call_link\('abapclass_options.htm'\))*\]* *\[*[FINAL](javascript:call_link\('abapclass_options.htm'\))*\]*.
  [PRIVATE SECTION](javascript:call_link\('abapprivate.htm'\)).
     ...
     [METHODS](javascript:call_link\('abapmethods.htm'\)) save [REDEFINITION](javascript:call_link\('abapmethods_redefinition.htm'\)).
     ...
[ENDCLASS](javascript:call_link\('abapclass_definition.htm'\)).
[CLASS](javascript:call_link\('abapclass_implementation.htm'\)) lsc\_bdef [IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
      ...
     [METHOD](javascript:call_link\('abapmethod.htm'\)) save.
     ...
     [ENDMETHOD](javascript:call_link\('abapmethod.htm'\))
     ...
[ENDCLASS](javascript:call_link\('abapclass_implementation.htm'\)).

Effect

RAP saver method that must be defined as part of a RAP saver class lsc\_bdef in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It is declared by redefining predefined methods of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry").

Once the save sequence gets triggered, the method is called for each RAP BO after at least one successful modification of data in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry"). It is the third method of the save sequence to be called. In late numbering scenarios, it is the fourth method to be called following the [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method.

The method saves the current state of the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"), i. e. all [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") (including instances from cross-BO relationships) from within the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry"), to the database. However, the method is only triggered if each of the previous methods has been processed successfully.

Method Parameters

The method has the following implicit, predefined parameter:

-   [CHANGING](javascript:call_link\('abapmethods_general.htm'\)) parameter:
    -   [reported](javascript:call_link\('abaptype_response_for.htm'\)) parameter: Should only contain success or information messages. It is of type [TYPE RESPONSE FOR REPORTED LATE](javascript:call_link\('abaptype_response_for.htm'\)).

Errors from [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") must not appear after the [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) method, hence, [failed](javascript:call_link\('abaptype_response_for.htm'\)) is not available as a parameter. However, if the application must stop the transaction, a runtime error occurs.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Hint

After persisting data to the database, it is recommended to clear the transactional buffer because the same ABAP session might be used for more than one LUW and any remaining changes in the transactional buffer could lead to inconsistencies.

Executable Example

-   The example [Example for a RAP Saver Class](javascript:call_link\('abenabp_saver_class_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](javascript:call_link\('abenabp_saver_ln_abexa.htm'\)) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.