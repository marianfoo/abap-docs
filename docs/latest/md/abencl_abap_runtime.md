---
title: "System Class for Runtime Measurements"
description: |
  The static methods CREATE_HR_TIMER and CREATE_LR_TIMER of the class CL_ABAP_RUNTIME can be used to create objects for runtime measurements. The objects contain a method GET_RUNTIME that performs a runtime measurement in the same way as the statement GET RUN TIME(https://help.sap.com/doc/aba
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_runtime.htm"
abapFile: "abencl_abap_runtime.htm"
keywords: ["do", "if", "try", "method", "class", "abencl", "abap", "runtime"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_measurements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Class%20for%20Runtime%20Measurements%2C%20ABENCL_ABAP_RUNTIME%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Class for Runtime Measurements

The static methods CREATE\_HR\_TIMER and CREATE\_LR\_TIMER of the class CL\_ABAP\_RUNTIME can be used to create objects for runtime measurements. The objects contain a method GET\_RUNTIME that performs a runtime measurement in the same way as the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_run_time.htm).

An object created using CREATE\_HR\_TIMER performs a measurement with high measurement precision, and an object created using CREATE\_LR\_TIMER performs a measurement with a lower measurement precision.

In contrast to the statement GET RUN TIME, these objects can be used to perform different measurements with different levels of precision and parallel measurements for each [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry").

Since the execution of the method GET\_RUNTIME is approximately two microseconds slower than the execution of the statement GET RUN TIME, in some circumstances this method may not be suitable for the measurement of very short periods of time.

Example

Runtime measurement with an object.

FINAL(timer)  = cl\_abap\_runtime=>create\_hr\_timer( ).
FINAL(t1) = timer->get\_runtime( ).
WAIT UP TO 1 SECONDS.
FINAL(t2) = timer->get\_runtime( ).
cl\_demo\_output=>display( t2 - t1 ).