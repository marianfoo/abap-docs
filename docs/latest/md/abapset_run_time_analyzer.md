---
title: "SET RUN TIME ANALYZER"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_run_time_analyzer_shortref.htm) Syntax SET RUN TIME ANALYZER ONOFF. Effect This statement affects the measurement of a program with the runtime analysis(https://help.sap.com/doc/abapdocu_latest_index
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_run_time_analyzer.htm"
abapFile: "abapset_run_time_analyzer.htm"
keywords: ["select", "do", "if", "try", "method", "abapset", "run", "time", "analyzer"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_measurements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20RUN%20TIME%20ANALYZER%2C%20ABAPSET_RUN_TIME_ANALYZER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET RUN TIME ANALYZER

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_run_time_analyzer_shortref.htm)

Syntax

SET RUN TIME ANALYZER *{*ON*|*OFF*}*.

Effect

This statement affects the measurement of a program with the [runtime analysis](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_analysis_glosry.htm "Glossary Entry") tool. If the setting Particular Units is activated in the runtime analysis, which can be done using Restrictions → Program Units, the runtime analysis only measures the runtime of statements that occur between SET RUN TIME ANALYZER ON and SET RUN TIME ANALYZER OFF.

System Fields

The statement SET RUN TIME ANALYZER always sets the return code sy-subrc to 0.

Hints

-   This statement should only be used in the test phase of a program to enable a later runtime measurement independently of the source code.
-   Runtime analysis can be switched on and off in transaction SAT by selecting System → Utilities → Runtime Analysis or by entering /RON and /ROFF in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")
-   Runtime analysis can be stopped and started on a program-driven basis by calling the static methods ON and OFF in CL\_ABAP\_TRACE\_SWITCH either before or after the statements SET RUN TIME ANALYZER.
-   Runtime analysis was replaced by the ABAP Profiler in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

Example

If the method m0 is executed when runtime analysis is switched on, only the runtime from the call and execution of the method m2 is measured.

METHOD m0.
  me->m1( ).
  SET RUN TIME ANALYZER ON.
  me->m2( ).
  SET RUN TIME ANALYZER OFF.
  me->m3( ).
ENDMETHOD.