  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [Runtime Measurements](javascript:call_link\('abenabap_runtime_measurements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20RUN%20TIME%20CLOCK%20RESOLUTION%2C%20ABAPSET_RUN_TIME_CLOCK_RESOLUTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

SET RUN TIME CLOCK RESOLUTION

[Short Reference](javascript:call_link\('abapset_run_time_clock_shortref.htm'\))

Syntax

SET RUN TIME CLOCK RESOLUTION *{*HIGH*|*LOW*}*.

Effect

This statement specifies the measurement precision for the statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)). It can be changed in a program only before the statement GET RUN TIME is executed for the first time, otherwise an uncatchable exception is raised.

Specifying HIGH defines a measurement precision of one microsecond. If the level of precision is high, this can produce false time values for multiprocessors, since the clocks of the individual processors are not always regularly synchronized on all platforms. The high level of precision on the following platforms always returns correct values:

-   AIX
-   SINIX
-   SUN-OS
-   Linux
-   IBM i5/OS (previously OS/400)
-   Windows

To avoid incorrect time values on the other platforms, LOW can be used to specify a low precision measurement whose resolution depends on each platform.

Without the preceding statement SET RUN TIME CLOCK RESOLUTION, GET RUN TIME uses the high precision measurement implicitly.

Hints

-   To execute multiple measurements with different levels of precision within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the class CL\_ABAP\_RUNTIME can be used (see [Class for Runtime Measurements](javascript:call_link\('abencl_abap_runtime.htm'\))).
-   No exception is raised if SET RUN TIME CLOCK RESOLUTION is used after the statement GET RUN TIME, but the level of precision is not changed.

Example

Use of SET RUN TIME CLOCK RESOLUTION in front of GET RUN TIME.

SET RUN TIME CLOCK RESOLUTION LOW.
GET RUN TIME FIELD FINAL(t1).
wait UP TO 1 SECONDS.
GET RUN TIME FIELD FINAL(t2).
cl\_demo\_output=>display( t2 - t1 ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: An attempt was made to change the level of precision after [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)) using SET RUN TIME CLOCK RESOLUTION.
    Runtime error: SET\_RUN\_TIME\_CLOCK\_ERROR