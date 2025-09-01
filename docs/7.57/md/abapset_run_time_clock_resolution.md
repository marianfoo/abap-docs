  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_runtime_measurements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET RUN TIME CLOCK RESOLUTION, ABAPSET_RUN_TIME_CLOCK_RESOLUTION, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SET RUN TIME CLOCK RESOLUTION

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_run_time_clock_shortref.htm)

Syntax

SET RUN TIME CLOCK RESOLUTION *{*HIGH*|*LOW*}*.

Effect

This statement specifies the measurement precision for the statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_run_time.htm). It can be changed in a program only before the statement GET RUN TIME is executed for the first time, otherwise an uncatchable exception is raised.

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

-   To execute multiple measurements with different levels of precision within an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the class CL\_ABAP\_RUNTIME can be used (see [Class for Runtime Measurements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_runtime.htm)).
-   No exception is raised if SET RUN TIME CLOCK RESOLUTION is used after the statement GET RUN TIME, but the level of precision is not changed.

Example

Use of SET RUN TIME CLOCK RESOLUTION in front of GET RUN TIME.

SET RUN TIME CLOCK RESOLUTION LOW.
GET RUN TIME FIELD FINAL(t1).
wait UP TO 1 SECONDS.
GET RUN TIME FIELD FINAL(t2).
cl\_demo\_output=>display( t2 - t1 ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: An attempt was made to change the level of precision after [GET RUN TIME](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_run_time.htm) using SET RUN TIME CLOCK RESOLUTION.
    Runtime error: SET\_RUN\_TIME\_CLOCK\_ERROR