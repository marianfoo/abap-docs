---
title: "Syntax"
description: |
  CLASS(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc_bdef DEFINITION(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) INHERITING FROM(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsaver_class_cleanup_finalize.htm"
abapFile: "abapsaver_class_cleanup_finalize.htm"
keywords: ["do", "if", "case", "try", "method", "class", "abapsaver", "cleanup", "finalize"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) → 

cleanup\_finalize, RAP Saver Method

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lsc\_bdef [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_SAVER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
      ...
     *\[*[METHODS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods.htm) cleanup\_finalize [REDEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_redefinition.htm).*\]*
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lsc\_bdef [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
      ...
     *\[*[METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm) cleanup\_finalize.
      ...
      [ENDMETHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethod.htm)*\]*
      ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Effect

Optional RAP saver method that can be defined as part of a RAP saver classlsc\_bdef in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). It is declared by redefining predefined methods of the [superclass](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensuperclass_glosry.htm "Glossary Entry"). It does not have any [IMPORTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm) or [CHANGING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_general.htm), for example, [response parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_response_for.htm).

The method clears the transactional buffer and is only called if issues arise in the [finalize](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_finalize.htm) or [check\_before\_save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_check_before_save.htm) methods within the current LUW. In these cases, the [adjust\_numbers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_adjust_numbers.htm), [save](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_save.htm), and [cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensaver_method_cleanup.htm) methods are skipped.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Save Sequence Runtime.

Executable Example

-   The example [Example for a RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO.
-   The example [Example for a RAP Saver Class (Late Numbering)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_ln_abexa.htm) demonstrates this RAP saver method within a RAP saver class using a simple unmanaged RAP BO in late numbering scenario which also includes the adjust\_numbers saver method.