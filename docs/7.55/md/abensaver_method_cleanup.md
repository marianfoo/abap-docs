---
title: "CLEANUP method"
description: |
  Work in progress  The cleanup method is called when an error has occurred during the execution of the methods finalize(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_finalize.htm) and check_before_save(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensa
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_method_cleanup.htm"
abapFile: "abensaver_method_cleanup.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "abensaver", "cleanup"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_business_objects.htm) →  [RAP in ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrestful_abap_programming.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) →  [ABP - Saver Class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabp_saver_class.htm) → 

CLEANUP method

\* Work in progress \*

The cleanup method is called when an error has occurred during the execution of the methods [finalize](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_finalize.htm) and [check\_before\_save](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensaver_check_before_save.htm). During the cleanup process, all calculations and data modifications are discarded and the transactional buffer is deleted.

The cleanup method is also called at the end of a successful saver sequence to delete the transactional buffer. Since the same ABAP session is likely to be used for more than one [LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenluw_glosry.htm "Glossary Entry"), remaining changes in the transactional buffer can lead to inconsistencies.

The cleanup method does not have any parameters and does not return errors or messages.

Example

In the following example, the data from a function module is used. It represents a legacy business logic that can be used to create and update flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in CDS BDL - Example.

In the method cleanup, the function module of the legacy business logic /DMO/FLIGHT\_TRAVEL\_SAVE is called.

CLASS lcl\_travel\_saver DEFINITION
    INHERITING FROM cl\_abap\_behavior\_saver.
  PROTECTED SECTION.
    METHODS cleanup REDEFINITION.
ENDCLASS.

CLASS lcl\_travel\_saver IMPLEMENTATION.
  METHOD cleanup.
    CALL FUNCTION '/DMO/FLIGHT\_TRAVEL\_INITIALIZE'.
  ENDMETHOD.
ENDCLASS.

FUNCTION flight\_travel\_initialize.
  /dmo/cl\_flight\_legacy=>get\_instance( )->initialize( ).
ENDFUNCTION.