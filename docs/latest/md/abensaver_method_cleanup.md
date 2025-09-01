---
title: "Syntax"
description: |
  Declaration part: CLASS(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) lsc_bdef DEFINITION(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) INHERITING FROM(https://help.sap.com/doc/abapdocu_latest_index_htm/la
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensaver_method_cleanup.htm"
abapFile: "abensaver_method_cleanup.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abensaver", "cleanup"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_methods.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20cleanup%2C%20RAP%20Saver%20Method%2C%20ABENSAVER_METHOD_CLEANUP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

cleanup, RAP Saver Method

Syntax

Declaration part:

[CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm) [INHERITING FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_options.htm) base\_class ...
     ...
     [METHODS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods.htm) cleanup [REDEFINITION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_redefinition.htm).
     ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_definition.htm).

Implementation part:

[CLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm).
      ...
      [METHOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod.htm) cleanup.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethod.htm)
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_implementation.htm).

Effect

[RAP saver method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") that is declared as part of a [RAP saver class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class_glosry.htm "Glossary Entry") lsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The predefined saver method must be redefined.

base\_class stands for the base class from which the RAP saver class inherits, for example, CL\_ABAP\_BEHAVIOR\_SAVER.

The following points are relevant for this RAP saver method:

-   Its use is optional.
-   It is part of the [RAP late save phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlate_rap_save_phase_glosry.htm "Glossary Entry").
-   It is the final method of the RAP save sequence and responsible for clearing the [RAP transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry").
-   It is called after the data has been persisted to the database or a rollback request is triggered with [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback_entities.htm).
-   It is the final method of the RAP save sequence, which is called when instances have been successfully saved to the database.
-   It does not have any [IMPORTING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) or [CHANGING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_general.htm) parameters.

Hints

-   If only read operations are performed in the [RAP interaction phase](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement is specified, only the cleanup method is called.
-   In [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) scenarios, the task of the method is performed by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry"). An exception is when the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") is specified with [unmanaged or additional save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) and the notation ... and cleanup. Then, and generally in [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) scenarios, the cleanup must be user-implemented.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Save Sequence Runtime](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ab7459048c7e4ecda98d0b6f51b01e7b?version=sap_cross_product_abap)
-   [Invalid Statements and Operations in Transactional Contexts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinvalid_stmts_in_tx.htm)

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The examples [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_ln_abexa.htm) and [Phases in a RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_abexa.htm) demonstrate this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario.