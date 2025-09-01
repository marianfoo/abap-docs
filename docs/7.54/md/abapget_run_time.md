  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_runtime_measurements.htm) → 

GET RUN TIME

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_run_time_shortref.htm)

Syntax

GET RUN TIME FIELD rtime.

Effect

When GET RUN TIME is executed for the first time after an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created, the value 0 is passed to the variable rtime. After each further execution in the same internal session, the program runtime that has elapsed since the first execution, in microseconds, is passed to the variable rtime. The return value of the statement is of the data type i. The following can be specified for rtime:

-   An existing variable of the data type i or a variable to which the type i can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of type i is declared.
    

Notes

-   To measure the runtime of program sections, a GET RUN TIME statement can be executed before and after the required section and then the difference of the results can be calculated. The sequence of statements set within limits is called the [measuring section](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmeasuring_section_glosry.htm "Glossary Entry"), and the duration calculated for it is called the [measuring interval](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmeasuring_intervall_glosry.htm "Glossary Entry").
    
-   The statement GET RUN TIME does not accumulate the time taken to execute individual ABAP statements. Instead it defines actual points in time with respect to the processor time. In particular, when there are differences between these points in time, the statement respects the time taken for an internal session to be rolled out of the memory In a conceptual sense, a time defined using GET RUN TIME can be viewed as a time stamp. Unlike real [POSIX](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") [time stamps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamp_glosry.htm "Glossary Entry"), a time defined using GET RUN TIME is always precise to the microsecond (regardless of the platform), while also being restricted to the value range of the data type i.
    
-   The maximum resolution of the command GET RUN TIME is a microsecond. Shorter measuring intervals cannot be determined reliably.
    
-   The [value range](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the return value of the statement must be respected. Do not create measuring sections that are too large (not greater than 1000 s) and also do not create any measuring sections using accesses to external data or using screen calls and so on.
    
-   The statement [SET RUN TIME CLOCK RESOLUTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_run_time_clock_resolution.htm) can be used to defined the measuring precision before the first execution of GET RUN TIME, which is used to determine the runtime.
    
-   The class CL\_ABAP\_RUNTIME provides methods for creating objects whose method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions in an internal session (see also [class for runtime measurements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_runtime.htm)).
    
-   The runtime of program sections can also be determined using the tool [runtime analysis](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_analysis_glosry.htm "Glossary Entry").
    

Example

Determines the calculation time for calculating the tangent of 1. Since the runtime of the statement is less than a microsecond, the runtime of multiple executions in an inner loop is measured. The execution time for the loop itself is also measured to deduct it as an offset. These measurements are executed more than once in an outer loop and the mean value is calculated using division by n0. Division by ni determines the runtime of an individual statement.

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
![Example](exa.gif "Example") [Runtime Measurement of Database Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenget_run_time_abexa.htm)