  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Runtime Measurements](javascript:call_link\('abenabap_runtime_measurements.htm'\)) → 

System Class for Runtime Measurements

The static methods CREATE\_HR\_TIMER and CREATE\_LR\_TIMER of the class CL\_ABAP\_RUNTIME can be used to create objects for runtime measurements. The objects contain a method GET\_RUNTIME that performs a runtime measurement in the same way as the statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)).

An object created using CREATE\_HR\_TIMER performs a measurement with high precision, and an object created using CREATE\_LR\_TIMER performs a measurement with a lower level of measurement precision.

In contrast to the statement GET RUN TIME, these objects can be used to perform different measurements with different levels of precision and parallel measurements for each [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

As the execution of the method GET\_RUNTIME is approximately two microseconds slower than the execution of the statement GET RUN TIME, in some circumstances this method may not be suitable for the measurement of very short periods of time.

Example

Runtime measurement with an object.

DATA(timer)  = cl\_abap\_runtime=>create\_hr\_timer( ).
DATA(t1) = timer->get\_runtime( ).
WAIT UP TO 1 SECONDS.
DATA(t2) = timer->get\_runtime( ).
cl\_demo\_output=>display( t2 - t1 ).