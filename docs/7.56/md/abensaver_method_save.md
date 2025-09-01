  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) → 

save, RAP Saver Method

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) save [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
      ...
     [METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) save.
     ...
     [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm)
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Effect

RAP saver method that must be defined as part of a RAP saver class lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). It is declared by redefining predefined methods of the [superclass](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensuperclass_glosry.htm "Glossary Entry").

Once the save sequence gets triggered, the method is called for each RAP BO after at least one successful modification of data in the current [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry"). It is the third method of the save sequence to be called. In late numbering scenarios, it is the fourth method to be called following the [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm) method.

The method saves the current state of the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry"), i. e. all [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") (including instances from cross-BO relationships) from within the current [LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenluw_glosry.htm "Glossary Entry"), to the database. However, the method is only triggered if each of the previous methods has been processed successfully.

Method Parameters

The method has the following implicit, predefined parameter:

-   [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) parameter:
    -   [reported](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) parameter: Should only contain success or information messages. It is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

Errors from [RAP BO consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") must not appear after the [check\_before\_save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm) method, hence, [failed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm) is not available as a parameter. However, if the application must stop the transaction, a runtime error occurs.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Hint

After persisting data to the database, it is recommended to clear the transactional buffer because the same ABAP session might be used for more than one LUW and any remaining changes in the transactional buffer could lead to inconsistencies.

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_ln_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.