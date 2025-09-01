  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Runtime Measurements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_measurements.htm) → 

SET RUN TIME ANALYZER

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_run_time_analyzer_shortref.htm)

Syntax

SET RUN TIME ANALYZER *{*ON*|*OFF*}*.

Effect

This statement influences the measurement of a program with the [runtime analysis](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenruntime_analysis_glosry.htm "Glossary Entry") tool. If the setting Particular Units is activated in the runtime analysis, which can be done using Restrictions → Program Units, the runtime analysis only measures statements that occur between SET RUN TIME ANALYZER ON and SET RUN TIME ANALYZER OFF.

System Fields

The statement SET RUN TIME ANALYZER always sets the return code sy-subrc to 0.

Notes

-   This statement should only be used in the test phase of a program, to enable a later runtime measurement independently of the source code.
    
-   Runtime analysis can be switched on and off in transaction SAT by selecting System → Utilities → Runtime Analysis or by entering /RON and /ROFF in the command field of the [system toolbar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry")
    
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