  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: cleanup, RAP Saver Method, ABENSAVER_METHOD_CLEANUP, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

cleanup, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods.htm) cleanup [REDEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm) cleanup.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is responsible for clearing the [RAP transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") and is only called after the RAP saver methods [save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensaver_method_save.htm) or [save\_modified](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_saver_meth_save_modified.htm) have been processed.
-   It is the final method of the RAP save sequence to be called in case of a successful saving of instances to the database.
-   Apart from using the method in unmanaged scenarios, it can also be used in managed scenarios that include an [additional](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_add_save_glosry.htm "Glossary Entry") or [unmanaged save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_add_save_glosry.htm "Glossary Entry") implementation with the notation ... and cleanup in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (see the BDEF prerequisites in [CDS BDL - saving options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm)).
-   It does not have any [IMPORTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) or [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm) parameters.
-   It is part of the [RAP late save phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry").

Hint

A rollback request using [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprollback_entities.htm) triggers the calling of the cleanup method.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_ln_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.