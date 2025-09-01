  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Runtime Measurements](javascript:call_link\('abenabap_runtime_measurements.htm'\)) → 

GET RUN TIME

[Short Reference](javascript:call_link\('abapget_run_time_shortref.htm'\))

Syntax

GET RUN TIME FIELD rtime.

Effect

When GET RUN TIME is executed for the first time after an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is created, the value 0 is passed to the variable rtime. After each further execution in the same internal session, the program runtime that has elapsed since the first execution is passed in microseconds to the variable rtime. The return value of the statement is of the data type i. The following can be specified for rtime:

-   An existing variable of the data type i or a variable to which the type i can be converted.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.

Hints

-   To measure the runtime of program sections, a GET RUN TIME statement can be executed before and after the required section and then the difference of the results can be calculated. The restricted sequence of statements is referred to as the [measuring section](javascript:call_link\('abenmeasuring_section_glosry.htm'\) "Glossary Entry"), and the duration calculated for it is called the [measuring interval](javascript:call_link\('abenmeasuring_intervall_glosry.htm'\) "Glossary Entry").
-   The statement GET RUN TIME does not accumulate the duration of execution for individual ABAP statements. Instead it determines actual points in time with respect to the processor time. In particular, when for differences between these points in time, the statement also takes into account the duration for which for an internal session is rolled out of the memory. In a conceptual sense, a time defined using GET RUN TIME can be viewed as a time stamp. Unlike real [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry"), a time defined using GET RUN TIME is always precise to the microsecond, regardless of the platform. But on the other hand, it is restricted to the value range of the data type i.
-   The maximum resolution of the statement GET RUN TIME is a microsecond. Shorter measuring intervals cannot be determined reliably.
-   The [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the return value of the statement must be respected. Measuring sections that are too large, that is, greater than 1000 s, should not be created, and also no measuring sections using accesses to external data or using dynpro calls and so on.
-   The statement [SET RUN TIME CLOCK RESOLUTION](javascript:call_link\('abapset_run_time_clock_resolution.htm'\)) can be used to defined the measuring precision before the first execution of GET RUN TIME, which is used to determine the runtime.
-   The class CL\_ABAP\_RUNTIME provides methods for creating objects with the interface IF\_ABAP\_RUNTIME whose method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions in an internal session (see also [class for runtime measurements](javascript:call_link\('abencl_abap_runtime.htm'\))).
-   The runtime of program sections can also be determined using the tool [runtime analysis](javascript:call_link\('abenruntime_analysis_glosry.htm'\) "Glossary Entry").

Example

Determination of the calculation time for calculating the tangent of 1. Since the runtime of the statement is less than one microsecond, the runtime of multiple executions in an inner loop is measured. The execution time for the loop itself is also measured to deduct it as an offset. These measurements are executed multiple times in an outer loop and the mean value is calculated using division by n0. Division by ni determines the runtime of an individual statement.

DATA: t0    TYPE i,
      no    TYPE i VALUE 100,
      ni    TYPE i VALUE 1000.
DO no TIMES.
  GET RUN TIME FIELD DATA(t1).
  DO ni TIMES.
    DATA(res) = tan( 1 ).
  ENDDO.
  GET RUN TIME FIELD DATA(t2).
  GET RUN TIME FIELD DATA(t3).
  DO ni TIMES.
  ENDDO.
  GET RUN TIME FIELD DATA(t4).
  t0 += ( t2 - t1 ) - ( t4 - t3 ).
ENDDO.
DATA(tm) = CONV decfloat34( t0 / ni / no ).

Continue
![Example](exa.gif "Example") [Runtime Measurement of Database Reads](javascript:call_link\('abenget_run_time_abexa.htm'\))