---
title: "Method FINALIZE"
description: |
  Work in progress  The method finalize of the local saver class(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) is the first method of the saver sequence of the behavior implementation of a business object. The method is used to make any final calculations a
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_finalize.htm"
abapFile: "abensaver_finalize.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abensaver", "finalize"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) →  [ABP - Saver Class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) → 

Method FINALIZE

\* Work in progress \*

The method finalize of the local [saver class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) is the first method of the saver sequence of the behavior implementation of a business object. The method is used to make any final calculations and data modifications before the method [save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_save.htm) saves data in the database.

The method finalize can return failed keys and messages. For this purpose, there are the [output parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrpm_export_parameters.htm) failed and reported.

If the finalize method returns an error in the output parameter failed, the saver sequence is terminated. The cleanup method is called to discard all changes made to the data in the current [LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenluw_glosry.htm "Glossary Entry") and to clean up the transactional buffer.

If the finalize method does not report an error, the subsequent method [check\_before\_save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_check_before_save.htm) is called.

Remarks

-   The parameter mapped is part of the signature of the method finalize. It is not, however, used.

-   The implementation of the method finalize is not mandatory.