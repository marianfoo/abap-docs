# ABAP Keyword Documentation / ABAP − Reference / Program Editing / Testing and Checking Programs / Runtime Measurements

Included pages: 7


### abenabap_runtime_measurements.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) → 

Runtime Measurements

The statements in this section make it possible to measure the runtime of a program and make corresponding settings.

-   [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm)

-   [SET RUN TIME CLOCK RESOLUTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm)

-   [SET RUN TIME ANALYZER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_analyzer.htm)

Alternatively, a [class for runtime measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_runtime.htm) (CL\_ABAP\_RUNTIME) can be used.

Continue
[GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm)
[SET RUN TIME CLOCK RESOLUTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm)
[SET RUN TIME ANALYZER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_analyzer.htm)
[System Class for Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_runtime.htm)


### abapget_run_time.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) → 

GET RUN TIME

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time_shortref.htm)

Syntax

GET RUN TIME FIELD rtime.

Effect

When GET RUN TIME is executed for the first time after an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created, the value 0 is passed to the variable rtime. After each further execution in the same internal session, the program runtime that has elapsed since the first execution, in microseconds, is passed to the variable rtime. The return value of the statement is of the data type i. The following can be specified for rtime:

-   An existing variable of the data type i or a variable to which the type i can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), where a variable of type i is declared.
    

Notes

-   To measure the runtime of program sections, a GET RUN TIME statement can be executed before and after the required section and then the difference of the results can be calculated. The sequence of statements set within limits is called the [measuring section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmeasuring_section_glosry.htm "Glossary Entry"), and the duration calculated for it is called the [measuring interval](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmeasuring_intervall_glosry.htm "Glossary Entry").
    
-   The statement GET RUN TIME does not accumulate the time taken to execute individual ABAP statements. Instead it defines actual points in time with respect to the processor time. In particular, when there are differences between these points in time, the statement respects the time taken for an internal session to be rolled out of the memory In a conceptual sense, a time defined using GET RUN TIME can be viewed as a time stamp. Unlike real [POSIX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry"), a time defined using GET RUN TIME is always precise to the microsecond (regardless of the platform), while also being restricted to the value range of the data type i.
    
-   The maximum resolution of the command GET RUN TIME is a microsecond. Shorter measuring intervals cannot be determined reliably.
    
-   The [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the return value of the statement must be respected. Do not create measuring sections that are too large (not greater than 1000 s) and also do not create any measuring sections using accesses to external data or using screen calls and so on.
    
-   The statement [SET RUN TIME CLOCK RESOLUTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm) can be used to defined the measuring precision before the first execution of GET RUN TIME, which is used to determine the runtime.
    
-   The class CL\_ABAP\_RUNTIME provides methods for creating objects whose method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions in an internal session (see also [class for runtime measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_runtime.htm)).
    
-   The runtime of program sections can also be determined using the tool [runtime analysis](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_analysis_glosry.htm "Glossary Entry").
    

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
  t0 = t0 + ( ( t2 - t1 ) - ( t4 - t3 ) ).
ENDDO.
DATA(tm) = CONV decfloat34( t0 / ni / no ).

Continue
![Example](exa.gif "Example") [Runtime Measurement of Database Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenget_run_time_abexa.htm)


### abenget_run_time_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) →  [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm) → 

Runtime Measurement of Database Reads

The example demonstrates how to use the statement GET RUN TIME FIELD statement at runtime.

Source Code

REPORT demo\_get\_run\_time.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: t1 TYPE i,
          t2 TYPE i,
          t  TYPE p DECIMALS 2.
    DATA n TYPE i value 10.
    cl\_demo\_input=>request(
      EXPORTING text  = 'Number of measurements'
      CHANGING  field = n ).
    DATA: toff  TYPE p DECIMALS 2,
          tsel1 TYPE p DECIMALS 2,
          tsel2 TYPE p DECIMALS 2.
    DATA sbook\_wa TYPE sbook.
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    toff = t.
    cl\_demo\_output=>write( |Mean Offset Runtime: {
                            toff } microseconds| ).
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      SELECT \*
             FROM sbook
             INTO @sbook\_wa.
      ENDSELECT.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    tsel1 = t - toff.
    cl\_demo\_output=>write( |Mean Runtime SELECT \* : {
                            tsel1 } microseconds| ).
    t = 0.
    DO n TIMES.
      GET RUN TIME FIELD t1.
      SELECT carrid, connid
             FROM sbook
             INTO (@sbook\_wa-carrid, @sbook\_wa-connid).
      ENDSELECT.
      GET RUN TIME FIELD t2.
      t2 = t2 - t1.
      t = t + t2 / n.
    ENDDO.
    tsel2 = t - toff.
    cl\_demo\_output=>display( |Mean Runtime SELECT list : {
                             tsel2 } microseconds| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the runtime of three program segments is examined:

-   An empty program segment for determining the offset of the runtime measurement

-   A program segment that reads all data of the database table SBOOK

-   A program segment that reads two columns of the database table SBOOK

The result shows that the offset of the runtime measurement can be neglected in this case and that reading specific columns of a table is faster than reading entire rows.


### abapget_run_time.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) → 

GET RUN TIME

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time_shortref.htm)

Syntax

GET RUN TIME FIELD rtime.

Effect

When GET RUN TIME is executed for the first time after an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is created, the value 0 is passed to the variable rtime. After each further execution in the same internal session, the program runtime that has elapsed since the first execution, in microseconds, is passed to the variable rtime. The return value of the statement is of the data type i. The following can be specified for rtime:

-   An existing variable of the data type i or a variable to which the type i can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), where a variable of type i is declared.
    

Notes

-   To measure the runtime of program sections, a GET RUN TIME statement can be executed before and after the required section and then the difference of the results can be calculated. The sequence of statements set within limits is called the [measuring section](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmeasuring_section_glosry.htm "Glossary Entry"), and the duration calculated for it is called the [measuring interval](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmeasuring_intervall_glosry.htm "Glossary Entry").
    
-   The statement GET RUN TIME does not accumulate the time taken to execute individual ABAP statements. Instead it defines actual points in time with respect to the processor time. In particular, when there are differences between these points in time, the statement respects the time taken for an internal session to be rolled out of the memory In a conceptual sense, a time defined using GET RUN TIME can be viewed as a time stamp. Unlike real [POSIX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") [time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_glosry.htm "Glossary Entry"), a time defined using GET RUN TIME is always precise to the microsecond (regardless of the platform), while also being restricted to the value range of the data type i.
    
-   The maximum resolution of the command GET RUN TIME is a microsecond. Shorter measuring intervals cannot be determined reliably.
    
-   The [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the return value of the statement must be respected. Do not create measuring sections that are too large (not greater than 1000 s) and also do not create any measuring sections using accesses to external data or using screen calls and so on.
    
-   The statement [SET RUN TIME CLOCK RESOLUTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_resolution.htm) can be used to defined the measuring precision before the first execution of GET RUN TIME, which is used to determine the runtime.
    
-   The class CL\_ABAP\_RUNTIME provides methods for creating objects whose method GET\_RUNTIME can be used to execute multiple runtime measurements with different resolutions in an internal session (see also [class for runtime measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_runtime.htm)).
    
-   The runtime of program sections can also be determined using the tool [runtime analysis](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_analysis_glosry.htm "Glossary Entry").
    

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
  t0 = t0 + ( ( t2 - t1 ) - ( t4 - t3 ) ).
ENDDO.
DATA(tm) = CONV decfloat34( t0 / ni / no ).

Continue
![Example](exa.gif "Example") [Runtime Measurement of Database Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenget_run_time_abexa.htm)


### abapset_run_time_clock_resolution.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) → 

SET RUN TIME CLOCK RESOLUTION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_clock_shortref.htm)

Syntax

SET RUN TIME CLOCK RESOLUTION *{*HIGH*|*LOW*}*.

Effect

This statement specifies the precision with which the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm) is measured. It can be changed in a program only before the statement GET RUN TIME is executed for the first time, otherwise a non-handleable exception is raised.

Specifying HIGH defines a level of precision of one microsecond. If the level of precision is high, this can produce false time values for multi-processors, since the clocks of the individual processors are not always regularly synchronized on all platforms. The high level of precision on the following platforms always returns correct values:

-   AIX
    
-   SINIX
    
-   SUN-OS
    
-   Linux
    
-   IBM i5/OS (previously OS/400)
    
-   Windows
    

To avoid incorrect time values on the other platforms, LOW can be used to specify a low precision measurement whose resolution depends on each platform.

Without the preceding statement SET RUN TIME CLOCK RESOLUTION, GET RUN TIME uses the high precision measurement implicitly.

Notes

-   To execute multiple measurements with different levels of precision within an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the class CL\_ABAP\_RUNTIME can be used (see [Class for Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_runtime.htm)).
    
-   No exception is raised if SET RUN TIME CLOCK RESOLUTION is used after the statement GET RUN TIME as long as the level of precision is not changed.
    

Example

Uses SET RUN TIME CLOCK RESOLUTION in front of GET RUN TIME.

SET RUN TIME CLOCK RESOLUTION LOW.
GET RUN TIME FIELD DATA(t1).
wait UP TO 1 SECONDS.
GET RUN TIME FIELD DATA(t2).
cl\_demo\_output=>display( t2 - t1 ).

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: An attempt was made to change the level of precision after [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm) using SET RUN TIME CLOCK RESOLUTION.
    Runtime error: SET\_RUN\_TIME\_CLOCK\_ERROR


### abapset_run_time_analyzer.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) → 

SET RUN TIME ANALYZER

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_run_time_analyzer_shortref.htm)

Syntax

SET RUN TIME ANALYZER *{*ON*|*OFF*}*.

Effect

This statement influences the measurement of a program with the [runtime analysis](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_analysis_glosry.htm "Glossary Entry") tool. If the setting Particular Units is activated in the runtime analysis, which can be done using Restrictions → Program Units, the runtime analysis only measures statements that occur between SET RUN TIME ANALYZER ON and SET RUN TIME ANALYZER OFF.

System Fields

The statement SET RUN TIME ANALYZER always sets the return code sy-subrc to 0.

Notes

-   This statement should only be used in the test phase of a program, to enable a later runtime measurement independently of the source code.
    
-   Runtime analysis can be switched on and off in transaction SAT by selecting System → Utilities → Runtime Analysis or by entering /RON and /ROFF in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")
    
-   Runtime analysis can be stopped and started on a program-driven basis by calling the static methods ON and OFF in CL\_ABAP\_TRACE\_SWITCH either before or after the statements SET RUN TIME ANALYZER.
    

Example

If the method m0 is executed when runtime analysis is switched on, only the runtime from the call and execution of the method m2 is measured.

METHOD m0.
  me->m1( ).
  SET RUN TIME ANALYZER ON.
  me->m2( ).
  SET RUN TIME ANALYZER OFF.
  me->m3( ).
ENDMETHOD.


### abencl_abap_runtime.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_measurements.htm) → 

System Class for Runtime Measurements

The static methods CREATE\_HR\_TIMER and CREATE\_LR\_TIMER of the class CL\_ABAP\_RUNTIME can be used to create objects for runtime measurements. The objects contain a method GET\_RUNTIME that performs a runtime measurement in the same way as the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_run_time.htm).

An object created using CREATE\_HR\_TIMER performs a measurement with high precision, and an object created using CREATE\_LR\_TIMER performs a measurement with a lower level of measurement precision.

In contrast to the statement GET RUN TIME, these objects can be used to perform different measurements with different levels of precision and parallel measurements for each [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry").

As the execution of the method GET\_RUNTIME is approximately two microseconds slower than the execution of the statement GET RUN TIME, in some circumstances this method may not be suitable for the measurement of very short periods of time.

Example

Runtime measurement with an object.

DATA(timer)  = cl\_abap\_runtime=>create\_hr\_timer( ).
DATA(t1) = timer->get\_runtime( ).
WAIT UP TO 1 SECONDS.
DATA(t2) = timer->get\_runtime( ).
cl\_demo\_output=>display( t2 - t1 ).
