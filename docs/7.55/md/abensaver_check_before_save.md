---
title: "Remarks"
description: |
  -   The parameter mapped is part of the signature of the method check_before_save. It is not, however, used. -   The implementation of the method check_before_save is not mandatory.
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_check_before_save.htm"
abapFile: "abensaver_check_before_save.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abensaver", "check", "before", "save"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) →  [ABP - Saver Class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) → 

Method CHECK\_BEFORE\_SAVE

\* Work in progress \*

The method check\_before\_save of the local [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) is the second method of the saver sequence of the behavior implementation of a business object. The method check\_before\_save is used to check the application buffer for consistency before the method [save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_save.htm) saves data in the database.

The method check\_before\_save can return failed keys and messages. For this purpose, there are the [output parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_export_parameters.htm) failed and reported.

If the check\_before\_save method returns an error in the output parameter failed, the saver sequence is terminated. The [cleanup](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_cleanup.htm) method is called to discard all changes made to the data in the current [LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenluw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.

If the method check\_before\_save does not return an error, the point has been reached after which a successful save is guaranteed for all involved business objects. The subsequent method [adjust\_numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_adjust_numbers.htm) is called.

Remarks

-   The parameter mapped is part of the signature of the method check\_before\_save. It is not, however, used.

-   The implementation of the method check\_before\_save is not mandatory.